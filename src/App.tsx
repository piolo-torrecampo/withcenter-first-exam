import { ArrowRightLeft } from 'lucide-react';
import DropDownBox from './components/DropdownBox'
import InputBox from './components/InputBox';
import { useEffect, useState } from 'react';
import { currencyData, Rates } from './types/CurrencyAPI';
import BackgroundWaves from './components/BackgroundWaves';
 

function App() {
  const [apiData, setApiData] = useState<Record<string, number> | undefined>();
  const [rates, setRates] = useState<Rates>()
  const [toCurrencyCode, setToCurrencyCode] = useState<string>('USD')
  const [fromCurrencyCode, setFromCurrencyCode] = useState<string>('USD')
  const [amount, setAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<string>('0');

  // get rates from api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_API_FREECURRENCY}`);
        const result = await response.json();  
        setApiData(result.data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };
  
    fetchData();
  }, []);
  
  // populate rates with name and flag url
  useEffect(() => {
    if(apiData) {
      const populateRates: Rates = {};
      for (const currencyCode in apiData) {
        populateRates[currencyCode] = {
          name: currencyData[currencyCode]?.name || "Unknown Currency",
          rate: apiData[currencyCode],
          flagUrl: `https://flagsapi.com/${currencyData[currencyCode]?.code}/flat/64.png`
        };
      }
      setRates(populateRates);
    }
  }, [apiData]);

  // update fields
  useEffect(() => {
    if (rates) {
      const to = getCurrencyRate(toCurrencyCode);
      const from = getCurrencyRate(fromCurrencyCode);
  
      if (to && from) {
        const result = amount * (to / from);
        setTotalAmount(addGrouping(result));
      } else {
        setTotalAmount('0');
      }
    }
  }, [toCurrencyCode, fromCurrencyCode, amount, rates]);

  const addGrouping = (amount: number) => {
    return amount.toLocaleString('en-US', {
      useGrouping: true,
      maximumFractionDigits: 2
    });
  }

  // return currency rate
  const getCurrencyRate = (code: string) => {
    if(rates) {
      const result = Object.entries(rates).filter(([currencyCode]) => {
        return currencyCode.toLowerCase() === code.toLowerCase();
      });
      return result.length > 0 ? result[0][1].rate : undefined;
    }  
  }

  // return currency name
  const getCurrencyName = (currencyCode: string): string | undefined => {
    if(rates){
      return rates[currencyCode]?.name;
    }
  };

    const getDate = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',  
        month: 'long',      
        day: '2-digit',      
        hour: '2-digit',    
        minute: '2-digit',  
        hour12: true         
      };
    
      const formattedDate = date.toLocaleDateString('en-US', options);
      return formattedDate;
    }
  // set from currency code
  const fromCurrency = (code: string) => {
    setFromCurrencyCode(code);
  }
  
  // set to currency code
  const toCurrency = (code: string) => {
    setToCurrencyCode(code);
  }
  
  // amount input box
  const amountChange = (amount: number) => {
    setAmount(amount);
  }
  
  // flip currency button 
  const flipCurrency = () => {
    const temp = fromCurrencyCode;
    setFromCurrencyCode(toCurrencyCode);
    setToCurrencyCode(temp);
  }

  return (
    <div className='bg-stone-900 min-h-screen w-screen flex flex-col justify-center items-center gap-10 p-5 sm:p-10 md:p-20'>
      <BackgroundWaves/>
      <div className='flex flex-col font-light lg:items-end items-center gap-3'>
        <h1 className='font-[poppins] font-bold text-5xl md:text-6xl lg:text-8xl text-white md:text-center'>Currency Converter</h1>
        <h2 className='font-(poppins) text-xl text-white'>Submitted by JUAN PIOLO TORRECAMPO</h2>
      </div>
      <div className='flex flex-col gap-5 bg-white p-5 sm:p-10 rounded-3xl shadow-lg shadow-cyan-500/30'>
        <div className='flex flex-col lg:flex-row sm:flex-col gap-5 items-center'>
          <InputBox
            currencyCode={fromCurrencyCode}
            value={amount}
            onChangeAmount={amountChange}
          />
          <DropDownBox
            title='From'
            rates={rates}
            onSelectCurrency={fromCurrency}
            value={fromCurrencyCode}
          />
          <button 
            className='bg-blue-500 p-3 rounded-full hover:bg-blue-400'
            onClick={flipCurrency}  
          >
            <ArrowRightLeft 
              color='white'
            />
          </button>
          <DropDownBox
            title='To'
            rates={rates}
            onSelectCurrency={toCurrency}
            value={toCurrencyCode}
          />
        </div>
        <div className='flex flex-col justify-between gap-4 lg:w-full md:w-100 sm:w-80'>
          <div>
          <p className='font-[poppins] text-gray-600 text-xl font-medium break-all max-w-full'>
            {amount} {getCurrencyName(fromCurrencyCode)} ({fromCurrencyCode}) =
          </p>
          <h3 className='font-[poppins] font-medium text-4xl break-all max-w-full'>
            {totalAmount} {getCurrencyName(toCurrencyCode)} ({toCurrencyCode})
          </h3>
          </div>
          <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5'>
            <div>
              <p className='font-(poppins)'>{getCurrencyName(fromCurrencyCode)} ({fromCurrencyCode}) = {getCurrencyRate(fromCurrencyCode)}</p>
              <p className='font-(poppins)'>{getCurrencyName(toCurrencyCode)} ({toCurrencyCode}) = {getCurrencyRate(toCurrencyCode)}</p>
            </div>
            <h4 className='text-end font-(poppins) font-semi-light md:text-center'>Last Updated: {getDate()}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

