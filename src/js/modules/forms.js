import validateEmail from "./validateEmail";

const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textareas = document.querySelectorAll('textarea'),
        server = 'assets/server.php';

    const message = {
        loading: '<span style="font-size: 2rem; font-weight: bold; color: yellow;">Загрузка...</span>',
        contact: '<span style="font-size: 2rem; font-weight: bold; color: green;">Спасибо, я скоро с вами свяжусь</span>',
        failure: '<span style="font-size: 2rem; font-weight: bold; color: red;">Что-то пошло не так...</span>',
        email: '<span style="font-size: 2rem; font-weight: bold; color: red;">Некорректный e-mail</span>',
        spinner: 'assets/icons/forms/spinner.gif',
        ok: 'assets/icons/forms/ok.png',
        fail: 'assets/icons/forms/fail.png'
    };

    const clearInputs = () => {
        inputs.forEach(input => input.value = '');
        textareas.forEach(textarea => textarea.value = '');
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        return await res.text();
    };

    const animateStatus = (item) => {
        item.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
            item.classList.remove('animate__fadeIn');
            item.classList.add('animate__fadeOut');

            setTimeout(() => {
                item.style.display = 'none';
            }, 800);
        }, 3000);
    };

    const showBtnImg = (parent, src, alt) => {
        const img = document.createElement('img');

        img.style.width = '30px';
        img.src = src;
        img.alt = alt;
        parent.innerHTML = '';
        animateStatus(img);
        parent.appendChild(img);
    };



    forms.forEach(form => {
        const button = form.querySelector('button'),
            statusMessage = form.querySelector('[data-status-message]'),
            initialButtonValue = button.innerHTML,
            initialStatusMessageValue = statusMessage.innerHTML;

            validateEmail(button);

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            showBtnImg(button, message.spinner, 'loading...');
            statusMessage.innerHTML = message.loading;

            postData(server, formData)
                .then(res => {
                    showBtnImg(button, message.ok, 'ok');
                    statusMessage.innerHTML = message.contact;
                    console.log(res);
                })
                .catch((error) => {
                    showBtnImg(button, message.fail, 'fail');
                    statusMessage.innerHTML = message.failure;
                    console.log(error.message);
                })
                .finally(() => {
                    setTimeout(() => {
                        clearInputs();
                        button.innerHTML = initialButtonValue;
                        statusMessage.innerHTML = initialStatusMessageValue;
                    }, 3800);
                });

        });

    });

};

export default forms;