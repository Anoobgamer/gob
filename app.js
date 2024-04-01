import 'dotenv/config';
import express from 'express';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
import {
  VerifyDiscordRequest,
} from './utils/utils.js';
// Import cmds
import {ping} from "./cmds/ping.js";

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));


app.post('/interactions', async function (req, res) {
  // Interaction type and data
  const { type, data } = req.body;

  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  // Log request bodies
  console.log(req.body);

  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;

    // "leaderboard" command
    if (name === 'ping') {
      ping(res);
    }
  }
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
