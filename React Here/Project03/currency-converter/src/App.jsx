import { useState, useEffect } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('eur')
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  
  useEffect(() => {
    console.log("Currency options:", options)
    console.log("Currency info:", currencyInfo)
  }, [currencyInfo])
  
  useEffect(() => {
    if (amount > 0 && options.length > 0) convert()
  }, [amount, from, to, currencyInfo])
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    if (currencyInfo && to in currencyInfo) {
      const result = amount * currencyInfo[to]
      setConvertedAmount(result)
      console.log(`Converting ${amount} ${from} to ${to}: ${result}`)
    }
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url("https://images.pexels.com/photos/31008030/pexels-photo-31008030/free-photo-of-vibrant-night-skyline-of-osaka-japan.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load")` 
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(value) => setAmount(value)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable={true}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App