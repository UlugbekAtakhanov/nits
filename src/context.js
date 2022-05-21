import React, { useContext, useReducer } from 'react'
import reducer from './reducer';


const AppContext = React.createContext();


const AppProvider = ( {children} ) => {

    const initialState = {
        isLoading: true,

    }
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <AppContext.Provider value={{
            ...state ,
            dispatch,

        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}
