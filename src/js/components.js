import { siteNavLinks } from './site-data.js';

const getBasePath = () => {
  const pathname = window.location.pathname;
  return pathname.includes('/pages/') ? '../' : './';
};

const loadComponent = async (name) => {
  const base = getBasePath();
  const url = `${base}components/${name}.html`;
  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`Falha ao carregar componente: ${url}`);
    return '';
  }
  return response.text();
};

const populateNavLinks = () => {
  const navLinksContainer = document.getElementById('nav-links');
  if (!navLinksContainer) return;
  const base = getBasePath();

  siteNavLinks.forEach((link) => {
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = link.href.replace('./', base);
    a.textContent = link.text;
    navLinksContainer.appendChild(a);
  });
};

const setupMenuToggle = () => {
  const menuButton = document.getElementById('menuButton');
  const navLinks = document.getElementById('nav-links');
  if (!menuButton || !navLinks) return;

  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuButton.classList.toggle('open');
  });
};

const importComponents = async () => {
  const placeholders = document.querySelectorAll('[data-component]');
  await Promise.all(
    Array.from(placeholders).map(async (placeholder) => {
      const name = placeholder.dataset.component;
      placeholder.innerHTML = await loadComponent(name);
    })
  );
  populateNavLinks();
  setupMenuToggle();
};

document.addEventListener('DOMContentLoaded', importComponents);
