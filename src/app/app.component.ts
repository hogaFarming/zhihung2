import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  template: `
    <div class="app">
      <topbar></topbar>
      <router-outlet></router-outlet>
    </div>
    `,
  styles: [`
    .app {
      font-family: '黑体';
      font-size: 14px;
      margin-top: 45px;
      background: #f8f8f8;
      position: relative;
    }
  `]
})
export class AppComponent {

}