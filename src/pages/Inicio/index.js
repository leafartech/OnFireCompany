import styles from './Inicio.module.css'
import { NavLink } from 'react-router-dom'

function Inicio() {
    return (
        <div className={styles.inicio}>
            <NavLink to="/metabolic">Metabolic Fire</NavLink>
        </div>
    )
}

export default Inicio