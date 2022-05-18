import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public id_producto: any;
  public producto: any;
  public price: any;

  public new_producto: any;
  public producto_guardado: any;

  constructor(
  	private _peticionesService: PeticionesService
  ){
  	this.id_producto = 1;
    this.new_producto = {
                "name": "",
                "price": ""
            };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  onSubmit(form: { reset: () => void; }){

    this._peticionesService.addProducto(this.new_producto).subscribe(
      response => {
        this.producto_guardado = response;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
