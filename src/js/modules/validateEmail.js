const validateEmail = (button) => {
    const emailInput = document.querySelector('[type="email"]');
    let isEmailCorrect = false;

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validate = () => {
        const emailMessage = document.getElementById('emailMessage'),
            email = emailInput.value;
        emailMessage.textContent = '';

        if (validateEmail(email)) {
            emailMessage.textContent = email + ' корректный адрес.';
            emailMessage.style.color = 'green';
            isEmailCorrect = true;
            button.removeAttribute('disabled');
        } else {
            emailMessage.textContent = email + ' некорректный адрес.';
            emailMessage.style.color = 'red';
            isEmailCorrect = false;
            button.setAttribute('disabled', 'true');
        }
        return isEmailCorrect;
    };

    emailInput.addEventListener('input', validate);
};

export default validateEmail; 