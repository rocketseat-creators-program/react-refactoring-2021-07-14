import {SelectFormProvider} from './SelectForm';
import {ConfigFormProvider} from './ConfigForm';

export function AppProvider({children}){
    return(
        <SelectFormProvider>
            <ConfigFormProvider>
                {children}
            </ConfigFormProvider>
        </SelectFormProvider>
    )
}