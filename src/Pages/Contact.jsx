import React from 'react';

const Contact = () => {
    return (
        <div>
             <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">Explore the Library</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            <div className="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4">
                <img className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
                <img className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" src="https://images.unsplash.com/photo-1633983482450-bfb7b566fe6a?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
                <img className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" src="https://plus.unsplash.com/premium_photo-1671209879721-3082e78307e3?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
                <img className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&h=900&auto=format&fit=crop" alt="image" />
            </div>
        </div>
    );
};

export default Contact;