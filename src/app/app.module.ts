import { SpinnerModule } from './compartido/spinner/spinner.module';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HeaderComponent } from './compartido/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './compartido/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import { SpinnerInterceptor } from './compartido/intecerceptors/spinner.interceptor';
import { CacheInterceptor } from './compartido/intecerceptors/cache.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi:true},
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
