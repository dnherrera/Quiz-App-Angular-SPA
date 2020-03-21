import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-Nav></app-Nav><router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'Quiz App SPA';
}
 