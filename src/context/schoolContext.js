import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { reduce } from "../reduce/reduceSchool";
import { useReducer } from 'react';



let initState = {

}

let AppContextSchool = React.createContext()


const AppProviderSchool = ({ children }) => {
    let [state, dispatch] = useReducer(reduce, initState)


    useEffect(() => {

    }, []);

    return (
        <AppContextSchool.Provider value={"hello world"}>
            {children}
        </AppContextSchool.Provider>
    );

}

export let useGlobalContextFilter = () => {
    return useContext(AppContextSchool)
}

export { AppProviderSchool, AppContextSchool };




