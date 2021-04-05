import './style.css'
import Logo from "../../imagenes/login/ecopetrol.png"
import Datos from "../../imagenes/login/datos.svg"
import Liston from '../../imagenes/login/liston.svg'
import Cerebro from '../../imagenes/login/cerebro.svg'
import Nocheck from '../../imagenes/login/nocheck.svg'
import check from '../../imagenes/login/check.svg'

function LoginComponent() {
    return(
        <div className="contentLogin">
           <div className="leftLogin">
               <img src={Datos} width="323px" height="348px" alt=""/>
               <img src={Logo} width="367px" height="90px" alt=""/>
           </div>
           <div className="rightLogin">
               <img src={Liston} width="170px" height="330px" alt=""/>
                <form action="" className="contentFormLogin">
                    <div className="formLoginTop">
                        <div className="sectionLogin">
                            <h4 className="textSectionLogin">Nombre</h4>
                            <input type="text" name="" className="campTextLogin"/>
                        </div>
                        <div className="sectionLogin">
                            <h4 className="textSectionLogin">Correo</h4>
                            <input type="text" name="" className="campTextLogin"/>
                        </div>
                        <div className="sectionLogin">
                            <h4 className="textSectionLogin">Empresa</h4>
                            <label htmlFor="checkSelectLogin" className="contSelectLogin">
                                <div  className="selectLogin">
                                    <span className="material-icons arrowSelectLogin">
                                        arrow_drop_down
                                    </span>
                                </div>
                                <input type="checkbox" name="" id="checkSelectLogin"/>
                                <div className="selectorOpenLogin">
                                    <div className="iconArrowSelect">
                                        <span className="material-icons arrowSelectLogin">
                                            arrow_drop_up
                                        </span>
                                    </div>
                                    <div className="contentOptionLogin">
                                        <p className="textOptionLogin">option1</p>
                                        <p className="textOptionLogin">option2</p>
                                        <p className="textOptionLogin">option3</p>
                                        <p className="textOptionLogin">option4</p>
                                        <p className="textOptionLogin">option5</p>
                                        <p className="textOptionLogin">option6</p>
                                        <p className="textOptionLogin">option7</p>
                                        <p className="textOptionLogin">option8</p>
                                        <p className="textOptionLogin">option9</p>
                                        <p className="textOptionLogin">option10</p>
                                        <p className="textOptionLogin">option11</p>
                                        <p className="textOptionLogin">option12</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="sectionLogin">
                            <h4 className="textSectionLogin">Empresa</h4>
                            <label htmlFor="checkSelectLogin2" className="contSelectLogin">
                                <div  className="selectLogin">
                                    <span className="material-icons arrowSelectLogin">
                                        arrow_drop_down
                                    </span>
                                </div>
                                <input type="checkbox" name="" id="checkSelectLogin2"/>
                                <div className="selectorOpenLogin2">
                                    <div className="iconArrowSelect">
                                        <span className="material-icons arrowSelectLogin">
                                            arrow_drop_up
                                        </span>
                                    </div>
                                    <div className="contentOptionLogin">
                                        <p className="textOptionLogin">option1</p>
                                        <p className="textOptionLogin">option2</p>
                                        <p className="textOptionLogin">option3</p>
                                        <p className="textOptionLogin">option4</p>
                                        <p className="textOptionLogin">option5</p>
                                        <p className="textOptionLogin">option6</p>
                                        <p className="textOptionLogin">option7</p>
                                        <p className="textOptionLogin">option8</p>
                                        <p className="textOptionLogin">option9</p>
                                        <p className="textOptionLogin">option10</p>
                                        <p className="textOptionLogin">option11</p>
                                        <p className="textOptionLogin">option12</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="sectionLogin">
                            <h4 className="textSectionLogin">Empresa</h4>
                            <label htmlFor="checkSelectLogin3" className="contSelectLogin">
                                <div  className="selectLogin">
                                    <span className="material-icons arrowSelectLogin">
                                        arrow_drop_down
                                    </span>
                                </div>
                                <input type="checkbox" name="" id="checkSelectLogin3"/>
                                <div className="selectorOpenLogin3">
                                    <div className="iconArrowSelect">
                                        <span className="material-icons arrowSelectLogin">
                                            arrow_drop_up
                                        </span>
                                    </div>
                                    <div className="contentOptionLogin">
                                        <p className="textOptionLogin">option1</p>
                                        <p className="textOptionLogin">option2</p>
                                        <p className="textOptionLogin">option3</p>
                                        <p className="textOptionLogin">option4</p>
                                        <p className="textOptionLogin">option5</p>
                                        <p className="textOptionLogin">option6</p>
                                        <p className="textOptionLogin">option7</p>
                                        <p className="textOptionLogin">option8</p>
                                        <p className="textOptionLogin">option9</p>
                                        <p className="textOptionLogin">option10</p>
                                        <p className="textOptionLogin">option11</p>
                                        <p className="textOptionLogin">option12</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="formLoginBottom">
                        <div className="terminosCondiciones">
                            <input type="checkbox" name="" id="checkTerminosCondiciones"/>
                            <label className="contentChecksTerminos" htmlFor="checkTerminosCondiciones">
                                <img src={check} className="checkTermninos" alt=""/>
                                <img src={Nocheck} className="noCheckTermninos" alt=""/>
                            </label>
                            <h4 className="texTerminos">
                            Autorizo el <b>Tratamiento de Información<br/>de datos personales.</b>
                            </h4>
                        </div>
                        <button className="enviarLogin">Enviar</button>
                    </div>    
                </form>   
               <img src={Cerebro} width="153px" height="322px" alt=""/>
           </div>


        </div>
    );

}
export default LoginComponent;