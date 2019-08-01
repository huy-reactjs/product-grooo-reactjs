import React from 'react';
import './App.css';
import Header from "./component/header/Header";
import Layout from "antd/es/layout";

function App() {
    return (
        <div>
            <Layout>
                <Header/>
            </Layout>
        </div>
    );
}

export default App;
