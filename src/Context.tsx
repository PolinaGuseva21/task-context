import { ReactElement, useContext } from 'react';
import * as React from 'react';

type Theme = 'light' | 'dark';
const myContext = React.createContext('light');
export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <myContext.Provider value={props.theme}>
            {props.children}
        </myContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(myContext) as Theme;
}
