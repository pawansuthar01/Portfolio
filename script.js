// contect section js

const form = document.querySelector("form");

function sendEmail() {
  let fullName = document.getElementById("Name").value;
  let gmailUser = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let subect = document.getElementById("subject").value;
  const messagebody =
    "name = " +
    fullName +
    "<br/> email = " +
    gmailUser +
    "<br/> number = " +
    number +
    "<br/> massage = " +
    subect;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "pawansuthardew@gmail.com",
    Password: "7828F05ED2B467649C3E428F5BE30C1DD9E6",
    To: "pawansuthardew@gmail.com",
    From: "pawansuthardew@gmail.com",
    Subject: "This is the subject",
    Body: messagebody,
  }).then((message) => {
    if (message == "OK") {
      swal("succesful!", "You clicked the button!", "success");
    } else {
      swal(message, "You clicked the button!", "error");
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
