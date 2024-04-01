import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { InstallGlobalCommands } from './utils.js';

import {PING_CMD} from "../cmds/ping.js";

const ALL_COMMANDS = [
    PING_CMD
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
