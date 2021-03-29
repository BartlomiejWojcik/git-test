import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gitTest';

  test(): void {
    console.log(environment.apikey);
  }


}

