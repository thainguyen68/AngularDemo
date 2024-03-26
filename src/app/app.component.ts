import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";

@Component({
  // name of CSS component
  selector: 'app-root',

  // todo: search -> what mean ?
  standalone: true,

  // Decorator metadata
  imports: [HomeComponent,
            RouterModule],

  /**
   * using templateUrl
   */
  // templateUrl: './component-overview-by-manual.html',

  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'

  /**
   * different using style
   */
  // styleUrls: ['','']
  // styles: [`header { display: none}`]

})
export class AppComponent {
  title = 'my-first-project';
}
