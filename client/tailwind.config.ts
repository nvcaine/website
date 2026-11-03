import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                phthalo: {
                    '300': '#52d9a8',
                    '400': '#22b88a',
                    '500': '#178f6b',
                    '600': '#0f6e52',
                    '700': '#0f543f',
                    '800': '#0c3e2e',
                    '900': '#08281d',
                    '950': '#041711'
                }
            }
        }
    },
    plugins: []
};

export default config;
