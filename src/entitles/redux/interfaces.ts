export interface product {
    image: string;
    images: string[];
    id: string;
    name: string;
    price: number;
    subtitle: string;
}
export interface category {
    products: product[] | null;
    title:string
}
export interface productsInitialStateProps {
    categories: category[];
    loading:boolean;
    error:any;
}