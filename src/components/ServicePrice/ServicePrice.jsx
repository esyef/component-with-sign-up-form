import styles from './ServicePrice.module.css'
import base from '../../utils.module.css'

const ServicePrice = () => {
	return (
		<section className={`${styles.servicePrice} ${base.my_medium}`}>
			<p className={styles.text}>
				<span className={styles.text_bold}>Try it free 7 days</span> then $20/mo. thereafter
			</p>
		</section>
	)
}

export default ServicePrice
