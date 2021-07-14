import {createContext, useContext, useState} from 'react';

const ConfigFormContext = createContext();

export function ConfigFormProvider({children}){

    const [configForm, setConfigForm] = useState([]);

    const config = (cfg) => {
        setConfigForm(cfg)
    }

    return (
        <ConfigFormContext.Provider
            value={{configForm, config}}
        >
            {children}
        </ConfigFormContext.Provider>
    )
}

export function useConfigForm(){
    const context = useContext(ConfigFormContext)
    return context;
}