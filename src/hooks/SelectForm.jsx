import {createContext, useContext, useState} from 'react';

const SelectFormContext = createContext();

export function SelectFormProvider({children}){

    const [selectForm, setSelectForm] = useState('content');

    const select = (option) => {
        setSelectForm(option)
    }

    return (
        <SelectFormContext.Provider
            value={{selectForm, select}}
        >
            {children}
        </SelectFormContext.Provider>
    )
}

export function useSelectForm(){
    const context = useContext(SelectFormContext)
    return context;
}