import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'next-sanity';

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE || "medium",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false, // set to `false` to bypass the edge cache for authenticated requests
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
};

console.log('Config:', config); // Log the configuration to check if environment variables are being read

const client = createClient(config);

export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { _id, name, email, comment } = req.body; // Note that we are not using JSON.parse here

    try {
        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id
            },
            name,
            email,
            comment
        });
    } catch (err) {
        return res.status(500).json({ message: "Couldn't submit comment", err });
    }

    res.status(200).json({ message: 'Submitted' });
}
