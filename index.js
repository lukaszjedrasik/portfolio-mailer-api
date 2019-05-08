const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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');
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Welcome Page
app.get('/', (req, res) => {
    res.send('Welcome to the SendGrid Email Server | Łukasz Jędrasik')
});

// Email Page
app.post('/send', (req, res) => {
    const msg = {
        to: 'lukasz.jedrasik@icloud.com',
        from: req.body.from,
        subject: req.body.subject,
        text: req.body.text
    };
    sgMail.send(msg)
});

app.listen(port, () => console.log(`running on port ${port}`));
