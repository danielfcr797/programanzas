import './style.css';
import Content from '../../components/levels/content';
import Header from '../../components/levels/header';

function LevelsContainer() {
    return(
            <div className="containerLevelsMain">
                <Header></Header>
                <Content></Content>
            </div>
        
    );

}
export default LevelsContainer;