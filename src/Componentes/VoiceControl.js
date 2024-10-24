import React, { useEffect } from 'react';

const VoiceControl = ({ onCommand }) => {
    useEffect(() => {
        const recognition = new window.SpeechRecognition();
        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript;
            onCommand(command);
        };
        recognition.start();

        return () => {
            recognition.stop();
        };
    }, [onCommand]);

    return null; // Este componente no necesita renderizar nada
};

export default VoiceControl;
