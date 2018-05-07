import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './assets/style/global.css'; // 引入修改后的antd样式

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
