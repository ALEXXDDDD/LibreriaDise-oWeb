import { Component, OnInit } from '@angular/core';
import { TiendaServiceService } from '../../../../services/tienda/tienda-service.service';
import { ProductoResponse } from '../../../../models/producto/productoResponse.model';

@Component({
  selector: 'app-tienda-pages',
  templateUrl: './tienda-pages.component.html',
  styleUrl: './tienda-pages.component.scss'
})
export class TiendaPagesComponent implements OnInit {
 productoResponse:ProductoResponse[]  =[]


 
  constructor(
    private _tiendaService:TiendaServiceService
  )
  {

  }
  ngOnInit(): void {
    this.listarProductos()
  }
  listarProductos( )
  {
    this._tiendaService.getAll().subscribe(
      {
        next:(data:ProductoResponse[])=>{this.productoResponse=data},
        error:()=>{},
        complete:()=>{}
      }
    )
  }
}
