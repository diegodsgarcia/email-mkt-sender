const nodemailer = require('nodemailer');

module.exports = (email, password, html) => {
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: email,
      pass: password
    }
  });

  const mailOptions = {
    from: email,
    to: email,
    subject: 'E-Mail Marketing HTML',
    html: html
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
