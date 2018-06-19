import { Component } from '@angular/core';

@Component({
  selector: 'compras',
  templateUrl: './compras.component.html'
})
export class ComprasComponent {
  constructor() {}

  compras = [
    {
      dataCompra: '18 de Junho de 2018',
      dataEntrega: '28 de Junho de 2018',
      status: 'Pendente',
      produtos: [
        {
          descricao: 'Cadeira Empresarial',
          quantidade: 10,
        },
        {
          descricao: 'Cadeira Empresarial - Diretoria',
          quantidade: 10,
        }
      ]
    },
    {
      dataCompra: '10 de Junho de 2018',
      dataEntrega: '18 de Junho de 2018',
      status: 'Finalizada',
      produtos: [
        {
          descricao: 'Cadeira Empresarial',
          quantidade: 1,
        },
        {
          descricao: 'Cadeira Empresarial - Diretoria',
          quantidade: 1,
        }
      ]
    }
  ]
}
