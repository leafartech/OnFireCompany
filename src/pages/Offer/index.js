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
        {title: 'Como ingerir', text: 'Nesse caso, indicamos a ingestão de duas unidades por dia: Primeira ao acordar e a segunda 1h após o almoço'},
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
        {title: 'O Metabolic possui contra-indicações?', text: `O Metabolic Fire é recomendado para todos que querem perder peso mais rápido, aumentar o foco e a concentração, a produtividade, a disposição para atividades e melhorar a flora intestinal. 
        Embora ele possua apenas substâncias naturais em sua fórmula, não o recomendamos para gestantes.`},
        {title: 'Em quanto tempo terei resultados?', text: `- Os resultados costumam variar de indivíduo para indivíduo, entretanto entre o primeiro e o terceiro dia você já deve sentir os benefícios do Metabolic Fire.

        - Existem casos de clientes que, já no primeiro dia de uso, se sentiram uma pessoa muito mais ativa e disposta e, no terceiro dia, já notaram a perda de peso.`},
        {title: 'Qual a fórmula do Metabolic Fire?', text: `A sua fórmula é composta por um total de 7 compostos, combinados nas proporções e medidas exatas para que haja um melhor aproveitamento de todas as substâncias. Os elementos da sua fórmula são: Coenzima Q10,`},
        {title: 'Quais os métodos de pagamento?', text: `- Em nossa loja, os meios de pagamento são: Cartão, Pix ou Boleto.
        - Aceitamos todas as principais bandeiras de cartões e parcelamento em até 12x `},
        {title: 'Como ele age no organismo?', text: `-  Nossa fórmula exclusiva foi elaborada para trabalhar com o seu corpo, e não contra ele, ajudando a fornecer benefícios significativos de forma natural.
        - Quando você ingere o nosso encapsulado, seus ingredientes começam a agir no organismo imediatamente. Eles são absorvidos pelo trato gastrointestinal, e depois são transportados para as células do corpo. Lá, eles iniciam uma série de reações bioquímicas que trazem os efeitos do Metabolic Fire .`},
        {title: 'Metabolic Fire na ANVISA', text: ` O Metabolic Fire possui sua fórmula aprovada pela Agência Nacional de Vigilância Sanitária (ANVISA). 
        A aprovação pelo órgão foi imediata, pois perceberam que se trata de um produto sério e que entrega o que promete`},
        {title: 'Como funciona o reembolso?', text: `Nossa política de reembolso é simples: se, por qualquer motivo, você não sentir os benefícios que prometemos com o uso do nosso suplemento, você pode solicitar um reembolso total. 
        Sem burocracia ou perguntas complicadas, devolveremos 100% do valor da compra.`},
    ]
    return (
        <div className={ styles.offer }>
            <Header button="Quero aproveitar essa oferta" buttonPath="/oferta#ofertas" coloredTitle="Promoção relâmpago:" title="Compre 2 Metabolics e ganhe 1 Glutamina de 300g" subtitle="É bem simples, na compra de dois Metabolic Fire, você ganha uma Glutamina da Integral Médica de 300g gratuitamente!" image="./img/OfferPage/bg.png"/>
            <main>
                <Img path="./img/OfferPage/bgImg.png" alt="Imagem de lutadora"/>
                <Text 
                    top={"negative"}
                    title="Por que ele é ideal para você?"
                    subtitle="Confira os benefícios desse combo"
                />
                <div className={ styles.cards }>
                    <Card 
                        gradient={ true }
                        title={'1° Elimine sua insegurança'}
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores incidunt fuga consectetur architecto sit dolor ratione quaerat et inventore. Quas quaerat molestias quos. Natus minus dolorum obcaecati quae deleniti!'}
                    />
                    <Card 
                        gradient={ true }
                        title={'2° Sinta-se bem consigo mesma'}
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores incidunt fuga consectetur architecto sit dolor ratione quaerat et inventore. Quas quaerat molestias quos. Natus minus dolorum obcaecati quae deleniti!'}
                    />
                    <Card 
                        gradient={ true }
                        title={'3° Vista aquela roupa que tanto gosta'}
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores incidunt fuga consectetur architecto sit dolor ratione quaerat et inventore. Quas quaerat molestias quos. Natus minus dolorum obcaecati quae deleniti!'}
                    />
                </div>
                <Text title="Sinta-se bem consigo mesma!" subtitle="Recupere a sua autoestima."/>
                <Img path="./img/OfferPage/bgImg3.png" alt="Mulher se olhando no espelho"/>
                <Button anchor={true} buttonPath="/oferta#ofertas" buttonText="Comprar agora"/>
                <Text 
                    title="Quem já usou, aprovou!"
                    subtitle="Confira alguns depoimentos de clientes que adoraram o produto."
                />
                <Testimonials 
                    people={testMessages}
                />
                <HeroFlex 
                    title="O que é a Glutamina?"
                    imagePath="./img/OfferPage/glutamine.png"
                    subtitle={["A glutamina é um aminoácido excelente para quem pratica atividades físicas. Ele ajuda na manutenção da massa muscular, evitando que ela seja consumida para produção de energia.", "Além disso, ela auxilia na recuperação muscular pós treino e no fortalecimento do sistema imunológico.", "Atualmente, o preço de no mercado da Glutamina é de R$89, mas aproveitando essa oferta especial do Metabolic você consegue uma unidade de 300g de Glutamina 100% gratuita!"]}
                    textTop={true}
                />
                <Button anchor={true} buttonPath="/oferta#ofertas" buttonText="Comprar agora"/>
                <HeroFlex title="União poderosa" ulSubtitle="Confira os benefícios dessa mistura poderosa" list={ true } imagePath="./img/OfferPage/power.png" subtitle={["Reduz inchaço", "Melhor recuperação muscular", "Muito mais disposição", "Manutenção da massa muscular", "Fortanelcimento do sistema imunológico", "Mais produtividade"]}/>
                <HeroFlex 
                    subtitle={["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores incidunt fuga consectetur architecto sit dolor ratione quaerat et inventore. Quas quaerat molestias quos. Natus minus dolorum obcaecati quae deleniti!"]}
                    title="Votlar para a dor e relebrar a promessa"
                    imagePath={false}
                />
                <div className={ styles.offerDiv } id="ofertas">
                    <ProductOffer buttonPath="https://seguro.onfirecompany.com.br/r/EW1PPFVLBC" title="Combo básico" imagePath="./img/OfferPage/product.png"  discount="Ganhe R$89" baloon="Compre e ganhe" fullPrice="DE 403,00" mainPrice="POR 314" desc="Glutamina 300g + 2 potes de Metabolic."/>
                    <ProductOffer buttonPath="https://seguro.onfirecompany.com.br/r/EW1PPFVLBC" title="Combo especial" imagePath="./img/OfferPage/product2.png"  discount="Ganhe R$89" baloon="Compre e ganhe" fullPrice="DE 403,00" mainPrice="POR 334" desc="Glutamina 300g + 2 potes de Metabolic + E-book de planos alimentares."/>
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