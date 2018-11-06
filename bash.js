process.stdout.write('prompt > ');

const done = (output) =>{
  process.stdout.write(output)
  process.stdout.write('\n\nprompt > ')
}

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();
  let array = cmd.split(" ");

  if(cmd === 'pwd'){
    require('./pwd')();
    process.stdout.write('\nprompt > ');
  } else if (cmd === 'ls'){
    require('./ls')(done);
  } else if (array[0] === "cat") {
    require('./cat')(array[1]);
  } else if(array[0] === 'curl'){
    require('./curl')(array[1]);
  }
});

