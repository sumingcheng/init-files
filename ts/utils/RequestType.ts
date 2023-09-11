export class RequestDataBaseType {
  [key: string]: string | number | object | boolean
}

export class RequestInfo extends RequestDataBaseType {
  pageNo = 1
  countPerPage = 10
}

export class RequestCompanyInfo extends RequestInfo {
  displayName = ''
}

export class RequestVendorInfo extends RequestInfo {
  vendorNo = ''
}

export class RequestPageInfo extends RequestDataBaseType {
  page: { countPerPage: number; pageNo: number } = {
    countPerPage: 10,
    pageNo: 1,
  }
}

export class RequestEmployeeInfo extends RequestInfo {
  displayName = ''
}

export class RequestNoUsedContractInfo extends RequestPageInfo {
  contractModule = '2'
  contractType = '1'
  companyCode = ''
  contractIdLike = ''

  cleanConditions() {
    this.companyCode = ''
  }
}

export class RequestPreIndexContractInfo extends RequestInfo {
  page: RequestInfo
  isused = '1'
  contractIdLike = ''
  titleLike = ''

  cleanConditions() {
    this.contractIdLike = ''
    this.titleLike = ''
  }

  constructor() {
    super()
    this.page = new RequestInfo()
  }
}

// 查询机房
export class RequestMachineRoom extends RequestPageInfo {
  roomCodeOrNameLike = ''
  status = '1' // status固定是"1",代表未删除数据

  cleanConditions() {
    this.roomCodeOrNameLike = ''
  }
}

export class SysCategoryRequest extends RequestDataBaseType {
  category = ''
  dataType = ''
}
export class SelectBtnsRequest extends RequestDataBaseType {
  menuUrl = ''
  userId = ''
}
