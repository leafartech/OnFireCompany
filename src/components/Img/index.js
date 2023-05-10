import styles from './Img.module.css'

export default function Img({ path, alt }) {
    return (
        <div className={ styles.img }>
            <img src={ path } alt={alt} />
        </div>
    )
}