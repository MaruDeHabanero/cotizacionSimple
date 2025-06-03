import jsPDF from 'jspdf';

export default function usePDF() {
    const generarPDF = ({ nombre, email, telefono, tipo, complejidad, plazo, cotizacion }) => {
        const doc = new jsPDF();

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(22);
        doc.text('Cotización de Servicio', 105, 20, { align: 'center' });

        // Línea para dividir
        doc.setLineWidth(0.5);
        doc.line(20, 25, 190, 25);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);

        const detalles = [
            { label: 'Nombre', value: nombre },
            { label: 'Email', value: email },
            { label: 'Teléfono', value: telefono },
            { label: 'Tipo de servicio', value: tipo },
            { label: 'Nivel de complejidad', value: complejidad },
            { label: 'Plazo', value: plazo },
            { label: 'Cotización estimada', value: `$${cotizacion.toFixed(2)} MXN` },
        ];

        let y = 40;
        detalles.forEach(({ label, value }) => {
            doc.setFont('helvetica', 'bold');
            doc.text(`${label}:`, 30, y);
            doc.setFont('helvetica', 'normal');
            doc.text(String(value), 80, y);
            y += 10;
        });

        // Línea que está hasta el final.
        doc.setLineWidth(0.3);
        doc.line(20, y + 5, 190, y + 5);

        // Mensaje al pie
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(10);
        doc.text('Gracias por usar nuestro cotizador de servicios.', 105, y + 15, { align: 'center' });

        // Guardar PDF
        doc.save('cotizacion.pdf');
    };

    return { generarPDF };
}
