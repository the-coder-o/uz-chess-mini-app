import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthSignUpPhone } from '@/auth/hooks/useAuthSignUpPhone'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useSearchParams } from 'react-router-dom'
import { Form } from '@/components/ui/Form'
import { LoadingButton } from '@/components/ui/LoadingButton/LoadingButton'
import { AuthWithGoogle } from '@/components/ui/AuthGoogleButton/AuthWithGoogle'
import { PhoneNumberField } from '@/components/ui/_rhf/PhoneNumberField'
import { TextField } from '@/components/ui/_rhf/Text.tsx'

const signUpSchema = z.object({
  phone: z.string(),
  fio: z.string().min(3, { message: 'Name is required' }),
  password: z.string().min(8, { message: 'Password is required' }),
})

type SignUpSchemaForm = z.infer<typeof signUpSchema>

export const JWTSignUpView = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const [searchParams] = useSearchParams()
  const signUpWithPhone = useAuthSignUpPhone()

  const form = useForm<SignUpSchemaForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      phone: `+${searchParams.get('phone')?.toString()}`,
      fio: '',
      password: '',
    },
  })

  const handleSubmit = async (formData: SignUpSchemaForm) => {
    setLoading(true)
    await signUpWithPhone(formData)
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="container h-screen w-full flex-col justify-between">
        <div className={'h-1/2 pt-5'}>
          <div className={'mb-5'}>
            <h1 className="text-4xl font-bold">Ro'yhatdan O'tish</h1>
          </div>
          <div className={'flex flex-col gap-2'}>
            <TextField name={'fio'} label={'Ism familiyangiz'} className={'mb-2 h-12 rounded-xl'} placeholder={'Jhon Dou'} />
            <PhoneNumberField defaultCountry="UZ" name="phone" label={'Telefon Raqamingiz'} />
          </div>
        </div>
        <div className="end-0 flex h-1/2 flex-col justify-end py-5">
          <div className="flex w-full flex-col items-center gap-3">
            <LoadingButton type="submit" isLoading={loading} size="lg" className="text-md w-full rounded-xl">
              Davom Etish
            </LoadingButton>
            <AuthWithGoogle />
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Davom etish uchun siz{' '}
            <Link to="/terms" className="text-blue-600">
              Foydalanuvchi shartlari
            </Link>
            ga rozi bo'lishingiz kerak
          </p>
        </div>
      </form>
    </Form>
  )
}
