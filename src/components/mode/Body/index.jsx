import './style.css';

import Respondemos from '../../../imagenes/mode/Grupo 278.png';
import Concentrados from '../../../imagenes/mode/Grupo 279.svg';
import Sabemos from '../../../imagenes/mode/Grupo 280.svg';

function BodyMode() {
    return(
        <div className="contBody">
            <div className="SectionCenter">
                
                <div className="ContModeRigth">
                    <img src={Respondemos} alt="" className="mode" width=" 400px" height="150px"/>

                </div>
                
                <div className="ContMode">
                    <img src={Concentrados } alt="" className="mode"  width=" 400px" height="150px"/>
                </div>
                <div className="ContModeRigth">
                    <img src={Sabemos} alt="" className="mode"  width=" 400px" height="150px"/>

                </div>
            </div>
        </div>
    );
}
export default BodyMode;