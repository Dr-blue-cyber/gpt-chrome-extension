import { config } from "dotenv";
config();

import OpenAIApi from "openai";
import Configuration from "openai";

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

const questionInput = document.getElementById("question");
const askButton = document.getElementById("ask");
const answerDiv = document.getElementById("answer");

askButton.addEventListener("click", async () => {
    const input = questionInput.value;
    
    if (input) {
        const res = await openai.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: input }],
        });

        const answer = res.data.choices[0].message.content;
        answerDiv.textContent = answer;
    }
});

questionInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        askButton.click();
    }
});
