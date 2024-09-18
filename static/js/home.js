// JavaScript for handling text selection and form submission
document.addEventListener('DOMContentLoaded', () => {
    const englishText = document.getElementById('english-text');
    const form = document.getElementById('evaluation-form');
    let selectedText = '';

    englishText.addEventListener('mouseup', () => {
        const selection = window.getSelection();
        selectedText = selection.toString().trim();
        if (selectedText) {
            document.getElementById('error-type').disabled = false;
            document.getElementById('correct-translation').disabled = false;
        } else {
            document.getElementById('error-type').disabled = true;
            document.getElementById('correct-translation').disabled = true;
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (selectedText) {
            const errorType = document.getElementById('error-type').value;
            const correctTranslation = document.getElementById('correct-translation').value;
            const otherComments = document.getElementById('other-comments').value;
            console.log('Selected text:', selectedText);
            console.log('Error type:', errorType);
            console.log('Correct translation:', correctTranslation);
            console.log('Other comments:', otherComments);
            // TODO: Send data to the server
            alert('Evaluation submitted successfully!');
            // Reset form
            document.getElementById('error-type').value = 'major';
            document.getElementById('correct-translation').value = '';
            document.getElementById('other-comments').value = '';
            document.getElementById('error-type').disabled = true;
            document.getElementById('correct-translation').disabled = true;
        } else {
            alert('Please select text before submitting.');
        }
    });
});