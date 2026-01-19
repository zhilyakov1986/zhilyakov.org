import React from 'react';
import Card from './Card';

const Experience = ({ experience }) => {
    return (
        <Card title="Experience" className="col-span-full">
            <div className="space-y-4">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800 last:mb-0 group transition-colors duration-200">
                        {/* Timeline Dot */}
                        <div className="absolute top-[22px] left-[-7px] w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-900 group-hover:ring-indigo-100 dark:group-hover:ring-indigo-900/50 transition-all"></div>

                        <div className="p-4 rounded-lg group-hover:bg-slate-50 dark:group-hover:bg-slate-800/50 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{job.role}</h4>
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-full mt-2 sm:mt-0">{job.period}</span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                                <span className="font-semibold text-base text-slate-700 dark:text-slate-300">{job.company}</span>
                                <span className="text-xs text-slate-400 flex items-center gap-1 mt-1 sm:mt-0">
                                    <span>📍</span> {job.location}
                                </span>
                            </div>

                            <ul className="space-y-2">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-3 relative">
                                        <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-indigo-400/50"></span>
                                        {achievement.split(':')[0]}<span className="opacity-75">: {achievement.split(':')[1]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default Experience;
