$(document).ready(function() {
    $('#generateBtn').on('click', function() {
        const text = $('#UrlSitioWeb').val().trim();
        
        if (!text) {
            $('#resultContent').html('<span class="error">Por favor ingresa texto</span>');
            return;
        }
        
        // Limpiar contenido anterior
        $('#resultContent').empty();
        
        // Crear canvas para el QR
        const $canvas = $('<canvas>').attr('id', 'qr-canvas');
        $('#resultContent').append($canvas);
        

        QrCreator.render({
            text: text,
            radius: 0.5,
            ecLevel: 'H',
            fill: '#536DFE',
            background: null,
            size: 200
        }, document.getElementById('qr-canvas'));
        
        // Agregar botón de descarga
        const $downloadBtn = $('<button>')
            .addClass('download-btn')
            .text('Descargar QR')
            .on('click', function() {
                downloadQR('qr-canvas', 'qrcode.png');
            });
            
        $('#resultContent').append($downloadBtn);
    });
    
    function downloadQR(canvasId, filename) {
        const canvas = document.getElementById(canvasId);
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
});