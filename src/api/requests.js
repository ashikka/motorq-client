import { api } from './api';

export const getTimetable = async (rollNo) => {
  const res = await api.get(`/classes/student/${rollNo}`);
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

export const getClasses = async (courseCode) => {
  const res = await api.get(`/classes/classes-on-map/${courseCode}`);
  return res.data;
};

export const getCourses = async (courseCode) => {
  const res = await api.get(`/classes/${courseCode}`);
  return res.data;
};
