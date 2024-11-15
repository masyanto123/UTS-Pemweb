document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  

        const targetSection = document.querySelector(this.getAttribute('href'));

        targetSection.scrollIntoView({
            behavior: 'smooth',  
            block: 'start'       
        });
    });
});
