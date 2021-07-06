// if (process.argv[2] === 'generate') {
//     console.log('generated');
// }

const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./utils/createPassword')

program.version('1.0.0').description('Simple Password Generator')

// program.command('generate').action(() => {
//     console.log(`Command Generated..`);
// }).parse()

program
    .option('-l,--length <number>', 'length of password', '8')
    .option('-s,--save', 'save password to passwords.txt')
    .option('-nn,--no-numbers', 'remove numbers')
    .option('-ns,--no-symbols', 'remove symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts()

//Get Generated Password
const generatedPassword = createPassword(length, numbers, symbols)

//copy to clipboard
clipboardy.writeSync(generatedPassword)

console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
console.log(chalk.yellow('Password copied to clipboard'));




