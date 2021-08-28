import { api } from './api';

const getTimetable = async () => {
  const res = await api.get('/classes/student/19BCE2022');
  return res.data;
};

export default getTimetable;
