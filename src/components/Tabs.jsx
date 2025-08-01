import { useState } from "react";
import ERPSection from "./ERPSection";
import PaybooksSection from "./PaybooksSection";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("erp");

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeTab === "erp"
              ? "bg-blue-700 text-white shadow"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setActiveTab("erp")}
        >
          ERP
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeTab === "paybooks"
              ? "bg-blue-700 text-white shadow"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setActiveTab("paybooks")}
        >
          Paybooks
        </button>
      </div>
      {activeTab === "erp" ? <ERPSection /> : <PaybooksSection />}
    </div>
  );
}
