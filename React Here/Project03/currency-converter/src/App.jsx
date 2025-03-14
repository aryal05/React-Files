// import { useState } from 'react'
import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
const[amount, setAmount] = useState(0)
const [from, setFrom] = useState('USD')
const [to, setTo] = useState('EUR')
const[convertedAmount, setConvertedAmount]= useState(0)
const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo)

  return (
    <>
      <h1 className='text-3xl text-center mx-2 my-4 bg-orange-500'>Currency App</h1>
      <InputBox/>
    </>
  )
}

export default App
