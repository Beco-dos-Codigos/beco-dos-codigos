import './LandingPage.css'; // Importando estilos específicos para esse componente
import fotoMariaLeao from './assets/maria-leao.png'


function LandingPage() {
    return (
        <div>
            {/* Seção principal com título e CTA */}
            <div className="hero-section">
                <h1>Transforme sua carreira com Beco dos Códigos</h1>
                <p>Acompanhe as últimas tendências em programação e desenvolvimento com foco em tecnologias e geoprocessamento.</p>
                <a href="#" className="cta-btn">Inscreva-se agora</a>
            </div>

            {/* Seção sobre a criadora */}
            <section className="creator">
                {/* <h2>Criadora e Idealizadora</h2> */}
                <div className="creator-container">
                    <img src={fotoMariaLeao} alt="Maria Leão" />
                    
                    <div className="creator-info">
                        <h3>Maria Leão</h3>
                        <p>Engenheira cartógrafa e agrimensora formada pela UFRA, com especialização em geoprocessamento. Apaixonada por tecnologia e inovação, Maria é a força criativa por trás do Beco dos Códigos, unindo sua expertise em geoprocessamento com a programação para transformar a forma como lidamos com dados geoespaciais.</p>
                    </div>
                </div>
            </section>

            {/* Seção de O que oferecemos */}
            <section className="features">
                <h2>O que oferecemos</h2>
                <ul>
                    <li>Cursos práticos e atualizados</li>
                    <li>Comunidade engajada para programadores</li>
                    <li>Conteúdo focado em GIS e programação</li>
                </ul>
            </section>

        </div>
    );
}

export default LandingPage;