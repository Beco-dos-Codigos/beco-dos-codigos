import React from 'react';
import './MainSection.css'; // Estilos específicos para as sections

function MainSection() {
  return (
    <main>
      <section id="home" className="section">
        <h2>Bem-vindo ao nosso Site</h2>
        <p>Somos Maria Leão e Djalma Filho, apaixonados por programação e tecnologia.</p>
      </section>
      
      <section id="about" className="section">
        <h2>Sobre Nós</h2>
        <p>Combinamos nossa experiência para oferecer soluções inovadoras e eficientes para qualquer desafio de programação.</p>
      </section>
      
      <section id="services" className="section">
        <h2>Serviços</h2>
        <p>Oferecemos desenvolvimento de aplicações web, mobile, automação e consultoria técnica.</p>
      </section>
      
      <section id="projects" className="section">
        <h2>Projetos</h2>
        <p>Veja alguns dos nossos projetos, onde aplicamos as melhores práticas e tecnologias de ponta.</p>
        {/* Aqui você pode adicionar links ou exemplos dos projetos */}
      </section>
      
      <section id="contact" className="section">
        <h2>Contato</h2>
        <p>Entre em contato conosco para discutir como podemos ajudar em seu próximo projeto!</p>
      </section>
    </main>
  );
}

export default MainSection;
