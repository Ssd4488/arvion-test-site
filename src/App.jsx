import React, { useState } from 'react';
import ERPSection from './components/ERPSection';
import PaybooksSection from './components/PaybooksSection';
import BookDemoModal from './components/BookDemoModal';

const App = () => {
  const [activeTab, setActiveTab] = useState('erp');
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Book Demo Popup */}
      {showModal && <BookDemoModal onClose={() => setShowModal(false)} />}

      {/* Toggle Tabs */}
      <div className="flex justify-center gap-6 p-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold text-lg">
        <button onClick={() => setActiveTab('erp')}>ERP</button>
        <button onClick={() => setActiveTab('paybooks')}>Paybooks</button>
      </div>

      {/* Scrollable Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'erp' ? <ERPSection /> : <PaybooksSection />}
      </div>
    </div>
  );
};

export default App;
