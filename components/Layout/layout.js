import React from 'react';
import Header from '../Header/Header';
import style from "./layout.module.scss"

const Layout = ({children}) => {
  return (
    <div className={style.container}>
      <Header />
      {children}
    </div>
  )
}

export default Layout;