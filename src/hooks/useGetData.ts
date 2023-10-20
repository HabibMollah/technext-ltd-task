import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import baseURL from '../api/baseURL';

export default function useGetData<DataType>() {
  return useQuery<DataType, Error>({
    queryKey: ['launches'],
    queryFn: () => axios.get(baseURL).then((res) => res.data),
  });
}
