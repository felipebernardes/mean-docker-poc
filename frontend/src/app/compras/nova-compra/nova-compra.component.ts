import { Component, Input } from '@angular/core';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'novacompra',
  templateUrl: './nova-compra.component.html'
})
export class NovaCompraComponent {
  constructor(private comprasService: ComprasService) {}

  produtos = [
    {
      descricao: "Caixa de Lápis (12un)",
      preco: 20,
      quantidade: 5
    },
    {
      descricao: "Caixa de Lápis (24un)",
      preco: 30,
      quantidade: 2
    },
    {
      descricao: "Caidera para Escritório (simples)",
      preco: 500,
      quantidade: 0
    },
    {
      descricao: "Pacote de blocos de notas (100un)",
      preco: 230,
      quantidade: 0
    },
    {
      descricao: "Teclado mecânico para melhor produtividade",
      preco: 180,
      quantidade: 0
    }
  ]

  getTotal() {
    return this.produtos.reduce((sum, curr) => sum + (curr.preco * curr.quantidade), 0);
  }

  save() {
    console.log('clicou');
    const compra = {
      dataCompra: (new Date()).toString().substring(0,15),
      dataEntrega: (new Date().setDate(new Date().getDate() + 10)).toString().substring(0,15),
      preco: this.getTotal(),
      produtos: this.produtos
    }


    this.comprasService.create(compra).subscribe(() => {
      //this.message.success('Compra criada com sucesso!');
      //this.modal.hide(this.form);
      console.log('deu');
    });
  }
}
