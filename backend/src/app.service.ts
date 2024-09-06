import { Injectable } from '@nestjs/common';
import {Login} from './DTO/loginDto.dto';
import {Produtos} from './DTO/produtosDto.dto';
import connection from './database/connectio';
@Injectable()
export class AppService {
  //login user
  async Login(data: Login):  Promise<object>{
    // buscar os dados no database e efetuar o login retornar o token do usuário.
    console.log(data)
    var email = await connection('user').where('email', data.email).select("*");
    console.log(email.length);
    if(email.length === 0){
      return {resp: 'Usuário não encontrado.'};
    } else if( email.length > 0){
      var cSenha = await connection('user').where('email', data.email).select('pass');
      console.log(cSenha[0].pass);
      if(cSenha[0].pass === data.senha){
        var token = await connection('user').where('email', data.email).select('token');
        console.log(token)
        return {resp: `${token[0].token}`};
      } else {
        return {resp: "Usuário ou senha invalidos."};
      };
    };
  };
  //Login ADM
  async LoginAdm(data: Login):  Promise<object>{
    // buscar os dados no database e efetuar o login retornar o token do usuário.
    console.log(data)
    var email = await connection('adm').where('email', data.email).select("*");
    console.log(email.length);
    if(email.length === 0){
      return {resp: 'Usuário não encontrado.'};
    } else if( email.length > 0){
      var cSenha = await connection('adm').where('email', data.email).select('pass');
      console.log(cSenha[0].pass);
      if(cSenha[0].pass === data.senha){
        var token = await connection('adm').where('email', data.email).select('token');
        console.log(token)
        return {resp: `${token[0].token}`};
      } else {
        return {resp: "Usuário ou senha invalidos."};
      };
    };
  };
  //register adm
  async RegisterAdm(data: Login): Promise<object> {
    //verificar a existencia do usuario e se possivél encerir no banco de dados.
    console.log(data)
    var confirmation = await connection('adm').where('email', data.email).select('email');

    console.log(confirmation.length);
    if(confirmation.length > 0 ){
      return {resp: "Usuário já cadastrado."};
    } else {
      var Data = {email: data.email, pass: data.senha, token: data.email+data.senha};
      var insert = await connection('adm').insert(Data);
      console.log(insert);
      if(insert.length > 0) {
        return {resp: "Cadastrado com sucesso!"}
      }
    }


    return{data};
  }
  // register user
  async Register(data: Login): Promise<object> {
    //verificar a existencia do usuario e se possivél encerir no banco de dados.
    console.log(data)
    var confirmation = await connection('user').where('email', data.email).select('email');
    console.log(confirmation.length);
    if(confirmation.length > 0 ){
      return {resp: "Usuário já cadastrado."};
    } else {
      var Data = {email: data.email, pass: data.senha, token: data.email+data.senha};
      var insert = await connection('user').insert(Data);
      console.log(insert);
      if(insert.length > 0) {
        return {resp: "Cadastrado com sucesso!"}
      }
    }
    return{data};
  };
  //register produto
  async RegisterProduto(data:Produtos): Promise<object> {
    console.log(data);
    var c = await connection('produto').insert(data);
    console.log(c);
    return {resp: 'cadastrado com sucesso!'};
  };
  //Editar Produto.
  async EditarProduto(data:Produtos): Promise<object>{
    const {id, tamanho, cor, quantidade, preco} = data;
    var lista = await connection('produto').where('id', id).select('*');
    console.log('Lista sem alteração:', lista);
    var c = await connection('produto').where('id', id)
    .update('tamanho', tamanho)
    .update('cor', cor)
    .update('quantidade', quantidade)
    .update('preco', preco);
    if(!c){
      return{resp: 'erro ao atulizar produto!'};
      
    }else{
      return { resp: "atualizado com sucesso!"};
    };
  };
}
