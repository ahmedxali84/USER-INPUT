function information() {
    const name = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const num = document.getElementById('number').value;
    const qualification = document.getElementById('Qualification').value;
    const preferances1 = document.getElementById('subject1').value;
    const preferances2 = document.getElementById('subject2').value;
    const preferances3 = document.getElementById('subject3').value;
    const preferances4 = document.getElementById('subject4').value;
    myFunction(name, email, num, qualification, preferances1, preferances2, preferances3, preferances4);
}

function myFunction(name, password, email, num, qualification, preferances1, preferances2, preferances3, preferances4) {
    const result = 
        '<p><strong>Name: </strong>' + name + '</p>' +
        '<p><strong>Email: </strong>' + email + '</p>' +
        '<p><strong>Password: Not To Show </strong>' +  '</p>' +
        '<p><strong>Number: </strong>' + num + '</p>' +
        '<p><strong>Qualification: </strong>' + qualification + '</p>' +
        '<p><strong>Preferences:</strong></p>' +
        '<ul>' +
            '<li>' + preferances1 + '</li>' +
            '<li>' + preferances2 + '</li>' +
            '<li>' + preferances3 + '</li>' +
            '<li>' + preferances4 + '</li>' +
        '</ul>';

    document.getElementById('result').innerHTML = result;
}