import React from 'react';
import { useTranslation } from 'react-i18next';


export default function ContactUs() {
  const { t, i18n } = useTranslation();

  return (
    <section id="ContactUs">
    <div>
      <h1 style={{ textAlign: "center", fontSize: "50px", color: "#F24E1E", marginBottom: "20px" }}>{t('Contact Us')}</h1>
   
    </div>
    
  {/* Contact Us content */}
</section>
      
   
  );
}
