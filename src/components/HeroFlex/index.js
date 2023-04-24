import styles from './HeroFlex.module.css'

export default function HeroFlex({ imagePath, title, ulSubtitle, bottomSubtitle, subtitle, list, mtop }) {
    if (list) {
        return (
            <div className={ `${styles.heroList} ${mtop ? styles.mtop : ''}` }>
                { imagePath === false ?
                ''
                : 
                <div className={ styles.divImage }>
                    <img src={ imagePath } alt={ title } />
                </div> 
                }
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
                <p className={ styles.bottomSubtitle }>{bottomSubtitle}</p>
            </div>
        )
    }
    return (
        <div className={ `${styles.heroFlex} ${mtop ? styles.mtop : ''}` }>
            { imagePath === false ?
                ''    
            : 
            <div className={ styles.divImage }>
                <img src={ imagePath } alt={ title } />
            </div>
            }
            <div className={ styles.text }>
                <h2>{ title }</h2>
                {subtitle.map(paragraph => <p>{paragraph}</p>)}
            </div>
        </div>
    )
}