# Discord-bot-template

A simple discord.js bot template.

## Adding a command

Create a new folder under `commands/` to create a new category for your commands if needed. Commands rights are managed under `bot/events/message.js`.

Add a file in the corresponding *category* folder of your choice, named following the command you want to add.

The base content is:

```js
'use strict';

// for the configuration, under process.env.VARIABLE_IN_DOTENV_FILE
require('dotenv').config();

exports.run = (client, msg, args) => {
    // code here

    msg.channel.send('hello world');
};

exports.help = {
    description: 'command description',
    usage: 'command <mandatory argument> [facultative argument]',
};
```