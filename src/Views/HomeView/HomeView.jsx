import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faAddressCard,
    faBatteryEmpty,
    faBatteryQuarter,
    faBatteryHalf,
    faBatteryThreeQuarters,
    faBatteryFull
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import './Home.css';
const Home = () => {
    return (
        <div>
            <h1>Bienvenue sur la page Demo Composants React</h1>
            
            <div>
                <div>
                    <FontAwesomeIcon icon={faBatteryEmpty} style={{ padding:'10px' , color: 'red', fontSize: '45px' }} />
                    <FontAwesomeIcon icon={faBatteryQuarter} style={{ padding:'10px' , color: 'rgb(40, 44, 52)', fontSize: '45px' }} />
                    <FontAwesomeIcon icon={faBatteryHalf} style={{ padding:'10px' , color: 'rgb(40, 44, 52)', fontSize: '45px' }} />
                    <FontAwesomeIcon icon={faBatteryThreeQuarters} style={{ padding:'10px' , color: 'rgb(40, 44, 52)', fontSize: '45px' }} />
                    <FontAwesomeIcon icon={faBatteryFull} style={{ padding:'10px' , color: 'green', fontSize: '45px' }} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faAddressCard} style={{ padding:'10px'}}/>
                    <FontAwesomeIcon icon={faEnvelope} style={{ padding:'10px'}}/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHome} style={{ padding:'10px'}} />
                    <FontAwesomeIcon icon={faHome} transform="down-4 grow-2.5" style={{ padding:'10px'}} />
                    <FontAwesomeIcon icon={faHome} style={{ padding:'10px' ,  color: 'red', fontSize: '25px' }} />
                </div>
            </div>
            <a href="mailto:manu.angot@hotmail.fr">Me contacter</a>

        </div>
    );
};
export default Home;