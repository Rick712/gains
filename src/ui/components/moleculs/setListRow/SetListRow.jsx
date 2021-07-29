import React, { useState } from 'react';

function SetListRow({ data, index, deleteSet, updateValue, updateChange }) {
    const [count, setCount] = useState(data.count);
    const [weight, setWeight] = useState(data.weight);

    const handleCountChange = (input) => {
        setCount(input.target.value);
    };

    const handleWeightChange = (input) => {
        setWeight(input.target.value);
    };

    if (data.changeAble === true) {
        return (
            <div className="row">
                <div className="cell">{index + 1}</div>
                <input
                    onChange={handleCountChange}
                    className="cell"
                    type="text"
                    value={count}
                />
                <input
                    onChange={handleWeightChange}
                    className="cell"
                    type="text"
                    value={weight}
                ></input>
                <div className="cell change">
                    <span onClick={() => updateValue(count, weight, index)}>
                        klaar
                    </span>
                </div>
            </div>
        );
    }
    return (
        <div className="row">
            <div className="cell">{index + 1}</div>
            <div className="cell">{count}x</div>
            <div className="cell"> {weight} kg</div>
            <div className="cell change">
                <span onClick={() => deleteSet(data)}>X</span>
                <span onClick={() => updateChange(index)}>pen</span>
            </div>
        </div>
    );
}

export default SetListRow;
