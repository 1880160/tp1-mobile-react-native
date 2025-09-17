import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';
import {goodOrientation} from "./src/hooks/orientation";

//  voirs si ca fonctionne!!


export default function App() {
    goodOrientation();


return (
<ThemeProvider>
<AppNavigator />
</ThemeProvider>
);
}


