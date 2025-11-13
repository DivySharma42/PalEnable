import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router'
import ChatbotWidget from './components/ui/chatbotWidget'

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error connecting to backend:', err));
  }, []);

  return (
    <>
      <p style={{ color: 'green', textAlign: 'center' }}>
        {message || 'Connecting to backend...'}
      </p>
      <RouterProvider router={router} />
      <ChatbotWidget />
    </>
  )
}

export default App
