import {
  HttpResponseBiz,
  HttpResponseData,
  HttpResponseList,
  HttpResponseRows,
  HttpResponseSingle,
  HttpResponseString,
} from './HttpResponseType'
import { FrontModel, HttpBindArray, HttpBindNormal } from './FrontModel'

export class Employee extends FrontModel {
  @HttpBindNormal() begin = 0
  @HttpBindNormal('businessunitCode') businessUnitCode = ''
  @HttpBindNormal('businessunitName') businessUnitName = ''
  @HttpBindNormal() companyCode = ''
  @HttpBindNormal() companyName = ''
  @HttpBindNormal() countPerPage = 0
  @HttpBindNormal() depCode = ''
  @HttpBindNormal() depName = ''
  @HttpBindNormal() displayName = ''
  @HttpBindNormal() email = ''
  @HttpBindNormal() employeeCode = ''
  @HttpBindNormal() employeeCodeList = ''
  @HttpBindNormal() employeeName = ''
  @HttpBindNormal() end = 0
  @HttpBindNormal('fullname') fullName = ''
  @HttpBindNormal() jobName = ''
  @HttpBindNormal() manageLevel = ''
  @HttpBindNormal() pageNo = 0
  @HttpBindNormal() personCall = ''
  @HttpBindNormal() sign = ''
}

export class Department extends FrontModel {
  @HttpBindNormal() depId = ''
  @HttpBindNormal() begin = 0
  @HttpBindNormal() businessUnit = ''
  @HttpBindNormal() countPerPage = ''
  @HttpBindNormal() depCode = ''
  @HttpBindNormal() depName = ''
  @HttpBindNormal() end = 0
  @HttpBindNormal() fullName = ''
  @HttpBindNormal('fullname') fullNameForCost = ''
  @HttpBindNormal() orgId = ''
  @HttpBindNormal() pageNo = 0
  @HttpBindNormal() supOrgCode = ''
}

export class SysCategory extends FrontModel {
  @HttpBindNormal() category = ''
  @HttpBindNormal() categoryName = ''
  @HttpBindNormal() categoryPid = ''
  @HttpBindNormal() categoryValue = ''
  @HttpBindNormal() display = ''
  @HttpBindNormal() displayEn = ''
  @HttpBindNormal() id = ''
  @HttpBindNormal() orderBy = ''
  @HttpBindNormal() parChooseValue = ''
  @HttpBindNormal() remarks = ''
  @HttpBindNormal() sign = ''
  @HttpBindNormal() tags = ''
  @HttpBindNormal() valueType = 0
}

export class Company extends FrontModel {
  @HttpBindNormal('aboradIdentify') abroadIdentify = ''
  @HttpBindNormal() begin = 0
  @HttpBindNormal() companyCode = ''
  @HttpBindNormal() companyName = ''
  @HttpBindNormal() countPerPage = 0
  @HttpBindNormal() displayName = ''
  @HttpBindNormal() end = 0
  @HttpBindNormal() identification = ''
  @HttpBindNormal() moneyType = ''
  @HttpBindNormal() owner = ''
  @HttpBindNormal() ownerCode = ''
  @HttpBindNormal() pageNo = 0
  @HttpBindNormal() shortName = ''
  @HttpBindNormal() status = ''
}

export class NeoLinkContractLine extends FrontModel {
  @HttpBindNormal('businessunitCode') businessUnitCode = ''
  @HttpBindNormal() contractCode = ''
  @HttpBindNormal('contractlineCode') contractLineCode = ''
  @HttpBindNormal() datacenterCode = ''
  @HttpBindNormal() datacenterName = ''
  @HttpBindNormal() installDate = ''
  @HttpBindNormal() materialCode = ''
  @HttpBindNormal() materialName = ''
  @HttpBindNormal() serviceBeginDate = ''
  @HttpBindNormal() serviceEndDate = ''
  @HttpBindNormal() status = ''
}

