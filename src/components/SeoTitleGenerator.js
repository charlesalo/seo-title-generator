import React, { useState } from "react";
import Templates from "./Templates";
import InputForm from "./InputForm";

const SeoTitleGenerator = () => {
    const [name, setName] = useState("");
    const [mainLocation, setMainLocation] = useState("");
    const [state, setState] = useState("");

    return (
        <div>
            <InputForm 
                name={name}
                setName={setName}
                mainLocation={mainLocation}
                setMainLocation={setMainLocation}
                state={state}
                setState={setState}
            />
            <Templates 
                name={name}
                mainLocation={mainLocation}
                state={state}
            />
        </div>
    );
};

export default SeoTitleGenerator;
