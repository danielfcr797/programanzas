import './style.css'
import TodosRespondemos from '../../../imagenes/levels/Respondemos.png'
import TodosJugamos from '../../../imagenes/home/todosGanamos.svg'

function HeaderLevelsComponent() {
    return(
        <div className="contentHeaderLevels">
           <div className="ContentLeftHeaderLevels">
                <img src={TodosJugamos} width="90%" height="90%" alt=""/>
           </div>
           <div className="ContentCenterHeaderLevels">
                <h1 className="nameUserHeaderLevels" >PATRICIA</h1>
                <div className="textCenterHeaderLevels">ELIGE EL NIVEL QUE <b>QUIERES JUGAR</b> </div>
           </div>
           <img src={TodosRespondemos}  height="88%" width="20%" alt=""/>



        </div>
    );

}
export default HeaderLevelsComponent;