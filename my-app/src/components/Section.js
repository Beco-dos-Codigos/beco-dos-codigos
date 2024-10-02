// src/components/Section.js
import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.content}>
        {children}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '50px 20px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  content: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
  }
};

export default Section;