export class MainlyContract extends FrontModel {
  constructor() {
    super()
    this.neolinkContractLineList = new Array<NeoLinkContractLine>()
  }

  createNeoLinkContractLine(): NeoLinkContractLine {
    return new NeoLinkContractLine()
  }

  @HttpBindNormal('businessunitCode') businessUnitCode = ''
  @HttpBindNormal('businessunitName') businessUnitName = ''
  @HttpBindNormal() contractCode = ''
  @HttpBindNormal() contractType = ''
  @HttpBindNormal() contractTypeName = ''
  @HttpBindNormal() customerCode = ''
  @HttpBindNormal() customerName = ''
  @HttpBindNormal() endDate = ''
  @HttpBindNormal() isAutoContinue = ''
  @HttpBindArray('neolinkContractlineList', 'createNeoLinkContractLine')
  neolinkContractLineList: Array<NeoLinkContractLine>
  @HttpBindNormal() org = ''
  @HttpBindNormal() orgName = ''
  @HttpBindNormal() paperContractNum = ''
  @HttpBindNormal() startDate = ''
}

export class Vendor extends FrontModel {
  @HttpBindNormal() accountGroupNo = ''
  @HttpBindNormal() accountGroupNoList = ''
  @HttpBindNormal() begin = 0
  @HttpBindNormal() companyNo = ''
  @HttpBindNormal() countPerPage = 0
  @HttpBindNormal() currency = ''
  @HttpBindNormal() displayName = ''
  @HttpBindNormal() end = 0
  @HttpBindNormal() pageNo = 0
  @HttpBindNormal() purchaseOrgNo = ''
  @HttpBindNormal() staffNo = ''
  @HttpBindNormal() status = ''
  @HttpBindNormal() vendorId = 0
  @HttpBindNormal() vendorName = ''
  @HttpBindNormal() vendorNo = ''
  @HttpBindNormal() vendorType = ''
}

export class CostCenter extends FrontModel {
  @HttpBindNormal() companyCode = ''
  @HttpBindNormal() costCenterCode = ''
  @HttpBindNormal() costCenterId = 0
  @HttpBindNormal() costCenterName = ''
  @HttpBindNormal() costCenterType = ''
  @HttpBindNormal() effectiveDate = ''
  @HttpBindNormal() expiryDate = ''
  @HttpBindNormal('profitCenterDesr') profitCenterDes = ''
  @HttpBindNormal() profitCenterNo = ''
  @HttpBindNormal() status = ''
  @HttpBindNormal() useLanguage = ''
}

export class CostCenterValidContract extends FrontModel {
  @HttpBindNormal() companyCode = ''
  @HttpBindNormal() companyName = ''
  @HttpBindNormal() costCenterCode = ''
  @HttpBindNormal('costCenterFullname') costCenterFullName = ''
  @HttpBindNormal() costCenterName = ''
  @HttpBindNormal() financialRange = ''
  @HttpBindNormal() fundCenterCode = ''
  @HttpBindNormal() fundCenterName = ''
  @HttpBindNormal() isTelecom = ''
}

export class SignForPurchase extends FrontModel {
  @HttpBindNormal() applicant = ''
  @HttpBindNormal() costProjectCode = ''
  @HttpBindNormal() costType = ''
  @HttpBindNormal() procurementSignId = ''
  @HttpBindNormal() procurementSignType = ''
  @HttpBindNormal() procurementTitle = ''
  @HttpBindNormal() use = ''
}

export class FlowTypeNoBid extends FrontModel {
  @HttpBindNormal() id = ''
  @HttpBindNormal() bidName = ''
  @HttpBindNormal() operator = ''
  @HttpBindNormal() operateDate = ''
}

export class FlowTypeNoPrice extends FrontModel {
  @HttpBindNormal() competeBidId = ''
  @HttpBindNormal() competeBidProjectName = ''
  @HttpBindNormal() resPerson = ''
  @HttpBindNormal('createdate') createDate = ''
}

