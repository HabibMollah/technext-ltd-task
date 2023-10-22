import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import baseURL from '../api/baseURL';

export default function useGetData<DataType>() {
  return useQuery<DataType, Error>({
    queryKey: ['launches'],
    queryFn: () =>
      axios
        .get(baseURL)
        // .get(baseURL, { params: { offset: (page - 1) * 9, limit: 9 } })
        .then((res) => res.data),
  });
}
