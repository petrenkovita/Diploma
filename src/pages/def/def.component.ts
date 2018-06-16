import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../app/http.client';

@Component({
    selector: 'def',
    templateUrl: 'def.component.html'
})

export class DefinitionComponent {

    constructor(public http: HttpClient) {
        this.loadReciptDetails('');
    }

    loadReciptDetails(id: string) {
        this.http.get(baseUrl).subscribe(result => {
            console.log(result);
        }, error => {
            alert('Please try again');
        });
    }

    dismiss() {
        // this.viewCtrl.dismiss();
    }
}