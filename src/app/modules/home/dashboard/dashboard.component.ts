import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {HelperService} from "../../../services/helper/helper.service";

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
    ngOnInit():void {
        this._helperService.execCallBackAfterRender(function(){
            $('.dataTable').DataTable({
//            "paging": true,
//            "lengthChange": false,
//            "searching": false,
//            "ordering": true,
//            "info": true,
//            "autoWidth": false
            });
            //$.AdminLTE.layout.activate();
            //console.log($.AdminLTE.layout.activate());
        })
    }

    constructor (private _helperService: HelperService) {
        this._helperService.checkAuth()
    }
}
