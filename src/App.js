import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SideBar from './components/sidebar';
import './App.css';

const menuList = [
  { text: 'Menu 1', url: window.location.href},
  { text: 'Menu 2', url: 'https://example.com/menu1'},
  { text: 'Menu 3', url: window.location},
  { text: 'Menu 4', url: 'https://example.com/menu2'},
];

function App() {
  return (
    <div className="app">
      <Header title="Header"/>
      <div className="main-content">
        <SideBar title="My Sidebar" menuList={menuList} logoPath={require('./components/img/logo.png')}/>
        <Content title="Content"/>
      </div>
      <Footer title="Footer" menuList={menuList}/>
    </div>
  );
}

export default App;