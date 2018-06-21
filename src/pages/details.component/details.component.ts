import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { formatUrl } from '../../app/http.client';
import { NavParams } from 'ionic-angular';
//import { IRecipe } from "../../interface.shared";
//import { IRecipe } from '../../interface.shared';

@Component({
    selector: 'def',
    templateUrl: 'details.component.html'
})

export class DetailsComponent {
    url: string;
    recipeName: string;
    recipeYield: string;
    recipeCookTime: string;
    recipeIngredientLines: string;
    recipeImages: string;
    recipeNumberOfServings: string;
    recipeSource: { sourceRecipeUrl };
    recipeTotalTime: string;
    recipeRating: number;
    /* recipeFlavors: {
        Bitter:number, 
        Meaty:number,
        Piquant:number,
        Salty:number,
        Sour:number,
        Sweet:number
    }; */

    constructor(public http: HttpClient, public navParams: NavParams) {
        const id = navParams.get('id');
        //this.recipe.recipeName="ghhghh";
        this.url = formatUrl('recipe/' + id);
        this.loadReciptDetails();
    }

    loadReciptDetails() {
        this.http.get(this.url).toPromise().then((recipe: any) => {
            //this.recipe.recipeName = recipe.name;
            this.recipeName = recipe.name;
            this.recipeYield = recipe.yield;
            this.recipeIngredientLines = recipe.ingredientLines;
            this.recipeImages = recipe.images[0].hostedLargeUrl;
            console.log(recipe.images[0]);
            this.recipeNumberOfServings = recipe.numberOfServings;
            this.recipeSource = recipe.source.sourceRecipeUrl;
            this.recipeTotalTime = recipe.totalTime;
            this.recipeRating = recipe.rating;


            console.log(recipe);
        }, /* error => {
            alert('Please try again');
        } */);
    }
}