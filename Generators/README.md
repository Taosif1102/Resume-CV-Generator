
# Resume Generator

A comprehensive and interactive Resume Builder application designed to help users create professional resumes with ease. This project features a robust web-based real-time builder and a Python automation script for generating Word document resumes.

## 🌟 Features

### 🖥️ Web-Based Builder

- **Real-time Preview**: Experience a live WYSIWYG (What You See Is What You Get) editor where changes are reflected instantly.
- **Comprehensive Sections**:
  - **Personal Details**: Manage contact info and social links.
  - **Career Objective**: Craft a compelling professional summary.
  - **Academic Details**: List educational background.
  - **Computer Literacy**: Highlight technical skills.
  - **Language Proficiency**: Showcase language skills.
  - **Key Qualities**: Add soft skills and personal strengths.
- **Image Support**: Upload and crop profile pictures directly in the browser.
- **PDF Export**: seamless "Save as PDF" functionality to download your resume in a print-ready format.
- **Responsive Design**: Fully optimized interface for desktop, tablet, and mobile devices.

### 🐍 Python Script Automation

- **Programmatic Generation**: Create standardized `.docx` resumes using a Python script.
- **Customizable Output**: Easily modify the script to change the content or layout of the generated Word document.
- **Dependencies**: Built using the reliable `python-docx` library.

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5
  - **Tailwind CSS** (Utility-first CSS framework)
  - **Node.js** (Development environment)
  - JavaScript (Vanilla JS for logic and DOM manipulation)
- **Backend / Scripting**:
  - Python 3.x
  - `python-docx` library

## 📂 Project Structure

```text
Resume Generator/
├── html/
│   ├── index.html      # Landing page of the application
│   ├── builder.html    # Main resume builder interface
│   └── ...             # Other HTML pages
├── css/
│   ├── output.css      # Generated Tailwind CSS
│   ├── theme.css       # Theme variables
│   └── animations.css  # Custom animations
├── js/
│   └── ...             # JavaScript files
├── python/
│   ├── resume_builder.py # Python script for generating .docx resumes
│   └── generate_cv.py    # Python script for generating .docx CVs
├── txt/
│   └── requirements.txt  # Python dependencies
├── package_json/         # Backup of original JSONs
├── setup.txt             # Detailed setup guide
├── package.json          # Node.js dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🚀 How to Use

### Web Application

1.  **Setup**: Follow the instructions in `setup.txt` to install Node.js dependencies and build the CSS.
    ```bash
    npm install
    npm run build
    ```
2.  **Launch**: Open `html/index.html` in any modern web browser.
3.  **Start**: Click the "Next" button on the landing page to enter the builder.
4.  **Edit**: Fill out the forms on the left-hand side.
5.  **Preview**: Watch your resume take shape in real-time.
6.  **Download**: Click the "Save as PDF" button to export.

### Python Script

1.  **Setup**: Install Python dependencies as described in `setup.txt`.
    ```bash
    pip install -r txt/requirements.txt
    ```
2.  **Run the Script**:
    ```bash
    python python/resume_builder.py
    # OR
    python python/generate_cv.py
    ```
3.  **Output**: A `.docx` file will be generated in the project directory or `docx/` folder.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
