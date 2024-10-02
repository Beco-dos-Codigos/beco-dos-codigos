// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>🖥️</div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navItem}>Página Inicial</a>
        <a href="#about" style={styles.navItem}>Sobre</a>
        <a href="#services" style={styles.navItem}>Serviços</a>
        <a href="#projects" style={styles.navItem}>Projetos</a>
        <a href="#contact" style={styles.navItem}>Contato</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
  },
  logo: {
    fontSize: '24px',
    color: 'white',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Header;
