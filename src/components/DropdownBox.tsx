import { ChevronDown } from 'lucide-react';
import { useState, FC } from 'react';
import { useId } from "react"
import { Rates } from '../types/CurrencyAPI';

interface DropdownBoxProps {
  title: string,
  rates?: Rates,
  value: string,
  onSelectCurrency?: (currency: string) => void
}


const DropDownBox: FC<DropdownBoxProps> = ({ title, rates, value, onSelectCurrency }) => {
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)

  // toggle dropdown
  const openDropdown = () => {
    setIsOpen(!isOpen)
  }

  const returnSelectedCurrency = (currencyCode: string) => {
    setIsOpen(false)
    onSelectCurrency?.(currencyCode)
  }

  // returns currency name
  const getCurrencyName = (currencyCode: string): string | undefined => {
    if(rates) {
      return rates[currencyCode]?.name;
    }
   
  };

  // returns currency flag
  const getCurrencyFlag = (currencyCode: string): string | undefined => {
    if(rates) {
      return rates[currencyCode]?.flagUrl;
    }
  };

  return (
    <div className='relative inline-block lg:w-full md:w-full sm:w-full' id={id}>
      <button 
        className='flex flex-col p-3 shadow-lg border-2 border-gray-200 shadow-cyan-500/40 bg-white rounded-lg w-60 md:w-full sm:w-full h-21 hover:bg-stone-300'
        onClick={openDropdown}  
      >
        <p className='font-(poppins) text-gray-400 text-start'>{title}</p>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <img
              src={getCurrencyFlag(value)}
              className='w-10 h-10 object-contain'
              alt={getCurrencyName(value)}
            />
            <p className="truncate">{value && `(${value}) ${getCurrencyName(value)}`}</p>
          </div>
          <ChevronDown
            color='black'
          />
        </div>
      </button>
      {isOpen && 
        <div className="absolute p-1 right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
          <div className="py-1 max-h-70 overflow-y-auto">
            {rates && 
              Object.entries(rates).map(([currencyCode, currencyData]) => (
                <button 
                  className="flex flex-row gap-5 items-center justify-between block px-4 text-sm text-gray-700 w-full text-left hover:bg-stone-300"
                  onClick={() => returnSelectedCurrency(currencyCode)}
                  key={currencyCode}
                >
                  <div className='flex flex-row items-center gap-5'>
                    <img
                      src={currencyData.flagUrl}
                      className='w-10 h-10'
                      alt={currencyData.name}
                    />
                    {currencyData.name}  
                  </div>                 
                  <div>
                    {currencyCode}
                  </div>
                </button>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default DropDownBox
