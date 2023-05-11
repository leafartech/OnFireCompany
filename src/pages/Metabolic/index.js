import Header from 'components/Header'
import styles from './Metabolic.module.css'
import HeroFlex from 'components/HeroFlex'
import Dropdown from 'components/Dropdown'
import Button from 'components/Button'
import Testimonials from 'components/Testimonials'
import ProductOffer from 'components/ProductOffer'
import Card from 'components/Card'
import Footer from 'components/Footer'

export default function Metabolic() {
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
        <div className={ styles.metabolic }>
            <Header title="físico e mental com o Metabolic Fire" coloredTitle="Desperte o seu POTENCIAL" subtitle="O Metabolic Fire é feito com substâncias e enzimas naturais que podem ajudar na melhora do desempenho físico e mental, como cafeína, coenzima Q10 e vitamina B6." button="QUERO GARANTIR JÁ O MEU" image="./img/MetabolicPage/top.png" imagePc="./img/MetabolicPage/top2.png" buttonPath="/metabolic#ofertas" top={true} />
            <main>
                <HeroFlex imagePath="./img/MetabolicPage/secImg.png" subtitle={["O Metabolic Fire é um suplemento alimentar criado com base no conhecimento e experiência de um nutricionista esportivo altamente qualificado, com quase 10 anos de experiência na área e mais de 5.000 pacientes atendidos."]} title="APRESENTAMOS O METABOLIC FIRE"/>
                <HeroFlex imagePath="./img/MetabolicPage/thirdImg.png" subtitle={["Potencializar a perda de peso", "Melhorar o foco e a concentração", "Ter mais disposição e energia", "Ser mais produtivo no dia a dia"]} ulSubtitle="Qualquer pessoa que quer:" list={true} title="O Metabolic é ideal para" bottomSubtitle="Se você se identificou com alguma dessas características acima, ele é perfeito para você!" />
                <div className={ styles.bgDark }>
                    <HeroFlex imagePath="./img/MetabolicPage/fourthImg.png" subtitle={["Desenvolvida com substâncias de altíssima qualidade que são inseridas nas medidas e proporções ideais para que todos os seus efeitos sejam potencializados ao máximo."]} title="O segredo está na fórmula" />
                    <Dropdown pills={ true } dropdownId="componentes" liDrowdown={[ {title: "Cafeína", text: "É um potente estimulante do sistema nervoso central, o composto bioativo gera uma série de efeitos no organismo como a melhora da cognição, da concentração e do foco. Além de ser o maior estimulante do vigor físico, combate a fadiga, preguiça e procrastinação."}, {title: "Coenzima Q10", text: "Esse antioxidante essencial é conhecido por seu potencial para ajudar a proteger as células do corpo contra danos dos radicais livres. A Coenzima Q10 também pode ser uma ajuda para melhorar a saúde cardiovascular, a produção de energia celular e a saúde da gengiva."}, {title: "Colina", text: "Descubra o Bitartarato de Colina! Esse composto importante é conhecido por seu potencial para ajudar a melhorar a saúde do cérebro, apoiando a função cognitiva, o foco e a memória. O Bitartarato de Colina também pode ser uma ajuda para melhorar a saúde do fígado, do coração e do sistema nervoso."}, {title: "Cromo", text: "Esse mineral essencial é conhecido por seu potencial para ajudar a controlar os níveis de açúcar no sangue e a regular o apetite. O Picolinato de Cromo também pode ser uma ajuda para melhorar a absorção de proteínas, carboidratos e gorduras pelo organismo."}, {title: "Taurina", text: "Ela tem ação antioxidante e atua como anti-inflamatório nos Músculos. Ainda oferece um efeito protetor do cérebro e da Retina. Também age no auxilio da meta consciência e do foco, Atuando na melhoria do receptor GABA, neurotransmissor Que diminui o estado de euforia pela cafeína."}, {title: "Tirosina", text: "É um aminoácido precursor da ação de neurotransmissores como a dopamina, que é usada para estimular os estados de alerta, a sensação de bem estar e retardar o cansaço físico e mental, especialmente durante exercícios intensos."}, {title: "Vitamina B6", text: "Essa vitamina importante é essencial para o funcionamento adequado do sistema nervoso, produção de glóbulos vermelhos, além de ajudar a regular o humor. A vitamina B6 também pode ser uma ajuda para melhorar a saúde do coração, e apoiar a saúde da pele e do cabelo."} ]} />
                    <Button anchor={ true } buttonPath="/metabolic#ofertas" buttonText="comprar agora" />
                    <Testimonials people={ testMessages } title="Confira alguns depoimentos" />
                    <HeroFlex title="Como surgiu o Metabolic Fire?" subtitle={[ "Conheça mais da história desse incrível produto.", "O Metabolic Fire foi cuidadosamente formulado por Jônatas Santa Rosa, o especialista citado anteriormente.", "Com base em sua vasta experiência, ele identificou a necessidade nos pacientes de um suplemento completo que verdadeiramente:" ]} imagePath="./img/MetabolicPage/fire.png" />
                    <HeroFlex list={ true } subtitle={ ["Aumenta a disposição", "Potencializa o desempenho físico", "Aumenta o foco e a concentração", "Aumenta a produtividade"] } mtop={ true }  imagePath={ false } />
                    <HeroFlex imagePath={ false } subtitle={ ["Já conhecendo outros produtos que prometem tudo isso, mas não entregam nada, ele decidiu criar o seu. ", "Um que realmente une o aumento do desempenho físico e mental e que é transparente com o cliente quanto aos reais benefícios.", "Assim, nasceu o Metabolic Fire"] } mtop={ true }/>
                </div>
                <div className={ styles.productOffer } id="ofertas">
                    <ProductOffer bg={ true } baloon="R$189 o pote" desc="Contém 1 pote de Metabolic Fire com 60 cápsulas" mainPrice="POR R$157" imagePath="./img/offer/1.png" title="Metabolic 1 mês" buttonPath="https://seguro.onfirecompany.com.br/r/BDS8I6NGZ3" />
                    <ProductOffer baloon="R$132 por pote" discount="Economize R$170" desc="Contém 3 pote de Metabolic Fire com 180 cápsulas" mainPrice="POR R$387" imagePath="./img/offer/2.png" title="Metabolic 3 meses" buttonPath="https://seguro.onfirecompany.com.br/r/CO01VE2HYX" />
                    
                    <ProductOffer baloon="R$94 por pote" discount="Economize R$475" desc="Contém 5 pote de Metabolic Fire com 300 cápsulas" mainPrice="POR R$467" bg={ true } imagePath="./img/offer/3.png" title="Metabolic 5 meses" buttonPath="https://seguro.onfirecompany.com.br/r/O7YTVJMYFD" />   
                </div>
                <div className={styles.bg}>
                    <HeroFlex imagePath="./img/MetabolicPage/garantia.png" title="Acreditamos na eficácia do Metabolic Fire" subtitle={["Na Metabolic Fire, temos certeza quanto a eficácia do nosso produto, e estamos comprometidos em garantir a satisfação de nossos clientes. É por isso que oferecemos uma garantia de reembolso para qualquer cliente que não esteja completamente satisfeito com nosso produto."]}/>
                    <HeroFlex imagePath={ false } title="F.A.Q" subtitle={[]}/>
                    <Dropdown liDrowdown={ faq } dropdownId="faq"/>
                    <div className={ styles.cards }>
                        <Card title="Seus dados estão seguros" text="Utilizamos a mesma segurança virtual que bancos internacionais aprovam. Seus dados estão seguros!"/>
                        <Card title="Frete grátis" text="Enviamos de graça para todo Brasil pelos Correios. Sua encomenda está 100% segura!"/>
                        <Card title="Entre em contato" text="Whatsapp: (73) 9 9959-9911" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}