import styles from './Card.module.css'

export default function Card({title, text, gradient, gap}) {
    return (
        <div className={ `${styles.cardDiv} `}>
            <div className={ `${styles.card} ${gradient ? styles.gradient : ''}` }>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}