export class FlowTypeNoSpecial extends FrontModel {
  @HttpBindNormal() id = ''
  @HttpBindNormal() title = ''
  @HttpBindNormal() initiator = ''
  @HttpBindNormal() applicationDate = ''
}

export class AttachmentInfo extends FrontModel {
  @HttpBindNormal() dataField = ''
  @HttpBindNormal() dataObj = ''
  @HttpBindNormal() dataPk = ''
  @HttpBindNormal() fieldToken = ''
  @HttpBindNormal() fileId = ''
  @HttpBindNormal() fileName = ''
  @HttpBindNormal() fileOldName = ''
  @HttpBindNormal() filePath = ''
  @HttpBindNormal() fileSize = ''
  @HttpBindNormal() groupName = ''
  @HttpBindNormal() item = ''
  @HttpBindNormal() path = ''
  @HttpBindNormal() pathType = ''
  @HttpBindNormal() remarks = ''
  @HttpBindNormal() size = ''
  @HttpBindNormal() status = ''
  @HttpBindNormal() systemSeq = ''
  @HttpBindNormal() temporaryType = ''
  @HttpBindNormal() thumbnailUrl = false
  @HttpBindNormal() uploadPersonCode = ''
  @HttpBindNormal() uploadPersonName = ''
  @HttpBindNormal() uploadStatus = ''
  @HttpBindNormal() uploadTableName = ''
  @HttpBindNormal() uploadTime = ''
  @HttpBindNormal() uploadType = ''
  @HttpBindNormal() useTypeCode = ''
  @HttpBindNormal() useTypeName = ''
}

export class Project extends FrontModel {
  @HttpBindNormal() attachment = ''
  @HttpBindNormal() businessUnit = ''
  @HttpBindNormal() cabinetQuantity = ''
  @HttpBindNormal() capexBudget = ''
  @HttpBindNormal() capexMoney = ''
  @HttpBindNormal() capexRoughCalculation = ''
  @HttpBindNormal() cdeptCode = ''
  @HttpBindNormal() cdeptName = ''
  @HttpBindNormal() creatorCode = ''
  @HttpBindNormal() creatorName = ''
  @HttpBindNormal('creattime') creatTime = ''
  @HttpBindNormal() depCode = ''
  @HttpBindNormal() estimatedCompletionTime = ''
  @HttpBindNormal('fixProcessstate') fixProcessState = 0
  @HttpBindNormal() isInit = ''
  @HttpBindNormal() manager = ''
  @HttpBindNormal() managerCode = ''
  @HttpBindNormal() powerSupplyCapacity = ''
  @HttpBindNormal() proType = ''
  @HttpBindNormal() projectMainCode = ''
  @HttpBindNormal() projectMainId = ''
  @HttpBindNormal() projectMainName = ''
  @HttpBindNormal() projectShortName = ''
  @HttpBindNormal() remark = ''
  @HttpBindNormal() site = ''
  @HttpBindNormal() siteManager = ''
  @HttpBindNormal() status = ''
  @HttpBindNormal() totalAmount = ''
  @HttpBindNormal() viewer = ''
  @HttpBindNormal() viewerCode = ''
  @HttpBindNormal() whiteSpace = ''
  @HttpBindNormal() whiteSpaceQuantity = ''
}

export class SignatureContractListItem extends FrontModel {
  @HttpBindNormal() company = ''
  @HttpBindNormal() contractId = '' // 纸质合同编号
  @HttpBindNormal() contractName = ''
  @HttpBindNormal() contractType = ''
  @HttpBindNormal() contractTypeName = ''
  @HttpBindNormal() currentStepNode = ''
  @HttpBindNormal() payType = ''
  @HttpBindNormal() payTypeName = ''
  @HttpBindNormal() purchaseId = ''
  @HttpBindNormal() supply = ''
}

