import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import {HelperService} from "../../../services/helper/helper.service";
import {ApiService} from "../../../services/api/api.service";
import {Constants} from "../../../services/const/const.service";

declare var $:any;

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'home'
    selector: 'home-dashboard',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [
    ],
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: [

    ],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: 'dashboard.html'
})
export class HomeDashBoardComponent implements OnInit{
    private _apiService:ApiService;
    public listAdvices = [];
    public sumQuestion;

    rows = [];

    ngOnInit():void {
        //this._helperService.checkAuth();
        this._helperService.execCallBackAfterRender(function(){

        });
    }

    private refreshDataTable(){

    }

    constructor (private _helperService: HelperService) {

        this._apiService = this._helperService.getApiService();
        this._apiService.sendGet(Constants.URL.HOME, null).subscribe((res:Response) => {
            let data = res.json();
            this.rows = data.advices;
            this.sumQuestion = data.sumQuestion;
            this.refreshDataTable();
        });
    }

    getPercent(now, sum){
        return (now/sum) * 100;
    }
}