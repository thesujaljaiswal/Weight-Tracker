# Weight Tracker Application

## Overview
The Weight Tracker application is a React-based web app that allows users to log their daily weight and visualize it in a line graph. Users can also edit or delete existing entries, and the app ensures data is always stored in ascending order of dates. The app uses local storage to persist data across sessions.

## Features
- **Add Weight Entries:** Users can select a date and enter their weight.
- **Date Validation:** Dates cannot be greater than the current date.
- **Undo Feature:** Users can undo an overridden entry within 5 seconds.
- **Delete Feature:** Users can manually delete weight entries.
- **Data Visualization:** Displays the weight history in a line graph using Chart.js.
- **Data Persistence:** Stores data locally using `localStorage`.

## Technologies Used
- **Frontend Framework:** React.js
- **Chart Library:** Chart.js
- **Date Picker:** `react-datepicker`
- **Styling:** Custom CSS

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weight-tracker.git
   cd weight-tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Deployment
This app is ready to be deployed on platforms like [Vercel](https://vercel.com). Follow these steps:
1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the `build/` directory to your preferred hosting platform.

## Usage
1. **Adding a Weight Entry:**
   - Select a date using the date picker.
   - Enter the weight in kilograms.
   - Click the `Submit` button.

2. **Editing an Entry:**
   - Enter the same date with a new weight value. The app will override the existing entry.

3. **Deleting an Entry:**
   - Click the delete button next to an entry in the weight history.

4. **Undo Overridden Entry:**
   - After overriding an entry, click the `Undo changes` button within 5 seconds to restore the previous value.

## Folder Structure
```plaintext
src/
├── components/
│   ├── WeightTrackerApp.js  # Main application component
├── styles/
│   ├── App.css             # Custom CSS for styling
├── App.js                   # Root component
├── index.js                 # Entry point
```

## Future Enhancements
- Integration with a backend for centralized data storage.
- Authentication for multiple user profiles.
- Additional visualizations, such as bar charts or pie charts.

## Contributing
Feel free to fork this repository and submit pull requests for new features or bug fixes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Enjoy tracking your weight with ease! 🎉

