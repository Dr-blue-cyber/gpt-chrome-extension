import { config } from "dotenv" 
config() 
console.log(process.env.API_KEY)

import  OpenAIApi  from "openai"
import  Configuration  from "openai"

import readline from "readline"

const openai = new OpenAIApi( new Configuration({
    apiKey: process.env.API_KEY
}))

userInterface.prompt() 
userInterface.on("line", async input =>{
    const  res = await openai
    .completions.create({
        model: "gpt-3.5-turbo",
        message: [{role:"user", content: input}],
    })
    
    console.log(res.data.choices[0].message.content)
    userInterface.prompt()
     
})

