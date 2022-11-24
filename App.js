import React from 'react';
import { ThemeExtension } from './src/infrastructure/theme-extension/theme-extension';
import { UserProvider } from './src/contexts/user-context';
import { Navigation } from './src/infrastructure/navigation/navigation';

export default function App() {
    return (
        <>
            <ThemeExtension>
                <UserProvider>
                    <Navigation/>
                </UserProvider>
            </ThemeExtension>
        </>
    );
}
