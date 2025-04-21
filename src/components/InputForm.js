import React from "react";

const InputForm = ({ name, setName, mainLocation, setMainLocation, state, setState }) => {
    return (
        <div>
            <h2>Enter Info for SEO Titles</h2>
            <label>
                Agent/Group Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                KWA Main Location:
                <input type="text" value={mainLocation} onChange={(e) => setMainLocation(e.target.value)} />
            </label>
            <br />
            <label>
                State:
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            </label>
        </div>
    );
};

export default InputForm;
