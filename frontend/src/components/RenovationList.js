import React from 'react';
/* import { VscActivateBreakpoints } from 'react-icons/vsc';
import { HiTrash } from "react-icons/hi2"; */
import Renovation from './Renovation';


function RenovationList({ renovations, onDelete, onEdit }) {
    return (
        <table id="renovations">
            <caption>Below is the list of all Renovation Projects submitted to the database, you can edit or delete them as you see fit.</caption>
            <thead>
                <tr>
                    <th>Man-hours:</th>
                    <th>Start Date:</th>
                    <th>Type of Project:</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {renovations.map((renovation, i) => 
                    <Renovation 
                        renovation={renovation} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}   
            </tbody>
        </table>
    );
}


export default RenovationList 