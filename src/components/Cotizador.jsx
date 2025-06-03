import React from 'react';

export default function Cotizador({ formState, formActions, onBack, onNext, calcularCotizacion }) {
	const { tipo, complejidad, plazo } = formState;
	const { setTipo, setComplejidad, setPlazo } = formActions;

	return (
		<div className="card p-4">
			<h3 className="mb-3">Cotizador</h3>

			<div className="mb-3">
				<label className="form-label">Tipo de Servicio</label>
				<select
					className="form-select"
					value={tipo}
					onChange={e => setTipo(e.target.value)}
				>
					<option value="">Selecciona</option>
					<option value="Diseño Web">Diseño Web</option>
					<option value="Analisis de Datos">Análisis de Datos</option>
				</select>
			</div>

			<div className="mb-3">
				<label className="form-label">Nivel de Complejidad</label>
				<select
					className="form-select"
					value={complejidad}
					onChange={e => setComplejidad(e.target.value)}
				>
					<option value="">Selecciona</option>
					<option value="Baja">Baja</option>
					<option value="Media">Media</option>
					<option value="Alta">Alta</option>
				</select>
			</div>

			<div className="mb-3">
				<label className="form-label">Plazo</label>
				<select
					className="form-select"
					value={plazo}
					onChange={e => setPlazo(e.target.value)}
				>
					<option value="">Selecciona</option>
					<option value="Rapido">Rápido</option>
					<option value="Normal">Normal</option>
					<option value="Largo">Largo</option>
				</select>
			</div>

			<button
				className="btn btn-secondary mt-2"
				onClick={onBack}
			>
				Atrás
			</button>
			<button
				className="btn btn-primary mt-2"
				onClick={() => {
					const resultado = calcularCotizacion();
					if (resultado === null) {
						alert('Por favor, completa todos los campos para calcular la cotización.');
						return;
					}
					onNext();
				}}
			>
				Ver Resultado
			</button>
		</div>
	);
}
