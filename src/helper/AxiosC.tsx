import axios from 'axios';
import { getCookie } from '@/helper/Cookie';

export default axios.create({
  headers: {
    accessToken: await getCookie('accessToken'),
  },
});