export class ValidContractListItem extends FrontModel {
  @HttpBindNormal() company = '' // 公司
  @HttpBindNormal() contractName = '' // 合同名称
  @HttpBindNormal() contractNature = '' // 合同性质
  @HttpBindNormal() contractNatureName = '' // 合同性质名称
  @HttpBindNormal() contractType = '' // 合同类型
  @HttpBindNormal() contractTypeName = '' // 合同类型名称
  @HttpBindNormal() contractValidId = '' // 合同编号
  @HttpBindNormal() currentStepNode = '' // 流程-当前步骤
  @HttpBindNormal() purchaseId = '' // 采购合同主键
  @HttpBindNormal() supply = '' // 供应商名称
  @HttpBindNormal() examineStatusName = '' // 审批状态名称
  @HttpBindNormal('zzhtNo') paperContractNum = '' // 纸质合同号
}

export class ContractPreIndex extends FrontModel {
  @HttpBindNormal() contractId = ''
  @HttpBindNormal() title = ''
}

export class GeneratedContractNo extends FrontModel {
  @HttpBindNormal() contractNo = ''
  @HttpBindNormal() isNew = ''
  @HttpBindNormal() key = ''
  @HttpBindNormal() value = ''
  @HttpBindNormal() year = ''
}

export class Unit extends FrontModel {
  @HttpBindNormal() unitNo = ''
  @HttpBindNormal() unitName = ''
  @HttpBindNormal() fullName = ''
  @HttpBindNormal() disName = ''
}

export class TaxCode extends FrontModel {
  @HttpBindNormal() taxCodeNo = ''
  @HttpBindNormal() taxCodeDesc = ''
  @HttpBindNormal() fullName = ''
  @HttpBindNormal() disName = ''
}

