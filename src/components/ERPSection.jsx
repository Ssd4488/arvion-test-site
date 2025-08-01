// /src/components/ERPSection.jsx

import React from "react";
import logo from "../assets/logo.png";

const ERPSection = () => {
  return (
    <div className="bg-[#fdfcf9] text-[#1e2d36] font-sans">
      {/* ✅ HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-20 gap-8">
        {/* Left Side: Logo + Title + Desc */}
        <div className="w-full md:w-1/2">
          <img src={logo} alt="Arvion Logo" className="h-16 md:h-20 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#004466] mb-4">
            Arvion ERP
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Discover the power of Arvion ERP – a comprehensive school management system
            crafted for modern educational institutions. From admissions to examinations,
            attendance to analytics, Arvion ERP simplifies operations and enhances outcomes.
          </p>
        </div>

        {/* Right Side: Book a Demo Form */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-center mb-4">Book a Demo</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="School Name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <textarea
              placeholder="Message (optional)"
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#004466] text-white py-2 rounded hover:bg-[#00334d] transition"
            >
              Book Demo
            </button>
          </form>
        </div>
      </div>

      {/* ✅ TESTIMONIALS */}
      <div className="bg-white py-10 px-6 md:px-16">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Schools Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="p-4 border rounded shadow-sm bg-[#f9fafb]">
              <p className="text-sm">
                “Arvion ERP helped us centralize operations. It’s user-friendly and efficient!”
              </p>
              <p className="text-sm text-gray-500 mt-2">– Principal, School {i + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ STATS */}
      <div className="py-10 px-6 md:px-16 bg-[#e8f3f7] text-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-[#004466]">
          {[
            { label: "States", value: "20+" },
            { label: "Cities", value: "100+" },
            { label: "Schools", value: "500+" },
            { label: "Students", value: "2L+" },
            { label: "Teachers", value: "15K+" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ WHY ARVION ERP */}
      <div className="py-14 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Arvion ERP?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "All-in-One Dashboard",
            "Learning Management System",
            "Graphical Reports",
            "Timetable Integration",
            "Attendance Automation",
            "Mobile Friendly",
            "Admission Management",
            "Fee Collection",
            "Academic Reports",
          ].map((title, i) => (
            <div key={i} className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-[#004466] mb-2">{title}</h3>
              <p className="text-sm text-gray-600">
                Manage and monitor everything in one place with ease and real-time insights.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ WHY ERP SOLUTIONS SECTION */}
      <div className="bg-[#f1f5f9] py-14 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Should Schools Use ERP Solutions?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Better Communication",
            "Paperless Administration",
            "Fee Tracking",
            "Attendance Monitoring",
            "Exam Management",
            "Library Records",
            "HR & Payroll",
            "Mobile App Integration",
            "Data Backup",
            "Secure Login",
            "Custom Reports",
            "User Roles",
            "Scalability",
            "Parent Portal",
            "SMS Alerts",
            "Timetable Automation",
            "Inventory Management",
          ].map((point, i) => (
            <div key={i} className="bg-white border p-4 rounded shadow-sm">
              <h4 className="font-medium text-[#00334d] mb-1">{point}</h4>
              <p className="text-sm text-gray-600">
                Efficiently manage school operations with digital accuracy and transparency.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ FOOTER */}
      <footer className="bg-[#004466] text-white text-center py-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div>Email: contact@arviontech.com</div>
          <div>Phone: +91-9876543210</div>
        </div>
      </footer>
    </div>
  );
};

export default ERPSection;
