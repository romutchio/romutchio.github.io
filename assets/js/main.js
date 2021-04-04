window.onload = function() {
	"use strict";
    
    document.querySelector('.preloader').classList.add('hide-preloader');

    setTimeout(function(){
        document.querySelectorAll("#intro .animation-container").forEach(function(e) {
            setTimeout(function(){
                e.classList.add('run-animation');
            }, e.dataset.animationDelay);
        });

    }, 700 );
    
    var subline = document.getElementsByClassName('subline')[0];
    var age = calculateAge(2000, 2, 10);
    var age = `🧨 ${age} ${plural(age)}`
    subline.insertAdjacentHTML('afterbegin', age)
};


document.addEventListener('DOMContentLoaded', function(){
	"use strict";
    
    document.querySelector('a.smooth-scroll').addEventListener('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);

    });
    
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated-from-right", { 
        duration: 600,
        delay: 0,
        origin: "right",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
});

function calculateAge(year, month, day) {
    var birthday = new Date(year, month, day);
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function plural(number) {  
    cases = [2, 0, 1, 1, 1, 2];  
    titles = ['год', 'года', 'лет'];
    return titles[ (number%100>4 && number%100<20) ? 2 : cases[(number%10<5)?number%10:5] ];  
}
