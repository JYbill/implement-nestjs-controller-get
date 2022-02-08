import { Controller, Get } from "../decorator/http.decorator";

@Controller('user')
export class UserController {

  @Get('/')
  say() {
    return {
      code: 200,
      msg: 'hello reflect',
      data: null
    }
  }

  @Get('/nest')
  nest() {
    return {
      code: 403,
      msg: '无权限噢🚀',
      data: null
    }
  }
}