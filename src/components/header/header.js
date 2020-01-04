import React from 'react';

export default function Header(props) {
  return (
    <header className="header" data-test="header">
      <h2 className="header__brand" data-test="header__brand">
        Sample app
      </h2>
    </header>
  );
}
