import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AttendeesList from './Components/AttendeeList';
import FilterSidebar from './Components/FilteredSidebar';
import jsonData from "./data.json";
import '@fortawesome/fontawesome-svg-core/styles.css';


const App = () => {

  return (
    <div className="App">
      <Header />
      <h1>Hoyas in August Event Attendees</h1>
      <main>
        <FilterSidebar  />
        <AttendeesList attendees={jsonData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
