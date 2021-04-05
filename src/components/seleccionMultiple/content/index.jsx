import './style.css'
import Tiempo from '../../../imagenes/seleccion/tiempo.svg'
import EstrellaRellena from '../../../imagenes/seleccion/estrella.svg'
import EstrellaVacia from '../../../imagenes/seleccion/estrellavacia.svg'

function ContentLevelsComponent() {
    return(
        <div className="contentFondoSeleccion">
           <div className="contentContainerSeleccion">
               <div className="contentContainerSeleccionTop">
                   <div className="temporizadorSeleccion">
                       <img src={Tiempo} height="100%" width="100%" alt=""/>
                       <h1 className="numTemporizadorSeleccion">45</h1>
                   </div>
                   <div className="contentPuntuacionSeleccion">
                       <div className="ayudasSeleccion">
                           <h3 className="textAyudaSeleccion">
                           ¡USA UNA AYUDA!
                           </h3>
                       </div>
                       <div className="contStarSeleccion">
                           <img src={EstrellaRellena} alt=""/>
                           <img src={EstrellaRellena} alt=""/>
                           <img src={EstrellaVacia} alt=""/>
                       </div>
                   </div>
                   <div className="contentNumQuestionSeleccion">
                       <h3 className="numQuestionSeleccion"><b>1</b>/5</h3>
                   </div>
               </div>
               <div className="contentContainerSeleccionBottom">
                   <div className="questionSeleccion"></div>
                   <div className="contOptionsSeleccion"></div>
               </div>
           </div>


        </div>
    );

}
export default ContentLevelsComponent;