import { useEffect, useState } from "react"
import LoveYou from "../LoveYou/LoveYou"
import NightBg from "../NightBG/NightBG"
import Player from "../Player/Player"
import styles from './Main.module.scss'

const Main = () => {
    return (
        <div className={styles.area}>
            <div className={styles.night}>
                <NightBg />
            </div>
            <LoveYou  />
            <div className={styles.player}>
                <Player />
            </div>
        </div>
    )
}

export default Main