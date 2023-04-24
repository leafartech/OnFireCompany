import { NavLink } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({ buttonPath, buttonText }) {
    return (
        <div className={ styles.botaoDiv }>
            <NavLink to={ buttonPath } className={ styles.botao }>
                { buttonText }
            </NavLink>
        </div>
    )
}