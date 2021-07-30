import React, { useState } from 'react';

function SetListRow({ data, index, deleteSet, updateValue, updateChange }) {
    const [count, setCount] = useState(data.count);
    const [weight, setWeight] = useState(data.weight);

    const handleCountChange = (input) => {
        setCount(parseInt(input.target.value));
    };

    const handleWeightChange = (input) => {
        setWeight(parseInt(input.target.value));
    };

    console.log(count, weight);

    if (data.changeAble === true) {
        return (
            <div className="row">
                <div className="cell">{index + 1}</div>
                <input
                    onChange={handleCountChange}
                    className="cell"
                    type="text"
                    value={count ? count : ''}
                    placeholder="aantal keer"
                    autoFocus
                />
                <input
                    onChange={handleWeightChange}
                    className="cell"
                    type="text"
                    value={weight ? weight : ''}
                    placeholder="gewicht in kilo's"
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
