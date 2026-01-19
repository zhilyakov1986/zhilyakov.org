import React from 'react';
import Card from './Card';
import profileImage from '../assets/zhilka.png';

const Hero = ({ profile }) => {
    return (

        <Card className="col-span-full flex items-center relative overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900 !border-none !text-white p-6">
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-4 w-full">
                <div className="shrink-0 flex flex-col items-center">
                    <img
                        src={profileImage}
                        alt={profile.name}
                        className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/20 shadow-xl object-cover"
                    />

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-4">
                        {profile.social?.linkedin && (
                            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.6-1.93-1.84-1.93-1.16 0-1.78.8-1.78 1.93V19h-3v-9h2.9v1.37a3.46 3.46 0 012.7-1.37c1.8 0 3.03.96 3.03 4.13z" />
                                </svg>
                            </a>
                        )}
                        {profile.social?.github && (
                            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85.04 1.7.19 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                </svg>
                            </a>
                        )}
                        {profile.social?.twitter && (
                            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight leading-none -mt-2">{profile.name}</h1>
                    <p className="text-xl md:text-2xl opacity-90 font-light mb-3">{profile.title}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm opacity-80">
                        <span className="flex items-center gap-1">
                            📍 {profile.location}
                        </span>
                        <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-white hover:opacity-100 transition-opacity">
                            ✉️ {profile.email}
                        </a>
                        <span className="flex items-center gap-1">

                            📞 {profile.phone}
                        </span>


                    </div>

                    <p className="mt-2 text-sm md:text-base leading-relaxed opacity-90 text-slate-200">
                        {profile.summary}
                    </p>
                </div>
            </div>

            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl"></div>
        </Card>
    );
};

export default Hero;
