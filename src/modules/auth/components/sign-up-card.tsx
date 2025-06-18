'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useForm } from 'react-hook-form';
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
import Link from 'next/link';
import {
  signupInsertSchema,
  SignUpInsertSchema,
} from '../validation/sign-up-schema';
import { useRegisterApi } from '../api/register-api';

export default function SignUpCard() {
  const form = useForm<SignUpInsertSchema>({
    resolver: zodResolver(signupInsertSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate, isPending } = useRegisterApi();

  function onSubmit(values: SignUpInsertSchema) {
    console.log(values);
    mutate({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Card className="w-full h-full md:w-md border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">Let&apos;s get started!</CardTitle>
        <CardDescription className="text-xs">
          By signing up, you agree to our{' '}
          <a href="#" className="hover:underline text-blue-600">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="hover:underline text-blue-600">
            Terms of Service
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isPending}
                      placeholder="jhon example"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isPending}
                      placeholder="jhon@example.com"
                      {...field}
                    />
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
                    <Input
                      type="password"
                      disabled={isPending}
                      placeholder="******"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isPending}
                      placeholder="******"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isPending}
              size="lg"
              className="w-full"
            >
              Sign up
            </Button>
          </form>
        </Form>
        <p className="text-sm mt-3">
          <span className="text-muted-foreground">
            Already have an account?
          </span>{' '}
          <Link href="/sign-in" className="hover:underline text-blue-600">
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
