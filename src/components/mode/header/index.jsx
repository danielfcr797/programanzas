import './style.css';
function HeaderMode() {
    return(
        <div className="contMainHeaderMode">
            <div className="contLefthMode">
                <div className="border">
                    <h1 className="fontBox">TODOS</h1>
                    <h1 className="fontJugamos">JUGAMOS,</h1>
                    <h1 className="fontBox">TODOS</h1>
                    <h1 className="fontBox">GANAMOS</h1>

                </div>
            </div>

            <div className="contRigthMode">
                <div className="sectionTop">
                    <h1 className="nameUser" >PATRICIA</h1>
                </div>
                <div className="sectionBottom">
                    <div className="boton">
                        <h1 className="fontH1">ELIGE EL RETO QUE QUIERAS JUGAR</h1>
                    </div>

                </div>

            </div>

        </div>
    );
}
export default HeaderMode;