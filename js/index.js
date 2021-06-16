'use strict'; {
    const images = [
        'image/MySlideshow/img/pic00.png',
        'image/MySlideshow/img/pic01.png',
        'image/MySlideshow/img/pic02.png',
        'image/MySlideshow/img/pic03.png',
        'image/MySlideshow/img/pic04.png',
        'image/MySlideshow/img/pic05.png',
        'image/MySlideshow/img/pic06.png',
        'image/MySlideshow/img/pic07.png',
    ];

    let currentIndex = 0;
    let thumbnails

    const mainImg = document.getElementById('main');
    mainImg.src = images[currentIndex];


    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        const li = document.createElement('li');

        if (index === currentIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImg.src = image;
            thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');
        })

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });


    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        let target = currentIndex + 1;
        if (target === images.length) {
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    })
    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentIndex - 1;
        if (target < 0) {
            target = images.length - 1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });


    const returnBtn = document.getElementById('return')
    returnBtn.addEventListener('click', () => {
        mainImg.src = images[0];
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = 0;
        thumbnails[currentIndex].classList.add('current');
    })



    let timeoutId;

    function playSlideshow() {
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        }, 1000)
    }

    let isPlayng = false;

    const play = document.getElementById('play');
    play.addEventListener('click', () => {
        if (isPlayng === false) {
            playSlideshow();
            play.textContent = 'Pause';
        } else {
            clearTimeout(timeoutId);
            play.textContent = 'play';
        }
        isPlayng = !isPlayng;
    })
}