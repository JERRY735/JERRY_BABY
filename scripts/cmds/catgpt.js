const axios = require('axios');module.exports = {  config: {    name: 'catgpt',    version: '1.0',    author: 'Original Idea from: Minn',    role: 0,    category: 'Ai-Chat',    shortDescription: { en: `CatGPT is a GPT resembles a \n| cat, have fun communicating with a cute \n| AI!` },    longDescription: { en: `CatGPT is a GPT resembles a cat, have fun\n| communicating with a cute AI!` },    guide: { en: '{pn}catgpt_by_minn [query]' },  },  onStart: async function ({ api, event }) {    try {      const query = args.join(" ");      if (query) {        const processingMessage = await api.sendMessage(`Asking CatGPT. Please wait a moment...`, event.threadID);        const response = await axios.get(`https://lianeapi.onrender.com/@nealianacagara/api/catgpt_by_minn?query=${encodeURIComponent(query)}`);                if (response.data && response.data.message) {          await api.sendMessage({ body: response.data.message.trim() }, event.threadID, event.messageID);          console.log(`Sent CatGPT's response to the user`);        } else {          throw new Error(`Invalid or missing response from CatGPT API`);        }        await api.unsendMessage(processingMessage.messageID);      }    } catch (error) {      console.error(`❌ | Failed to get CatGPT's response: ${error.message}`);      api.sendMessage(`❌ | An error occured. You can try typing your query again or resending it. There might be an issue with the server that's causing the problem, and it might resolve on retrying.`, event.threadID);    }  },};
