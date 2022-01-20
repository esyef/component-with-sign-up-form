import styles from './DescriptionService.module.css'
import base from '../../utils.module.css'

const DescriptionService = () => {
	return (
		<article className={`${styles.service} ${base.my_large}`}>
			<div className={base.my_small}>
				<h1 className={styles.title}> Learn to code by watching others </h1>
			</div>
			<div className={styles.text}>
				See how experienced developers solve problems in real-time. Watching
				scripted tutorials is great, but understanding how developers think is
				invaluable.
			</div>
		</article>
	)
}

export default DescriptionService
