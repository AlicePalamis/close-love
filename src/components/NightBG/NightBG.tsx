import styles from './NightBG.module.scss';

const NightBg = () => {
    return (
        <div className={styles.area}>
            <div className={styles.night}>
                {[Array.from(Array(100)).map((_, i) =>
                    <div key={i} className={styles.shootingStar} />
                )]}
            </div>
        </div>
    )
}

export default NightBg