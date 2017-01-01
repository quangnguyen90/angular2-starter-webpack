import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {HelperService} from "../../services/helper/helper.service";

declare var $:any;

@Component({

    selector: 'login',
    providers: [

    ],
    styleUrls: [

    ],
    templateUrl: 'login.html'
})

export class LoginComponent implements OnInit, OnDestroy{
    private body;

    ngOnInit():void {
        this.body.classList.remove("login-page");   //remove the class
        this.body.classList.add("login-page");   //add the class
        this._helper.execCallBackAfterRender(function(){
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });
        });
    }

    ngOnDestroy():void {
        this.body.classList.remove("login-page");   //remove the class
    }

    constructor (private localStorageService: LocalStorageService, private _helper: HelperService) {
        this.body = document.getElementsByTagName('body')[0];
    }
}
