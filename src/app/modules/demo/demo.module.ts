import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DemoComponent} from './demo.component';

@NgModule({
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ],
    imports: [ // import Angular's modules
        FormsModule,
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection

    ]
})

export class DemoModule {

}