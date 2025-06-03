import React from 'react';

export default function Inicio({ formState, formActions, onNext }) {
	const { nombre, email, telefono } = formState;
	const { setNombre, setEmail, setTelefono } = formActions;

	return (
		<div className="card p-4">
			<h3 className="mb-3">Inicio</h3>

			<div className="mb-3">
				<label className="form-label">Nombre Completo</label>
				<input
					type="text"
					className="form-control"
					value={nombre}
					onChange={e => setNombre(e.target.value)}
					placeholder="Ingresa tu nombre completo"
				/>
			</div>

			<div className="mb-3">
				<label className="form-label">Correo Electrónico</label>
				<input
					type="email"
					className="form-control"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Ingresa tu correo electrónico"
				/>
			</div>

			<div className="mb-3">
				<label className="form-label">Teléfono</label>
				<input
					type="tel"
					className="form-control"
					value={telefono}
					onChange={e => setTelefono(e.target.value)}
					placeholder="Ingresa tu número de teléfono"
				/>
			</div>

			<button
				className="btn btn-primary mt-2"
				onClick={onNext}
			>
				Siguiente
			</button>
		</div>
	);
}