import React from 'react';
import '../style/BreedList.css';

const BreedList = (props) => {
    
    const Change = (event) => {
        props.onSelect(event.target.value);
    }
    const getLoading = () => {
    }
    const getError = () => {
        return alert('Nie można pobrać danych...')
    }
    const getSelect = () => {
        return (
            <select onChange={Change}>
                {props.breedsList.map((breed, index) => {
                    return(
                        <option value={breed} key={index}>{breed}</option>
                    );
                })}
            </select>
        );
    }
    return(
        <div className="select-container">
        <label><b>Wybierz rasę z listy:   </b></label>
            {props.breedsList ? getSelect() : getLoading()}
            {props.isError ? getError() : null}
        </div>
    );
}

export default BreedList;