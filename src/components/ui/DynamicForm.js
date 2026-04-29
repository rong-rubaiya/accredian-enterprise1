"use client";
import { Modal } from './Modal';
import { DynamicForm } from './ui/DynamicForm';

export default function FAQSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define your form structure here
  const enquiryFields = [
    { name: "fullname", placeholder: "Full Name", icon: "user", required: true },
    { name: "email", placeholder: "Work Email", type: "email", icon: "mail", required: true },
    { name: "company", placeholder: "Organization", icon: "building" },
    { 
      name: "domain", 
      placeholder: "Select Domain", 
      type: "select", 
      icon: "globe",
      options: ["Data Science", "Fintech", "AI & ML"] 
    },
    { name: "candidates", placeholder: "Candidates", type: "number", icon: "users" },
    { name: "location", placeholder: "Location", icon: "map" },
  ];

  const handleFormSubmit = (data) => {
    console.log("Form Captured:", data);
    // Add your API call here
    setIsModalOpen(false);
  };

  return (
    <>
      <PrimaryButton onClick={() => setIsModalOpen(true)}>Enquire Now</PrimaryButton>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Form Panel */}
        <div className="w-full p-10 lg:p-14">
          <h3 className="text-3xl font-black mb-8">Enquire Now</h3>
          
          <DynamicForm 
            fields={enquiryFields} 
            onSubmit={handleFormSubmit} 
            buttonText="Send Request"
          />
        </div>
      </Modal>
    </>
  );
}