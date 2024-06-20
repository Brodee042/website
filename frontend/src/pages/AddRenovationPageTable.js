import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddRenovationPageTable = () => {

    const [timeTaken, setHours]       = useState('');
    const [givenDate, setDate]         = useState('');
    const [constructionType, setType] = useState('');


    const redirect = useNavigate();

    const addRenovation = async () => {
        const newRenovation = { timeTaken, givenDate, constructionType };
        const response = await fetch('/renovations', {
            method: 'post',
            body: JSON.stringify(newRenovation),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`You have successfully created another Renovation entry!`);
        } else {
            alert(`Error: could not create Renovation entry = ${response.status}`);
        }
        redirect("/renovation");
    };


    return (
        <>
        <article>
            <h2>Add a renovation</h2>
            <p></p>
            
            <table id="renovations">
                <caption>Please submit the details of this Renovation Project</caption>
                <thead>
                    <tr>
                        <th>Man-hours:</th>
                        <th>Start Date:</th>
                        <th>Type of Project:</th>
                        <th>Submit:</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="timeTaken"></label>
                        <input
                            type="text"
                            placeholder="Round to nearest Hour"
                            value={timeTaken}
                            onChange={e => setHours(e.target.value)} 
                            id="timeTaken" />
                    </td>

                    <td><label htmlFor="year"></label>
                        <input
                            type="number"
                            value={givenDate}
                            placeholder="Start Date of Project"
                            onChange={e => setDate(e.target.value)} 
                            id="year" />
                    </td>

                    <td><label htmlFor="constructionType"></label>
                        <input
                            type="text"
                            placeholder="Electrical, Framing..."
                            value={constructionType}
                            onChange={e => setType(e.target.value)} 
                            id="constructionType" />
                    </td>

                    <td>
                    <label htmlFor="submit"></label>
                        <button
                            type="submit"
                            onClick={addRenovation}
                            id="submit"
                        >Add Renovation</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddRenovationPageTable;