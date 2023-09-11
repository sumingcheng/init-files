import {FrontModel, HttpBindNormal} from '../utils/FrontModel'

export class Demo extends FrontModel {
  @HttpBindNormal('1') code = 'admin'
  @HttpBindNormal('2') message = 'admin'
  @HttpBindNormal('3') pageInfo = 'admin'

  constructor() {
    super()
    this.code = ''
    this.message = ''
    this.pageInfo = ''
  }
}
