import styles from './CustomSeparator.module.css';
import img from './../../../img/ChristianSaad-15.png'

export default function CustomSeparator() {
    return (
        <div className={styles.container}>
            <hr />
            <img src={img} alt="" className={styles.logo} />
            <hr />
        </div>
    )
}