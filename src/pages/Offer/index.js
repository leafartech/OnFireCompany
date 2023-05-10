import Header from 'components/Header'
import styles from './Offer.module.css'
import HeroFlex from 'components/HeroFlex'
import ProductOffer from 'components/ProductOffer'
import Footer from 'components/Footer'
import Card from 'components/Card'
import Text from 'components/Text'
import Img from 'components/Img'
import Testimonials from 'components/Testimonials'
import Dropdown from 'components/Dropdown'
import Garantia from 'components/Garantia'
import Button from 'components/Button'

export default function Offer() {
    const testMessages = [
        {
            name: 'Carla Narrafal',
            esp: 'CLT, 33 ANOS, Ribeirão Preto - SP',
            text: '“O Metabolic Fire tem sido uma ajuda extra muito importante nesse processo de emagrecimento saudável e natural, reduzindo minha vontade de comer alimentos calóricos e me ajudando a manter minha dieta em dia, perdi 7kg em dois meses. Recomendo o produto para quem está buscando uma ajuda extra nesse processo de emagrecimento, mas sempre lembrando da importância de manter uma alimentação equilibrada e praticar atividades físicas regularmente.”',
        },
        {
            name: 'Juliana Fonseca',
            esp: 'EMPRESÁRIA, 39 ANOS, Pelotas - RS',
            text: '“Decidi comprar o Metabolic Fire depois de ver muitas recomendações positivas nas redes. E não me arrependi! Desde que comecei a utilizar o produto, tenho notado uma diferença significativa na minha perda de peso. Eu me sinto mais disposta durante o dia, o que me ajuda muito a manter a rotina de atividades físicas e, consequentemente, a queimar mais calorias. Além disso, o Metabolic Fire reduziu minha vontade de comer alimentos calóricos e doces, ajudando a manter minha dieta em dia.”',
        },
        {
            name: 'Rafael Borges Bezerra',
            esp: 'ESTUDANTE, 18 ANOS, ILHÉUS - BA',
            text: '“Vi um amigo mostrando o Metabolic Fire no Instagram... fiquei interessado porque ele disse que estava conseguindo ser mais organizado e menos procrastinador. Como estudante para tentar passar no Enem, eu fico extremamente atarefado e não sei em que focar na semana. Comprei pra testar e o meu único arrependimento é de ter comprado só uma unidade e ter que esperar a reposição do estoque.”',
        },
        {
            name: 'Helena Conceição',
            esp: 'EMPRESÁRIA, 29 ANOS, Rio de Janeiro - RJ',
            text: '“Eu sempre tive dificuldade para manter uma rotina de atividades físicas por causa da falta de disposição. Mas desde que comecei a utilizar o Metabolic Fire, eu senti uma grande diferença. Não só estou com mais disposição para as atividades diárias, mas também para malhar. Com ele, consegui perder alguns kg e me sinto muito mais confiante e feliz com meu corpo. Recomendo muito pra quem quer ter mais disposição e emagrecer de forma saudável!”',
        }
    ]
    const faq = [
        {title: 'A compra é segura?', text: 'Nós utilizamos a mesma tecnologia que grandes bancos utilizam. Não se preocupe, os seus dados estão seguros.'},
        {title: 'Qual o prazo de entrega?', text: `- O processamento do pedido feito pela
        nossa loja virtual é instantâneo e o envio
        do produto costuma ser feito na manhã
        do dia seguinte.
        - O tempo de espera desde o envio até a
        chegada do Metabolic Fire no endereço
        solicitado costuma demorar apenas
        8 dias úteis.
        
        - Se precisar de mais informações, entre em contato conosco que nossa equipe de suporte irá tirar todas as  dúvidas restantes.                           
        `},
        {title: 'Quais os métodos de pagamento?', text: `- Em nossa loja, os meios de pagamento são: Cartão, Pix ou Boleto.
        - Aceitamos todas as principais bandeiras de cartões e parcelamento.`},
        {title: 'Como funciona o reembolso?', text: `Nossa política de reembolso é simples: se, por qualquer motivo, você não sentir os benefícios que prometemos com o uso do nosso suplemento, você pode solicitar um reembolso total. 
        Sem burocracia ou perguntas complicadas, devolveremos 100% do valor da compra.`},
        {title: 'Outras dúvidas', text: 'Deixamos aqui o contato da nossa equipe de suporte para que consiga tirar outras dúvidas mais facilmente: 99959-9911.'}
    ]
    return (
        <div className={ styles.offer }>
            <Header button="Quero aproveitar essa oferta" buttonPath="/oferta#ofertas" coloredTitle="Você se sente incomodada" title="com aquele inchaço abdominal?" subtitle="Se sim, você está no lugar certo. Nosso combo do Metabolic + Glutamina foi criado pensando exatamente em você." image="./img/OfferPage/bg.png"/>
            <main>
                <Img path="./img/OfferPage/bgImg.png" alt="Imagem de lutadora"/>
                <HeroFlex
                    title="O que é esse combo?"
                    subtitle={["É a união de dois suplementos poderosíssimos. O Metabolic que te fornece energia mental e física e a Glutamina que ajuda a melhorar a saúde intestinal.", "Juntos, eles podem reduzir o inchaço da região abdominal, a constipação e podem ainda te fornecer energia, disposição e segurança na hora de vestir aquela roupa!"]}
                    mtop={true}
                />
                <Text 
                    // top={"negative"}
                    title="Para quem é esse combo?"
                    subtitle="Se você se identificar com alguma dessas características, ele é para você:"
                />
                <div className={ styles.cards }>
                    <Card 
                        gradient={ true }
                        title={'1° Baixa autoestima'}
                        text={'Sabemos como esse inchaço ou "buchinho" pode ser a fonte de muita insegurança e isso afeta diretamente a sua autoestima.'}
                    />
                    <Card 
                        gradient={ true }
                        title={'2° Desconforto'}
                        text={'Sabemos também o quanto a constipação pode ser desconfortável e afetar a sua qualidade de vida. Sentir-se sempre de barriga "cheia" nunca é agradável.'}
                    />
                    <Card 
                        gradient={ true }
                        title={'3° Restrições alimentares'}
                        text={'Muitas vezes, criam-se restrições a alimentos que ouvimos falar que faz mal e que incham a barriga. Por isso, deixou de comer coisas que gosta ou se sente culpada quando come?'}
                    />
                </div>
                <Button anchor={true} buttonPath="/oferta#ofertas" buttonText="Comprar agora"/>
                <Text 
                    title="Quem já usou, aprovou!"
                    subtitle="Confira alguns depoimentos de clientes que adoraram o produto."
                />
                <Testimonials 
                    people={testMessages}
                />
                <Text title="" subtitle=""/>
                <Text title="Sinta-se bem consigo mesma!" subtitle="Recupere a sua autoestima."/>
                <Img path="./img/OfferPage/bgImg3.png" alt="Mulher se olhando no espelho"/>
                <HeroFlex 
                    title="O que é a Glutamina?"
                    imagePath="./img/OfferPage/glutamine.png"
                    subtitle={["A glutamina é um aminoácido excelente para quem pratica atividades físicas. Ele ajuda na manutenção da massa muscular, evitando que ela seja consumida para produção de energia.", "Além disso, ela auxilia na recuperação muscular pós treino e no fortalecimento do sistema imunológico.", "Atualmente, o preço de no mercado da Glutamina é de R$89, mas aproveitando essa oferta especial do Metabolic você consegue uma unidade de 300g de Glutamina 100% gratuita!"]}
                    textTop={true}
                />
                <Button anchor={true} buttonPath="/oferta#ofertas" buttonText="Comprar agora"/>
                <HeroFlex title="União poderosa" ulSubtitle="Confira os benefícios dessa combinação:" list={ true } imagePath="./img/OfferPage/power.png" 
                subtitle={["Reduz inchaço e a constipação", "Aumento da autoestima", "Muito mais disposição", "Reduz o desconforto", "Fortanelcimento do sistema imunológico", "Mais energia e produtividade"]} 
                bottomSubtitle='Diminua a constipação e o "buchinho" com essa suplementação poderosa e sinta-se confiante e segura de si mesma!'/>
                <HeroFlex 
                    subtitle={[""]}
                    title=""
                    imagePath={false}
                />
                <HeroFlex 
                    title="Promoção especial"
                    subtitle={['Apenas as 2 unidades de Metabolic já custam o valor desse combo. Então você está "ganhando" a Glutamina de 300g, o mesmo que R$89,00. ', "Vai deixar essa oportunidade passar?"]}
                    imagePath={false}
                />
                <div className={ styles.offerDiv } id="ofertas">
                    <ProductOffer 
                        buttonPath="/oferta/parabens#oferta" title="Combo básico" imagePath="./img/OfferPage/product.png"  discount="Ganhe R$89" baloon="Compre e ganhe" fullPrice="DE 403,00" mainPrice="POR 314" desc="Glutamina 300g + 2 potes de Metabolic."
                    />
                    <ProductOffer 
                        buttonPath="/oferta/parabens#oferta" title="Combo + Ebook" imagePath="./img/OfferPage/product2.png"  discount="Ganhe R$99" baloon="Compre e ganhe" fullPrice="DE 433,00" mainPrice="POR 334" desc="Glutamina 300g + 2 potes de Metabolic + E-book: como evitar de fato constipação e inchaços."
                    />
                </div>
                <Garantia />
                <Text title="F.A.Q"/>
                <Dropdown 
                    liDrowdown={faq}
                />
                <div className={ styles.cardsData }>
                        <Card gradient={true} title="Seus dados estão seguros" text="Utilizamos a mesma segurança virtual que bancos internacionais aprovam. Seus dados estão seguros!"/>
                        <Card gradient={true} title="Frete grátis" text="Enviamos de graça para todo Brasil pelos Correios. Sua encomenda está 100% segura!"/>
                        <Card gradient={true} title="Entre em contato" text="Whatsapp: (73) 9 9959-9911" />
                    </div>
            </main>
            <Footer />
        </div>
    )
}