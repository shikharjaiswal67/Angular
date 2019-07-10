import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
  // Below `` is used for multi line statements
  styles: [`
  h3{
   color: deepskyblue;
  }
  `]
})
export class AppComponent {
  title = 'my-first-app';
}
