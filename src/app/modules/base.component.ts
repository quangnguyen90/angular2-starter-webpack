import {Component, ViewEncapsulation} from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {ServiceLocator} from "../services/locator/locator.service";


@Component({

})
export class BaseComponent {
    protected _localStorageService: LocalStorageService;

    constructor() {
        this._localStorageService = ServiceLocator.injector.get(LocalStorageService);
    }

    checkAuth() {
        console.log('Check Auth');
        //if(this._localStorageService.hasOwnProperty('phucdaica')){
        //    console.log('Co auth')
        //}
        //else{
        //    console.log('Khong auth')
        //}
    }
}
