import Input from '../Input/Input'
import ServicePrice from '../ServicePrice/ServicePrice'
import styles from './Form.module.css'


const Form = () => {
	const firstName = ''
	return (
		<section>
			<ServicePrice />
			<form className={styles.form}>
				<Input
					type='text'
					value={firstName}
					name={firstName}
					placeholder='First firstName'
				/>
				<Input
					type='text'
					value={firstName}
					name={firstName}
					placeholder='First firstName'
				/>
				<Input
					type='text'
					value={firstName}
					name={firstName}
					placeholder='First firstName'
				/>
				<Input
					type='text'
					value={firstName}
					name={firstName}
					placeholder='First firstName'
				/>

				<button type='submit' className={styles.button}>
					claim your free trial
				</button>

				<div className={styles.terms}>
					<p className={styles.text}>
						By clicking the button, you are agreeing to our{' '}
						<span className={styles.text_span}> Terms and Services </span>
					</p>
				</div>
			</form>
		</section>
	)
}

export default Form
