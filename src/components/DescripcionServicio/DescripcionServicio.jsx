import styles from '../../styles.module.css'

const DescripcionServicio = () => {
	return (
		<article className={`${styles.d_flex_col} ${styles.servicio_des} `}>
			<>
				<h1> Learn to code by watching others </h1>
			</>
			<>
				<p>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</p>
			</>
		</article>
	)
}

export default DescripcionServicio
