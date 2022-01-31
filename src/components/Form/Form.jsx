import ServicioPrecio from '../ServicioPrecio/ServicioPrecio'
import styles from '../../styles.module.css'

const Form = () => {
	return (
		<section className={`${styles.form_container}`}>
			<ServicioPrecio />
			<form className={`${styles.form}`}>
				<input className={`${styles.inputs}`} placeholder='First Name'/>
				<input className={`${styles.inputs}`} placeholder='Last Name'/>
				<input className={`${styles.inputs}`} placeholder='Email Address'/>
				<input className={`${styles.inputs}`} placeholder='Password'/>
				<input type='submit' value='claim your free trial' className={`${styles.button}`}/>
				<>
					<p>
						By clicking the button, you are agreeing to our{' '}
						<span> Terms and Services </span>
					</p>
				</>
			</form>
		</section>
	)
}

export default Form
