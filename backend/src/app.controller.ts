import { Controller, Post, Body } from '@nestjs/common';
import { Login } from './DTO/loginDto.dto';  // Certifique-se de que o caminho e nome do arquivo estão corretos
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  async Login(@Body() data: Login): Promise<object> {
    return this.appService.Login(data);
  };
  //login ADM
  @Post('loginadm')
  async LoginAdm(@Body() data: Login): Promise<object> {
    return this.appService.LoginAdm(data);
  };
  @Post('registeradm')
  async RegisterAdm(@Body() data: Login) : Promise<object> {
    return await this.appService.RegisterAdm(data);
  }
  @Post('register')
  async Register(@Body() data: Login) : Promise<object> {
    return await this.appService.Register(data);
  }
}
