const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);
    // debugger
    window.addEventListener('scroll', () => {
        
        if (document.documentElement.scrollTop > 600) {
            if ( document.querySelector('.pageup').hasAttribute('data-show')) {
                $(upElem).addClass('fadeIn');
                $(upElem).removeClass('fadeOut');
            }

        } else {
            $(upElem).addClass('fadeOut');
            $(upElem).removeClass('fadeIn');
        }
    });

    // Scrolling with raf
    //Вар -2 с requestAnimationFrame
    // let links = document.querySelectorAll('[href^="#"]'), speed = 0.2;
    let links = document.querySelectorAll('[href="#up"]'), speed = 0.1;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            // console.log(document.documentElement.scrollTop);
            // console.log(this.hash);
            // console.log(document.querySelector(hash).getBoundingClientRect());

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });


};

export default scrolling;
