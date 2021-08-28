import { api } from './api';

export const getTimetable = async () => {
  const res = await api.get('/classes/student/19BCE2022');
  return res.data;
};

export const login = async (regNo) => {
  const res = await api.get(`/student/${regNo}`);
  return res.data;
};

export const register = async (regNo, name) => {
  const res = await api.post('/student', {
    rollNo: regNo,
    name,
  });
  return res.data;
};
