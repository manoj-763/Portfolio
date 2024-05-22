// ------------------------------------Scroll---------------

ScrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    Delay: 200
});
ScrollReveal().reveal('.header-text, .right-image, .sub-tittle', { origin: "top" });
ScrollReveal().reveal('.right-image', { origin: "bottom" });

// ------------------------About us------------------------

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(event,tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

//-------------------Side menu for small device----------------

var sidemenu = document.getElementById("sidemenu");
    function openmenu() {
        sidemenu.style.right = "0";
    }
    function closemenu() {
        sidemenu.style.right = "-200px";
    }


//-------------------------- For Form -----------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwTYdz1sLyx-hdXieRQvXasJIGqtARrG3Wu3ZbbNUNPmJ5M_z-dSigd3UmP9kZF53Bu/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully....."
                    setTimeout(function () {
                        msg.innerHTML = ""
                    }, 4000)
                    form.reset
                })
                .catch(error => console.error('Error!', error.message))
        })