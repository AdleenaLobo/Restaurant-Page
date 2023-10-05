import './style.css';
import { division, addElements } from './headingHome';
import {container , addBody} from './bodyHome';
import {event, homepage} from './Homepage.js';
import { event1 } from './Menupage';
import { event2 } from './specialFeatures';
import { rightbun } from './rightbutton';
import { leftbun } from './leftbutton';


let con;

    function load ()
    {
        addElements();
        addBody();
        con = document.getElementById('content');
        con.appendChild(division);
        con.appendChild(container);
        event();
        event1();
        event2();
        leftbun();
        rightbun();
    };



export default load;