import React from 'react';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { HiTrash } from "react-icons/hi2";

// Changed the icons, function names, and parameters 
// to fit your portfolio topic and schema.

function Renovation({ renovation, onEdit, onDelete }) {
    return (
        <tr>
            <td>{renovation.timeTaken}</td>
            <td>{renovation.givenDate}</td>
            <td>{renovation.constructionType}</td>


            <td><HiTrash onClick={() => onDelete(renovation._id)} /></td>
            <td><VscActivateBreakpoints onClick={() => onEdit(renovation)} /></td>
        </tr>
    );
}

export default Renovation;