import styles from './menu.module.css';
import MenuItem from './menu-item';


export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul>
                <li> <MenuItem text="Home" route="/" icon="https://super.so/icon/light/home.svg"/></li>
                <li> <MenuItem text="About" route="/about"icon="https://super.so/icon/light/zap.svg" /></li>
                <li> <MenuItem text="Contact" route="/contact" icon="https://super.so/icon/light/message-circle.svg"/></li>
               
            </ul>
        </nav>
    );
}