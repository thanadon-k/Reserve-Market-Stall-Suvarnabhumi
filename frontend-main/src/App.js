import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Report from './page/report';
import CreateStore from './page/CreateStore';
import Home from './page/Home';
import SelectStall from './page/SelectStall';
import Admin_dashboard from './page/AdminDashboard';
import NotFound from './page/NotFound';
import ViewReceipt from './page/viewReceipt';
import Payment from './page/payment';
import Notificaiton from './page/notification';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report' element={<Report />} />
        <Route path='/CreateStore' element={<CreateStore />} />
        <Route path='/SelectStall' element={<SelectStall />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Admin' element={<Admin_dashboard />} />
        <Route path='/viewReceipt' element={<ViewReceipt />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/notification' element={<Notificaiton />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
