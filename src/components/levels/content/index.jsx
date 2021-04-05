import './style.css'
import Level1 from '../../../imagenes/levels/level1.svg'
import Level2 from '../../../imagenes/levels/level2.svg'
import Level3 from '../../../imagenes/levels/level3.svg'
import Level4 from '../../../imagenes/levels/level4.svg'
import Level5 from '../../../imagenes/levels/level5.svg'
import Level6 from '../../../imagenes/levels/level6.svg'
function ContentLevelsComponent() {
    return(
        <div className="contentFondoLevels">
           <div className="contentContainerLevels">
               <div className="contCardsLevels">
                   <div className="cardLevel">
                       <h2 className="textCardLevel">NIVEL</h2>
                       <h1 className="numberCardLevel">1</h1>
                   </div>
                   <div className="cardLevel">
                        <h2 className="textCardLevel">NIVEL</h2>
                        <h1 className="numberCardLevel">2</h1>
                   </div>
                   <div className="cardLevel">
                        <h2 className="textCardLevel">NIVEL</h2>
                        <h1 className="numberCardLevel">3</h1>
                   </div>
                   <div className="cardLevel">
                        <h2 className="textCardLevel">NIVEL</h2>
                        <h1 className="numberCardLevel">4</h1>
                   </div>
                   <div className="cardLevel">
                        <h2 className="textCardLevel">NIVEL</h2>
                        <h1 className="numberCardLevel">5</h1>
                   </div>
                   <div className="cardLevel">
                        <h2 className="textCardLevel">NIVEL</h2>
                        <h1 className="numberCardLevel">6</h1>
                   </div>
               </div>
               <button className="verRankingLevels">VER <b>RANKING</b></button>
               <h3>Ver reglas del juego</h3>
           </div>


        </div>
    );

}
export default ContentLevelsComponent;