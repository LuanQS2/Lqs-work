document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting the default way

    // Get form values
    const teamName = document.getElementById('teamName').value;
    const modality = document.getElementById('modality').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const responsibleName = document.getElementById('responsibleName').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const email = document.getElementById('email').value;
    const howDidYouFindUs = document.getElementById('howDidYouFindUs').value;

    // Simple validation (you can improve this)
    if (!teamName || !modality || !state || !city || !responsibleName || !whatsapp || !email || !howDidYouFindUs) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Optionally send the data to the server using AJAX (example using Fetch API)
    const formData = {
        teamName,
        modality,
        state,
        city,
        responsibleName,
        whatsapp,
        email,
        howDidYouFindUs
    };

    fetch('https://your-server-endpoint.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
        } else {
            alert('Ocorreu um erro ao enviar o formulário.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Erro ao enviar o formulário.');
    });
});