export class Plant extends FrontModel {
  @HttpBindNormal() companyCode = ''
  @HttpBindNormal() companyName = ''
  @HttpBindNormal() plantCode = ''
  @HttpBindNormal() plantName = ''
  @HttpBindNormal() status = ''
}
export class MachineRoom extends FrontModel {
  @HttpBindNormal() roomAddress = ''
  @HttpBindNormal() roomCode = ''
  @HttpBindNormal() roomName = ''
  @HttpBindNormal() roomNameShort = ''
}
export class Datacenter extends FrontModel {
  @HttpBindNormal() areaCode = ''
  @HttpBindNormal() areaName = ''
  @HttpBindNormal() address = ''
  @HttpBindNormal() datacenterCode = ''
  @HttpBindNormal() datacenterName = ''
  @HttpBindNormal() jfgsName = ''
  @HttpBindNormal() unifiedDatacenterCode = ''
  @HttpBindNormal() unifiedDatacenterName = ''
}
export class MaCustomer extends FrontModel {
  @HttpBindNormal() begin = 0
  @HttpBindNormal('businessunitCode') businessUnitCode = ''
  @HttpBindNormal('businessunitName') businessUnitName = ''
  @HttpBindNormal() accountName = ''
  @HttpBindNormal() accountNo = ''
  @HttpBindNormal() accountNumber = ''
  @HttpBindNormal() address = ''
  @HttpBindNormal() city = ''
  @HttpBindNormal() cityDesc = ''
  @HttpBindNormal() cityName = ''
  @HttpBindNormal() coaAttachment = ''
  @HttpBindNormal() contactEmail = ''
  @HttpBindNormal() contactMobile = ''
  @HttpBindNormal() end = 0
  @HttpBindNormal() contactName = ''
  @HttpBindNormal() contractType = ''
  @HttpBindNormal() countPerPage = 8
  @HttpBindNormal() pageNo = 0
  @HttpBindNormal() countryCode = ''
  @HttpBindNormal() countryName = ''
  @HttpBindNormal() createCode = ''
  @HttpBindNormal() createDate = ''
  @HttpBindNormal() createName = ''
  @HttpBindNormal() creditEvaluation = ''
  @HttpBindNormal() creditEvaluationLevel = ''
  @HttpBindNormal() customerCode = ''
  @HttpBindNormal() customerName = ''
  @HttpBindNormal() customerNameEn = ''
  @HttpBindNormal() customerPropertiesCode = ''
  @HttpBindNormal() customerPropertiesName = ''
  @HttpBindNormal() customerSusceptibility = ''
  @HttpBindNormal() customerTypeCode = ''
  @HttpBindNormal() customerTypeName = ''
  @HttpBindNormal() displayName = ''
  @HttpBindNormal() dyxCid = ''
  @HttpBindNormal() email = ''
  @HttpBindNormal() exactCustomerName = ''
  @HttpBindNormal() fax = ''
  @HttpBindNormal() flowType = ''
  @HttpBindNormal() frozwnReason = ''
  @HttpBindNormal() homePage = ''
  @HttpBindNormal() icpNo = ''
  @HttpBindNormal() installDate = ''
  @HttpBindNormal() isAll = ''
  @HttpBindNormal() isArrearage = ''
  @HttpBindNormal() isBusinessCircles = ''
  @HttpBindNormal() isContract = ''
  @HttpBindNormal() isFrozen = ''
  @HttpBindNormal() isInquiry = ''
  @HttpBindNormal() isKeepOnRecord = ''
  @HttpBindNormal() isPidCustomer = ''
  @HttpBindNormal() isSla = ''
  @HttpBindNormal() kfCode = ''
  @HttpBindNormal() kxbs = ''
  @HttpBindNormal() micCustomerCode = ''
  @HttpBindNormal() oldCustomerCode = ''
  @HttpBindNormal() onceUsedName1 = ''
  @HttpBindNormal() onceUsedName2 = ''
  @HttpBindNormal() personCode = ''
  @HttpBindNormal() personName = ''
  @HttpBindNormal() phone = ''
  @HttpBindNormal() pidCode = ''
  @HttpBindNormal() pidName = ''
  @HttpBindNormal() postalCode = ''
  @HttpBindNormal() provinceCode = ''
  @HttpBindNormal() provinceName = ''
  @HttpBindNormal() remark = ''
  @HttpBindNormal() saCode = ''
  @HttpBindNormal() searchText = ''
  @HttpBindNormal() sfCode = ''
  @HttpBindNormal() shortName = ''
  @HttpBindNormal() shortNameOe = ''
  @HttpBindNormal() slaAttachment = ''
  @HttpBindNormal() status = ''
  @HttpBindNormal() type = ''
  @HttpBindNormal() typeName = ''
  @HttpBindNormal() updateFlag = ''
  @HttpBindNormal() vipTypeCode = ''
  @HttpBindNormal() vipTypeCodeLike = ''
  @HttpBindNormal() signCustomerName = ''
  @HttpBindNormal() signCustomerCode = ''
  @HttpBindNormal() billCustomerName = ''
  @HttpBindNormal() billCustomerCode = ''
  @HttpBindNormal() hitCustomerName = ''
  @HttpBindNormal() hitCustomerCode = ''
}

export class DeployCustomerList extends HttpResponseList<MaCustomer> {
  createOneItem(): MaCustomer {
    return new MaCustomer()
  }
}
export class MaCustomerList extends HttpResponseBiz<MaCustomer> {
  createOneItem(): MaCustomer {
    return new MaCustomer()
  }
}
export class DatacenterList extends HttpResponseBiz<Datacenter> {
  createOneItem(): Datacenter {
    return new Datacenter()
  }
}
export class MachineRoomList extends HttpResponseList<MachineRoom> {
  createOneItem(): MachineRoom {
    return new MachineRoom()
  }
}
export class EmployeeList extends HttpResponseBiz<Employee> {
  createOneItem(): Employee {
    return new Employee()
  }
}

export class DepartmentList extends HttpResponseBiz<Department> {
  createOneItem(): Department {
    return new Department()
  }
}

export class DepartmentCostList extends HttpResponseData<Department> {
  createOneItem(): Department {
    return new Department()
  }
}

