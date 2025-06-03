import React from 'react';

export default function Resultado({ formState, cotizacion, generarPDF, onReset }) {
	const { tipo, complejidad, plazo } = formState;

	if (cotizacion === null) return null;

	return (
		<div className="card p-4">
			<h3 className="mb-3">Resultado</h3>

			<p><strong>Tipo de servicio:</strong> {tipo}</p>
			<p><strong>Nivel de complejidad:</strong> {complejidad}</p>
			<p><strong>Plazo:</strong> {plazo}</p>
			<p><strong>Cotización estimada:</strong> ${cotizacion.toFixed(2)} MXN</p>

			<button
				className="btn btn-success"
				onClick={generarPDF}
			>
				Descargar PDF
			</button>

			<button
				className="btn btn-warning mt-2"
				onClick={onReset}
			>
				Nueva Cotización
			</button>
		</div>
	);
}