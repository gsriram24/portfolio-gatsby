module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      opacity: {
        10: '.1',
        20: '.2',
      },
      spacing: {
        full: '100%',
      },
      colors: {
        'primary-orange': '#FFBB66',
        'primary-blue': '#005AB4',
        'primary-dark': '#0B0F13',
        'secondary-dark': '#1A2026',
        'accent-dark': '#3D3D3D',
        'primary-light': '#F2F2F2',
        'secondary-light': '#ffffff',
        'accent-light': '#858585',
      },
    },
  },
  variants: {},
  plugins: [],
};
