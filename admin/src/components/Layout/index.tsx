import React from 'react';
import { Footer } from "../Footer";
import { Header } from "../Header";
import './index.css'

export interface LayoutProps  { 
    children: React.ReactNode
 }

export const Layout = ({
    children
}:LayoutProps)=>{
    return (
        <div className="container">
            <Header />
            <div className="contact-page">
                {children}
            </div>
            <Footer />
        </div>
    )
}
