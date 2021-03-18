'use strict';

require('dotenv').config();

exports.run = (client, msg, args) => {
    let cmd = client.commands.get(args.join(' '));

    if (!cmd)
        return msg.channel.send(`:x: Command not found with name \`${args.join(' ')}\` !`);
    else {
        cmd.help.enabled = false;
        return msg.channel.send(`:white_check_mark: Command '${cmd.name}' has been enabled`);
    }
};

exports.help = {
    description: 'Disable a command globally',
    usage: 'disable <command>',
};