
import '../../styles/globals.css';
import PortableText from "react-portable-text"

import TopHeader from '../../components/TopHeader';
import { client, urlFor } from "../../sanity";
import {useForm, SubmitHandler} from "react-hook-form";

interface IFormInput {
    _id:string;
    name:string;
    email:string;
    comment:string;
}

// Define the type for a post object
type PostType = {
    _id: string;
    slug: {
        current: string;
    };
};

const onSubmit: SubmitHandler<IFormInput> = async(data) =>{
    
}

function PostPage({ post }) {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInput>();
    
    return (
        <main>
            <TopHeader />
        <img className="w-full h-40 object-cover" src={urlFor(post.mainImage)} alt="" />
        <article className='max-w-3xl mx-auto p-5'>
            <h1 className='text-3xl mx-auto p-5'>
                {post.title}
            </h1>
            <div   className='flex items-center space-x-2'>
            <img className="h-10 w-10 rounded-full" src={urlFor(post.author.image)} alt="" />
            <p className='font-extralight text-sm'>Blog Post By <span className='text-green-600'>{post.author.name} </span> - Published at {" "} {new Date (post._createdAt).toLocaleString()}</p>
            </div>
            <div className='mt-10'>
                <PortableText 
                className=''
                dataset={process.env.NEXT_PUBLIC_SANITY_DATABASE || "medium"}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={post.body}
                serializers={
                    {
                        h1: (props:any)=>(
                            <h1 className='text-2xl font-bold my-5' {...props} />
                        ),
                        h2: (props:any)=>(
                            <h1 className='text-xl font-bold my-5' {...props} />
                        ),
                       li:({children}:any)=>(
                        <li className='ml-4 list-disc'>{children}</li>
                       ),
                       link:({href,children}: any)=>(
                        <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                       ),
                    }
                }
                />
            </div>
        </article>
        <hr className='max-w-lg my-5 mx-auto border border-yellow-500'/>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 max-w-2xl mx-auto  mb-10'>
    <h3 className='text-sm text-yellow-500'>Enjoyed the article?</h3>
    <h4 className='text-3xl font-bold'>Leave a comment below</h4>
    <hr className='py-3 mt-2'/>

    <input
        {...register("_id")}
        type="hidden"
        name="id"
        value={post._id}
    />

    <label className='block mb-5'>
        <span className='text-gray-700'>Name</span>
        <input className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 ' placeholder='Name' type="text"
               {...register("name", {required:true})}
        />
    </label>
    <label className='block mb-5'>
        <span className='text-gray-700'>Email</span>
        <input className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 ' placeholder='Email' type="text"
               {...register("email", {required:true})}
        />
    </label>
    
    <label className='block mb-5'>
        <span className='text-gray-700'>Comment</span>
        <textarea className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 ' placeholder='Comment' rows={8}
                  {...register("comment", {required:true})}
        />
    </label>


    <div className='flex flex-col p-5'>
        {
            errors.name && (
                <span className='text-red-500'>The name is required</span>
            )
        }
        {
            errors.email && (
                <span className='text-red-500'>The email is required</span>
            )
        }
        {
            errors.comment && (
                <span className='text-red-500'>The comment is required</span>
            )
        }
    </div>

    <input type="submit" 
    className='shadow bg-yellow-500 hover:bg-yellow-300 focus:shadow-outline
    focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer
    
    '

    />
</form>

        </main>
    );
}

export default PostPage;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;

    const posts: PostType[] = await client.fetch(query);

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        author->{
            name,
            image
        },
        description,
        mainImage,
        title,
        slug,
        body
    }`;
    const post = await client.fetch(query, { slug });

    return {
        props: {
            post,
        },
        revalidate: 60
    };
};
