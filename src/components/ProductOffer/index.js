import { NavLink } from 'react-router-dom'
import styles from './Offer.module.css'

export default function ProductOffer({ title, imagePath, baloon, mainPrice, fullPrice, discount}) {
    return (
        <div className={ styles.productOffer }>
            <div className={ styles.card }>
                <h2>{ title }</h2>
                <div className={ styles.divImage }>
                    <img src={ imagePath } alt={ title } />
                    <p className={ styles.baloon }>{baloon}</p>
                </div>
                <p className={ styles.discount }>{ discount }</p>
                <div className={ styles.price }>
                    <h4>{ fullPrice }</h4>
                    <h3>{ mainPrice }</h3>
                </div>
                <NavLink to="https://seguro.onfirecompany.com.br/r/EW1PPFVLBC">COMPRAR AGORA</NavLink>
                <p className={ styles.footer }>Entrega em até 7 dias úteis via Transportadora*</p>
            </div>
        </div>
    )
}