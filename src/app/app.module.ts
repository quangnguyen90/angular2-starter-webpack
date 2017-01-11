import {NgModule, ApplicationRef, ReflectiveInjector, Injector, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';
import {LocalStorageModule} from 'angular-2-local-storage';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';
// App is our top level component
import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';
import {HomeModule} from './modules/home/home.module';
import {NoContentComponent} from './modules/no-content/no-content.component';
import {XLarge} from './modules/home/x-large/x-large.directive';
import {HelperService} from "./services/helper/helper.service";
import {ApiService} from "./services/api/api.service";
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {SimpleNotificationsModule} from "angular2-notifications/components";
import {AuthGuard} from "./guards/auth/auth.guard";
import {ConfigService} from "./services/config/config.service";
import {MetaModule, MetaConfig} from "ng2-meta";


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

const metaConfig:MetaConfig = {
  //Append a title suffix such as a site name to all titles
  //Defaults to false
  useTitleSuffix: true,
  defaults: {
    title: 'Angular 2 Webpack Starter by ' + process.env.APP_ENV.author,
    titleSuffix: ' | Angular 2',
  }
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NoContentComponent,
    XLarge
  ],
  imports: [ // import Angular's modules
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),

    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    HomeModule,
    SlimLoadingBarModule.forRoot(),
    SimpleNotificationsModule,
    MetaModule.forRoot(metaConfig)
  ],
  exports: [BrowserModule, SlimLoadingBarModule],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    HelperService,
    ApiService,
    AuthGuard,
    ConfigService,
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {

  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

