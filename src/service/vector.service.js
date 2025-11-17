// Import the Pinecone library
import { PINECONE_API_KEY } from './../../node_modules/@pinecone-database/pinecone/dist/pinecone';
const { Pinecone } = require('@pinecone-database/pinecone')

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

const chatBotIndex =  pc.Index('ai-chatbot');

async function createMemory({vectors,metadata}){

    await chatBotIndex.upsert([{
        id: messageId ,
        values: vectors,
        metadata
    }])
}


async function queryMemory({ queryMemory, limit = 5, metadata}){

    const data = await chatBotIndex.query({
        vector: queryVector,
        topK: limit,
        filter: metadata ? {metadata} : undefined,
        includeMetadata: true
    })

    return data.matches
    
}
