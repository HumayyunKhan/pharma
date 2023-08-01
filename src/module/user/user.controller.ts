import { Controller,Get,Post,Put,Delete} from '@nestjs/common';
import UserService from './user.services'
// const user=new UserService()
@Controller('user')
export class UserController {
  constructor(
    private readonly userService:UserService
  ){}
    @Get()
    async Displayer(): Promise<any> {
        const name=await this.userService.findOne()
      return name
    }
    @Get("/dashboard")
    Dashboard(): string {
        // const name=user.findAll()
      return "hhhhhhhhhhhhhhhhhhhh";
    }
}
