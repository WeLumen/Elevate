// --- ACCORDION ---
document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isVisible = content.style.display === 'block';

    // Fecha todos
    document.querySelectorAll('.accordion-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.accordion-toggle').forEach(btn => {
      btn.textContent = btn.textContent.replace('▲', '▼');
    });

    // Abre o clicado
    if (!isVisible) {
      content.style.display = 'block';
      button.textContent = button.textContent.replace('▼', '▲');
    }
  });
});

// --- MODAL (INFO BOX) ---
function openInfo() {
  document.getElementById('infoBox').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closeInfo() {
  document.getElementById('infoBox').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
