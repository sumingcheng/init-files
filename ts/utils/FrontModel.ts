import 'reflect-metadata'
import * as _ from 'lodash'
import { RequestDataBaseType } from './RequestType'

export interface IHttpBindNormal {
  serverPropertyTypeName: string
  serverPropertyPath: string
  propertyName: string
}

export interface IHttpBindArray extends IHttpBindNormal {
  createOneItem?: string
}

export interface IHttpBindObject extends IHttpBindNormal {
  createOneItem?: string
}

export const HttpBindNormal = (serverPropertyPath?: string) => {
  return (target: object, propertyName: string) => {
    const metaValue: IHttpBindNormal = {
      serverPropertyTypeName: 'normal',
      serverPropertyPath: serverPropertyPath || propertyName,
      propertyName,
    }
    Reflect.defineMetadata(propertyName, metaValue, target)
  }
}

export const HttpBindArray = (
  serverPropertyPath: string,
  createOneItem?: string
) => {
  return (target: object, propertyName: string) => {
    const metaValue: IHttpBindArray = {
      serverPropertyTypeName: 'array',
      serverPropertyPath: serverPropertyPath || propertyName,
      propertyName,
      createOneItem,
    }
    Reflect.defineMetadata(propertyName, metaValue, target)
  }
}

export const HttpBindObject = (
  serverPropertyPath: string,
  createOneItem?: string
) => {
  return (target: object, propertyName: string) => {
    const metaValue: IHttpBindObject = {
      serverPropertyTypeName: 'object',
      serverPropertyPath: serverPropertyPath || propertyName,
      propertyName,
      createOneItem,
    }
    Reflect.defineMetadata(propertyName, metaValue, target)
  }
}

export abstract class FrontModel {
  beforeGetRequestBody() {
    // override by child class.
  }
  afterInitFromResponse() {
    // override by child class.
  }

  initFromResponse(res: object) {
    const metadataKeys: Array<string> = Reflect.getMetadataKeys(this)
    metadataKeys.forEach((metadataKey: string) => {
      const metadataValue: IHttpBindNormal = Reflect.getMetadata(
        metadataKey,
        this
      )
      const resValue = _.get(res, metadataValue.serverPropertyPath)
      if (
        resValue &&
        resValue !== null &&
        resValue !== undefined &&
        metadataValue.serverPropertyTypeName === 'normal'
      ) {
        _.set(this, metadataValue.propertyName, resValue)
      } else if (
        metadataValue.serverPropertyTypeName === 'array' &&
        Array.isArray(resValue)
      ) {
        const arrMetaValue = metadataValue as IHttpBindArray
        const resValueArr = resValue as Array<object>
        if (arrMetaValue.createOneItem) {
          const createOneItemFun = _.get(this, arrMetaValue.createOneItem)
          const data = _.get(this, arrMetaValue.propertyName)
          if (
            createOneItemFun &&
            typeof createOneItemFun === 'function' &&
            Array.isArray(data)
          ) {
            const arrData = data as Array<FrontModel>
            resValueArr.forEach((resItem: object) => {
              const item = createOneItemFun()
              item.initFromResponse(resItem)
              arrData.push(item)
            })
          }
        }
      } else if (
        metadataValue.serverPropertyTypeName === 'object' &&
        resValue
      ) {
        const objectMetaValue = metadataValue as IHttpBindObject
        if (objectMetaValue.createOneItem) {
          const createOneItemFun = _.get(this, objectMetaValue.createOneItem)
          if (createOneItemFun && typeof createOneItemFun === 'function') {
            const item = createOneItemFun()
            item.initFromResponse(resValue)
            _.set(this, metadataValue.propertyName, item)
          }
        }
      }
    })
    this.afterInitFromResponse()
  }

  // Todo: not support path property yet. 2022.5.7
  getRequestBody(): RequestDataBaseType {
    const metadataKeys: Array<string> = Reflect.getMetadataKeys(this)
    const requestBody = new RequestDataBaseType()
    metadataKeys.forEach((metadataKey: string) => {
      const metadataValue: IHttpBindNormal = Reflect.getMetadata(
        metadataKey,
        this
      )
      const propertyValue = _.get(this, metadataValue.propertyName)
      if (metadataValue.serverPropertyTypeName === 'normal') {
        Reflect.set(
          requestBody,
          metadataValue.serverPropertyPath,
          propertyValue
        )
      } else if (
        metadataValue.serverPropertyTypeName === 'array' &&
        Array.isArray(propertyValue)
      ) {
        const propertyValueArr = propertyValue as Array<FrontModel>
        const requestArr = new Array<object>()
        propertyValueArr.forEach((resItem: FrontModel) => {
          requestArr.push(resItem.getRequestBody())
        })
        _.set(requestBody, metadataValue.serverPropertyPath, requestArr)
      } else if (
        metadataValue.serverPropertyTypeName === 'object' &&
        propertyValue
      ) {
        const objectValue = propertyValue as FrontModel
        _.set(
          requestBody,
          metadataValue.serverPropertyPath,
          objectValue.getRequestBody()
        )
      }
    })
    return requestBody
  }
  shallowCopyFromSelf(target: FrontModel): FrontModel {
    const keys = Reflect.ownKeys(this)
    keys.forEach((key) => {
      const value = Reflect.get(this, key)
      Reflect.set(target, key, value)
    })
    return target
  }
}

export class FrontModelItem extends FrontModel {
  uniqueIndex: symbol

  constructor() {
    super()
    this.uniqueIndex = Symbol()
  }

  isSameItem(item: FrontModelItem | undefined): boolean {
    return item
      ? Reflect.get(item, 'uniqueIndex') === Reflect.get(this, 'uniqueIndex')
      : false
  }

  isNotSameItem(item: FrontModelItem | undefined): boolean {
    return !this.isSameItem(item)
  }

  refreshUniqueIndex() {
    this.uniqueIndex = Symbol()
  }
}
