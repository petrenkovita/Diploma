export interface IRecipe {
    imageUrlsBySize: Map<string, string>[],
    sourceDisplayName: string,
    ingredients: string[],
    id: string,
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