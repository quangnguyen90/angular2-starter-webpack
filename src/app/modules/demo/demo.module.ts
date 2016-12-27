import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {DemoComponent} from './demo.component';
import { ApiService } from '../../services/api.service';

@NgModule({
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ],
    imports: [ // import Angular's modules
        FormsModule, HttpModule, CommonModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ApiService
    ]
})

export class DemoModule {

}