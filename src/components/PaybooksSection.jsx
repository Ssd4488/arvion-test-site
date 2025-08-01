// src/components/PaybooksSection.jsx
import React from "react";

const PaybooksSection = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen p-8 pt-24">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-800">ARVION PAYBOOKS</h2>

      <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-12">
        Arvion Paybooks is a modern payroll management solution designed to simplify and streamline your institution’s salary processing, attendance tracking, and compliance workflows.
        Our powerful platform helps HR teams focus on people — not paperwork. <br />
        <span className="font-semibold text-blue-800">Coming Soon in 2025!</span>
      </p>

      <div className="bg-blue-50 p-6 rounded-xl shadow-md max-w-4xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">What You Can Expect:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Automated Payroll Processing</li>
          <li>Real-Time Attendance Integration</li>
          <li>Tax and PF/ESI Compliance Made Easy</li>
          <li>Custom Salary Structures</li>
          <li>Employee Self-Service Portal</li>
          <li>Bank Integrations for Direct Payouts</li>
        </ul>
      </div>

      <p className="text-center text-gray-500">
        Want to be notified once Paybooks is live?{" "}
        <span className="font-semibold text-blue-600 cursor-pointer hover:underline">
          Book a demo
        </span>{" "}
        and we'll keep you updated.
      </p>
    </div>
  );
};

export default PaybooksSection;
