const fs = require('fs');
const ascii = require('ascii-table');
const colors = require('colors')
let table = new ascii(`Events`);
table.setHeading('Event Name', 'Load Status');
module.exports = (client) => {
    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
          
        } else {
            client.on(event.name, (...args) => event.execute(...args, client))
      
          
        }
    
    if(event.name) {
      table.addRow(event.name, '🔵 Working')
      } else {
        table.addRow(file, '🔴 Not Working');

        //continue;
    }
    }
      console.log(table.toString().magenta)
    
}