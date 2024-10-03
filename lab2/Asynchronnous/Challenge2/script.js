const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};
let currentImg;
const loadImages = async function () {
    try {
        currentImg = await createImage('img/img-1.png');
        console.log('Image 1 loaded');
        await wait(2);
        currentImg.style.display = 'none';

        currentImg = await createImage('img/img-2.png');
        console.log('Image 2 loaded');
        await wait(2);
        currentImg.style.display = 'none';
    } catch (err) {
        console.error(err);
    }
};
loadImages();
