# PitchPerfect - Cover Letter Generator

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction

PitchPerfect is a web application designed to help users generate personalized cover letters based on their resume and a job description. This project focuses on the frontend development of the application, providing a user-friendly interface to input the required information and display the generated cover letter.

## Features

- **User Input Forms**: Users can input their resume and job description.
- **Cover Letter Generation**: Automatically generates a cover letter based on the provided information.
- **Responsive Design**: Ensures compatibility across different devices and screen sizes.
- **Footer Links**: Connect with the developer on LinkedIn, GitHub, and download the resume.

## Installation

To get started with PitchPerfect, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/aasthas2022/PitchPerfect-Frontend.git
   cd PitchPerfect-Frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory to store environment variables (if needed).

4. Start the development server:

   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter your resume in the "Resume" text area.
3. Enter the job description in the "Job Description" text area.
4. Click on the "Generate Cover Letter" button.
5. View the generated cover letter in the designated area.

## Components Overview

### `App.js`

- The main component that combines the input form, cover letter display, and footer components.

### `InputForm.js`

- A form component that takes user input for the resume and job description.
- Handles the form submission and triggers the cover letter generation.

### `CoverLetter.js`

- A component that displays the generated cover letter.

### `Footer.js`

- A footer component that provides links to the developer's LinkedIn, GitHub, and resume download.

### `generateCoverLetter.js`

- A utility function that makes a POST request to the backend server to generate the cover letter.

## Project Structure

```plaintext
PitchPerfect-Frontend/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── CoverLetter.js
│   │   ├── Footer.js
│   │   └── InputForm.js
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── Footer.css
│   │   └── InputForm.css
│   │
│   ├── App.js
│   ├── index.js
│   └── generateCoverLetter.js
│
├── .env
├── package.json
├── README.md
└── ...
```

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: React package for working with the DOM.
- **React Scripts**: Configuration and scripts for Create React App.
- **Dotenv**: Loads environment variables from a `.env` file.

## Scripts

- `start`: Starts the development server.
- `build`: Bundles the app into static files for production.
- `test`: Starts the test runner.
- `eject`: Removes Create React App build dependency and copies configuration files and dependencies as a one-time operation.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
