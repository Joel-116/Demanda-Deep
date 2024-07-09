document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var trackingNumber = document.getElementById('trackingNumber').value.trim();
    if (trackingNumber !== '') {
        document.getElementById('trackingResults').innerHTML = '<p>O produto com código ' + trackingNumber + " está em trânsito.</p>";
    } else {
        alert("Por favor, digite um código de rastreamento válido.");
    }
});
