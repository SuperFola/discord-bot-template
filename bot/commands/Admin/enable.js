'use strict';

require('dotenv').config();

exports.run = (client, msg, args) => {
    let cmd = client.commands.get(args.join(' '));

    if (!cmd)
        return msg.channel.send(`:x: Command not found with name \`${args.join(' ')}\` !`);
    else {
        cmd.help.enabled = true;
        return msg.channel.send(`:white_check_mark: Command '${cmd.name}' has been enabled`);
    }
};

exports.help = {
    description: 'Enable a command globally',
    usage: 'enable <command>',
};