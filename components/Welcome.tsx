'use client'

import Typewriter from 'typewriter-effect';

export default function Welcome() {
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('Hi, I\'m <span style="color: #DAA520;"><strong>Nidolai</strong></span>')
                    .pauseFor(600)
                    .deleteChars(5)
                    .typeString('<span style="color: #DAA520;"><strong>colai</strong></span>, a <i>DevOps Engineer</i>.<br/>')
                    .pauseFor(500)
                    .typeString('Building the software of <span style="color: #BE3C28;"><strong>today</strong></span>.<br/>')
                    .pauseFor(500)
                    .typeString('To help create the products of <span style="color: #009632;"><strong>tomorrow</strong></span>.')
                    .start()
            }}
        />
    )
}