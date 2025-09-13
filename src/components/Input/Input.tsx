import { useId } from "react";
import { cn } from "../../utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onIconAction?: () => void;
}

export default function Input({ 
  errorMessage, 
  className, 
  icon, 
  iconPosition = 'right',
  onIconAction, 
  disabled,
  label = '',
  name,
  ...props 
}: InputProps) {

  const labelId = useId()

  return (
    <div className={cn("w-full flex flex-col", className)}>
      {label && <label className="mb-1" htmlFor={`${name}-${labelId}`}>{label}</label>}
      <div
        className={cn(
          `flex items-center gap-2 p-3 border bg-white rounded-md text-black
          border-border
          focus-within:border-purple
          focus-within:ring-1 focus-within:ring-purple
          has-[input:disabled]:bg-disabled
          has-[input:disabled]:cursor-not-allowed
          has-[input:disabled]:border-light-gray
          ${errorMessage ? 'border-error ring-1 ring-error' : ''}
          `,
          iconPosition === 'right' ? 'flex-row' : 'flex-row-reverse'
        )}
      >
        <input
          id={`${name}-${labelId}`}
          className="outline-0 placeholder:text-border w-full
            focus:outline-none
            disabled:cursor-not-allowed disabled:bg-disabled disabled:placeholder:text-border
            disabled:text-border
            text-sm
            "
          type="text"
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? 'input-error' : undefined}
          disabled={disabled}
          {...props}
        />
        {icon && onIconAction ? (
            <button 
              className="cursor-pointer inline-flex focus:outline-none disabled:cursor-not-allowed disabled:bg-disabled disabled:text-border" 
              disabled={disabled} 
              onClick={onIconAction} 
              tabIndex={0} aria-label="Ícone ação">
              {icon}
            </button>
          ) : (
            <span className="inline-flex text-border">{icon}</span>
          )
        }
      </div>
      {!!errorMessage && (
        <span id="input-error" className="text-error text-xs mt-1 self-end" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
}