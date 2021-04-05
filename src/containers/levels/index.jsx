import './style.css';
import Signo from '../../imagenes/mode/Grupo 326@2x.png';
 

function Levels() {
    return(
        <div className="contMainLevels">
            <div className="ambiente">
                <div className="contRelativ3">
                    <div className="contText">
                        <h1 className="todos">TODOS</h1>
                        <h1 className="respondemos">RESPONDEMOS</h1>

                    </div>
                    <div className="circle3">
                        <img src={Signo} alt=""/>

                    </div>

                </div>
                
            </div>

        </div>
    );
}
export default Levels;