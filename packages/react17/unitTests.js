const {exec} = require('child_process');
const path = require('path');

async function runScriptCommand() {
    const jest  = path.join(`${process.cwd()}`, 'node_modules', '.bin', 'jest'); 
    const command = `${jest} --coverage --coverageReporters="json-summary"`;
    exec(command, function(err, stdout, stderr) {
        if(err) {
            console.log(err);
            return;
        }
        console.log(`stdout:: ${stdout}`);
        console.log(`stderr:: ${stderr}`)
    })
}

async function start() {
    await runScriptCommand();
    console.log('after script command execution')
}

start();