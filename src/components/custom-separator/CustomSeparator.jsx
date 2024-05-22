import styles from './CustomSeparator.module.css';

export default function CustomSeparator() {
    return (
        <div className={styles.container}>
            <hr />
            <p>Logo</p>
            <hr />
        </div>
    )
}