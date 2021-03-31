'use strict';

require('dotenv').config();

const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, msg, args) => {
    let start = +new Date();
    client.commands = new Discord.Collection();

    let save = {
        'commands': {},
        'activity': {},
    };
    if (fs.existsSync('./save.json')) {
        save = JSON.parse(fs.readFileSync('./save.json'));
    }

    fs.readdirSync('./bot/commands/').forEach(dir => {
        const commands = fs.readdirSync(`./bot/commands/${dir}/`).filter(file => file.endsWith('.js'));

        for (let file of commands) {
            const pull = require(`../${dir}/${file}`);

            pull.help.category = dir;
            pull.help.name = file.split('.')[0];

            let cmd = save['commands'][pull.help.name];
            cmd = cmd === undefined || cmd === null ? {'enabled': true} : cmd;
            pull.help.enabled = cmd['enabled'];

            if (pull.help.name)
                client.commands.set(pull.help.name, pull);
        }
    });

    msg.channel.send(`:v: Commands reloaded in ${+new Date() - start}ms`);
};

exports.help = {
    description: 'Reload all commands',
    usage: 'reload',
};