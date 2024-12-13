# React App: Pagination, Search, and reCAPTCHA Verification

This project is a simple React application that fetches data from an API, displays paginated results with a search filter, and uses Google reCAPTCHA for verification.

## **Features**
- **reCAPTCHA Integration**: Ensures user verification before content is displayed.
- **Search Functionality**: Filters items based on the search input.
- **Pagination**: Allows navigating through paginated results.

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/farhanali095/sav-assignment.git
   cd your-repo

2. Install dependencies:
   ```bash
   npm install

3. Replace the RECAPTCHA_SITE_KEY in App.jsx with your Google reCAPTCHA site key:
   ```bash
   const RECAPTCHA_SITE_KEY = "YOUR_GOOGLE_RECAPTCHA_SITE_KEY";

4. Start the development server:
   ```bash
   npm run dev

5. Open http://localhost:5173 in your browser.