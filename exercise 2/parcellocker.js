const number = document.getElementById('number');
const code = document.getElementById('code');
const errorPhone = document.getElementById('error__phone');
const errorCode = document.getElementById('error__code');
const btn = document.getElementById('btn__pickup');
const btnDone = document.getElementById('btn__done');
const btnRepeat = document.getElementById('btn__repeat');
const info = document.getElementById('second__ad');
const form = document.getElementById('form');
const numberForm = document.getElementById('number__form');
const codeForm = document.getElementById('code__form');



    btn.addEventListener("click", (e) => {
        if (info.style.display === "none") {
            info.style.display = 'block';
            form.style.display = 'none';

        } else {
            info.style.display = "block";
            form.style.display = 'none';
        }
    });


    btnRepeat.addEventListener("click", (e) => {
        if (form.style.display === "none") {
            form.style.display = 'block';
            form.reset();
            info.style.display = 'none';
            btn.disabled = true;

        } else {
            form.style.display = "none";
            form.reset();
        }
    });


    btnDone.addEventListener("click", (e) => {
        if (form.style.display === "none") {
            form.style.display = 'block';
            numberForm.style.display = 'none';
            codeForm.style.display = 'none';
            info.style.display = 'none';
            btn.disabled = false;

        } else {
            info.style.display = "none";
        }
    });


    form.addEventListener("keyup",(e) => {
        let errPhone = [];
        let errCode = [];

        if (number.value.length < 9 || number.value === '' || number.value === null || isNaN(number.value)) {
            errPhone.push('Proszę wpisać numer telefonu');
            btn.disabled = true;

        } else {
            errPhone.push('');
            btn.disabled = false;
        }
        if (errPhone.length > 0) {
            e.preventDefault();
            errorPhone.innerText = errPhone.join('');
        }


        if (code.value.length < 4 || code.value === '' || code.value === null || isNaN(code.value)) {
            errCode.push('Proszę wpisać kod odbioru');
            btn.disabled = true;

        } else {
            errCode.push('');
            btn.disabled = false;
        }

        if (errCode.length > 0) {
            e.preventDefault();
            errorCode.innerText = errCode.join('');
        }

    });
