// https://openjavascript.info/2022/12/11/random-image-with-javascript/

const imgEl = document.getElementById('random-image');

const srcArray = ['https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_2171.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_2114.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_2104.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_2061.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1997.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1989.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1974.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1924.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1922.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1903.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1889.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1879.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1793.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1783.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1727.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1699.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1678.jpg',
                  'https://file.garden/ZbpUQD2lT2-4iaij/cats/IMG_1656.jpg'];
                  
                  
// Stores path to images in an array

imgEl.addEventListener('click', () => {
    randomImage();
    // Runs randomImage function when user clicks on image
});

let index;
// Current image index

randomImage();
function randomImage() {

    const randomIndex = Math.floor(Math.random()*srcArray.length);
    // Generates random number between 0 and array length-1 (because Math.floor rounds)

    if (randomIndex !== index) {
    // If number NOT same as current image index...

        imgEl.src = srcArray[randomIndex];
        //...set as image src

        index = randomIndex;
        //...and as new current index value

    } else {
    // If number same as current index value (repeat)...

        randomImage();
        //...start function from beginning again

    }

}