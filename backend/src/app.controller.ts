import { Controller, Post, Get, Body } from '@nestjs/common';
import { Login } from './DTO/loginDto.dto';  // Certifique-se de que o caminho e nome do arquivo estão corretos
import {Produtos} from './DTO/produtosDto.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //login user
  @Post('login')
  async Login(@Body() data: Login): Promise<object> {
    return this.appService.Login(data);
  };
  //login ADM
  @Post('loginadm')
  async LoginAdm(@Body() data: Login): Promise<object> {
    return this.appService.LoginAdm(data);
  };
  //regiter adm
  @Post('registeradm')
  async RegisterAdm(@Body() data: Login) : Promise<object> {
    return await this.appService.RegisterAdm(data);
  };
  // register user
  @Post('register')
  async Register(@Body() data: Login) : Promise<object> {
    return await this.appService.Register(data);
  };
  //regiter produto:
  @Post('registerproduto')
  async RegisterProduto(@Body() data: Produtos): Promise<object>{
    return await this.appService.RegisterProduto(data);
  };
  // Editar Produto;
  @Post('editarproduto')
  async EditarProduto(@Body() data: Produtos): Promise<object> {
    return await this.appService.EditarProduto(data);
  };
  //Buscar todos os produtos
  @Get('produto')
  async GetProduto(): Promise<object> {
    return await this.appService.GetProduto();
  };
  //buscar produto especifico
  @Post('uniproduto')
  async UniProduto(@Body() data: Produtos): Promise<object> {
    return await this.appService.UniProduto(data);
  };
  //adicionar produto nocarrinho.
  @Post('addcarrinho')
  async AddCarrinho(@Body() data: Produtos): Promise<object>{
    return await this.appService.AddCarrinho(data);
  };
  //Buscar Produtos no carrinho
  @Post('getcarrinho')
  async GetCarrinho(@Body() data: Produtos):Promise<object>{
    return await this.appService.GetCarrinho(data);
  }

};