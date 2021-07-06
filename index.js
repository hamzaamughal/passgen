// if (process.argv[2] === 'generate') {
//     console.log('generated');
// }

const program = require('commander')

program.version('1.0.0').description('Simple Password Generator')

// program.command('generate').action(() => {
//     console.log(`Command Generated..`);
// }).parse()

program.option('-l,--length', 'length of password')