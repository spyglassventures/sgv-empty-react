import React from 'react';
import './App.css';

const App = () => {
  const hackathonTitle = "Crypto Hackathon 2023";
  const hackathonDate = "August 15-16, 2023";
  const hackathonLocation = "Virtual Event";
  const hackathonDescription = "Join us for the biggest crypto hackathon of the year! Dive into the world of blockchain, cryptocurrencies, and decentralized applications. Whether you're a seasoned developer or just starting, this hackathon is the perfect opportunity to showcase your skills and create innovative projects with the potential to shape the future of finance and technology.";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{hackathonTitle}</h1>
        <p>Date: {hackathonDate}</p>
        <p>Location: {hackathonLocation}</p>
      </header>
      <main className="App-content">
        <h2>About the Hackathon</h2>
        <p>{hackathonDescription}</p>

        <h2>Prizes</h2>
        <ul>
          <li>1st Place: $10,000 in cryptocurrency</li>
          <li>2nd Place: $5,000 in cryptocurrency</li>
          <li>3rd Place: $2,500 in cryptocurrency</li>
        </ul>

        <h2>Event Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Day 1</td>
              <td>10:00 AM - 11:00 AM</td>
              <td>Opening Ceremony</td>
            </tr>
            <tr>
              <td>Day 1</td>
              <td>11:30 AM - 6:00 PM</td>
              <td>Hacking Session</td>
            </tr>
            <tr>
              <td>Day 2</td>
              <td>10:00 AM - 5:00 PM</td>
              <td>Hacking Session</td>
            </tr>
            <tr>
              <td>Day 2</td>
              <td>6:00 PM - 7:00 PM</td>
              <td>Closing Ceremony &amp; Demos</td>
            </tr>
          </tbody>
        </table>

        <h2>Registration</h2>
        <p>Don't miss out on this incredible event! Register now at <a href="https://cryptohackathon2023.example">cryptohackathon2023.example</a>.</p>
      </main>
      <footer className="App-footer">
        <p>© 2023 Crypto Hackathon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
