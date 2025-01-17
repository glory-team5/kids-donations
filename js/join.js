function clickJoin() {
    var Email = document.getElementById('email').value;
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('name2').value;
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var messageHeader = document.getElementById('messageHeader');
    var messageHeader2 = document.getElementById('messageHeader2');
    var content = document.getElementById('content');

    if (Email == "" || firstName == "" || lastName == "" || userName == "" || password == "") {
        messageHeader2.textContent = `Attention`;
        content.textContent = 'Please fill in the important fields';
    } else {
        messageHeader2.textContent = ` `;

        messageHeader.textContent = `Welcome ${firstName} ${lastName}`;
        content.textContent = `We have sent you an e-mail to (${Email}) to activate the site, please open the link attached to the email to complete your joining our family.`;
        var close = document.getElementById('close');
        close.addEventListener('click', clickClose);
        close = false;
        function clickClose(event) {
            if (event.target.id == 'close') {
                window.open("../index.html", "_self");
            }
        }
    }
}