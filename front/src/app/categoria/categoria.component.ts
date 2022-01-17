import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoriasArray: Array<any> = new Array();
  categorias=[
    ["1","nometeste"],
    ["2","nometeste"],
    ["3","nometeste"]];
  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.listarAlunos();
  }
  listarAlunos(){
    console.log('ASAAAAA')
    this.categoriaService.listarCategorias().subscribe(categorys =>{
      // categorys = this.categorias;
    },err =>{
      console.log('Erro ao listar as categorias', err)
    })
  }

}
