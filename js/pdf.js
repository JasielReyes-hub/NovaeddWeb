function downloadPDF() {
    // Ruta al archivo PDF que deseas descargar
    var pdfUrl = 'pdf/CatalogoNovaedd.pdf';

    // Crea un enlace de descarga temporal
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CatalogoNovaedd.pdf';

    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  }