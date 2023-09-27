import './style.css';
import { division, addElements } from './headingHome';
import {container , addBody} from './bodyHome';
import {event} from './Homepage.js';
import { event2 } from './Menupage';
import { event3 } from './specialFeatures';
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
        event2();
        event3();
        leftbun();
        rightbun();
    };



export default load;