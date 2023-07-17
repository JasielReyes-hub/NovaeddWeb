function downloadPDF() {
    // Ruta al archivo PDF que deseas descargar
    var pdfUrl = 'pdf/PECIOS.VENDEDOR.pdf';

    // Crea un enlace de descarga temporal
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'PECIOS.VENDEDOR.pdf';

    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  }