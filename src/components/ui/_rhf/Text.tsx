import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'
import { Input } from '@/components/ui/input'
import { RequiredIndicator } from '@/components/ui/RequiredIndicator'
import { InputProps } from '@/components/ui/PhoneNumberInput/PhoneInput'

interface IProps extends Omit<InputProps, 'value' | 'onChange'> {
  name: string
  label?: ReactNode
  extraLabel?: ReactNode
  required?: boolean
}

export function TextField({ required, name, label, extraLabel, ...props }: IProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel extraLabel={extraLabel}>
              {label} {required && <RequiredIndicator />}
            </FormLabel>
          )}
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
