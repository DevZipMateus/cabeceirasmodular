import whatsappIcon from "@/assets/whatsapp-icon.webp";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/552199781936", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppFloat;