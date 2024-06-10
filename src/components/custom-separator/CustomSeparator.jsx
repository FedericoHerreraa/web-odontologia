import styles from './CustomSeparator.module.css';
import img from './../../../img/LOGO.jpg'

export default function CustomSeparator() {
    return (
        <div className={styles.container}>
            <hr />
            <img src={img} alt="" className={styles.logo} />
            <hr />
        </div>
    )
}