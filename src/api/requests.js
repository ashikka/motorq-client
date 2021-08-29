import { api } from './api';

export const getTimetable = async (rollNo) => {
  const res = await api.get(`/classes/student/${rollNo}`, { withCredentials: true });
  return res.data;
};

export const login = async (regNo) => {
  const res = await api.get(`/student/${regNo}`, { withCredentials: true });
  return res.data;
};

export const register = async (regNo, name) => {
  const res = await api.post('/student', {
    rollNo: regNo,
    name,
  }, { withCredentials: true });
  return res.data;
};

export const getClasses = async (courseCode) => {
  const res = await api.get(`/classes/classes-on-map/${courseCode}`, { withCredentials: true });
  return res.data;
};

export const getCourses = async (courseCode) => {
  const res = await api.get(`/classes/${courseCode}`, { withCredentials: true });
  return res.data;
};

export const addCourse = async (courseDetails, rollNo) => {
  const res = await api.post(`/classes/${rollNo}`, {
    courseDetails,
  });
  console.log(res);
  return res;
};
