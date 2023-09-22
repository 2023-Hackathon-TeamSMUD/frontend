import React from 'react';
import SelectGender from '../../presentation/MainPage/SelectGender';
import { useNavigate } from 'react-router-dom';

const SelectGenderContainer = ({gender, setGender, uploadData, captures}) => {
    const navigate = useNavigate();

    const onClick = () => {
        console.log(captures, gender);
        uploadData.mutate(captures, gender);
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