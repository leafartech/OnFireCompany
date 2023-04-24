import styles from './Card.module.css'

export default function Card({title, text}) {
    return (
        <div className={ styles.cardDiv}>
            <div className={ styles.card }>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}