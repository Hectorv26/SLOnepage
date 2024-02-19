import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {
  
  carruselId = new BehaviorSubject<number>(0);

  get carruselIdAction$():number {
    return this.carruselId.getValue();
  }  
  guardarCarruselId(id: number){
    this.carruselId.next(id);
  }
}
