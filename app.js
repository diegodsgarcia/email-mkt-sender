#!/usr/bin/env node

const program    = require('commander');
const sendEmail  = require('./send-email');
const readHTML   = require('./read-html');
const colors     = require('colors');
const { prompt } = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'Enter e-mail ...'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter password ...'
  },
  {
    type: 'text',
    name: 'html',
    message: 'Enter directory or name file of html (optional) ...'
  }
];

program
  .version('1.0.5')
  .description('E-mail marketing sender');

program
  .command('send')
  .alias('s')
  .description('Send e-mail marketing with custom directory of html')
  .action(html => {
    prompt(questions).then(answers => {
      sendDatas(answers.email, answers.password, answers.html);
    });
  });

program.parse(process.argv);

async function sendDatas(email, password, html) {
  try {
    const datas = await readHTML(html);
    const sender = await sendEmail(email, password, datas);
    console.log(`E-mail sent :D`.green);
  } catch(error) {
    console.log('Ops! There was a problem! :('.red);
    throw error;
  }
}



































