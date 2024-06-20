'use strict';

//const cities = require('cities');

//let myCity = cities.zip_lookup('97330');

//console.log(myCity);

const express = require('express');
const app = express();
const PORT = 3000;
const path = 'Z:\public_html\Module5\a5-arbonb\public';


// app.get("/", (req, res) => {
//    res.send("This app is using Express.");
//});

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//app.post("/review", (req, res) => {
//    console.log(req.body);
//    res.send(req.body);
//});



    let htmltop = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brody Arbon</title>
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png">
    <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png">
</head>
<body>
    <header>
        <img src="android-chrome-192x192.png" alt="Logo" />
        <h1>Brody Arbon</h1>
    </header>
    <nav>
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="gallery.html">Gallery</a>
        <a href="order.html">Order</a>
    </nav>
    <main>
`; 

    let htmlbottom = `
    </main >
        <footer>
            <p>
                &copy; 2024 Brody Arbon
            </p>
        </footer>
    </body >
    </html >
    `;



app.post("/review", (req, res) => {
    const personname = req.body.username;
    const email = req.body.useremail;
    const messagegiven = req.body.usermessage;
    const employment = req.body.dropdown;
    const location = req.body.fromUsa;
    const pageerrors = req.body.pageCheck;




    let home;
    if (pageerrors["0"]) {
        home = pageerrors["0"];
    } else {
        home = '';
    }

    let contact;
    if (pageerrors["1"]) {
        contact = pageerrors["1"];
    } else {
        contact = '';
    }

    let gallery;
    if (pageerrors["2"]) {
        gallery = pageerrors["2"];
    } else {
        gallery = '';
    }

    res.send( htmltop + `

        <section>
            <h3>Thanks for the feedback, ${personname}!</h3>
            <article id='response'>

                <p>Just to confirm, we have it that you are a <strong>${employment}</strong> and that you ${location} from the United States. You also have selected that you had issues with the webpages: <strong>${home} ${contact} ${gallery}</strong>.</p>
                <p>If we have any further questions we will contact you at <strong>${email}</strong>. The message you sent is as follows:  </p>
                <p>${messagegiven}</p>
            </article>
        </section>

  ` + htmlbottom );
}); 



//app.post("/order", (req, res) => {
//    console.log(req.body);
//    res.send(req.body);
//});
const productarray = require('./products.js').products; 

app.post("/order", (req, res) => {
    const personname = req.body.shippingName;
    const email = req.body.useremail;
    const address = req.body.address;
    const shipMessage = req.body.shipMessage;
    const product = req.body.product;
    const quantity = req.body.quantity;


    //const productarray = require('./products.js').products; 



    function get_index(product_given) {
        for (const eachValue of productarray)
            if (eachValue.product === product_given) {
                return eachValue;
            }
    }

    function get_indexs(product_given) {
        const foundProducts = [];
        for (let i = 0; i < productarray.length; i++) {
            if (productarray[i].product === product_given) {
                foundProducts[i] = product_given[i];
            }
        }
        return foundProducts;
    }

    function getcost(given_name) {
        const product = get_index(given_name);
        return product[0].price;
    }

    function getcompany(given_name) {
        const product = get_index(given_name);
        return product[0].company;
    }

    //let testing1 = getcompany(product)


    res.send(htmltop + `

        <section>
            <h3>Thanks for the Order, ${personname}!</h3>
            <article id='response'>

                <p>Just to confirm, we have it that you are purchasing <strong>${quantity} ${product}'s.</strong> </p>
                <p>Delivery is to the address <strong>${address}</strong> with the instructions that we should:</p>

                <p>${shipMessage}</p>
            </article>
        </section>

  ` + htmlbottom);
}); 


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});