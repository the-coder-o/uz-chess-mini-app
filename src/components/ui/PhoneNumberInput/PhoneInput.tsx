import { Circle } from 'lucide-react'
import * as React from 'react'
import RPNInput, { Country as RPNInputCountry, FlagProps, getCountryCallingCode, Props as RPNInputProps, Value as RPNInputValue } from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'disabled'> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  suffix?: string
  prefix?: string
  helperText?: string
  helperTextClassName?: string
  inputWrapperClassName?: string
  inputClassName?: string
}

const FlagComponent = ({ country, countryName }: FlagProps) => {
  const Flag = country ? flags[country] : null
  return <span className="flex h-12 w-12 overflow-hidden rounded-full border">{Flag ? <Flag title={countryName} /> : <span className="h-full w-full bg-gray-100" />}</span>
}
FlagComponent.displayName = 'FlagComponent'

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => <Input className={cn('!h-12 w-full rounded-xl rounded-s-none', className)} {...props} ref={ref} />)

export type PhoneInputProps = Omit<InputProps, 'onChange' | 'value'> &
  Omit<RPNInputProps<typeof RPNInput>, 'onChange'> & {
    onChange: (value: RPNInputValue) => void
  }

type CountrySelectOption = { label: string; value: RPNInputCountry }

type CountrySelectProps = {
  disabled?: boolean
  value: RPNInputCountry | undefined
  onChange: (value: RPNInputCountry) => void
  options: CountrySelectOption[]
}

const CountrySelect = ({ disabled, value, onChange, options }: CountrySelectProps) => {
  const [search] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const currentCountry = value || 'UZ'

  const filteredOptions = React.useMemo(() => {
    return options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase()) || getCountryCallingCode(option.value)?.includes(search))
  }, [options, search])

  const handleSelect = React.useCallback(
    (country: RPNInputCountry) => {
      onChange(country)
      setOpen(false)
    },
    [onChange],
  )

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button type="button" variant="outline" className={cn('flex h-12 w-[85px] gap-1 !rounded-e-none rounded-s-xl border !border-r-0 bg-background shadow-sm hover:border-transparent', disabled && 'cursor-not-allowed opacity-50')} disabled={disabled}>
          <span className="h-[20px] w-[30px] overflow-hidden rounded-lg">
            {flags[currentCountry]
              ? React.createElement(flags[currentCountry], {
                  title: currentCountry,
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  },
                })
              : null}
          </span>
          <span className="text-xs">+{getCountryCallingCode(currentCountry)}</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="border-b px-0 pb-4">
          <DrawerTitle className="px-4">Select Country</DrawerTitle>
          {/*<div className="mt-2 px-4">*/}
          {/*  <Input placeholder="Search countries..." value={search} onChange={(e) => setSearch(e.target.value)} className="h-12 rounded-xl" />*/}
          {/*</div>*/}
        </DrawerHeader>
        <ScrollArea className="h-[60vh]">
          <div className="divide-y">
            {filteredOptions
              .filter((x) => x.value)
              .map((option) => (
                <button key={option.value} onClick={() => handleSelect(option.value)} className="flex w-full items-center gap-4 !border-transparent bg-transparent px-4 py-3">
                  <span className="h-12 w-12 overflow-hidden rounded-full border bg-cover object-cover">
                    {flags[option.value]
                      ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        React.createElement(flags[option.value], {
                          title: option.label,
                          style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          },
                        })
                      : null}
                  </span>
                  <div className="flex flex-1 flex-col items-start text-left">
                    <span className="text-base font-medium">{option.label}</span>
                    <span className="text-sm text-muted-foreground">{`+${getCountryCallingCode(option.value)}`}</span>
                  </div>
                  <Circle className={cn('h-6 w-6', option.value === value ? 'fill-primary stroke-primary' : 'stroke-2')} />
                </button>
              ))}
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<React.ElementRef<typeof RPNInput>, PhoneInputProps>(({ className, onChange, defaultCountry = 'US', ...props }, ref) => {
  return (
    <RPNInput
      ref={ref}
      className={cn('flex !h-11 !w-full', className)}
      flagComponent={FlagComponent}
      countrySelectComponent={(countrySelectProps) => <CountrySelect {...countrySelectProps} />}
      inputComponent={InputComponent}
      smartCaret={false}
      onChange={(value: RPNInputValue) => onChange(value)}
      defaultCountry={defaultCountry}
      {...props}
    />
  )
})

PhoneInput.displayName = 'PhoneInput'

export { PhoneInput }
