import React from 'react';
import Card from './Card';

const Projects = ({ projects }) => {
    return (
        <Card title="Side Projects" className="h-full">
            <div className="grid grid-cols-1 gap-4">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md transition-all bg-slate-50 dark:bg-slate-800/50"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                {project.logo && (
                                    <img
                                        src={project.logo}
                                        alt={`${project.name} logo`}
                                        className="w-10 h-10 rounded-lg object-cover shadow-sm"
                                    />
                                )}
                                <h4 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.name}
                                </h4>
                            </div>
                            <span className="text-slate-400 group-hover:text-indigo-500 transition-colors">
                                ↗
                            </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                            {project.description}
                        </p>
                    </a>
                ))}
            </div>
        </Card>
    );
};

export default Projects;
