import d1 from './assets/d1.jpeg'
import d2 from './assets/d2.jpeg'
import d3 from './assets/d3.jpeg'
import d4 from './assets/d4.jpeg'
import d5 from './assets/d5.jpeg'
import './Depoimentos.css'
import CardDepoimento from './CardDepoimento'

function Depoimentos () {
    return(
        <>
            <CardDepoimento
                foto={d1}
                nome="João Silva"
                profissao="Desenvolvedor Full Stack"
                relato="O Beco dos Códigos mudou minha visão sobre programação, tornando conceitos complexos mais acessíveis e fáceis de aplicar no dia a dia."/>
            
            <CardDepoimento
                foto={d2}
                nome="Ana Pereira"
                profissao="Especialista em GIS"
                relato="Os conteúdos sobre geoprocessamento foram essenciais para melhorar minhas habilidades e me destacar no mercado de trabalho."/>
            
            <CardDepoimento
                foto={d3}
                nome="Carlos Oliveira"
                profissao="Engenheiro de Software"
                relato="A abordagem prática e direta do Beco dos Códigos me ajudou a aprender novas tecnologias de forma eficiente e rápida."/>
            
            <CardDepoimento
                foto={d4}
                nome="Maria Costa"
                profissao="Analista de Dados"
                relato="Aprendi a lidar com grandes volumes de dados e aplicar soluções de geoprocessamento de forma eficaz. Recomendo a todos."/>
            
            <CardDepoimento
                foto={d5}
                nome="Pedro Santos"
                profissao="Desenvolvedor Mobile"
                relato="Os cursos me ajudaram a dar o próximo passo na minha carreira, trazendo novos desafios e oportunidades."/>
        </>
    )
}

export default Depoimentos