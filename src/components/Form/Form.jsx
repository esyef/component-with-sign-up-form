import ServicioPrecio from '../ServicioPrecio/ServicioPrecio'
import styles from '../../styles.module.css'
import { useForm } from 'react-hook-form'
import MensajeError from '../MensajeError/MensajeError'


const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const enviarDatos = (data) => {
		alert(JSON.stringify(data))
		reset()
	}

	return (
		<section className={`${styles.form_container}`}>
			<ServicioPrecio />
			<form className={`${styles.form}`} onSubmit={handleSubmit(enviarDatos)}>
				<input
					className={errors.firstName ? `${styles.input_error}` : `${styles.inputs}`}
					placeholder='First Name'
					type='text'
					aria-invalid={errors.firstName ? 'true' : 'false'}
					{...register('firstName', { required: 'First Name cannot be empty' })}
				/>

				{errors.firstName && (
					<MensajeError text={errors.firstName.message} type='alert' />
				)}

				<input
					className={errors.lastName ? `${styles.input_error}` : `${styles.inputs}`}
					type='text'
					placeholder='Last Name'
					aria-invalid={errors.lastName ? 'true' : 'false'}
					{...register('lastName', { required: 'Last Name cannot be empty' })}
				/>

				{errors.lastName && (
					<MensajeError text={errors.lastName.message} type='alert' />
				)}

				<input
					className={errors.email ? `${styles.input_error}` : `${styles.inputs}`}
					placeholder='Email Address'
					type='email'
					aria-invalid={errors.email ? 'true' : 'false'}
					{...register('email', {
						required: 'Email cannot be empty',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Looks like this is not an email',
						},
					})}
				/>

				{errors.email && <MensajeError text={errors.email.message} type='alert' />}

				<input
					className={errors.password ? `${styles.input_error}` : `${styles.inputs}`}
					placeholder='Password'
					type='password'
					aria-invalid={errors.password ? 'true' : 'false'}
					{...register('password', {
						required: 'Password cannot be empty',
						minLength: {
							value: 6,
							message: 'Please enter at least 6 characters',
						},
					})}
				/>

				{errors.password && (
					<MensajeError text={errors.password.message} type='alert' />
				)}

				<input
					type='submit'
					value='claim your free trial'
					className={`${styles.button}`}
				/>
				<>
					<p className={styles.terminos_condiciones}>
						By clicking the button, you are agreeing to our{' '}
						<span> Terms and Services </span>
					</p>
				</>
			</form>
		</section>
	)
}

export default Form
