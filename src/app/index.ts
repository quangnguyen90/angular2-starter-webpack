// App
export * from './app.module';

import $ from 'jquery';

(<any>window).$ = $;
(<any>window).jQuery = $;

