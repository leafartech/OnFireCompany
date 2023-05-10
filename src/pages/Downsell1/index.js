import Header from 'components/Header'
import styles from './Downsell.module.css'
import HeroFlex from 'components/HeroFlex'
import Card from 'components/Card'
import Text from 'components/Text'
import Button from 'components/Button'
import ProductOffer from 'components/ProductOffer'
import Dropdown from 'components/Dropdown'
import Footer from 'components/Footer'

export default function Downsell1() {
    const faq = [{
        title: 'A compra é segura?', text: 'Nós utilizamos a mesma tecnologia que grandes bancos utilizam. Não se preocupe, os seus dados estão seguros.'}, {title: 'Quais os métodos de pagamento', text: 'Disponibilizamos os 3 meios de pagamento em nossa loja: PIX, Boleto bancário e cartão de crédito.'}, { title: 'Como funciona a entrega?', text: 'Quando um pedido é feito, nós o processamos no mesmo dia para que o(s) produto(s) já seja(m) enviados na manhã seguinte. *O tempo de entrega depende do frete que selecionar, sendo no máximo de 8 dias úteis*'}, {title: 'Por onde terei acesso à aula?', text: 'Após a compra, nossa equipe entrará em contato diretamente com você através do Whatsapp para passar as informações da aula.'}, {title: 'Outras dúvidas', text: 'Deixamos aqui o contato da nossa equipe de suporte para que consiga tirar outras dúvidas mais facilmente: 99959-9911.'}]


    return (
        <div className={ styles.downsell } id="oferta">
            <Header 
                coloredTitle="Paranbéns!"
                title="Você foi selecionada."
                subtitle="Você acaba de ganhar uma aula exclusiva com um especialista que vai abordar vários aspectos do inchaço, desde as suas causas até como evitá-lo!"
                button="Não quero perder essa chance"
                buttonPath="/"
                image="../img/OfferPage/bgImg4.png"
                secondary={true}
            />
            <main>
                {/* Quem vai ministrar a aula */}
                <HeroFlex 
                    // imagePath="../img/OfferPage/bgImg4.png"
                    title="Especialista na área da nutrição"
                    subtitle={["Esta aula foi preparada por um especialista em saúde que já atendeu + de 5.000 pacientes ao longo de 10 anos."]}
                    textTop={true}
                    video="true"
                />
                {/* O que será abordado nessa aula */}
                <HeroFlex
                    // title="O que você vai aprender?"
                    ulSubtitle={["Tópicos que serão abordados:"]}
                    subtitle={["Causas comuns de inchaço na barriga", "Alimentos que podem causar inchaço", "Hábitos alimentares saudávels", "Importância da hidratação", "O papel do exercício físico", "Suplementos alimentares"]}
                    list={true}
                    secondary={true}
                    mtop={true}
                />
                <Text title="O que você vai aprender" />
                <Card
                    title="Causas dos inchaços"
                    text="Compreenda os principais fatores que podem contribuir para o inchaço abdominal."
                />
                <Card
                    title="Boas práticas alimentares"
                    text="Saiba identificar alimentos que podem contribuir para inchaço e saiba como ajustar a sua dieta para evitá-los."
                />
                <Card
                    title="Fatores que podem reduzir o inchaço"
                    text="Conheça alguns dos principais fatores que podem te ajudar a reduzir e até eliminar o inchaço"
                />
                {/* Apresentar preço */}
                <HeroFlex
                    title="Oferta exclusiva"
                    subtitle={["Com essa aula, você vai conseguir entender de fato a relação da constipação com o inchaço e boas práticas para reduzir os impactos negativos no corpo.", "Essa oferta é única e não será oferecida novamente."]}
                    imagePath="../img/OfferPage/bgImg5.png"
                    mtopSpace={true}
                    textTop={true}
                />
                <ProductOffer
                    title="Aula exclusiva"
                    mainPrice="R$150"
                    fullPrice="R$199"
                    discount="OFERTA ÚNICA"
                    imagePath="../img/offer/4.png"
                    noFooter={true}
                    baloon={"off"}
                    buttonText={"Quero aroveitar essa oferta"}
                    desc="Aula com especialista sobre constipação e inchaços."
                />
                <div className={ styles.cta }>
                    <a className={ styles.botaoOut }>Não incluir</a>
                    <a className={ styles.botao }>Incluir aula</a>
                </div>
                <Text title="F.A.Q"/>
                <Dropdown
                    liDrowdown={faq}
                />
            </main>
            <Footer secondary={true}/>
        </div>
    )
}