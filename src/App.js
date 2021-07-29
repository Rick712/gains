import * as React from 'react';
import { AppView } from './ui/views';
import { WorkoutContextProvider } from './ui/context/workoutContext';
import './App.css';

const AppContainer = ({ children }) => {
    return <WorkoutContextProvider>{children}</WorkoutContextProvider>;
};

function App() {
    return (
        <AppContainer>
            <WorkoutContextProvider>
                <AppView />
            </WorkoutContextProvider>
        </AppContainer>
    );
}

export default App;
