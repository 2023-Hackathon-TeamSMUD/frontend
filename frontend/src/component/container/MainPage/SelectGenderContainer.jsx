import React from 'react';
import SelectGender from '../../presentation/MainPage/SelectGender';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { postFashion } from '../../../api/postFashion';

const SelectGenderContainer = ({gender, setGender, setResult, captures}) => {
    const navigate = useNavigate();

    const uploadData = useMutation(postFashion, {
        onSuccess: (data) => {
            setResult(data);
            console.log(data);
          },
    })

    const onClick = () => {
        const arr = [captures[0], gender];
        console.log(arr);
        uploadData.mutate(arr);
        navigate('/storage');
    }
    return (
        <SelectGender 
            gender={gender}
            setGender={setGender}
            onClick={onClick}
        />
    );
};

export default SelectGenderContainer;