import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './component/Navbar/styles.scss';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// <BrowserRouter>
//   {/* <Header /> */}
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="capoeira" element={<Capoeira />} />
//       <Route path="aboutUs" element={<AboutUs />} />
//       <Route path="academy" element={<Academy />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="trainings" element={<Trainings />} />
//     </Routes>
//   </BrowserRouter>,