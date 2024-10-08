import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PurchaseRecord from './pages/PurchaseRecord';
import CustomerProfile from './pages/CustomerProfile';
import RedeemRecord from './pages/RedeemRecord';

const AppRouter = () => {
  return (
    <Routes>
    <Route path="/purchase-record" element={<PurchaseRecord />} />
    <Route path="/customer-profile" element={<CustomerProfile />} />
    <Route path="/redeem-record" element={<RedeemRecord />} />
    <Route path="/" element={<PurchaseRecord />} /> {/* Default Route */}
    </Routes>
  );
};

export default AppRouter;
