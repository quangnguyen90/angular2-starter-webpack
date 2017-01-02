import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import {HelperService} from "../../services/helper/helper.service";
import {Constants} from "../../services/const/const.service";

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

    actionLogin(){
        //this._helper.getLocalStorage().set(Constants.KEY_TOKEN, 'kaka')
        //this._helper.redirectTo('');
        this._helper.getApiService().postLogin('phuc.ps.89@gmail.com','123456').subscribe((res:Response) => {
            console.log(res.json());
        });
    }
}
