import React from 'react';
import Card from './Card';

const Skills = ({ skills }) => {
    return (
        <div className="col-span-full space-y-4">
            <Card title="Tech Stack" className="h-full">
                <div className="space-y-6">
                    <div>
                        <h5 className="text-xs font-semibold text-slate-400 mb-2">LANGUAGES</h5>
                        <div className="flex flex-wrap gap-2">
                            {skills.languages.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-full border border-slate-200 dark:border-slate-600">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-xs font-semibold text-slate-400 mb-2">FRONTEND</h5>
                        <div className="flex flex-wrap gap-2">
                            {skills.frontend.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full border border-indigo-100 dark:border-indigo-800">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-xs font-semibold text-slate-400 mb-2">BACKEND & CLOUD</h5>
                        <div className="flex flex-wrap gap-2">
                            {[...skills.backend, ...skills.cloud].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full border border-emerald-100 dark:border-emerald-800">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Skills;
