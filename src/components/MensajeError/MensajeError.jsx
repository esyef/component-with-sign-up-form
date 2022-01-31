import styles from '../../styles.module.css'

const MensajeError = ({ text, type }) => {
	return <p className={styles.msg_error} role={type}>{text}</p>
}

export default MensajeError
