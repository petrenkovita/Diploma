import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { formatUrl } from '../../app/http.client';
import { NavParams } from 'ionic-angular';
// import { IRecipe } from "../../interface.shared";
// import { IRecipe } from "../../interface.shared";

@Component({
    selector: 'def',
    templateUrl: 'def.component.html'
})

export class DefinitionComponent {
    url: string;
    recipe: IDetailedRecipe;
    constructor(public http: HttpClient, public navParams: NavParams) {
        const id = navParams.get('id');

        this.url = formatUrl('recipe/' + id);
        this.loadReciptDetails();
    }

    loadReciptDetails() {
        this.http.get(this.url).toPromise().then((recipe: any) => {
            console.log(JSON.stringify(recipe));
        }, error => {
            alert('Please try again');
        });
    }
}

interface IDetailedRecipe {

}



