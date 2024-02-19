import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable(
    { providedIn: 'root' }
)
export class HttpCaching {
     
    private requests: any = {};

    constructor(){}

    get(url: string) :HttpResponse<any> | undefined { 
        return this.requests[url];
    }
    
    put(url: string, response: HttpResponse<any>): void { 
        this.requests[url] = response;
    }

    invalidateUrl(url:string):void {
        this.requests[url] = undefined; 
    }

    invalidateCache():void {
        this.requests = {}
    }
   
}