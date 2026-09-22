const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const form = document.getElementById('lead-form');
const statusNode = document.querySelector('.form-status');

if (form && statusNode) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'collega';

    statusNode.textContent = `Bedankt, ${name}. We nemen binnen één werkdag contact met je op.`;
    statusNode.style.color = '#1a2333';
    form.reset();
  });
}
