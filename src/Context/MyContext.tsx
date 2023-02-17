import { createContext } from "react";
import {useState , useContext} from "react";
import React from "react";

type Context = {
    getTime:Array<any>;
    setGetTime:(item: any)=> void;
}

interface oneTime{
    city:string;
    abbreviation:string
    conference:string
    division:string
  }



const MyContext = React.createContext({} as Context);

export function MyProvider({ children }: any) {
    const [getTime, setGetTime] = useState<oneTime[]>([]);
 
   return (
        <MyContext.Provider
            value={{
                getTime,
                setGetTime,
            }}>
            {children}
        </MyContext.Provider>

    );
}

export function useTime() {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}