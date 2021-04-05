import './style.css';
import Content from '../../components/login';
import Logo from "../../imagenes/login/ecopetrol.png"

function LoginContainer() {
    return(
            <div className="containerLoginMain">
                <Content></Content>
                <div className="animacionLogin">
                    <div className="logoAnimationLogin">
                        <img  src={Logo} alt=""/>
                    </div>
                    
                </div>
            </div>
        
    );

}
export default LoginContainer;