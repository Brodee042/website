function TopicsPage() {
    return (
       <>

<section>
    <h2>Web Development Concepts</h2>
    <nav className="local">
        <a href="#imageOptimizing">Image Optimization</a>
        <a href="#favicon">Favicon</a>
        <a href="#webservers">Web Servers</a>
        <a href="#frontend">Frontend Design</a>
    </nav>

    <article id="webservers">
        <h3>Web Servers</h3>
        <p>
            A <strong>designated homepage</strong> is there so that when a request for / goes through, it goes to the file at the path /index.html in the root directory. This is the designated home page
            for Apache web servers, which is what we shall use. For Microsoft .NET though, default.html is possible and in certain cases, the web server might
            actually look for index.js for JavaScript, and index.php for PHP.
        </p>

        <p>
            The main difference between the output screens when in the Network tab is that for web server, there isn't just 1 GET request of the index.html.
            Instead, there is 3 extra ones, with two of them being GET requests for the CSS and JavaScript files which aren't attached and returning <strong>
                404, or Not Found
            </strong>. The web server version also has a favicon which the OSU server gives us automatically, which utilizes another GET. The last difference
            is that the web server version has header information when one clicks on a GET request, which is not there for the local computer.
        </p>

        <p>
            As previously stated, the status 404 signifies that the file which the GET request was searching for was <strong>Not Found</strong>. This is the case
            as there is no main.css or main.js code in the file so it will never be found. As for the status 200, when it is given this simply signifies that the request
            was accomplished. In the case of the <strong>favicon.ico</strong>, this is something that is gotten by the server automatically, and in this case successfully.
        </p>

        <p>
            A URL is broken up into many sections, the first one being <strong>scheme</strong>, which in case of my web server is https, or <strong>Hypertext Transfer Protocol Secure</strong>. The next
            portion of the URL is the subdomain, which in this case is "web.engr.". The third part is the host domain, and it is "oregonstate.edu". The last portion
            of our URL is the path to the resources, which is "/~arbonb/Module1/a1-arbonb/". All of these different parts of a URL allow one to access a webpage through a web server.

        </p>
    </article>

    <article id="frontend">
        <h3>Frontend Design</h3>

        <p>
            <strong>Frontend design</strong> as a whole, is all about creating the best user experience by making the webpage simple, visually distinctive, yet consistent as well as having a navigation system that is understandable.
            The navigation aspect of Frontend design is key, as a user will not want to use a website again if it is confusing, therefore meaning navigation must be simple and foolproof with related pages all linking to each other so that the user can follow along.
            In simple terms, it is creating the best experience in regards to whatever the user interacts with either as a webpage or a mobile app. A designer does this by having a consistent color and styling throughout the webpage, only giving visual distinction to key parts.
            A front-end designer can also help to engage a new user via the use of many images, because as they say, a picture paints a thousand words.

        </p>


        <dl>
            <dt><strong>Effective:</strong></dt>
            <dd>Get accurate results back to the user</dd>

            <dt><strong>Efficient:</strong></dt>
            <dd>The user only has to perform a limited amount of steps and get results quickly.</dd>

            <dt><strong>Easy to Navigate:</strong></dt>
            <dd>Make sure the user can automatically understand how to get from one location to another, and can remember how to do so.</dd>

            <dt><strong>Error-free:</strong></dt>
            <dd>Have the webpage work as intended. One usually achieves this through user testing.</dd>

            <dt><strong>Enjoyable:</strong></dt>
            <dd>Make it so the users have a pleasant experience while navigating through the webpage and navigating the content.</dd>
        </dl>


        <p>
            Altogether, there are six main page layout tags one must take into consideration when creating an <strong>HTML webpage.</strong> These are <strong>
            header, nav, main, section,
            article, and footer.
            </strong> The first is header, which is usually the banner for the site and includes the name and publisher, and stays the same for different pages on the website.
            The second is nav, which are used inside a website so as to allow the user to navigate to different pages, and they can be used multiple times throughout a site. The third is main, which includes the main
            body of the content and holds articles and sections. Speaking of sections, this should be used for content that is similar thematically. As for articles, they should be used for one specific topic.
            The last of the main 6 is footer, which goes just below the main, and features contact info, legal info, and copyright statements among other things.
            Outside of these 6, there are <strong>figure, blockquotes, and div</strong>, the first being used to add text to images or media, the second for large quotes, and the third for anything that doesn't fit.
        </p>


        <ol>
            <li><strong>External Content:</strong> To hyperlink to external content, one simply creates an anchor then puts href="webpage link"</li>
            <li><strong>Internal Content:</strong> To hyperlink to specific content on a page, such as an article, they must have an associated id="name", if so then you can href="#name"</li>
            <li><strong>Page-to-Page:</strong> To hyperlink to a different page on a given website, one simply needs to href="something.html"</li>
        </ol>


    </article>

    <article id="imageOptimizing">
        <h3>Optimizing images</h3>
        <p>
            To ensure that an image is fully optimized, it must conform to <strong>6 key criteria.</strong>
            The first of these criteria is having a descriptive file name, as it allows search engines to actually categorize them so that if your image is returned to a user if they search for it.
            The second criteria to follow is having a small file size, which is important as it reduces server load and load times in general.
            The third is exact dimensions, meaning if there is a 600 pixel image block, the image is the same size and doesn't have to load anymore.
            The fourth is correct file format, which is touched on below, but generally photo's are JPG, and line art is GIF or PNG.
            The fifth is providing different images depending on the monitor resolution and its pixels per inch, and if needed providing reduced resolution images.
            The sixth and final specification is color mode, making sure JPG, SVG, and WebP are RGB and GIF is Indexed; PNG can be either.
        </p>

        <p>
            When one uploads photo's or line art, one must take into account the best format's for each given type of content, as they can be very different. For instance,
            photos are best uploaded as JPG or WebP files as these files compress the images as they are too large without it, and these formats remain rectangular and lack transparency which is key for line art.
            Speaking of line art, the best format's to use for that use case is <strong>PNG, SVG, and GIF</strong>. These are the preferred formats as they all allow transparency so one can have art on a webpage and not have to worry about matching the background. 
            Beyond that, SVG is mathematically derived, meaning it is the cleanest looking and is very scalable. As for GIF, 
            it can be used for animation and it features anti-aliasing. Finally, PNG features the best transparency and can be placed over various colors without distortion.
        </p>
    </article>


    <article id="favicon">
        <h3>Favicon</h3>
        <p>
            Altogether, favicons are basically the logo of a site, which devices and browsers then used to represent your website. For mobile devices, they appear as the button you click to enter the app
            and for browsers, they are featured in a browser tab as the logo. They usually come in the form of an ICO or PNG file.
        </p>
    </article>
</section>

</>
    );
}
export default TopicsPage;