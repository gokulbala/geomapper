// AWS contact form customized
// contact form js
function submitToAPI(e) {
  e.preventDefault();
  var URL = "https://f5pdfvdsv.execute-api.us-east-1.amazonaws.com/sfvsdfv/contact-us";
  var Namere = /[A-Za-z]{1}[A-Za-z]/;
  if (!Namere.test($("#name-input").val())) {
    alert ("Name cannot be less than 2 char");
    return;
  }
  var mobilere = /[0-9]{10}/;
  if (!mobilere.test($("#phone-input").val())) {
    alert ("Please enter valid mobile number");
    return;
  }
  if ($("#email-input").val()=="") {
    alert ("Please enter your email id");
    return;
  }
  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test($("#email-input").val())) {
    alert ("Please enter valid email address");
    return;
  }
  var name = $("#name-input").val();
  var phone = $("#phone-input").val();
  var email = $("#email-input").val();
  var desc = $("#description-input").val();
  var data = {
    name : name,
    phone : phone,
    email : email,
    desc : desc
  };
  $.ajax({
    type: "POST",
    url : "https://f5pdfvdsv.execute-api.us-east-1.amazonaws.com/sfvsdfv/contact-us",
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
    success: function () {
      alert("Contact form has been Successfully submitted!");
      document.getElementById("contact-form").reset();
      location.reload();
    },
    error: function () {
      alert("UnSuccessfull, Sorry! Looks the contact page is broken, please ty later.");
    }
  });
}