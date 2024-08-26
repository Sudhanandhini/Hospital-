let menu = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
   const isActive = menu.classList.toggle('active');
    navbar.classList.toggle('active');
    menu.setAttribute('aria-expanded', isActive );
}

window.onscroll = () => {
    menu.classList.remove('active');
    navbar.classList.remove('active'); 
    menu.setAttribute('aria-expanded', false );
}

document.querySelector('a[href="#service"]').addEventListener('click' , function(e) {
    e.preventDefault();

    document.querySelector('#service').scrollIntoView({
        behavior:'smooth'
    });

});

document.querySelector('a[href="about"]').addEventListener('click',function(e) {
     e.preventDefault();

     document.querySelector('about').scrollIntoView({
             behavior:'smooth'
     });
} );

document.querySelector('a[href="blog"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('#blog').scrollIntoView({
            behavior: 'smooth'
    });
});

document.querySelector('a[href="review"]').addEventListener('click',function(e) {
    e.preventDefault();
    document.querySelector('#review').scrollIntoView({
        behavior:'smooth'
    });
});

document.querySelector('a[href="book"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#book').scrollIntoView({
        behavior:'smooth'
    });
});

document.querySelector('a[href="specialities"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#specialities').scrollIntoView({
        behavior:'smooth'
    });
});