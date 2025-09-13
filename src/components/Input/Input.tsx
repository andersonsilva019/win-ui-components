

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  className?: string;
}

export default function Input({ errorMessage, ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col">
      <div
        className={`
          p-3 border bg-white rounded-[2px] text-black
          border-border
          focus-within:border-purple
          focus-within:ring-1 focus-within:ring-purple
          has-[input:disabled]:bg-disabled
          has-[input:disabled]:cursor-not-allowed
          has-[input:disabled]:border-light-gray
          ${errorMessage ? 'border-error' : ''}
          `}
          >
        <input
          className="
          outline-0 placeholder:text-border w-full
          focus:outline-none
          disabled:cursor-not-allowed disabled:bg-disabled disabled:placeholder:text-border
          disabled:text-border
          text-sm
          "
          type="text"
          {...props}
          />
        
      </div>
        {!!errorMessage && (
          <span className="text-error text-xs mt-1 self-end" role="alert">
            {errorMessage}
          </span>
        )}
    </div>
  )
}