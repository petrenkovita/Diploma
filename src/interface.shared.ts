export interface IRecipe {
    imageUrlsBySize: Map<string, string>[],
    sourceDisplayName: string,
    ingredients: string[],
    id: number,
    smallImageUrls: string[],
    recipeName: string,
    totalTimeInSeconds: number,
    attributes: any,
    flavors: Map<string, string>[],
    rating: number
}

export interface ICategory {
    id: number,
    name: string,
    searchString: string,
    imageUrl: string
}

export interface IDetailedRecipe {
    yield: string,
    nutritionEstimates: [
        {
            attribute: string,
            description: string,
            value: number;
        }
    ],
    totalTime: string,
    images: [
        { hostedMediumUrl: string }
    ],
    name: string,
    source: [
        {
            sourceDisplayName: string,
            sourceRecipeUrl: string
        }
    ],
    ingredientLines: string[],
    flavors: [
        {
            Piquant: number,
            Meaty: number,
            Bitter: number,
            Sweet: number,
            Sour: number,
            Salty: number
        }
    ],
    rating: number
}