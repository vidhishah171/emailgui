import { Component } from '@angular/core';

// Decorator @component to provide extra info about this component, 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'emailgui';
  // n:number=89;
}
