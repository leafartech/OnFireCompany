import styles from './HeroFlex.module.css'

export default function HeroFlex({ imagePath, title, ulSubtitle, bottomSubtitle, subtitle, list, mtop, mtopSpace, textTop, secondary, terciary, video }) {
    if (list) {
        return (
            <div className={ `${styles.heroList} ${mtop ? styles.mtop : ''}  ${mtopSpace ? styles.mtopSpace : ''}` }>
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
                            {secondary ?
                            <img src="../img/check.png" alt="check list" />
                            : 
                            <>
                                {terciary ?
                                    <img src="../../img/check.png" alt="check list" />
                                : 
                                <img src="./img/check.png" alt="check list" />
                                }
                            </>
                            }
                            <span>{ item }</span>
                        </li>
                    )) }
                </ul>
                {bottomSubtitle ? 
                <p className={ styles.bottomSubtitle }>{bottomSubtitle}</p>
                : ''}
            </div>
        )
    }
    return (
        <div className={ `${styles.heroFlex} ${mtop ? styles.mtop : ''}  ${mtopSpace ? styles.mtopSpace : ''} ${textTop ? styles.textTop : ''}` }>
            { imagePath === false ?
                ''    
            : 
            <div className={ `${video ? styles.video : ''} ${styles.divImage}` }>
                {imagePath ?
                <img src={ imagePath } alt={ title } />
                : ''}
                { video ?
                <>
                    <div className={ styles.bg }></div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3KSxzW8x5pA?controls=1?modestbranding=1&rel=0&showinfo=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </>
                : ''}
            </div>
            }
            <div className={ styles.text }>
                <h2>{ title }</h2>
                {subtitle.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            </div>
        </div>
    )
}