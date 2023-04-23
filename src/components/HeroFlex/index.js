import styles from './HeroFlex.module.css'

export default function HeroFlex({ imagePath, title, ulSubtitle, subtitle, list }) {
    if (list) {
        return (
            <div className={ styles.heroList }>
                <div className={ styles.divImage }>
                    <img src={ imagePath } alt={ title } />
                </div>
                <ul>
                    <h2>{ title }</h2>
                    <p>{ ulSubtitle }</p>
                    { subtitle.map((item, index) => (
                        <li key={index}>
                            <img src="./img/check.png" alt="check list" />
                            <span>{ item }</span>
                        </li>
                    )) }
                </ul>
            </div>
        )
    }
    return (
        <div className={ styles.heroFlex }>
            <div className={ styles.divImage }>
                <img src={ imagePath } alt={ title } />
            </div>
            <div className={ styles.text }>
                <h2>{ title }</h2>
                {subtitle.map(paragraph => <p>{paragraph}</p>)}
            </div>
        </div>
    )
}