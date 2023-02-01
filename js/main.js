// Get a reference to document elements we want to modify:
const displayedImage = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const backgroundButton = document.querySelector('button');
const thumbBar = document.querySelector('.thumb-bar')

// Create an array of filenames
const pictures = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg", "img/pic5.jpg"];

// Create an object with alt-texts keyed to a picture
const altTexts = {
    pic1: "Closeup of a blue human eye",
    pic2: "Either a snapshot of a wave crashing into a beach or a flowing mineral formation, I honestly can't tell",
    pic3: "A bunch of white and purple flowers growing together",
    pic4: "Mural of Egyptian gods or rulers with heiroglyphics",
    pic5: "A yellow, white and brown butterfly with spots sitting on a leaf"
};

/* Create a thumbnail for every image and set up an event handler to change the
displayed image to another when its thumbnail is clicked
*/
for (const picture of pictures) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', picture);

    /* Wonky way of getting the key for altTexts from the image address: create
     a substring that removes any directories and the file extension
    */
    let filenameStart = 0;
    let filenameEnd = picture.length - 1;
    let filename = "";
    if (picture.endsWith('.jpg')) {
        if (picture.includes('/')) {
            filenameStart = picture.lastIndexOf('/') + 1;
        }
        filenameEnd = picture.lastIndexOf('.');
        filename = picture.substring(filenameStart, filenameEnd)
    }
    /* testing to see if I reasoned the filename thing ok, apparently I did!
    console.log(filename);
    debugger;
    */
    newImage.setAttribute('alt', altTexts[filename]);
    newImage.addEventListener('click', changeImage.bind(picture, filename));
    thumbBar.appendChild(newImage);
}

// Add an event listener to change the opacity when the button is clicked
backgroundButton.addEventListener('click', changeDarkness);

// Callback function for thumbnail images
function changeImage(source, altText) {
    displayedImage.setAttribute('src', source);
    displayedImage.setAttribute('alt', altText);
}

// Callback funtion for the darken/lighten background button
function changeDarkness() {
    if (backgroundButton.className == "dark") {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        backgroundButton.textContent = "Lighten";
        backgroundButton.setAttribute('class', 'light');
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';
        backgroundButton.textContent = "Darken";
        backgroundButton.setAttribute('class', 'dark');
    }
    
}