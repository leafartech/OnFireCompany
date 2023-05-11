import styles from './Text.module.css'

export default function Text({ title, subtitle, top }) {
    return (
        <div className={ `${styles.text} ${top === 'negative' ? styles.topNegative : ''}` }>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}