import React, { useEffect } from 'react';
import { load, startVideo } from 'handtrackjs';

const GestureControl = ({ onGesture }) => {
    useEffect(() => {
        const video = document.getElementById('video');
        const modelParams = {
            flipHorizontal: true,
            maxNumBoxes: 20,
            iouThreshold: 0.5,
            scoreThreshold: 0.6,
        };

        load(modelParams).then(model => {
            startVideo(video).then(() => {
                setInterval(() => {
                    model.detect(video).then(predictions => {
                        if (predictions.length > 0) {
                            onGesture(predictions);
                        }
                    });
                }, 100); // Detectar cada 100 ms
            });
        });

        return () => {
            // Limpiar el flujo de video al desmontar el componente
            video.srcObject = null;
        };
    }, [onGesture]);

    return (
        <video id="video" style={{ display: 'none' }} />
    );
};

export default GestureControl;
