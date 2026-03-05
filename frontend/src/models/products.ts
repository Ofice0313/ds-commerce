import type { CategoryDTO } from "./category";

export type ProductDTO = {
    id: number;
    name: string;
    price: number;
    description: string;
    imgUrl: string;
    categories: CategoryDTO[];
}

