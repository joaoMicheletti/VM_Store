import { Injectable } from '@nestjs/common';
import {Login} from './DTO/loginDto.dto';
@Injectable()
export class AppService {
  async Login(data: Login):  Promise<object>{
    // buscar os dados no database e efetuar o login retornar o token do usuário.
    return {data};
  }

  async Register(data: Login): Promise<object> {
    //verificar a existencia do usuario e se possivél encerir no banco de dados.
    return{data};
  }
}
