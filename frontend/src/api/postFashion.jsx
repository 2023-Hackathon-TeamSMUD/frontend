import axios from 'axios';

export const postFashion = async (photos, gender) => {
    const formData = new FormData();
  
    formData.append('imageFile', photos[0]);
    console.log(gender);
    const stylingRequestDto = JSON.stringify({ gender });
    formData.append('stylingRequestDto', stylingRequestDto);
  
    for(let pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]);
    }
  
    const response = await axios.post(`${process.env.REACT_APP_DB_HOST}/styling`, formData, {
      headers: {'Content-Type': 'multipart/form-data'},
    });
  
    console.log(response.data);
    
    return response.data;
  };
  