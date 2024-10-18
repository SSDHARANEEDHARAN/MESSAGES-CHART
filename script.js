const messageInput = document.getElementById('messageInput');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');
const maxChars = 200;
let warningShown = false; 

messageInput.addEventListener('input', function() {
    const currentLength = messageInput.value.length;
    counter.textContent = `${currentLength}/${maxChars} characters`;

    if (currentLength >= maxChars) {
        if (!warningShown) {
            warning.classList.remove('hidden'); 
            warningShown = true; 
        }
        messageInput.value = messageInput.value.slice(0, maxChars); 
        counter.textContent = `${maxChars}/${maxChars} characters`; 
    } else {
        warning.classList.add('hidden'); 
        warningShown = false; 
    }
});
