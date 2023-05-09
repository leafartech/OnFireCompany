import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header({ title, coloredTitle, subtitle, button, image, imagePc, buttonPath, top }) {
    return (
        <header className={ styles.header }>
            <img src="./img/logo.png" className={ styles.logo } alt="Logo do Metabolic" />
            <div className={ styles.divImage }>
                <img src={ image } alt={ title } />
                <img src={ imagePc } className={ styles.imagePc } alt={ title } />
            </div>
            <div className={ `${styles.text} ${top ? styles.mtop : ''}` }>
                <h1><span className={ styles.coloredTitle }>{coloredTitle}</span> {title}</h1>
                <h3>{subtitle}</h3>
                <a href={ buttonPath }>{button}</a>
            </div>
        </header>
    )
}