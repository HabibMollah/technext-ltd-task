import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import baseURL from '../api/baseURL';

export default function useGetData<DataType>(page: number) {
  return useQuery<DataType, Error>({
    queryKey: ['launches', page],
    queryFn: () =>
      axios
        .get(baseURL, { params: { offset: (page - 1) * 9, limit: 9 } })
        .then((res) => res.data),
  });
}
