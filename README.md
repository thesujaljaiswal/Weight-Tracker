# Weight Tracker

A simple and intuitive weight tracking application to help you monitor and visualize your weight changes over time. Built using React.js, it uses a clean and interactive interface to log your daily weight and display the data on a dynamic line graph.

## Live Demo
Check out the live application here: [Weight Tracker on Vercel](https://weight-tracker-five-chi.vercel.app/)

---

## Features
- **Date Picker**: Select dates using a calendar widget.
- **Graph Visualization**: View your weight trends on a line chart.
- **Undo Feature**: Undo the last overridden entry within 5 seconds.
- **Delete Functionality**: Remove specific entries manually.
- **LocalStorage Integration**: All data is stored in the browser and persists even after the page is refreshed.

---

## Tech Stack
- **Frontend**: React.js
- **Charting**: Chart.js
- **Date Picker**: React DatePicker
- **CSS**: Custom and library styling for components

---

## Installation

### Prerequisites
- **Node.js** and **npm** installed on your system.

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weight-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000`.

---

## Deployment

This application is deployed on **Vercel**. Follow these steps to deploy:
1. Push your project to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/).
3. Import the GitHub repository and set the build command to:
   ```bash
   npm run build
   ```
4. Set the output directory to:
   ```
   build/
   ```
5. Deploy and share the provided live URL!

---

## Usage
1. Select a date using the calendar widget.
2. Enter your weight in kilograms.
3. Click **Submit** to save the entry.
4. View your weight trend on the graph.
5. To delete an entry, click the delete button next to it in the history list.

---

## Future Enhancements
- Add user authentication to enable multi-device sync.
- Allow export/import of weight data.
- Provide analysis insights such as BMI calculations.

---

## License
This project is licensed under the MIT License. Feel free to modify and use it.