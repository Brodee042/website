import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditRenovationPageTable = ({ renovationToEdit }) => {
 
    const [timeTaken, setHours]       = useState(renovationToEdit.timeTaken);
    const [givenDate, setDate]         = useState(renovationToEdit.givenDate);
    const [constructionType, setType] = useState(renovationToEdit.constructionType);
    
    const redirect = useNavigate();

    const editRenovation = async () => {
        const response = await fetch(`/renovations/${renovationToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                timeTaken: timeTaken, 
                givenDate: givenDate, 
                constructionType: constructionType 
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`You have successfully edited that entry`);
        } else {
            const errMessage = await response.json();
            alert(`Error: could not edit the entry in the database ${response.status}. ${errMessage.Error}`);
        }
        redirect("/renovation");
    }

    return (
        <>
        <article>
            <h2>Edit a renovation</h2>
            <p>Paragraph about this page.</p>
            <table id="renovations">
                <caption>Please edit the details of the chosen Renovation Project</caption>
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
                <td><label htmlFor="hours"></label>
                        <input
                            type="text"
                            placeholder="Round to nearest Hour"
                            value={timeTaken}
                            onChange={e => setHours(e.target.value)} 
                            id="hours" />
                    </td>

                    <td><label htmlFor="year"></label>
                        <input
                            type="number"
                            value={givenDate.slice(0, 10)}
                            placeholder="2001-3-04"
                            onChange={e => setDate(e.target.value)} 
                            id="year" />
                    </td>

                    <td><label htmlFor="type"></label>
                        <input
                            type="text"
                            placeholder="Drywall, Electrical..."
                            value={constructionType}
                            onChange={e => setType(e.target.value)} 
                            id="type" />
                    </td>

                    <td>
                    <label htmlFor="submit">Commit Edit:</label>
                        <button
                            type="submit"
                            onClick={editRenovation}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditRenovationPageTable;