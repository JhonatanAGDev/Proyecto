
import { Component, OnInit } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { Datos } from 'src/app/interface/interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  lista:Datos[]=[];

  constructor(private catalogoservice:CatalogoService) { }

  ngOnInit(): void {
    this.ejecutaconsulta();
  }

  ejecutaconsulta(){
    this.catalogoservice.consultabd().subscribe(
      res=>{console.log(res)
        this.lista=res;}
    )
  }

}
