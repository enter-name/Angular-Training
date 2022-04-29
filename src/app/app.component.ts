import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonenv';

  constructor(private appService: AppService){
    appService.get().subscribe((data) => {
      console.log(data.json);
    });
  }

}
