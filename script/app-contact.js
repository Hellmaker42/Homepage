const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav-links');
const hem = document.querySelector('#hem');
const emailInput = document.querySelector('#email');
const firstNameInput = document.querySelector('#fname');
const lastNameInput = document.querySelector('#lname');
const emailValidationText = document.querySelector('.validation');
const skickaKnapp = document.querySelector('#submitButton');
const validationSymbolEmail = document.querySelector('.required-email');
const validationSymbolFirstName = document.querySelector('.required-fname');
const validationSymbolLastName = document.querySelector('.required-lname');
const site1 = document.querySelector('#site1');
const site2 = document.querySelector('#site2');
const site3 = document.querySelector('#site3');

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<footer>Copyright &copy; 2022 Mike Fredriksson <img src="img/facebook.svg" alt="Facebook logo"><img src="img/github.svg" alt="Github logo"><img src="img/youtube.svg" alt="Youtube logo"><img src="img/linkedin.svg" alt="Linked in logo"><img src="img/instagram.svg" alt="Instagram logo"></footer>'  
    }
}

customElements.define('my-footer', MyFooter);

/* class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<nav class="navbar"><div class="menu-container flex-nav"><div class="nav-header"><h2>Mike <span>Fredriksson</span> Inc.</h2><button class="nav-toggle"id="navToggle"><i class="fas fa-bars"></i></button></div><nav class="nav-links" id="nav-links"><ul><li class="nav-link active-link"><a href="index.html">Hem</a></li><li class="nav-link"><a href="portfolio.html">Portfilio</a></li><li class="nav-link"><a href="about.html">Om Mig</a></li><li class="nav-link"><a href="kontakt.html"><span>Kontakt</span></a></li></ul></nav></div></nav>'  
    }
}

customElements.define('my-header', MyHeader); */

navToggle.addEventListener('click', ()=> {
    nav.classList.toggle('nav-open')
});

emailInput.addEventListener('keyup', ValidateEmail);
firstNameInput.addEventListener('focusout', ValidateFirstName);
lastNameInput.addEventListener('focusout', ValidateLastName);
skickaKnapp.addEventListener('click', ()=>{
    ValidateEmail();
    ValidateFirstName();
    ValidateLastName();
});

function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)) {
        validationSymbolEmail.classList.remove('false');
        validationSymbolEmail.classList.add('true');
        validationSymbolEmail.innerHTML = '&nbsp;V&nbsp;';
        return (true);
    }
    else {
        validationSymbolEmail.classList.remove('true');
        validationSymbolEmail.classList.add('false');
        validationSymbolEmail.innerHTML = '&nbsp;X&nbsp;';
        return (false);
    }
}

function ValidateFirstName() {
    if (firstNameInput.value === '') {
        validationSymbolFirstName.classList.remove('true');
        validationSymbolFirstName.classList.add('false');
        validationSymbolFirstName.innerHTML = '&nbsp;X&nbsp;';
    }
    else {
        validationSymbolFirstName.classList.remove('false');
        validationSymbolFirstName.classList.add('true');
        validationSymbolFirstName.innerHTML = '&nbsp;V&nbsp;';  
    }
}

function ValidateLastName() {
    if (lastNameInput.value === '') {
        validationSymbolLastName.classList.remove('true');
        validationSymbolLastName.classList.add('false');
        validationSymbolLastName.innerHTML = '&nbsp;X&nbsp;';
    }
    else {
        validationSymbolLastName.classList.remove('false');
        validationSymbolLastName.classList.add('true');
        validationSymbolLastName.innerHTML = '&nbsp;V&nbsp;';
    }
}


/* ___________________________________________________________________Script för bildspel____________________________________________________________ */

