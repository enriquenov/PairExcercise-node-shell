const request = require('request');
const done = require('./bash')

module.exports = (siteName)=>{
  request(siteName, function(error, response, body){
    if(error) throw error;
    if(response) console.log(response);
    process.stdout.write(body);
    process.stdout.write('\n\nprompt > ');
  })
}
