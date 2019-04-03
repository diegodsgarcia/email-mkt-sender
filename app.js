const inquirer   = require('inquirer');
const colors     = require('colors');
const sendEmail  = require('./send-email');
const readHTML   = require('./read-html');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail?',
    },
    {
      type: 'password',
      name: 'password',
      message: 'What is your password?',
    },
    {
      type: 'text',
      name: 'html',
      message: 'Enter directory or name file of html (optional):'
    }
  ])
  .then(answers => {
    sendDatas(answers.email, answers.password, answers.html);
  });

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
