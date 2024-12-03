this.addEventListener("DOMContentLoaded", preloadImages, true);
 
var loadedImages = 0;
var imageArray = new Array("../img/1bg.jpg", "../img/2bg.jpg", "../img/3bg.jpg", "../img/4bg.jpg");
 
function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
         
        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}
 
function trackProgress() {
    loadedImages++;
     
    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}
 
function imagesLoaded() {
    const navToggle = document.querySelector('#navToggle');
    const nav = document.querySelector('#nav-links');
    const pause = document.querySelector('.play');
    const background = document.querySelector('.home-container');

    // preloadImage1('../img/1bg.jpg');
    // preloadImage2('../img/2bg.jpg');
    // preloadImage3('../img/3bg.jpg');
    // preloadImage4('../img/4bg.jpg');

    class MyFooter extends HTMLElement {
        connectedCallback() {
            this.innerHTML = '<footer>Copyright &copy; 2022 Mike Fredriksson <img src="img/facebook.svg" alt="Facebook logo"><img src="img/github.svg" alt="Github logo"><img src="img/youtube.svg" alt="Youtube logo"><img src="img/linkedin.svg" alt="Linked in logo"><img src="img/instagram.svg" alt="Instagram logo"></footer>'  
        }
    }

    customElements.define('my-footer', MyFooter);


    navToggle.addEventListener('click', ()=> {
        nav.classList.toggle('nav-open')
    });

    pause.addEventListener('click', ()=>{
        background.classList.toggle('pause');

        if(background.classList.contains('pause')) {
            pause.innerHTML = '<img src="img/play.svg" alt="Play"></img>';
        }
        else if (!background.classList.contains('pause')){
            pause.innerHTML = '<img src="img/pause.svg" alt="Pause"></img>';
        }
    })

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
}



















/* ___________________________________________________________________Script för bildspel____________________________________________________________ */





