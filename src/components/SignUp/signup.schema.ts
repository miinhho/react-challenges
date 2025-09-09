import z from 'zod'

export const SignUpSchema = z.object({
  name: z
    .string()
    .nonempty('Enter your name.')
    .min(2, 'Name must be at least 2 characters long.'),
  email: z.email('Enter a valid email address.'),
  password: z
    .string()
    .nonempty('Enter your password.')
    .min(6, 'Password must be at least 6 characters long.'),
})

type SignUpSchema = z.infer<typeof SignUpSchema>
export type SignUpErrors =
  z.core.$ZodFlattenedError<SignUpSchema>['fieldErrors']
