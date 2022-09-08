import type { NextPage } from 'next'
import Container from '../components/Container'
import Typewriter from 'typewriter-effect';

const Home: NextPage = () => {
  return (
    <Container
      title="Home"
    >
      <div className="max-w-2xl w-full my-auto text-3xl text-center">
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
              .start();
          }}
        />
      </div>
    </Container>
  )
}

export default Home