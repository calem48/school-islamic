import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { reduce } from "../reduce/reducerFiltter";
import { useReducer } from 'react';



let initState = {

}

let AppContextFilter = React.createContext()


const AppProviderFilter = ({ children }) => {
    let [state, dispatch] = useReducer(reduce, initState)


    useEffect(() => {

    }, []);

    return (
        <AppContextFilter.Provider value={"hello world"}>
            {children}
        </AppContextFilter.Provider>
    );

}

export let useGlobalContextFilter = () => {
    return useContext(AppContextFilter)
}

export { AppProviderFilter, AppContextFilter };


