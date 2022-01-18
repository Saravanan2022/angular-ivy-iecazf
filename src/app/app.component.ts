import { Component, VERSION } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user:any = "";
  constructor(private api:ApiService) {}

  ngOnInit(){
    this.api.get('users?page=1').subscribe(res => {
      this.user=res;
      console.log(this.user);
    });
  }
}
