process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();
  let array = cmd.split(" ");

  if(cmd === 'pwd'){
    require('./pwd')();
    process.stdout.write('\nprompt > ');
  } else if (cmd === 'ls'){
    require('./ls')();
  } else if (array[0] === "cat") {
    require('./cat')(array[1]);
  }
});
