function footerContentLoaded() {
    const form = document.querySelector('.subcription_mail');
    console.log('mail section is working')

    form.addEventListener('submit', (e)=>{
        var inputed_email = document.getElementById('email_input').value;
        e.preventDefault()

        console.log(inputed_email);
        inputed_email = " ";
    });

}