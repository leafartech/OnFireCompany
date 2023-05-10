import { NavLink } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({ buttonPath, buttonText, anchor }) {
    if (anchor) {
        return (
            <div className={ styles.botaoDiv }>
            <a href={ buttonPath } className={ styles.botao }>
                { buttonText }
            </a>
        </div>    
        )
    }
    return (
        <div className={ styles.botaoDiv }>
            <NavLink to={ buttonPath } className={ styles.botao }>
                { buttonText }
            </NavLink>
        </div>
    )
}