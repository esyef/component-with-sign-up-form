import styles from './styles.module.css'
import DescriptionService from './components/DescriptionService/DescriptionService'
import Form from './components/Form/Form'

function App() {
  return (
    <div className={styles.container}>
      <DescriptionService  />
      <Form />
    </div>
  )
}

export default App
