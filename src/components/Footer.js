import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-6 text-center">
            <p>&copy; {new Date().getFullYear()} Andrew Chow. All rights reserved.</p>
        </footer>
    );
};

export default Footer;