import { Component, Input } from '@angular/core';

@Component({
  selector: 'novacompra',
  templateUrl: './nova-compra.component.html'
})
export class NovaCompraComponent {
  constructor() {}

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

  getTotal = () => this.produtos.reduce((sum, curr) => sum + (curr.preco * curr.quantidade), 0);
}
