process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();

  if(cmd === 'pwd'){
    require('./pwd')();
    process.stdout.write('\nprompt > ')
  } else if(cmd === 'ls'){
    require('./ls')();
    process.stdout.write('\nprompt')
  }
})
