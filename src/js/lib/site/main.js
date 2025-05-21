
window.addEventListener('DOMContentLoaded', () => {


    const iframe = document.querySelectorAll('.video__iframe');
    iframe.forEach (item => {
        item.setAttribute('allow', 'fullscreen'); // must be 1st
    });

});
