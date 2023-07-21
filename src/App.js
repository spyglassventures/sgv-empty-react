import React from 'react';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const App = (props) => {
  const [data, setData] = useState('No result');

  const qrConstraints = {
    facingMode: 'environment', // Use the back camera (rear camera)
  };

  const handleScan = (result) => {
    if (result) {
      setData(result);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const openScannedURL = () => {
    // Check if the scanned data is a valid URL before opening it
    if (data && isURL(data)) {
      window.open(data, '_blank'); // Open the URL in a new tab
    } else {
      console.log('Invalid URL or no URL scanned.');
    }
  };

  const isURL = (text) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(text);
  };


  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      {/* Hero Section */}
      
      <section className="py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Please scan your medical ZK-Proof</h1>
        <p className="text-lg mb-8">You will only do minimal required disclosure of infrmation</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Get Started
        </button>

            <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: '100%' }}
            onScan={handleScan}
            onError={handleError}
            facingMode={qrConstraints.facingMode}
          />
          <p>{data}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={openScannedURL}>
            Proof
          </button>
        
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What is ZK Medical docs?
          </h2>
          <p className="text-gray-600 mb-8">
          ZK Medical docs is a revolutionary blockchain-based platform that allows you to securely reveal medical information to selected trusted institutions you like to work with. Our mission is to make digital medical records accessible to everyone who should have access, but to no one else.
          </p>
          <p className="text-gray-600">
            Whether you are a seasoned trader or just starting with cryptocurrencies, CryptoWorld has got you covered. Join us and be a part of the future of finance!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Secure Wallet</h3>
              <p className="text-gray-600">
                Our secure wallet ensures the safety of your digital assets with state-of-the-art encryption and multi-factor authentication.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Instant Trading</h3>
              <p className="text-gray-600">
                Experience lightning-fast trades with our advanced trading engine, providing real-time market data and seamless execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-blue-500 py-16 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            {/* You can replace these placeholders with actual team member information */}
            <div className="bg-blue-600 rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">John Doe</h3>
              <p className="text-sm text-blue-200">CEO</p>
            </div>
            <div className="bg-blue-600 rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
              <p className="text-sm text-blue-200">CTO</p>
            </div>
            <div className="bg-blue-600 rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Mike Johnson</h3>
              <p className="text-sm text-blue-200">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Contact Us
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
            <textarea
              className="px-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-full"
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded col-span-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
