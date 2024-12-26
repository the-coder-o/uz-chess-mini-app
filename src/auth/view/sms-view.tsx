import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthSignUpPhone } from '@/auth/hooks/useAuthSignUpPhone'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useSearchParams } from 'react-router-dom'
import { Form } from '@/components/ui/Form'
import { LoadingButton } from '@/components/ui/LoadingButton/LoadingButton'
import { OTPField } from '@/components/ui/_rhf/OTP.tsx'

const signInSchema = z.object({
  phone: z.string(),
  fio: z.string().min(3, { message: 'Name is required' }),
  password: z.string().min(8, { message: 'Password is required' }),
})

type SignInSchemaForm = z.infer<typeof signInSchema>

export const JWTSmsVerificationView = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const [searchParams] = useSearchParams()
  const signUpWithPhone = useAuthSignUpPhone()

  const form = useForm<SignInSchemaForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phone: `+${searchParams.get('phone')?.toString()}`,
      fio: '',
      password: '',
    },
  })

  const handleSubmit = async (formData: SignInSchemaForm) => {
    setLoading(true)
    await signUpWithPhone(formData)
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="container h-screen w-full flex-col justify-between">
        <div className={'h-1/2 pt-5'}>
          <div className={'mb-5'}>
            <h1 className="text-4xl font-bold">Kodni Tasdiqlash</h1>
          </div>
          <OTPField name="code" />
        </div>
        <div className="end-0 flex h-1/2 flex-col justify-end py-5">
          <div className="flex w-full flex-col items-center gap-3">
            <LoadingButton type="submit" isLoading={loading} size="lg" className="text-md w-full rounded-xl">
              Davom Etish
            </LoadingButton>
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
