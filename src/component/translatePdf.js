import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfUploader = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onTextExtractSuccess = (items) => {
    const textContent = items.map((item) => item.str).join(' ');
    setText(textContent);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Reset state
    setNumPages(null);
    setPageNumber(1);
    setText('');
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const buffer = new Uint8Array(e.target.result);
        const data = buffer.buffer;

        window.pdfjsLib.getDocument({ data })
          .then((pdf) => pdf.getPage(1))
          .then((page) => page.getTextContent())
          .then(onTextExtractSuccess);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>
      {file && (
        <div>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              onRenderSuccess={({ canvasContext, viewport }) => {
                window.pdfjsLib.getDocument({ data: file })
                  .then((pdf) => pdf.getPage(pageNumber))
                  .then((page) => page.getTextContent())
                  .then(onTextExtractSuccess);
              }}
            />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div>
            <h3>Extracted Text:</h3>
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfUploader;
