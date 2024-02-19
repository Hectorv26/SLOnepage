import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from "@angular/core";
@Injectable(
    { providedIn: 'root' }
)
export class SpinerService {
     // se creea un observasble tipo subjet
    cargando$  = new Subject<boolean>();
     texto$ = new BehaviorSubject<string>("");
    mostar(texto?:string):void{
        this.cargando$.next(true);   
        this.texto$.next(texto!);     
    }
    ocultar():void{
        this.cargando$.next(false)  
    }
}