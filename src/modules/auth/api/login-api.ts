import { client } from '@/lib/client';
import { useMutation } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from 'hono';

type ResponseType = InferResponseType<(typeof client.api.auth.login)['$post']>;
type RequestType = InferRequestType<
  (typeof client.api.auth.login)['$post']
>['json'];

export function useLoginApi() {
  return useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.auth.login['$post']({ json });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found');
        }

        throw new Error("Something wen't wrong");
      }

      return await response.json();
    },
  });
}
