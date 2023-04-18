const randomAngle = Math.floor(Math.random() * 360);

window.addEventListener('load', function() {
  var loading = document.getElementById('loading');
  loading.style.display = 'none';
});



const apiKey = "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";
const url = "https://api.sendgrid.com/v3/mail/send";

const to = "mike.contact@skiff.com";
const from = "mike.dev@skiff.com";
const subject = "Test email";
const message = "Hello world!";

const email = {
  personalizations: [
    {
      to: [
        {
          email: to,
        },
      ],
      subject: subject,
    },
  ],
  from: {
    email: from,
  },
  content: [
    {
      type: "text/plain",
      value: message,
    },
  ],
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify(email),
})
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);

    if (response.status >= 400) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
  })
  .catch((error) => {
    console.error(error);
  });
