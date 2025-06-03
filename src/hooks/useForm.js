import { useState } from 'react';

export default function useForm() {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [telefono, setTelefono] = useState('');
	const [tipo, setTipo] = useState('');
	const [complejidad, setComplejidad] = useState('');
	const [plazo, setPlazo] = useState('');

	return {
		formState: { nombre, email, telefono, tipo, complejidad, plazo },
		formActions: { setNombre, setEmail, setTelefono, setTipo, setComplejidad, setPlazo },
	};
}
