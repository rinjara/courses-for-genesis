import { Notify } from 'notiflix';
import instance from './axiosConfig';

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const getToken = async () => {
  try {
    const response = await instance.get(
      '/auth/anonymous?platform=subscriptions'
    );
    const token = response.data.token;
    setToken(token);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getCoursesList = async () => {
  try {
    await getToken();
    const { data } = await instance.get('/core/preview-courses');
    return data.courses;
  } catch (error) {
    Notify.failure('Oooops! Something goes wrong. Please, try again later!');
    throw error;
  }
};

export const getCourse = async courseId => {
  try {
    await getToken();
    const { data } = await instance.get(`/core/preview-courses/${courseId}`);
    return data;
  } catch (error) {
    Notify.failure('Oooops! Something goes wrong. Please, try again later!');
    throw error;
  }
};
