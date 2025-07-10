import { MessageCircle } from 'lucide-react';

const WhatsAppContact = () => {
  const phoneNumber = "+212123456789"; // Replace with actual WhatsApp number
  const defaultMessage = "Bonjour Dr. Nawal El Ghorfi, je souhaiterais prendre rendez-vous pour une consultation en kinésithérapie.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Contactez-nous sur WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
};

export default WhatsAppContact;