import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor() { }

   // se creea un observasble tipo BehaviorSubject
   modalshow  = new BehaviorSubject<boolean>(true);  
   formEnviado$ = new BehaviorSubject<boolean>(false);
   btnclickclose$ = new BehaviorSubject<boolean>(false);       
   
   get modalshowaction$(): Observable<boolean> {
       return this.modalshow.asObservable();
   }    
 
   mostar(val: boolean):void{        
       this.modalshow.next(val);       
   }

   formsend():void{
       this.formEnviado$.next(true); 
   }
   clickBtn():void{
       this.btnclickclose$.next(true); 
       
   }  
}

