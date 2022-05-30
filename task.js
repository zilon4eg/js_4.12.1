const textArea = document.getElementById('editor');

if (localStorage.getItem('text')) {
    textArea.value = localStorage.getItem('text');
}

textArea.addEventListener('keyup', () => {
    const textContent = textArea.value;
    localStorage.setItem('text', textContent);
});
