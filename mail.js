function mail() {
    var recipientEmail = "k4suvathik@gmail.com";//enter your email/gmail here
    var subject = "Inquiry from your Website";
    var body = "Hello Sir/Maam,";


    var mailtoLink = "mailto:" + encodeURIComponent(recipientEmail) +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
}