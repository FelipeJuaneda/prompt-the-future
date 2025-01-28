import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Button, Box, Typography } from "@mui/material";

const PDFSlideShow = ({ pdfUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);

  // Evento que se activa al cargar el documento
  const onDocumentLoadSuccess = (pdf) => {
    setNumPages(pdf.numPages);
  };

  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => (numPages && prev < numPages ? prev + 1 : prev));

  return (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
      <Box sx={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <Viewer
          fileUrl={pdfUrl}
          onDocumentLoad={onDocumentLoadSuccess}
          pageIndex={currentPage - 1} // Mostrar la página actual
        />

        {/* Controles de navegación */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Anterior
          </Button>
          <Typography variant="body2" sx={{ mx: 2 }}>
            Página {currentPage} de {numPages || "..."}
          </Typography>
          <Button onClick={goToNextPage} disabled={numPages && currentPage === numPages}>
            Siguiente
          </Button>
        </Box>
      </Box>
    </Worker>
  );
};

export default PDFSlideShow;
