import ServicePrice from '../ServicePrice/ServicePrice'

const Form = () => {

	return (
		<section>
			<ServicePrice />
			<form>
				<button type='submit'>claim your free trial</button>

				<div>
					<p>
						By clicking the button, you are agreeing to our{' '}
						<span> Terms and Services </span>
					</p>
				</div>
			</form>
		</section>
	)
}

export default Form
