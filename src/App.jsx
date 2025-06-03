import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useForm from './hooks/useForm';
import usePDF from './hooks/usePDF';
import Inicio from './components/Inicio';
import Cotizador from './components/Cotizador';
import Resultado from './components/Resultado';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const { formState, formActions } = useForm();
	const { nombre, email, telefono, tipo, complejidad, plazo } = formState;
	const { setNombre, setEmail, setTelefono, setTipo, setComplejidad, setPlazo } = formActions;

	const [paso, setPaso] = useState(1);
	const [cotizacion, setCotizacion] = useState(null);

	const { generarPDF } = usePDF();

	const calcularCotizacion = () => {
		const camposValidos = tipo && complejidad && plazo && nombre && email && telefono;

		if (!camposValidos) {
			return null;
		}

		let base = 1000;

		switch (tipo) {
			case 'Diseño Web':
				base += 500;
				break;
			case 'Analisis de Datos':
				base += 700;
				break;
		}

		switch (complejidad) {
			case 'Baja':
				break;
			case 'Media':
				base *= 1.5;
				break;
			case 'Alta':
				base *= 2;
				break;
		}

		switch (plazo) {
			case 'Rapido':
				base *= 1.3;
				break;
			case 'Normal':
				break;
			case 'Largo':
				base *= 0.8;
				break;
		}

		setCotizacion(base);

		return base;
	};

	const resetearFormulario = () => {
		setNombre('');
		setEmail('');
		setTelefono('');
		setTipo('');
		setComplejidad('');
		setPlazo('');
		setCotizacion(null);
		setPaso(1);
	};

	return (
		<div className="container d-flex justify-content-center align-items-center min-vh-100">
			<div className="w-100" style={{ maxWidth: '50vw' }}>
				<h1 className="mb-4 text-center">Cotizador de Servicios</h1>

				<AnimatePresence mode="wait">
					{paso === 1 && (
						<motion.div
							key="inicio"
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
						>
							<Inicio
								formState={formState}
								formActions={formActions}
								onNext={() => setPaso(2)}
							/>
						</motion.div>
					)}

					{paso === 2 && (
						<motion.div
							key="cotizador"
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
						>
							<Cotizador
								formState={formState}
								formActions={formActions}
								onBack={() => setPaso(1)}
								onNext={() => setPaso(3)}
								calcularCotizacion={calcularCotizacion}
							/>
						</motion.div>
					)}

					{paso === 3 && (
						<motion.div
							key="resultado"
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
						>
							<Resultado
								formState={formState}
								cotizacion={cotizacion}
								generarPDF={() =>
									generarPDF({
										nombre,
										email,
										telefono,
										tipo,
										complejidad,
										plazo,
										cotizacion,
									})
								}
								onReset={resetearFormulario}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default App;
