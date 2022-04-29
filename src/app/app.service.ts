import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConfig } from './app-config';


@Injectable({
  providedIn: 'root'
})
export class AppService extends AppConfig {

  constructor(private httpClient: HttpClient) {
    super();
  }

  get(): Observable<any> {
    const baseUrl = environment.apiUrl + "find?id=626a8a0ec5ea2000a34fd4cc";
    return this.httpClient.get(baseUrl);
  }

  public init() {

    return this.httpClient.get<AppConfig>("/assets/app-config.json").toPromise().then(data => {
      if(data!=undefined){
        this.apiUrl = data.apiUrl;
      }
      
      environment.setEnvironment(data?.apiUrl);
    }).catch(() => {
      console.error('could not load configuration');
    })
  }



}
