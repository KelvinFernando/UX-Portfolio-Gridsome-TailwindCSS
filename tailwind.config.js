module.exports = {
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',
      darksand: '#a9805c',
      tomato: '#e75335',
      softblue: '#7ca5d1',
      seafoamblue: '#71cac4',
      offyellow: '#dcda47',
      mutedpink: '#db73a4',
      cherryred: '#ed1c24',
      bluelink: '#0000EE',
      darkskyblue: '#558ED5',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      }
    },
    fontFamily: {
      sans: ['Montserrat'],
      serif: ['Roboto Slab']
    },
    fontSize: {
      xs: '0.75',
      sm: '0.875rem', //14
      base: '1rem', //16
      lg: '1.125rem', //18
      xl: '1.3125rem', //21
      '2xl': '1.625rem', //26
      '3xl': '2.125rem', //34
      '4xl': '2.625rem', //42
      '5xl': '3rem',
      '6xl': '4.5rem' //72
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.3125rem', //5
      '2': '0.625rem', //10
      '3': '0.9375rem', //15
      '4': '1rem',
      '5': '1.25rem', //20
      '6': '1.875rem', //30
      '8': '2.5rem', //40
      '10': '2.8125rem', //45
      '12': '3.125rem', //50
      '16': '3.75rem', //60
      '20': '5rem',
      '24': '6.25rem', //100
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '49': '12.5rem',
      '56': '14rem',
      '64': '16rem'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.675', //28
      loose: '2.0625' //33
    }
  },
  variants: {},
  plugins: [
    // Some useful comment
  ]
};
