import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({

    selector: 'demo',
    templateUrl: 'demo.html',
    styleUrls: ['demo.scss'],
})

export class DemoComponent {
    constructor(private apiService : ApiService){
        console.log(apiService.getDocs());
    }
}