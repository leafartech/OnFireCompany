import styles from './Header.module.css'

export default function Header({ title, coloredTitle, subtitle, button, image, imagePc, buttonPath, top, secondary, video }) {

    function loaded(e) {
        // document.querySelector(`#${e.target.id}`).click()
        // console.log('aqui')
    }
    
    return (
        <header className={ styles.header }>
            { secondary ? 
            <img src="../img/logo.png" className={ styles.logo } alt="Logo do Metabolic" />
            : 
            <img src="./img/logo.png" className={ styles.logo } alt="Logo do Metabolic" />
            }
            <div className={ `${video ? styles.video : ''} ${styles.divImage}` }>
                {image ? 
                    <img src={ image } alt={ title } />
                : ''}
                {imagePc ? 
                    <img src={ imagePc } className={ styles.imagePc } alt={ title } />
                : ''}
            </div>
            <div className={ `${styles.text} ${top ? styles.mtop : ''}` }>
                <h1><span className={ styles.coloredTitle }>{coloredTitle}</span> {title}</h1>
                <h3>{subtitle}</h3>
                <a href={ buttonPath }>{button}</a>
            </div>
        </header>
    )
}