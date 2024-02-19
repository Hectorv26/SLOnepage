import { finalize } from 'rxjs';
import { SpinerService } from 'src/app/compartido/servicios/spiner.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../appSettings';
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor{

    uriCorreos = AppSettings.API_CORREOS;
    uri = AppSettings.API_BACK;
    textoCarga: string = ""; 

    constructor(private spinnerSvc: SpinerService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {           
        this.textoCarga = "" ;        
        if(req.url.includes("ike/compensar/orderDetail/getDetail")){
            this.textoCarga = " Obteniendo resumen de compra...";
        }

        if(req.url == `${this.uriCorreos}compensar/correos.php` || req.url == `${this.uriCorreos}compensar/correo` || req.url ==  `${this.uri}ike/compensar/formularioPago/Dp/register` || req.url ==  `${this.uri}ike/compensar/formularioPago/register` || req.url ==  `${this.uri}ike/compensar/freeService/register`  ){   
        }else {  
            this.spinnerSvc.mostar(this.textoCarga);
        }      
        return next.handle(req).pipe(
           finalize(()=>this.spinnerSvc.ocultar())
        );  

        
    }
}
