import { IoIosAddCircle } from "react-icons/io";
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RenovationList from '../components/RenovationList';
import { Link } from 'react-router-dom';

function RenovationsPage({ setRenovation }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [renovations, setRenovations] = useState([]);

    // RETRIEVE the entire list of renovations
    const loadRenovations = async () => {
        const response = await fetch('/renovations');
        const renovations = await response.json();
        setRenovations(renovations);
    } 
    

    // UPDATE a single renovation
    const onEditRenovation = async renovation => {
        setRenovation(renovation);
        redirect("/update");
    }


    // DELETE a single renovation  
    const onDeleteRenovation = async _id => {
        const response = await fetch(`/renovations/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/renovations');
            const renovations = await getResponse.json();
            setRenovations(renovations);
        } else {
            console.error(`That renovation "${_id}"could not be deleted, status code = ${response.status}`)
        }
    }

    // LOAD all the renovations
    useEffect(() => {
        loadRenovations();
    }, []);

    // DISPLAY the renovations
    return (
        <>  
            <h2>List of Renovations</h2>




            <RenovationList 
                renovations={renovations} 
                onEdit={onEditRenovation} 
                onDelete={onDeleteRenovation} 
            />
            <p>
                <table className="add">

                    <tbody>
                        <td><h2>Add another Renovation:</h2></td>
                        <td><button ><Link to="/create"><IoIosAddCircle size={40} className="cream-text"  /></Link></button></td>
                    </tbody>

                </table>
            </p>


        </>
    );
}

export default RenovationsPage;