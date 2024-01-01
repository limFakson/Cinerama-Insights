function footerContentLoaded() {
    const form = document.querySelector('.subcription_mail');
    console.log('mail section is working')

    function sendEmail() {
        // Get values from the form
        const recipientEmail = document.getElementById('email_input').value;
        

        emailjs.init("XhfGOvYII8Y42T2jb");

        console.log(recipientEmail);


        // EmailJs send function
        emailjs.send("service_x64z35o", "template_yxuiv1g", {
            to_email: recipientEmail,
            message: "Thank you for subscribing to our newletter"
        })


        .then(
            function(response) {
        
                console.log("Email sent successfully", response);
        
        
                // Add any success handling code here
        
        
            },
        
        
            function(error) {
        
        
                console.log("Email sending failed", error);
        
                // Add any error handling code here
        
        
            }
        

        );


    };



}