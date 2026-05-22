// Central UI helpers used by lesson pages (toggle sections & answers)

export function toggle(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('.ex-toggle');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  if (arrow) arrow.classList.toggle('open', !isOpen);
}

export function toggleAnswer(btn) {
  const content = btn.nextElementSibling;
  const isOpen = content.classList.contains('open');
  content.classList.toggle('open', !isOpen);
  btn.textContent = isOpen ? '▸ Ver resposta' : '▾ Ocultar resposta';
}

// expose globally for inline onclick handlers that still call toggle/toggleAnswer
window.toggle = toggle;
window.toggleAnswer = toggleAnswer;
