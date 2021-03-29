import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent implements OnInit {

  listaCurso: string[] = ['typescript', 'Javascript', 'jave SE', 'Python', 'React'];
  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar === true) ? false : true;
  }


  ngOnInit(): void {
  }

}
