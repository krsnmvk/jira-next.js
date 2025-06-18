import { client } from '@/lib/client';
import { useMutation } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';

type ResponseType = InferResponseType<
  (typeof client.api.auth.register)['$post']
>;
type RequestType = InferRequestType<
  (typeof client.api.auth.register)['$post']
>['json'];

export function useRegisterApi() {
  return useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.auth.register['$post']({ json });

      if (!response.ok) {
        if (response.status === 409) {
          throw new Error('User already exists');
        }

        throw new Error("Something wen't wrong");
      }

      return await response.json();
    },
  });
}
