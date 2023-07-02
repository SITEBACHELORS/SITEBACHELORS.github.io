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

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <a style={{ fontSize: '45px',  }}>{t('coffee')}</a>
      </div>

      <div style={{ display: 'flex', paddingLeft: '50px', paddingRight: '50px' }}>
        <div style={{ flex: '0.6',  }}>
          <img src={pie} alt="Pie" style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }} />
        </div>

        <div style={{ flex: '1',paddingLeft: '100px', paddingRight: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: '#F24E1E', marginBottom: '10px' }}>
            <a style={{ fontSize: '20px', color: '#F24E1E' }}>{t('Mission')}</a>
          </div>
          <div style={{ textAlign: 'justify' }}>
            <a>{t('missionStatement')}</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', color: '#F24E1E', marginBottom: '10px', marginTop: '30px' }}>
  <a style={{ fontSize: '20px', color: '#F24E1E' }}>{t('Drive')}</a>
</div>
<div style={{ textAlign: 'justify', marginBottom: '20px' }}>
  <a>{t('driveStatement1')}</a>
</div>
<div style={{ textAlign: 'justify', marginBottom: '20px' }}>
  <a>{t('driveStatement2')}</a>
</div>
<div style={{ textAlign: 'justify', marginBottom: '20px' }}>
  <a>{t('driveStatement3')}</a>
</div>

        </div>
      </div>
    </div>
  );
}
