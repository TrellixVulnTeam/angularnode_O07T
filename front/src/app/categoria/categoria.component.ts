import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias=[
    ["1","nometeste"],
    ["2","nometeste"],
    ["3","nometeste"]];
  constructor() { }

  ngOnInit(): void {
  }

}
