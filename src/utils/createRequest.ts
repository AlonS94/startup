import { API_URL } from 'constants/env';

interface CreateRequestParams<R extends object> {
  path: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  onSuccess: (data: R) => void;
  onError: (err: Error) => void;
  body?: object;
}

export function createRequest<R extends object>({
  path,
  method,
  body,
  onSuccess,
  onError,
}: CreateRequestParams<R>) {
  return async () => {
    try {
      const response = await fetch(`${API_URL}/${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data: R = await response.json();
      onSuccess(data);
    } catch (error) {
      onError(error as Error);
    }
  };
}
