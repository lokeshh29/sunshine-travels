# How to Run the Frontend

Follow these steps to run the Sunshine Holidays Tours and Travels frontend locally on your machine.

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 14 or higher)
- npm (Node Package Manager) which comes with Node.js, or yarn.

## Setup Instructions

1. **Open your terminal or command prompt.**
2. **Navigate to the project directory** (if you aren't already there):
   ```bash
   cd "c.....\sunshine_travels"
   ```

3. **Install the dependencies:**
   Run the following command to download and install all necessary packages listed in `package.json`:
   ```bash
   npm install
   ```
   *(If you are using yarn, run `yarn install` instead).*

4. **Start the development server:**
   Once the installation is complete, start the local Vite development server:
   ```bash
   npm run dev
   ```
   *(If you are using yarn, run `yarn dev` instead).*

5. **Open the app in your browser:**
   After running the above command, the terminal will display a local URL (typically `http://localhost:5173` or `http://localhost:3000`). 
   Open this URL in your web browser to view the application.

## Building for Production

If you need to build the frontend for production deployment, run:
```bash
npm run dev or npm run build
```