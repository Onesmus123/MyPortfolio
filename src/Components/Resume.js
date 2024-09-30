import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWid(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = wid < 700 ? (wid > 475 ? 0.8 : 0.5) : 1;

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
        <Page pageNumber={1} scale={scale} />
      </Document>

      <a href={pdf} target='_blank' rel="noreferrer" download="Mutyauvyu's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  )
}

export default Resume;
