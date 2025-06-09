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
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      buttons.forEach(btn => btn.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      // Add active class to clicked tab and corresponding content
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });

 document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
      });
    });