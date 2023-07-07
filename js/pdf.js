function downloadPDF() {
    // Ruta al archivo PDF que deseas descargar
    var pdfUrl = 'pdf/FA_202302386307.pdf';

    // Crea un enlace de descarga temporal
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'FA_202302386307.pdf';

    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  }