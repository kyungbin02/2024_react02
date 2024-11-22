import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';

function Page({isDark, setIsDark}) {
  return (
    <div className='page'>
          <Header isDark={isDark} />          
          <Main isDark={isDark} />          
          <Footer isDark={isDark} setIsDark={setIsDark} />          
    </div>
  );
}

export default Page;