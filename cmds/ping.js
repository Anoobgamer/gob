import {InteractionResponseType} from "discord-interactions";

export let PING_CMD = {
        name: 'ping',
        type: 1,
        description: 'Pings you out of orbit!',
        integration_types: [0, 1],
        contexts: [0, 1, 2],
};

export function ping(res) {
        return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                        content: 'pong'
                }
        });
}