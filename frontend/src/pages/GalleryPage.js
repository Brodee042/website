import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/ape-caves-selfie.jpg',
        thumbnail: 'images/ape-caves-selfie.jpg',
        description: 'Picture of me crawling through a narrow passage at Ape Caves, the longest lava tube caves in the Americas.',
        originalHeight: '450px',
    },
    {
        original: 'images/arab-street-pixelart.png',
        thumbnail: 'images/arab-street-pixelart.png',
        description: 'Monochrome pixel art I created, it shows a low resolution Arab cityscape from the street level.',
        originalHeight: '450px',
    },
    {
        original: 'images/array-sorter-masm.png',
        thumbnail: 'images/array-sorter-masm.png',
        description: 'Screenshot of the main function of a MASM program which sorts a randomized array and returns its median.',
        originalHeight: '450px',
    },
    {
        original: 'images/aztec-ruins.jpg',
        thumbnail: 'images/aztec-ruins.jpg',
        description: 'Photo of some Aztec ruins I encountered in Yucatan, Mexico which shows the jungle reclaiming ruins.',
        originalHeight: '450px',
    },
    {
        original: 'images/fairy-chess-function.png',
        thumbnail: 'images/fairy-chess-function.png',
        description: 'Screenshot of the main function of a program which allows the user to play chess, showing its initialization.',
        originalHeight: '450px',
    },
    {
        original: 'images/merida-cathedral.jpg',
        thumbnail: 'images/merida-cathedral.jpg',
        description: 'This is a picture of the Cathedral in Merida, Mexico which is one of the oldest on the continent, and in my opinion the most beautiful.',
        originalHeight: '450px',
    },
    {
        original: 'images/merida-plaza.jpg',
        thumbnail: 'images/merida-plaza.jpg',
        description: 'This is another view of the same Cathedral, this time from the plaza opposite to it, showing a bustling city center.',
        originalHeight: '450px',
    },
    {
        original: 'images/mt-st-helens-crater-rim.jpg',
        thumbnail: 'images/mt-st-helens-crater-rim.jpg',
        description: 'Photo I took of the top of Mt. St. Helens, showing the view from the rim of the volcano with steam emanating from the crater.',
        originalHeight: '450px',
    },
    {
        original: 'images/random-array-generator-masm.png',
        thumbnail: 'images/random-array-generator-masm.png',
        description: 'Screenshot of the main function I created in MASM which generates a random array of numbers to whatever number the user inputs.',
        originalHeight: '450px',
    },
    {
        original: 'images/student-id-automation.png',
        thumbnail: 'images/student-id-automation.png',
        description: 'This is a python function I created which automated the student ID printing process via scraping the email requests for names and student numbers, and then putting that information into the actual ID printing interface.',
        originalHeight: '450px',
    },
];

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;