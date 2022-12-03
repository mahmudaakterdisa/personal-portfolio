import { Button } from 'bootstrap';
import React from 'react';
import './Resume.css'
const Resume = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Mahmuda Akter_Disa_Lebenslauf.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Mahmuda Akter_Disa_Lebenslauf.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='resume'>
            <div className='resume-container bg-gray-300 flex flex-col sm:flex-col justify-center items-center' >
                <center className='resume-elements' >

                    <h3>Please Click on below button to download My Resume</h3>

                    <button onClick={onButtonClick} className="btn btn-active btn-secondary">Download Resume</button>

                </center>

            </div>
        </div>
    );
};

export default Resume;