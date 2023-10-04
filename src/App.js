import React, { useState } from 'react';
import './style.css';


function App() {
  const items = [
    {
      'itemName': 'Notebook (Single Subject)',
      'Price': 50,
      'desc': 'A single-subject notebook with 100 pages for taking notes and making lists.'
    },
    {
      'itemName': 'Mechanical Pencils (Pack of 10)',
      'Price': 30,
      'desc': 'A pack of 10 mechanical pencils with erasers, perfect for school or office use.'
    },
    {
      'itemName': 'Highlighters (Assorted Colors, Pack of 6)',
      'Price': 60,
      'desc': 'A set of 6 colorful highlighters for marking important information in your notes.'
    },
    {
      'itemName': 'Sticky Notes (Assorted Sizes, Pack of 100)',
      'Price': 25,
      'desc': 'A pack of 100 sticky notes in various sizes, ideal for reminders and bookmarks.'
    },
    {
      'itemName': 'Whiteboard Markers (Black, Pack of 4)',
      'Price': 40,
      'desc': 'A set of 4 black whiteboard markers for presentations and classroom use.'
    },
    {
      'itemName': 'Graph Paper (Pad of 50 Sheets)',
      'Price': 45,
      'desc': 'A pad of 50 sheets of graph paper for math and engineering work.'
    },
    {
      'itemName': 'Eraser Set (Assorted Shapes, Pack of 5)',
      'Price': 15,
      'desc': 'A pack of 5 erasers in various shapes for precise erasing.'
    },
    {
      'itemName': 'Binder Clips (Assorted Sizes, Pack of 20)',
      'Price': 20,
      'desc': 'A pack of 20 binder clips in different sizes for organizing documents.'
    },
    {
      'itemName': 'Correction Tape (Pack of 3)',
      'Price': 35,
      'desc': 'A set of 3 correction tape dispensers for fixing mistakes neatly.'
    },
    {
      'itemName': 'Protractor and Compass Set',
      'Price': 55,
      'desc': 'A set containing a protractor and compass for geometry and drafting.'
    }
  ];

  function ItemCard({ item }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    return (
      <div className="item-card bg-white rounded-lg shadow-md p-4 m-4">
      <h2 className="text-xl font-semibold mb-2">{item.itemName}</h2>
      <p className="text-gray-700">Price: {item.Price}.00 Rs</p>
      <p className="text-gray-700">Description: {item.desc}</p>
      <div className="counter flex items-center mt-4">
        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleDecrement}>-</button>
        <span className="mx-2 text-xl">{count}</span>
        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={handleIncrement}>+</button>
      </div>
    </div>
    
    );
  }

  return (
    <div className="App text-center">
    <h1 className="text-2xl font-bold mt-8 mb-4">Stationery for Sale</h1>
    <div className="item-list flex flex-wrap justify-center">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  </div>
  
  );
}

export default App;





