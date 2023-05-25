// chrome.contextMenus.create({
//     id: 'clip',
//     title: 'BoosteX',
//     contexts: ['selection'] 
//   });

require("dotenv").config();
async function fetchData() {
    const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "How many people in a basketball team?",
});

console.log(completion.data.choices[0].text);

 // var popup = document.createElement("div");
        //     // Customize the popup box with your desired content and styling
        //     // For example:
        //     popup.textContent = "Boosted Text: " + completion.data.choices[0].text;
        //     popup.style.position = "fixed";
        //     popup.style.top = "50%";
        //     popup.style.left = "50%";
        //     popup.style.transform = "translate(-50%, -50%)";
        //     popup.style.backgroundColor = "#ffffff";
        //     popup.style.padding = "10px";
        //     popup.style.border = "1px solid #ccc";
        //     popup.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
            
        //     // Append the popup box to the document body
        //     document.body.appendChild(popup);

}

fetchData()

//   chrome.contextMenus.onClicked.addListener(
//     ({selectionText}) => {
//         // completion();
//         console.log(selectionText)
//         fetchData(selectionText)
//     });

       


