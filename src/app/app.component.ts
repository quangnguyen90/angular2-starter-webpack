/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from './app.service';
import {HelperService} from "./services/helper/helper.service";
import {NavigationEnd, NavigationStart} from '@angular/router';
// import 'gentelella/vendors/bootstrap/dist/css/bootstrap.min.css';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    /*require('materialize-css/dist/css/materialize.min.css'),*/
    require('./app.component.css'),
  ],
  template: `
   

    <main>
      <ng2-slim-loading-bar [height]="'4px'"></ng2-slim-loading-bar>
      <simple-notifications [options]="options"></simple-notifications>
      <router-outlet></router-outlet>
    </main>

    <!--<pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->

    <!--<footer>-->
      <!--<span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>-->
      <!--<div>-->
        <!--<a [href]="url">-->
          <!--<img [src]="angularclassLogo" width="25%">-->
        <!--</a>-->
      <!--</div>-->
    <!--</footer>-->
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState, private _helper: HelperService) {

    this._helper.getRouter().events.subscribe((event) => {
      if (event instanceof NavigationStart) {

        this._helper.getSlimLoadingBarService().start()
      }
      if (event instanceof NavigationEnd) {

        this._helper.getSlimLoadingBarService().complete()
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
