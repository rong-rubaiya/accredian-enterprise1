"use client";
import React, { useState } from 'react';
import { createPortal } from 'react-dom'; // Added for the fix
import { X, ChevronDown } from 'lucide-react';
import Swal from 'sweetalert2';

const EnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Enquiry Received',
      text: 'We will get back to you shortly!',
      icon: 'success',
      confirmButtonColor: '#2563eb',
      customClass: { popup: 'rounded-2xl' }
    }).then(() => setIsOpen(false));
  };

  // This function renders the actual modal content
  const renderModalContent = () => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Main Container */}
      <div className="relative flex w-full max-w-3xl h-auto max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Left Side: Scaled Image */}
        <div className="hidden md:block w-2/5 relative">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop" 
            alt="Working Context" 
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-3/5 flex flex-col bg-white">
          <div className="px-6 pt-6 pb-2 flex justify-between items-center">
            <h2 className="text-2xl font-extrabold text-slate-800">Enquire Now</h2>
            <button onClick={toggleModal} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="px-6 pb-6 overflow-y-auto custom-scrollbar">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="border-b border-gray-200 focus-within:border-blue-500 transition-colors">
                <input required type="text" placeholder="Enter Name" className="w-full py-1.5 outline-none text-sm text-gray-700 bg-transparent" />
              </div>

              <div className="border-b border-gray-200 focus-within:border-blue-500 transition-colors">
                <input required type="email" placeholder="Enter Email" className="w-full py-1.5 outline-none text-sm text-gray-700 bg-transparent" />
              </div>

              <div className="flex items-center gap-2 border-b border-gray-200 focus-within:border-blue-500 transition-colors">
                <div className="flex items-center gap-1.5 pr-2 border-r border-gray-100">
                  <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4" />
                  <span className="text-gray-500 text-xs font-bold">+91</span>
                </div>
                <input required type="tel" className="w-full py-1.5 outline-none text-sm text-gray-700 bg-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-b border-gray-200 focus-within:border-blue-500 transition-colors">
                  <input type="text" placeholder="Company Name" className="w-full py-1.5 outline-none text-sm text-gray-700 bg-transparent" />
                </div>
                <div className="border-b border-gray-200 focus-within:border-blue-500 transition-colors">
                  <input type="number" placeholder="No. of Candidates" className="w-full py-1.5 outline-none text-sm text-gray-700 bg-transparent" />
                </div>
              </div>

              <div className="relative border-b border-gray-200">
                <select className="w-full py-1.5 outline-none text-gray-500 bg-transparent appearance-none text-sm cursor-pointer">
                  <option value="">Select Domain</option>
                  <option>Technology</option>
                  <option>Business Management</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-2.5 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative border-b border-gray-200">
                <select required className="w-full py-1.5 outline-none text-gray-500 bg-transparent appearance-none text-sm cursor-pointer">
                  <option value="">Select Mode of Delivery *</option>
                  <option>Online</option>
                  <option>Classroom</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-2.5 text-gray-400 pointer-events-none" />
              </div>

              <div className="border-b border-gray-200 focus-within:border-blue-500 transition-colors">
                <input type="text" placeholder="Eg: Gurgoan, Delhi, India" className="w-full py-1.5 outline-none text-sm text-gray-700 bg-transparent" />
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );

  return (
    <>
      {/* The Button remains where it is in the UI */}
      <button 
        onClick={toggleModal}
        className=" bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2"
      >
        Enquire Now <ChevronDown size={16} className="-rotate-90" />
      </button>

      {/* The Modal is "teleported" to the body tag so it doesn't get cut off */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        renderModalContent(),
        document.body
      )}
    </>
  );
};

export default EnquiryModal;