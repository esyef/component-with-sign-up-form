import styles from './Input.module.css';
import utils from '../../utils.module.css'

const Input = ({type,value,name,placeholder}) => {
  return <input
    type={type}
    value={value}
    name={name}
    placeholder={placeholder}
    className={`${styles.input} ${utils.my_small}`}
  />;
};

export default Input;
