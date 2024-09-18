// JavaScript for handling text selection and form submission
document.addEventListener('DOMContentLoaded', () => {
    const englishText = document.getElementById('english-text');
    const form = document.getElementById('evaluation-form');
    const segments = [
        { id: "segment-1", spanish: "Aquí está el texto en español.", english: "Here is the English text." },
        { id: "segment-2", spanish: "Otro texto en español.", english: "Another English text." },
    ];
    let currentSegment = 0; 
    let selectedText = '';

    function displaySegment() {
        document.getElementById("spanish-text").innerText = segments[currentSegment].spanish;
        document.getElementById("english-text").innerText = segments[currentSegment].english;
        document.getElementById("segment-id").value = segments[currentSegment].id; // Update hidden segment ID
    }

    window.onload = function() {
        displaySegment();

    }

    document.getElementById("next-segment").addEventListener("click", function() {
        // Move to the next segment if available
        if (currentSegment < segments.length - 1) {
            currentSegment++; // Increment the current segment index
            displaySegment(); // Update the page with the new segment
        } else {
            alert("No more segments.");
        }
    });

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
