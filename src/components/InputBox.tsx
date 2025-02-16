import { useId, FC } from "react"

interface InputBoxProps {
  currencyCode: string,
  value: number,
  onChangeAmount: (amount: number) => void
}


const InputBox: FC<InputBoxProps> = ({currencyCode, value, onChangeAmount}) => {
  const id = useId()

  return (
    <div className='flex flex-col justify-center p-3 border-2 border-gray-200 shadow-lg shadow-cyan-500/40 bg-white rounded-lg lg:min-w-60 md:w-full sm:w-full h-21'>
      <p className="font-(poppins) text-gray-400">Amount</p>
      <div className="flex flex-row items-center gap-3">
        <p className="text-black font-(poppins)">{currencyCode}</p>
        <input 
          className='font-(poppins) outline-none text-black flex-grow py-2 w-full'
          placeholder='Enter amount'
          value={value}
          id={id}
          onChange={(e) => onChangeAmount(Number(e.target.value))}
          maxLength={50}
          onKeyDown={
            (e) => {
              if (
                ["Backspace", "Delete", "Tab", "Escape", "Enter", "ArrowLeft", "ArrowRight"].includes(e.key)
              ) {
                return;
              }
    
              if ((e.ctrlKey || e.metaKey) && ["a", "c", "v", "x", "z"].includes(e.key.toLowerCase())) {
                return;
              }

              if (e.key === ".") {
                if (e.currentTarget.value.includes(".")) {
                  e.preventDefault();
                }
                return;
              }

              if (isNaN(Number(e.key))) {
                e.preventDefault();
              }
            }
          }
        />
      </div>
    </div>
  )
}

export default InputBox
