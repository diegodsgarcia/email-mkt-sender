const nodemailer = require('nodemailer');

module.exports = (email, password, html) => {
  return new Promise((resolve, reject) => {
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
        if(error) {
          reject(error)
        }
        resolve(info);
    });

  });
}