export class SysCategoryList extends HttpResponseRows<SysCategory> {
  createOneItem(): SysCategory {
    return new SysCategory()
  }
}

export class CompanyList extends HttpResponseBiz<Company> {
  createOneItem(): Company {
    return new Company()
  }
}

export class MainlyContractList extends HttpResponseBiz<MainlyContract> {
  createOneItem(): MainlyContract {
    return new MainlyContract()
  }
}

export class VendorList extends HttpResponseBiz<Vendor> {
  createOneItem(): Vendor {
    return new Vendor()
  }
}

export class CostCenterList extends HttpResponseData<CostCenter> {
  createOneItem(): CostCenter {
    return new CostCenter()
  }
}

export class CostCenterValidContractList extends HttpResponseList<CostCenterValidContract> {
  createOneItem(): CostCenterValidContract {
    return new CostCenterValidContract()
  }
}

export class SignForPurchaseList extends HttpResponseList<SignForPurchase> {
  createOneItem(): SignForPurchase {
    return new SignForPurchase()
  }
}

export class FlowTypeNoBidList extends HttpResponseList<FlowTypeNoBid> {
  createOneItem(): FlowTypeNoBid {
    return new FlowTypeNoBid()
  }
}

export class FlowTypeNoPriceList extends HttpResponseList<FlowTypeNoPrice> {
  createOneItem(): FlowTypeNoPrice {
    return new FlowTypeNoPrice()
  }
}

export class FlowTypeNoSpecialList extends HttpResponseList<FlowTypeNoSpecial> {
  createOneItem(): FlowTypeNoSpecial {
    return new FlowTypeNoSpecial()
  }
}

export class ContractList extends HttpResponseList<SignatureContractListItem> {
  createOneItem(): SignatureContractListItem {
    return new SignatureContractListItem()
  }
}

export class ContractValidList extends HttpResponseList<ValidContractListItem> {
  createOneItem(): ValidContractListItem {
    return new ValidContractListItem()
  }
}

export class AttachmentList extends HttpResponseRows<AttachmentInfo> {
  createOneItem(): AttachmentInfo {
    return new AttachmentInfo()
  }
}

export class ProjectList extends HttpResponseBiz<Project> {
  createOneItem(): Project {
    return new Project()
  }
}

export class ContractPreIndexList extends HttpResponseList<ContractPreIndex> {
  createOneItem(): ContractPreIndex {
    return new ContractPreIndex()
  }
}

export class PurchasingContractId extends HttpResponseString {}

export class PurchasingValidContractId extends HttpResponseString {}

export class GeneratedContractNoRes extends HttpResponseSingle<GeneratedContractNo> {
  createOneItem(): GeneratedContractNo {
    return new GeneratedContractNo()
  }
}

export class UnitList extends HttpResponseData<Unit> {
  createOneItem(): Unit {
    return new Unit()
  }
}

export class TaxCodeList extends HttpResponseData<TaxCode> {
  createOneItem(): TaxCode {
    return new TaxCode()
  }
}

export class PlantList extends HttpResponseSingle<Plant> {
  createOneItem(): Plant {
    return new Plant()
  }
}

export class MaSuit extends FrontModel {
  @HttpBindNormal() packageCode = ''
  @HttpBindNormal() packageName = ''
}
export class MaSuitList extends HttpResponseData<MaSuit> {
  createOneItem(): MaSuit {
    return new MaSuit()
  }
}

export class MaZone extends FrontModel {
  @HttpBindNormal() zone = ''
  @HttpBindNormal() zoneId = ''
  @HttpBindNormal() billCustomerCode = ''
  @HttpBindNormal() billCustomerName = ''
  @HttpBindNormal() datacenterCode = ''
  @HttpBindNormal() datacenterName = ''
}
export class MaZoneList extends HttpResponseData<MaZone> {
  createOneItem(): MaZone {
    return new MaZone()
  }
}
