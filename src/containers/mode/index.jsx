import './style.css';
import Header from '../../components/mode/header/index';
import Body from '../../components/mode/Body/index';

function Mode() {
    return(
        <div className="containerMainMode">
            <Header></Header>
            <Body></Body>
        </div>
    );
}
export default Mode;