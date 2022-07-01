import { REST } from '@discordjs/rest';
import { Routes, RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v9';
import dotenv from 'dotenv-safe';
import commands from './commands/commands';

dotenv.config();
const token: string = process.env.BOT_TOKEN as string;
const clientId: string = process.env.CLIENT_ID as string;
const guildId: string = process.env.GUILD_ID as string;

const commandsJSON: RESTPostAPIApplicationCommandsJSONBody[] = commands.map(command => command.data.toJSON());

const rest: REST = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commandsJSON })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
