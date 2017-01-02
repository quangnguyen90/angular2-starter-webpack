import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import {HelperService} from "../../services/helper/helper.service";
import {Constants} from "../../services/const/const.service";
import {SlimLoadingBarService} from "ng2-slim-loading-bar/index";

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
    private _slimLoadingBar:SlimLoadingBarService;
    private _localStorage:LocalStorageService;

    public login = {
        'email':'phuc.ps.89@gmail.com',
        'password':'123456'
    };

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
        this._slimLoadingBar = this._helper.getSlimLoadingBar();
        this._localStorage = this._helper.getLocalStorage();

    }

    actionLogin(){
        this._slimLoadingBar.start();

        this._helper.getApiService().sendPost(Constants.URL.LOGIN, {
            email: this.login.email,
            password:this.login.password
        }).subscribe((res:Response) => {
            this._localStorage.set(Constants.KEY.TOKEN, res.json().token);
            this._slimLoadingBar.complete();
            this._helper.redirectTo('');
        });
    }
}
