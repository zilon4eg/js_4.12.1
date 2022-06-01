const textArea = document.getElementById('editor');

textArea.value = localStorage.getItem('text');

textArea.addEventListener('keyup', () => {
    const textContent = textArea.value;
    localStorage.setItem('text', textContent);
});

const btn = document.querySelector('.card-clear');

btn.addEventListener('click', () => {
    textArea.value = '';
    localStorage.removeItem('text');
});
