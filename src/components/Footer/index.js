import styles from './Footer.module.css'

export default function Footer({secondary, terciary}) {
    return (
        <footer className={ styles.footer }>
            { secondary ?
            <img src="../img/logo2.png" alt="Logo da OnFire" />
            :
            <>
                {terciary ?
                    <img src="../../img/logo2.png" alt="Logo da OnFire" />
                : 
                    <img src="./img/logo2.png" alt="Logo da OnFire" />
                }
            </>
            }
            <p className={ styles.smallP }>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.</p>
            <p>Onfire Company 2023 - Todos os direitos reservados.</p>
        </footer>
    )
}