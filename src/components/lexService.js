import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2";

const lexClient = new LexRuntimeV2Client({
  region: import.meta.env.VITE_AWS_REGION, 
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});


const botId = "MTPOEUFFCZ"; 
const botAliasId = "TSTALIASID"; 
const localeId = "en_US"; 
const sessionId = "user-session"; 

export const sendMessageToLex = async (message) => {
  const params = {
    botId,
    botAliasId,
    localeId,
    sessionId,
    text: message,
  };

  try {
    const command = new RecognizeTextCommand(params);
    const response = await lexClient.send(command);
    return response.messages.map(msg => msg.content).join("\n");
  } catch (error) {
    console.error("Lex Error:", error);
    return "Sorry, there was an issue communicating with the chatbot.";
  }
};