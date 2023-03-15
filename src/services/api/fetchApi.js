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
    // console.log('WE GOT THE TOOOOOOOKEEEEN');
    const token = response.data.token;
    // console.log(data);
    setToken(token);
    // return token;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getCoursesList = async () => {
  try {
    await getToken();
    const { data } = await instance.get('/core/preview-courses');
    // console.log(data.courses);
    return data.courses;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
