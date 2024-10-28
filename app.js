#!/usr/bin/env node

const readline = require('readline');

const args = process.argv.slice(2);

if(args[0] === 'start'){
  console.log('Starting Interactive Mode - CliGPT Assistance');
  startInteractiveMode();
}else if(args[0] === '-m' && args[1]){
  console.log(`CliGPT > '${args[1]}'`);
}else{
  console.log(`Usage -> 'cligpt start' or 'cligpt -m "message here"'`);
}

function startInteractiveMode(){
  const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout,
    prompt: 'You > '
  });

  rl.prompt();

  rl.on('line', (line) => {
    if (line.trim().toLowerCase() === 'exit') {
      rl.close();
    } else {
      console.log(`CliGPT > ${line.trim()}`);
      rl.prompt();
    }
  }).on('close', () => { 
    console.log('Ending interactive mode. See yah!');
    process.exit(0);
  });
}