//NEW FILE
import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
//import { filterUrl, baseUrl } from '../../app/http.client';
import { NavParams, NavController } from 'ionic-angular';
import { filter } from "../../api/filter";
import { IRecipe, ICategory } from "../../interface.shared";
import { DetailsComponent } from "../details.component/details.component";

@Component({
    selector: 'description',
    templateUrl: 'description.component.html'
})

export class DescriptionComponent implements OnInit {
    reciepts: IRecipe[] = [];
    filtered: ICategory;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
        const id = navParams.data.filteredId;

        this.filtered = filter.filter.find((fil) => {
            return fil.id == id;
        });
    }

    ngOnInit(): void {
        this.http.get(this.filtered.searchString)
            .subscribe((result: any) => {
                const { matches } = result;
                this.reciepts = matches;
                console.log(this.reciepts)
            });
    }

    openDescriptionPage(recipe: IRecipe) {
        this.navCtrl.push(DetailsComponent, {
            id: recipe.id
        })
    }
}