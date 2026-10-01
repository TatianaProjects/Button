import { useState } from 'react'

import './App.css'
import { Stack } from './Shared/ui/Stack'
import { Button } from './Shared/ui/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stack 
        direction='column' 
        align ='center'
        justify='center'
        gap={16}
      >
        
        
        <Button color="primary">
            Primary
        </Button>

        <Button color="primary" cta>
            CTA
        </Button>

        <Button color="primary" loading>
            Send
        </Button>
      
        <Button color="secondary">
            Secondary
        </Button>

        <Button color="outline">
            Outline
        </Button>

        <Button color="primary" circle>
            +
        </Button>

        <Button disabled>
            Disabled
        </Button>

      </Stack>
    </>
  )
}

export default App
