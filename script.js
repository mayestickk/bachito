document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            status.textContent = '⏳ Enviando mensaje...';
            status.className = 'form-status';
            
            const submitBtn = form.querySelector('button[type="