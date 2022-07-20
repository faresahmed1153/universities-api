const nodeoutlook = require("nodejs-nodemailer-outlook");

async function sendEmail(dest, message) {
  try {
    nodeoutlook.sendEmail({
      auth: {
        user: process.env.email,
        pass: process.env.pass,
      },
      from: process.env.email,
      to: dest,
      subject: "Reset Password",
      html: message,
      text: "This is text version!",

      onError: (e) => {
        console.log(e);
      },
      onSuccess: (i) => console.log(i),
    });
  } catch (error) {
    console.log("catch-error");
  }
}

module.exports = { sendEmail };
