import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
	
	public coleccionRopa = ['Pantalones Blancos', 'Camisa Roja'];

	addRopa(nombrePrenda:string):Array<string>{
		this.coleccionRopa.push(nombrePrenda);
		return this.getRopa();
	}

	getRopa():Array<string>{
		return this.coleccionRopa;
	}

	deleteRopa(index:number){
		this.coleccionRopa.splice(index,1);
	}
}