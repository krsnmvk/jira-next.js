'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import {
  signinInsertSchema,
  SignInInsertSchema,
} from '../validation/sign-in-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';

export default function SignInCard() {
  const form = useForm<SignInInsertSchema>({
    resolver: zodResolver(signinInsertSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: SignInInsertSchema) {}

  return (
    <Card className="w-full h-full md:w-md border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="jhon example" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              Login
            </Button>
          </form>
        </Form>
        <p className="text-sm mt-3">
          <span className="text-muted-foreground">
            Dont&apos;t have an account?
          </span>{' '}
          <Link href="/sign-up" className="hover:underline text-blue-600">
            Sign up
          </Link>
        </p>
        <div className="p-5">
          <Separator />
        </div>
        <div className="flex flex-col gap-y-3">
          <Button type="button" variant="outline" size="lg" className="w-full">
            <Image src="/google.svg" alt="Google" width={20} height={20} />
            <span>Continue with Google</span>
          </Button>
          <Button type="button" variant="outline" size="lg" className="w-full">
            <Image src="/github.svg" alt="Github" width={20} height={20} />
            <span>Continue with Github</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
