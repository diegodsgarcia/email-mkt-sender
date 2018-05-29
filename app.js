const program    = require('commander');
const sendEmail  = require('./send-email');
const readHTML   = require('./read-html');
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
  .version('1.0.0')
  .description('E-mail marketing sender');

program
  .command('send')
  .alias('s')
  .description('Send e-mail marketing with custom directory of html')
  .action(html => {
    prompt(questions).then(answers =>
      sendDatas(answers.email, answers.password, readHTML(answers.html)
    ));
  });

program.parse(process.argv);

async function sendDatas(email, password, html) {
  const datas = await html;
  sendEmail(email, password, datas);
}



































