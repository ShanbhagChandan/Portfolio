export class Experience{
    Experience: Category[];
}

export class Category{
    CategoryId: number;
    CategoryName: string;
    SubCategory: SubCategory[];
}

export class SubCategory{
    SubCategoryId: number;
    SubCategoryName: string;
    Experience: number;
    Profeciency: number;
}