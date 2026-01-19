import React from 'react';

const Card = ({ children, className = '', title }) => {
    return (
        <div className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 ${className}`}>
            {title && <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">{title}</h3>}
            {children}
        </div>
    );
};

export default Card;
