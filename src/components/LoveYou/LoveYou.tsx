import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import styles from './LoveYou.module.scss'

const texts = [
    "Я люблю тебя",
    "I love you",
    "Je t'aime",
    "Ik houd van jou",
    "Ich liebe dich",
    "Te quiero",
    "Mahal kita",
    "Eu amo você",
    "Seni seviyorum",
    "Jeg elsker dig",
    "Σε αγαπώ",
    "Kocham Cię",
    "Jag älskar dig",
    "사랑해요",
    "愛してる",
    "Minä rakastan sinua",
    "Ti amo",
    "Aku cinta padamu",
    "أحبك",
    "Amo te",
    "मैं तुमसे प्यार करता हूँ",
    "Jeg elsker deg",
    "Anha zhilak yera",
    "Nga yawne lu oer",
    "Mi amas vin",
    "Ek het jou lief",
    "እወድሻለሁ",
]

const colors = [
    "#8DDCA4",
]

const genSequence = (texts: string[], timeout: number, onAfter?: ((index: number) => () => void)) => {
    const seq = [];
    for (let i = 0; i < texts.length; i++) {
        seq.push(texts[i]);
        seq.push(timeout);
        seq.push('')
        if (onAfter) {
            seq.push(onAfter(i))
        }
    }
    return seq;
}

const LoveYou = () => {
    const [color, setColor] = useState(colors[0])

    return (
        <div
            style={{ color }}
            className={styles.texts}>
            <TypeAnimation
                sequence={genSequence(texts, 5000, (i) => () => {
                    setColor(colors[(i + 1) % colors.length])
                })}
                wrapper="span"
                speed={50}
                style={{ fontSize: '3em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
    )
}

export default LoveYou