export interface product {
    image: string;
    images: string[] | null;
    id: number;
    name: string;
    price: number;
    subtitle: string | null;
}
export interface category {
    id: string;
    products: product[] | null;
    title:string
}
export interface productsInitialStateProps {
    categories: category[];
    loading:boolean;
    error:any;
}
