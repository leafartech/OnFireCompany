import { NavLink } from 'react-router-dom'
import styles from './Offer.module.css'

export default function ProductOffer({ title, imagePath, baloon, mainPrice, fullPrice, discount, buttonPath, desc, bg}) {
    return (
        <div className={ styles.productOffer }>
            <div className={ `${styles.card} ${bg ? styles.bg : ''}` }>
                <h2>{ title }</h2>
                <div className={ styles.divImage }>
                    <img src={ imagePath } alt={ title } />
                    <p className={ styles.baloon }>{baloon}</p>
                </div>
                { discount ?
                    <p className={ styles.discount }>{ discount }</p>
                : ''}
                { desc ?
                    <p className={ styles.desc }>{ desc }</p>
                : ''}
                <div className={ styles.price }>
                    <h4>{ fullPrice }</h4>
                    <h3>{ mainPrice }</h3>
                </div>
                <NavLink to={buttonPath}>COMPRAR AGORA</NavLink>
                <p className={ styles.footer }>Entrega em até 7 dias úteis via Transportadora*</p>
            </div>
        </div>
    )
}