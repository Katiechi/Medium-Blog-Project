export interface Post {
    id: string;
    _createdAt: string;
    author:{
        name: string;
        image:string;
    };
    description:string;
    mainImage:{
        asset:{
            url:string;
        };
    };
    slug:{
        current:string
    };
    body:[object]
}