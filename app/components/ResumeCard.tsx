import React from 'react';

const ResumeCard: React.FC = () => {
    return (
        <div className="max-w-sm p-6 bg-black rounded-lg shadow sticky top-12">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Download Resume</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Download my resume as a PDF here.</p>
            <a href="./resume.pdf" download="gage-patenaude-resume.pdf" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Download
    <svg className="w-3.5 h-3.5 ml-2 -mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 16l-6-6h4V4h4v6h4l-6 6z" clipRule="evenodd" />
    </svg>
</a>
        </div>
    );
};

export default ResumeCard;
