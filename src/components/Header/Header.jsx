import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const desc = reactDescriptions[getRandomInt(2)]
  return (
    <header>
      <img src={reactImg} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  )
}
