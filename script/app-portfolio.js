const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav-links');
const site1 = document.querySelector('#site1');
const site2 = document.querySelector('#site2');
const site3 = document.querySelector('#site3');
const site4 = document.querySelector('#site4');


/* _______________________________________________Kod för att länka in Footer ______ */
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<footer>Copyright &copy; 2022 Mike Fredriksson <img src="img/facebook.svg" alt="Facebook logo"><img src="img/github.svg" alt="Github logo"><img src="img/youtube.svg" alt="Youtube logo"><img src="img/linkedin.svg" alt="Linked in logo"><img src="img/instagram.svg" alt="Instagram logo"></footer>'  
    }
}
customElements.define('my-footer', MyFooter);
/* _________________________________________________________________________________ */


navToggle.addEventListener('click', ()=> {
    nav.classList.toggle('nav-open')
});

site1.addEventListener('click', ()=>{
    window.open('drums/index.html', '_blank').focus();
});

site2.addEventListener('click', ()=>{
    window.open('https://lexman.fredriksson.live', '_blank').focus();
});

site3.addEventListener('click', ()=>{
    window.open('https://www.fredriksson.live/index.html', '_blank').focus();
});

site4.addEventListener('click', ()=>{
    window.open('https://www.fredriksson.live/webshop', '_blank').focus();
});