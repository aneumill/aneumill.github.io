import React from 'react';
import Pdfviewer from '../components/pdf/Pdfviewer.js'
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer'

function Resume() {
  return (
    <>
     <Navigation />
   <Pdfviewer/>
   <Footer />
    
    </>
  )
}

export default Resume