// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Maria Leão e Djalma Filho. Todos os direitos reservados.</p>
      <p>Feito com 💻 e ☕️ por Maria Leão e Djalma Filho.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
    marginTop: '50px',
  }
};

export default Footer;
