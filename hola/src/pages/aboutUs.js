import React from 'react';
import { useTranslation } from 'react-i18next';
import pie from '../IMAGES/pie.png';

export default function AboutUs() {
  const { t, i18n } = useTranslation();

  return (
    <div className="AboutUs" style={{ padding: '30px', marginTop: '20px', marginBottom: '20px', marginLeft: '50px', marginRight: '50px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <a style={{ fontSize: '20px', color: '#F24E1E' }}>{t('About Us')}</a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
        <a style={{ fontSize: '50px' }}>{t('coffee')}</a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: '#F24E1E', marginBottom: '10px' }}>
            <a style={{ fontSize: '20px', color: '#F24E1E' }}>{t('Mission')}</a>
          </div>
          <div style={{ textAlign: 'justify' }}>
            <a>{t('missionStatement')}</a>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: '#F24E1E', marginBottom: '10px' }}>
            <a style={{ fontSize: '20px', color: '#F24E1E' }}>{t('Drive')}</a>
          </div>
          <div style={{ textAlign: 'justify' }}>
            <a>{t('driveStatement1')}</a>
          </div>
          <div style={{ textAlign: 'justify' }}>
            <a>{t('driveStatement2')}</a>
          </div>
          <div style={{ textAlign: 'justify' }}>
            <a>{t('driveStatement3')}</a>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ flex: '0.3' }}>
          <img src={pie} alt="Pie" style={{ borderRadius: '5px', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}
