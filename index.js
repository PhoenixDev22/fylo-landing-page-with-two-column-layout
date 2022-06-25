const scrollUpBtn = document.getElementById(`scroll-up`);
const heroForm  = document.getElementById("hero__form")
const signForm  = document.getElementById("sign__form")
let isValid = false;

const validRegExp = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;


window.onscroll = () => window.scrollY >= 600? scrollUpBtn.classList.add(`visible-btn`): scrollUpBtn.classList.remove(`visible-btn`);

scrollUpBtn.addEventListener(`click`, () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


heroForm.addEventListener(`submit`, event => checkEmailValidation(event))
signForm.addEventListener(`submit`, event => checkEmailValidation(event))

function checkEmailValidation (e){
    e.preventDefault();
    // Get the email  field of the current form
    // let currentEmail = e.currentTarget.children[0].children[1];
    let currentEmail = document.querySelector(`#${e.currentTarget.id}  input` )
    console.log(document.querySelector(`#${e.currentTarget.id}  input` ))
    // Get the current value of the  email field of the current form 
    let currentEmailValue = e.currentTarget.email.value;
    // Check validation 
    isValid = validRegExp.test(currentEmailValue)
    
    // let currentValidationMsg = e.currentTarget.children[0].children[2];
    let currentValidationMsg = document.querySelector(`#${e.currentTarget.id} [role=alert]`);

    // console.log(document.querySelector(`#${e.currentTarget.id} [role=alert]`))

    if(!isValid){
        currentValidationMsg.removeAttribute("hidden")
        currentValidationMsg.textContent = `Please check your email`;
        currentValidationMsg.classList.remove(`valid__msg`);
        currentValidationMsg.classList.add(`validation__msg`);
        currentEmail.classList.add(`red-border`)
    }else{
        currentValidationMsg.removeAttribute("hidden")
        currentValidationMsg.textContent = `Your email is successfully submited`;
        currentValidationMsg.classList.remove(`validation__msg`);
        currentValidationMsg.classList.add(`valid__msg`);
        currentEmail.classList.add(`green-border`)
        e.currentTarget.submit()
    }
    setTimeout(() => {
        currentValidationMsg.setAttribute(`hidden`, `true`);
        currentEmail.classList.remove(`red-border`);
        currentEmail.classList.remove(`green-border`)
    }, 2500)
}


