const webcamElement = document.getElementById('webcam');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('startDetection');

async function setupWebcam() {
    return new Promise((resolve, reject) => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                webcamElement.srcObject = stream;
                webcamElement.onloadedmetadata = () => resolve();
            })
            .catch(error => reject(error));
    });
}

async function startDetection() {
    await setupWebcam();

    // Placeholder for detection - in real setup, add the detection model here
    resultElement.innerText = 'Waiting for sign...';

    // Loop to update detection results (replace with real detection model logic)
    setInterval(() => {
        resultElement.innerText = "Demo Sign";  // Replace with actual detection result
    }, 1000);
}

startButton.addEventListener('click', () => {
    startDetection();
});
