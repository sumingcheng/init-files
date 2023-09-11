import {
  FrontModel,
  HttpBindArray,
  HttpBindNormal,
  HttpBindObject,
} from './FrontModel'

export class HttpResponseBizInfo {
  code = ''
  data = {
    bizInfo: [],
    total: 0,
  }
  message = ''
  pageInfo = ''
  success = false
}

export class HttpResponseListInfo {
  code = ''
  data = {
    list: [],
    total: 0,
  }
  message = ''
  pageInfo = ''
  success = false
}

export abstract class HttpResponseBase extends FrontModel {
  @HttpBindNormal() code = ''
  @HttpBindNormal() message = ''
  @HttpBindNormal() pageInfo = ''
  @HttpBindNormal() success = false
}

export abstract class HttpResponseBiz<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindArray('data.bizInfo', 'createOneItem') data: Array<T>
  @HttpBindNormal('data.total') total = 0

  constructor() {
    super()
    this.data = new Array<T>()
  }
}

export abstract class HttpResponseRows<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindArray('data.rows', 'createOneItem') data: Array<T>
  @HttpBindNormal('data.total') total = 0

  constructor() {
    super()
    this.data = new Array<T>()
  }
}

export abstract class HttpResponseList<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindArray('data.list', 'createOneItem') data: Array<T>
  @HttpBindNormal('data.total') total = 0

  constructor() {
    super()
    this.data = new Array<T>()
  }
}

export abstract class HttpResponseData<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindArray('data', 'createOneItem') data: Array<T>

  constructor() {
    super()
    this.data = new Array<T>()
  }
}

export abstract class HttpResponseDatas<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindArray('datas', 'createOneItem') data: Array<T>

  constructor() {
    super()
    this.data = new Array<T>()
  }
}

export abstract class HttpResponseBlobData extends HttpResponseBase {
  @HttpBindNormal('datas.flowGraph') data = ''
}

export abstract class HttpResponseSingle<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindObject('data', 'createOneItem') data!: T
}

export abstract class HttpResponseSingleDatas<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindObject('datas', 'createOneItem') data!: T
}

export abstract class HttpResponseString extends HttpResponseBase {
  @HttpBindNormal() data = ''
}

export abstract class HttpResponseRecords<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindArray('data.records', 'createOneItem') data: Array<T>
  @HttpBindNormal('data.total') total = 0

  constructor() {
    super()
    this.data = new Array<T>()
  }
}

export abstract class HttpResponseArrayString extends HttpResponseBase {
  @HttpBindNormal() data = Array<string>()
}

export abstract class HttpResponseAttachments<
  T extends FrontModel
> extends HttpResponseBase {
  abstract createOneItem(): T

  @HttpBindArray('data.attachments', 'createOneItem') list: Array<T>

  constructor() {
    super()
    this.list = new Array<T>()
  }
}
