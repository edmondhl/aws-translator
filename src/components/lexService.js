import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2";

const lexClient = new LexRuntimeV2Client({
    region: VITE_AWS_REGION,
    credentials: {
      accessKeyId: VITE_AWS_ACCESS_KEY,
      secretAccessKey: VITE_AWS_SECRET_ACCESS_KEY,
    },
  });

const botId = ""; //  Lex bot ID
const botAliasId = ""; //  bot alias ID
const localeId = "en_US"; //  bot's settings
const sessionId = "user-session"; // Unique identifier for conversation session

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