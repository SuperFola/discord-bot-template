'use strict';

const fs = require('fs');
const Discord = require('discord.js');

exports.loadCommands = function(client) {
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
            const pull = require(`./commands/${dir}/${file}`);

            pull.help.category = dir;
            pull.help.name = file.split('.')[0];

            let cmd = save['commands'][pull.help.name];
            cmd = cmd === undefined || cmd === null ? {'enabled': true} : cmd;
            pull.help.enabled = cmd['enabled'];

            if (pull.help.name)
                client.commands.set(pull.help.name, pull);
        }
    });
}