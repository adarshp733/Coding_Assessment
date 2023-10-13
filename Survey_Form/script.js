function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert('Please fill in all the required fields.');
        return;
    }
    // Validation for date of birth
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dob.match(dobRegex)) {
        alert('You have entered an invalid date of birth.');
        return;
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert('You have entered an invalid email address.');
        return;
    }

    // Validation for mobile number
    const mobileRegex = /^\d{10}$/;
    if (!mobile.match(mobileRegex)) {
        alert('You have entered an invalid mobile number.');
        return;
    }



    const message = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender.value}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;

    document.getElementById('popup-content').textContent = message;
    document.getElementById('popup').style.display = 'block';
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetForm();
}


