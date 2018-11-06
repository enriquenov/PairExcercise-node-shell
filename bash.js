process.stdout.write('prompt > ');

const done = (output) =>{
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();
  let array = cmd.split(" ");

  if(cmd === 'pwd'){
    require('./pwd')(done);
  } else if (cmd === 'ls'){
    require('./ls')(done);
  } else if (array[0] === "cat") {
    require('./cat')(done, array[1]);
  } else if(array[0] === 'curl'){
    require('./curl')(array[1]);
  }
});

