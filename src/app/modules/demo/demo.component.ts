import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({

    selector: 'demo',
    templateUrl: 'demo.html',
    styleUrls: ['demo.scss'],
})

export class DemoComponent {
    public listDoc:any[];
    constructor(private apiService : ApiService){
        this.listDoc = [];

        apiService.getDocs().subscribe((response:any) => {
            this.listDoc = response;
            console.log(this.listDoc);
        });

    }
}