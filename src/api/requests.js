import { api } from './api';

const getTimetable = async () => {
  const res = await api.get('/classes/students/19BCE2022');
  console.log(res);
  return res.data;
};

export default getTimetable;
