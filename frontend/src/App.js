// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import RenovationsPage from './pages/RenovationsPage';
import TopicsPage from './pages/TopicsPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';

// If your schema requires SHORT data input, then use the TABLE design.
import EditRenovationPageTable from './pages/EditRenovationPageTable';
import AddRenovationPageTable from './pages/AddRenovationPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [renovation, setRenovationToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Portfolio Project</h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.                      */}
                    

                    {/* {<RenovationsPage setRenovation={setRenovationToEdit}/>}*/}
                    <Route path="/renovation" element={<RenovationsPage setRenovation={setRenovationToEdit}/>} />

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddRenovationPageTable />} />   
                     <Route path="/update" element={<EditRenovationPageTable renovationToEdit={renovation} />} />

                     {/* new routes */}
                     <Route path="/" element={<HomePage />} />
                     <Route path="/topics" element={<TopicsPage />} /> 
                     <Route path="/gallery" element={<GalleryPage />} /> 
                     {/*<Route path="/OrderPage" element={<EditRenovationPageForm RenovationToEdit={Renovation} />} />*/}
                     {/*<Route path="/ContactPage" element={<EditRenovationPageForm RenovationToEdit={Renovation} />} />*/}
                </Routes>
              </section>
          </main>

          <footer>
        <p>
            &copy; 2024 Brody Arbon
        </p>
    </footer>

      </BrowserRouter>
    </>
  );
}

export default App;