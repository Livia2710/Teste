import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const myObserver = new IntersectionObserver((entries) => {
  console.log(entries)
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show')
          entry.target.classList.add('animate__animated')
          entry.target.classList.add('animate__slow')
          entry.target.classList.add('animate__fadeInUp')
      } else {
          entry.target.classList.remove('show')
          entry.target.classList.remove('animate__animated')
          entry.target.classList.remove('animate__slow')
          entry.target.classList.remove('animate__fadeInUp')
      }
  })
});
const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element))
