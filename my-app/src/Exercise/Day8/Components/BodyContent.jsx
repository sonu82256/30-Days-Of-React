import React, { useState } from 'react';
import Button from './Button';

const BodyContent = ({changeTheme, theme}) => {

    console.log(theme)

  return (
    <div>
      <p>Prerequisite to get started with React.js</p>
      <div style={{ paddingLeft: '10px' }}>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocLxd1SRfreGejfYtDUSmp7XeTnjsx4ZyTXurQfdJZPhtx_6Yrx0=s288-c-no" alt="sonupic" />
        <p>Sonu Kumar</p>
        <Button btn={'Greet People'} />
        <Button btn={'Show Time'} />
        <Button onClick={changeTheme} btn={theme == 'light' ? 'Dark Mode' : 'Light Mode'} />
      </div>
    </div>
  );
};

export default BodyContent;