import React from 'react'

const PdfButton = () => {

  const downloadPDF = () => {
    // Get the content of the page
    const content = document.getElementById('content').innerHTML;

    // Create a Blob from the content
    const blob = new Blob([content], { type: 'application/octet-stream' });

    // Create a link element
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'page.pdf';

    // Append the link element to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link element from the body
    document.body.removeChild(link);
  };
  return (
    <div className="fixed bottom-4 right-4">
      <button 
        className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-md"
        onClick={downloadPDF}
      >
        Download as PDF
      </button>
    </div>
  )
}

export default PdfButton
