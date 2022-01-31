import styles from './styles.module.css'
import DescripcionServicio from './components/DescripcionServicio/DescripcionServicio'
import Form from './components/Form/Form'

function App() {
  return (
    <div className={`${styles.container} ${styles.d_grid}`}>
      <DescripcionServicio  />
      <Form />
    </div>
  )
}

export default App
