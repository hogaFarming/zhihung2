import {Component} from '@angular/core';

@Component({
  selector: 'topbar',
  template: `
    <div class="topbar">
      {{title}}
    </div>
    `,
  styles: [`
    .topbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      /*height: 45px;*/
      line-height: 45px;
      padding-left: 25px;
      background: dodgerblue;
      color: #fff;
    }
  `]
})
export class TopbarComponent {
  title = 'Zhihu Daily';
}