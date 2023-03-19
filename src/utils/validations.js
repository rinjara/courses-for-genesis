export const validateImgLink = async url => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    throw error;
    // return false;
  }
};
