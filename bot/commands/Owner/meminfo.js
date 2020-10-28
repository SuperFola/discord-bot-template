'use strict';

const process = require('process');

exports.run = (client, msg, args) => {
    const used = process.memoryUsage();
    for (let key in used) {
        msg.channel.send(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
};

exports.help = {
    description: 'List resources used by the bot',
    usage: 'meminfo',
};