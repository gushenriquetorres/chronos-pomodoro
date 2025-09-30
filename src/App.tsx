import './styles/themes.css'
import './styles/global.css'
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react'

export function App() {
  return (
    <>
      <Heading>
        Olá mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum modi, illum in explicabo asperiores? Cum vitae voluptas expedita obcaecati possimus harum eligendi unde, ut natus earum illum consequatur est!</p>
    </>
  )
}
