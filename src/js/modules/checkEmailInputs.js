const checkEmailInputs = (selector) => {
    const emailInputs = document.querySelectorAll(selector);

    const properEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInputs.forEach(input => {
        input.addEventListener('input', function() {
            const inputValue = input.value.trim();
            const isValidEmail = properEmail.test(inputValue);
            
            input.dataset.emailValid = isValidEmail;
            console.log(isValidEmail);

        });
    });
};

export default checkEmailInputs;
