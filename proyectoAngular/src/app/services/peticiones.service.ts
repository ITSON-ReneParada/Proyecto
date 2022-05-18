import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import {range, Observable} from 'rxjs';

@Injectable()
export class PeticionesService{
	
	constructor(
		public _http: HttpClient
	){

	}

	addProducto(producto: any): Observable<any>{
		let params = JSON.stringify(producto);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post("http://localhost:4000/productos/new/", params, {headers: headers});
	}

}