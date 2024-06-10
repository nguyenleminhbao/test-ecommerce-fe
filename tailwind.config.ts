const colors = {
  primary: '#000000',
  'secondary-blue': '#377DFF',
  'secondary-red': '#FF5630',
  'secondary-green': '#38CB89',
  'secondary-orange': '#FFAB00',

  'neutral-1': '#FEFEFE',
  'neutral-2': '#F3F5F7',
  'neutral-3': '#E8ECEF',
  'neutral-4': '#6C7275',
  'neutral-5': '#343839',
  'neutral-6': '#232627',
  'neutral-7': '#141718'
}

const fontSize = {
  hero: [
    '96px',
    {
      letterSpacing: '-2%',
      lineHeight: '96px',
      fontWeight: '500'
    }
  ],
  'headline-1': [
    '80px',
    {
      letterSpacing: '-3px',
      lineHeight: '84px',
      fontWeight: '500'
    }
  ],
  'headline-2': [
    '72px',
    {
      letterSpacing: '-2px',
      lineHeight: '76px',
      fontWeight: '500'
    }
  ],
  'headline-3': [
    '54px',
    {
      letterSpacing: '-1px',
      lineHeight: '58px',
      fontWeight: '500'
    }
  ],
  'headline-4': [
    '40px',
    {
      letterSpacing: '-0.4px',
      lineHeight: '44px',
      fontWeight: '500'
    }
  ],
  'headline-5': [
    '34px',
    {
      letterSpacing: '-0.6px',
      lineHeight: '38px',
      fontWeight: '500'
    }
  ],
  'headline-6': [
    '28px',
    {
      letterSpacing: '-0.6px',
      lineHeight: '34px',
      fontWeight: '500'
    }
  ],
  'headline-7': [
    '20px',
    {
      letterSpacing: '-0.6px',
      lineHeight: '28px',
      fontWeight: '500'
    }
  ],

  'body-1': [
    '20px',
    {
      lineHeight: '32px',
      fontWeight: '400'
    }
  ],
  'body-1-semibold': [
    '20px',
    {
      lineHeight: '32px',
      fontWeight: '600'
    }
  ],
  'body-1-bold': [
    '20px',
    {
      lineHeight: '32px',
      fontWeight: '700'
    }
  ],

  'body-2': [
    '16px',
    {
      lineHeight: '26px',
      fontWeight: '400'
    }
  ],
  'body-2-semibold': [
    '16px',
    {
      lineHeight: '26px',
      fontWeight: '600'
    }
  ],
  'body-2-bold': [
    '16px',
    {
      lineHeight: '26px',
      fontWeight: '700'
    }
  ],

  'caption-1': [
    '14px',
    {
      lineHeight: '22px',
      fontWeight: '400'
    }
  ],
  'caption-1-semibold': [
    '14px',
    {
      lineHeight: '22px',
      fontWeight: '600'
    }
  ],
  'caption-1-bold': [
    '14px',
    {
      lineHeight: '22px',
      fontWeight: '700'
    }
  ],

  'caption-2': [
    '12px',
    {
      lineHeight: '20px',
      fontWeight: '400'
    }
  ],
  'caption-2-semibold': [
    '12px',
    {
      lineHeight: '20px',
      fontWeight: '600'
    }
  ],
  'caption-2-bold': [
    '12px',
    {
      lineHeight: '20px',
      fontWeight: '700'
    }
  ],

  'hairline-1': [
    '16px',
    {
      lineHeight: '16px',
      fontWeight: '700'
    }
  ],
  'hairline-2': [
    '12px',
    {
      lineHeight: '12px',
      fontWeight: '700'
    }
  ],

  'button-xl': [
    '26px',
    {
      lineHeight: '38px',
      fontWeight: '500'
    }
  ],
  'button-l': [
    '22px',
    {
      lineHeight: '34px',
      fontWeight: '500'
    }
  ],
  'button-m': [
    '18px',
    {
      letterSpacing: '-0.4px',
      lineHeight: '32px',
      fontWeight: '500'
    }
  ],
  'button-s': [
    '16px',
    {
      letterSpacing: '-0.4px',
      lineHeight: '28px',
      fontWeight: '500'
    }
  ],
  'button-xs': [
    '14px',
    {
      lineHeight: '24px',
      fontWeight: '500'
    }
  ]
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colors,
      fontSize: fontSize,
      screens: {
        default: '1472px',
        xs: '600px',
        tablet: '601px'
      },
      backgroundImage: {
        payment: "url('../src/assets/images/payment.jpg')"
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
