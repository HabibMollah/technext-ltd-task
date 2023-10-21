import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import baseURL from '../api/baseURL';

export default function useGetData<DataType>(offset: number) {
  return useQuery<DataType, Error>({
    queryKey: ['launches', offset],
    queryFn: () =>
      axios
        .get(baseURL, { params: { offset, limit: 9 } })
        .then((res) => res.data),
  });
}
