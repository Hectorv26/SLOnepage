
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs';
import { HttpCaching } from '../servicios/httpCaching.service';
import { AppSettings } from '../appSettings';
@Injectable()
export class CacheInterceptor implements HttpInterceptor{

    uriPasarela = AppSettings.API_PASARELA;

    constructor(
        private cacheService : HttpCaching,
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        

        if(req.method == 'GET'){
            const cachedResponse:
                | HttpResponse<any>
                | undefined = this.cacheService.get(req.url);

            if(cachedResponse){
                return of(cachedResponse);
            }

            return next.handle(req).pipe(
                tap((event)=>{
                    if(event instanceof HttpResponse){
                        this.cacheService.put(req.url,event);
                    }
                })
            );
        }else{
            return next.handle(req);
        }
    }
}
