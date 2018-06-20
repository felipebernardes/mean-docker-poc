import { Component, OnInit } from '@angular/core';
import { ComprasService } from './compras.service';


@Component({
  selector: 'compras',
  templateUrl: './compras.component.html'
})
export class ComprasComponent implements OnInit {
  //compras: Any = [];

  constructor(private comprasService: ComprasService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.comprasService.list().subscribe((compras) => {
      (this.compras = compras);
    });
  }
}
