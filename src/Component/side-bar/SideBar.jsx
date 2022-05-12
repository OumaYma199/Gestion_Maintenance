import './SideBar.css'
import {LineStyle,Timeline} from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarappear">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active"> 
                     <LineStyle className='sidebarIcon' />
                     Statistique
                    </li>
                    <li className="sidebarListItem"> 
                     <Timeline className='sidebarIcon'/>
                    </li>      
                 
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Radionavigation</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem"> 
                     <LineStyle />Home
                    </li>
                    <li className="sidebarListItem"> 
                     <Timeline />Analyse
                    </li>
                     
                </ul>
            </div>        
            </div>
            </div>
    );
}

export default Sidebar;
