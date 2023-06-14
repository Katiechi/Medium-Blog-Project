export interface Author {
    _id: string;
    _createdAt: string;
    author:{
        name: string;
        image:string;
    };
    image:{
        asset:string;
    }
    name:string;
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



export interface Post {
    _id: string;
    _createdAt: string;
    author:{
        name: string;
        image:string;
        _ref:string;
    };
    comments:Comment[];
    description:string;
    title:string;
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

export interface Comment {
   approved:boolean;
   comment:string;
   email:string;
   name:string;
   post:{
    _ref:string;
    _type:string;

   };
   _createdAt:string;
   _id:string;
   _rev:string;
   _type:string;
   _updatedAt:string;
}

