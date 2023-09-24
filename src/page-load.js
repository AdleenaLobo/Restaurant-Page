import './style.css';
import { division, addElements } from './headingHome';
import {container , addBody} from './bodyHome';

let con;

    function load ()
    {
        addElements();
        addBody();
        con = document.getElementById('content');
        con.appendChild(division);
        con.appendChild(container);
    };



export default load;