import Header from 'components/Header'
import styles from './Offer.module.css'
import HeroFlex from 'components/HeroFlex'
import ProductOffer from 'components/ProductOffer'
import Footer from 'components/Footer'

export default function Offer() {
    return (
        <div className={ styles.offer }>
            <Header button="Quero aproveitar essa oferta" coloredTitle="Promoção relâmpago:" title="Compre 2 Metabolics e ganhe 1 Glutamina de 300g" subtitle="É bem simples, na compra de dois Metabolic Fire, você ganha uma Glutamina da Integral Médica de 300g gratuitamente!" image="./img/OfferPage/bg.png"/>
            <main>
                <HeroFlex imagePath="./img/OfferPage/glutamine.png" title="O QUE É A GLUTAMINA?" subtitle={["A glutamina é um aminoácido que é excelente para quem pratica atividades físicas. Ele ajuda na manutenção da massa muscular, evitando que ela seja consumida para produção de energia.", "Além disso, ela auxilia na recuperação muscular pós treino e no fortalecimento do sistema imunológico.", "Atualmente, o preço de no mercado da Glutamina é de R$89, mas aproveitando essa oferta especial do Metabolic você consegue uma unidade de 300g de Glutamina 100% gratuita!"]} />
                <HeroFlex title="Metabolic + Glutamina" ulSubtitle="Confira os benefícios dessa mistura poderosa" list={ true } imagePath="./img/OfferPage/power.png" subtitle={["Melhor recuperação muscular", "Muito mais disposição", "Manutenção da massa muscular", "Fortanelcimento do sistema imunológico", "Acelera o metabolismo"]}/>                
                <ProductOffer title="Oferta relâmpago" imagePath="./img/OfferPage/product.png"  discount="Ganhe R$89" baloon="Compre e ganhe" fullPrice="DE 403,00" mainPrice="POR 314"/>
            </main>
            <Footer />
        </div>
    )
}