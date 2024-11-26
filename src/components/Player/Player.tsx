import styles from './Player.module.scss'
import useSound from 'use-sound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

import Adriana from './../../audio/ardiana.mp3';
import CallOfSilence from './../../audio/call_of_silence.mp3';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [play, { stop }] = useSound(CallOfSilence, {
        volume: 0.06,
        onend: () => {
            setIsPlaying(false)
        }
    });

    const playSound = () => {
        play()
        setIsPlaying(true)
    }

    const stopSound = () => {
        stop()
        setIsPlaying(false)
    }

    return (
        <div className={styles.area}>
            <div className={styles.faButton}>
                {isPlaying
                    ? <FontAwesomeIcon onClick={() => stopSound()} icon={faStop} />
                    : <FontAwesomeIcon className={styles.shakingAnimation} onClick={() => playSound()} icon={faPlay} />}
            </div>
        </div>
    )
}

export default Player