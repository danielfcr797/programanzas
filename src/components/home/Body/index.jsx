import './style.css';
import cerdito from '../../../imagenes/home/cerdito.svg';
import { Link } from 'react-router-dom';

function BodyHome() {
    return(
        <div className="cont">
            <div className="contentLeft">
                <div className="contentLeftTop">
                    <h1 className="fontLeft">TODOS</h1>
                    <h1 className="fontPlay">JUGAMOS,</h1>
                    <h1 className="fontLeft">TODOS</h1>
                    <h1 className="fontLeft">GANAMOS</h1>

                    
                </div>
                <div className="contenLeftBottom">
                </div>
            </div>
            <div className="contentRight">
                <img src={cerdito} alt="" className="bacgroundRight" />
                <div className="contenRelativ">
                    <div className="textRight">
                        
                        <h1 className="textTop">USA TU {" "} <h2 className="bold">ENERGÍA </h2>, PON A PRUEBA </h1>
                        <h1 className="textBottom">TU CONOCIMIENTO Y <h2 className="bold">GANA</h2></h1>

                    </div>
                    <div className="contBotones">
                        <div className="contRegistrarse">
                            <h1 className="fontLogin">REGISTRARME</h1>

                        </div>
                        <Link to="/login" className="link">
                            <label className="Registrado">
                                <h1 className="fontLogin">YA ESTOY REGISTRADO</h1>

                            </label>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default BodyHome;