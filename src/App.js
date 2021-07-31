import * as React from 'react';
import { AppView } from './ui/views';
import { WorkoutContextProvider } from './ui/context/workoutContext';
import { UserContextProvider } from './ui/context/profileContext';
import './App.css';

const AppContainer = ({ children }) => {
    return children;
};

function App() {
    return (
        <AppContainer>
            <UserContextProvider>
                <WorkoutContextProvider>
                    <AppView />
                </WorkoutContextProvider>
            </UserContextProvider>
        </AppContainer>
    );
}

export default App;
