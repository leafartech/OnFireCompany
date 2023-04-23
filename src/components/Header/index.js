import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header({ title, coloredTitle, subtitle, button, image, buttonPath }) {
    return (
        <header className={ styles.header }>
            <div className={ styles.divImage }>
                <img src={ image } alt={ title } />
            </div>
            <div className={ styles.text }>
                <h1><span className={ styles.coloredTitle }>{coloredTitle}</span> {title}</h1>
                <h3>{subtitle}</h3>
                <NavLink to={buttonPath}>{button}</NavLink>
            </div>
        </header>
    )
}