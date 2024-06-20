function HomePage() {
    return (
       <>
<section>
    <h2>
        Brody's Web Development Portfolio
    </h2>

    <article>
        <h1>Career Goals</h1>
        <p>
            Overall, my career goal is to work in <strong>Technology</strong>, whether it be as a Software Developer or IT professional, I find the whole field fascinating. 
             I want to help find technological solutions to the problems people face, and the best way to do that is through a career in the field. Finding solutions is something I explored at 
            my previous job as a Student Office Assistant, where I developed a program so as to print the Student ID's automatically when a request was received, as
            the old process was long and tedious. That first program was a bit elementary, but this one you are on right now is far more complex.
        </p>
    </article>

    <article>
        <h1>Technologies Used & Learned</h1>
    <p>
        <dl>
            <dt><strong>HTML:</strong></dt>
            <dd className='spacing'>Provides structure to the webpage and is how the webpage information is held. <strong>Every single element</strong> you see on the website, whether it's a text or image, is created via the use of HTML.</dd>

            <dt><strong>CSS:</strong></dt>
            <dd className='spacing'>Used to style the webpage so that it is visually appealing. To be more specific, everything <strong>visual </strong> is determined in App.css, whether the text is black or white,
                whether it aligns to the right or left, or even what font is to be used.
            </dd>

            <dt><strong>JavaScript:</strong></dt>
            <dd className='spacing'>The programming language used in web development, and is the common thread binding everything together. On every level, 
                from backend to frontend, the language is being used and the fact that it is one common language simplifies a lot in regards to getting the website up and running.
            </dd>

            <dt><strong>JSON:</strong></dt>
            <dd className='spacing'>JSON is basically a language format made to <strong>store data</strong> in a way which humans and different programming languages can read. In this webpage, all submitted data from the user is stored as a binary JSON in the database with the help of REST API.</dd>

            <dt><strong>CRUD:</strong></dt>
            <dd className='spacing'>An acronym for <strong>Create, Read, Update, and Delete</strong>, representing the basic operations performed on data in a database. For this website, we use a MERN stack in order to do CRUD operations, and how is expanded upon below.</dd>

            <dt><strong>DOM:</strong></dt>
            <dd className='spacing'>Document Object Model, which basically represents an <strong>HTML document as a tree</strong> with separate branches, allowing us to change a part of it without altering the other branches.</dd>

            <dt><strong>SPA:</strong></dt>
            <dd className='spacing'>Single Page Application's makes it so that when a user interacts with the 
                application, such as submitting new data, the SPA ensures that only the necessary data is fetched
                 from the server without reloading the entire page. This is done through updating the <strong>DOM</strong> as the user does actions like in our case, delete a Renovation document.</dd>



            <dt><strong>More Minor Technologies:</strong></dt>
            <dd>        <dl>
            <dt>- HTTP Codes </dt>
            <dt>- JSON Structure</dt>
            <dt>- Image Optimization</dt>
            <dt>- Each Image Type's use case</dt>
            <dt>- Terminal </dt>
            <dt>- NPM commands</dt>
            <dt>- VSCode</dt>
            <dt>- DOM</dt>



            <article>
            <dt><h2>MERN:</h2></dt>
            <dd className='spacing'>This is the acronym for the stack that this website is using, that being <strong>MongoDB, Express.js, React.js, and Node.js.</strong> Every technology is vital to the functioning of the Webpage and for CRUD operations,
                as will be shown below. </dd>

            <dt><strong>MongoDB:</strong></dt>
            <dd className='spacing'>The database for the webpage, it is a NoSQL database and the information is stored in document's in the form of <strong>Binary JSON</strong> once they are converted from the JSON-like documents React creates. 
                This website is using MongoDB Atlas Database as its provider.</dd>

            <dt><strong>Express.js:</strong></dt>
            <dd className='spacing'>This framework is critical for the webpage, as it lets us interface the frontend and the backend. To be more specific, this program creates a server which 'listens' for HTTP requests from 
             
                the React frontend, then <strong>POST's</strong> the information to MongoDB or <strong>GET's</strong> from it.

                
            </dd>

            <dd className='spacing'>--- This is where we use <strong>REST API</strong>, or Representational State Transfer. It allows us to do CRUD via HTTP methods such as <strong>POST, GET, PUT, and DELETE.</strong></dd>

            <dt><strong>React.js:</strong></dt>
            <dd className='spacing'>This is the key for the frontend, as it allows us to build components that can be shared to different pages efficiently. An example of this
                is the navigation bar that you see above and the footer below, all pages call from the same files for those two elements, helping to reduce the need to
                load already existing elements, making our website an <strong>SPA. </strong>
            </dd>

            <dt><strong>Node.js:</strong></dt>
            <dd className='spacing'>The key to using Javascript, as this allows it to be run on the server's side <strong>and</strong> on the client's side. Node.js is also highly important as it allows programs to run <strong>asynchronously</strong>, 
            meaning if something is taking a long time to load, let's say the renovations list, it is not impeding other actions from being done like loading the footer and the header.</dd>

            <dd className='spacing'>--- This is where <strong>Mongoose</strong> is used, which essentially allows us to interact with our MongoDB 
            server using Javascript. To give an example, Mongoose allowed us to create the schema for the JSON documents that we store in MongoDB, meaning data will be stored as defined by the Mongoose scheme.
            </dd>

            </article>


        </dl></dd>
        </dl>
        </p>
    </article>


</section>
</>
    );
}
export default HomePage;