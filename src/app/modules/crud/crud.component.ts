/**
 * Created by Quang Nguyen Seldat on 3/1/2017.
 */
import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from '../../app.service';
import {HelperService} from "../../services/helper/helper.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'crud',  // <crud></crud>
  encapsulation: ViewEncapsulation.None,
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: 'crud.component.html',
})
export class HomeComponent {
  // Set our default values
  localState = {value: ''};
  // TypeScript public modifiers
  constructor(public appState: AppState, private _helper: HelperService) {
  }

  ngOnInit() {
    console.log('hello `Crud` component');
    this._helper.getMetaService().setTitle('This is a route of Crud Component');
    this._helper.getMetaService().setTag('description','Meta description of Crud Component by Quang Nguyen');
  }
}
