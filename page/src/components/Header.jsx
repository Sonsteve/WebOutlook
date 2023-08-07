import '../style/Header.scss';
import { Input } from 'semantic-ui-react';
import Face from '../img/face.jpg'

const Header=()=>{
    return(
        <div id='head'>
            <div id='left'><p>LOGO</p></div>
            <div id='right'><Input icon='search' iconPosition='right' className='search' />
            <button><i aria-hidden="true" class="heart outline large icon"></i></button>
            <button><i aria-hidden="true" class="bell outline large icon"></i></button>
            <button><i aria-hidden="true" class="heart outline large icon"></i></button>
            <button><img src={Face} style={{width:"22px"}}/></button>
            </div>
        </div>
    )
}

export default Header;