const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "muditworks99@gmail.com",
    pass: "hphg cine bhfj cjex",
  },
});

function process_contact_info(data) {
  subject = data.subject;
  message = `Received a New Message from Portfolio\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
  send_mail({
    from: "muditworks99@gmail.com",
    to: "muditworks99@gmail.com",
    subject: subject,
    text: message,
  });

  send_mail({
    from: "muditworks99@gmail.com",
    to: data.email,
    subject: `Re: ${subject}`,
    text: `Hello ${data.name}, \nThank you for getting in touch. I have received your message and will get back to you shortly.\n\nRegards,\nMudit Mehta`,
  });
}

function send_mail(mailOptions) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = process_contact_info;
