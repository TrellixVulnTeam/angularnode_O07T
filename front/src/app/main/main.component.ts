import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maincomponent',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dispositivos=[
  ["1","nometeste","Categoria1","azul","12345678910"],
  ["2","nometeste","Categoria2","amarelo","10987654321"],
  ["3","nometeste","Categoria3","verde","136723435349"]];
  constructor() { }

  ngOnInit(): void {
  }

}
