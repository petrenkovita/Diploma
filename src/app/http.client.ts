export const baseUrl: string = "http://api.yummly.com/v1/api/recipes?_app_id=726f2fd1&_app_key=f942650ffcb77bab53f48d4cfb628a1b";

export function formatUrl(params: string) {
    return `http://api.yummly.com/v1/api/${params}?_app_id=726f2fd1&_app_key=f942650ffcb77bab53f48d4cfb628a1b`;
}