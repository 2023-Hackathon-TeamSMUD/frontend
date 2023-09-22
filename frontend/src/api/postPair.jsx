import axios from 'axios';

export const uploadImages = async ({imageFiles}) => {
  const formData = new FormData();
  
  imageFiles.forEach((imageFile, index) => {
    formData.append(`file${index + 1}`, imageFile, `image${index + 1}.jpeg`);
});

  console.log(imageFiles);

  const response = await axios.post(`${process.env.REACT_APP_DB_HOST}/pair`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  
  return response.data.result;
};
