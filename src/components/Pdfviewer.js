import React from 'react'
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from '../assets/resume.pdf'

function pdfviewer() {
  return (
    <div className="App">
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
    <div id="pdfviewer">
        <Viewer fileUrl={filePDF} /> 
    </div>
    </Worker>
    </div>
  )
}

export default pdfviewer