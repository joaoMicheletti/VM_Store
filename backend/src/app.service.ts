import { Injectable } from '@nestjs/common';
import {Login} from './DTO/loginDto.dto';
import connectio from './database/connectio';
@Injectable()
export class AppService {
  //login user
  async Login(data: Login):  Promise<object>{
    // buscar os dados no database e efetuar o login retornar o token do usuário.
    console.log(data)
    return {data};
  }
  // register of login
  async Register(data: Login): Promise<object> {
    //verificar a existencia do usuario e se possivél encerir no banco de dados.
    console.log(data)
    var confirmation = await connectio('user').where('email', data.email).select('email');

    console.log(confirmation.length);
    if(confirmation.length > 0 ){
      return {resp: "Usuário já cadastrado."};
    } else {
      var Data = {email: data.email, pass: data.senha, token: data.email+data.senha};
      var insert = await connectio('user').insert(Data);
      console.log(insert);
      if(insert.length > 0) {
        return {resp: "Cadastrado com sucesso!"}
      }
    }


    return{data};
  }
}
