import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AppConfig } from './app-config';
import { AppService } from './app.service';

export function initializerFn(appService :AppService){
  return () =>{
    return appService.init();

  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: AppConfig,
    deps: [AppService],
    useExisting: AppService
  },{
    provide:APP_INITIALIZER,
    multi:true,
    deps:[AppService],
    useFactory:initializerFn
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
