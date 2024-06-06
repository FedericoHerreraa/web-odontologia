import styles from './CustomSeparator.module.css';
import img from './../../../img/LOGO.jpg'

export default function CustomSeparator() {
    return (
        <div className={styles.container}>
            <hr />
            <img src={img} alt="" style={{ width: '80px', borderRadius: '10px'}} />
            <hr />
        </div>
    )
}