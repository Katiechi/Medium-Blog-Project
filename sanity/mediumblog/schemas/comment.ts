import { SchemaTypeDefinition } from "sanity"

const comment:SchemaTypeDefinition =  {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: "Comments won't show on the site without approval."
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
        },
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: [{ type: 'post' }],
        },
    ],
}

export default comment
