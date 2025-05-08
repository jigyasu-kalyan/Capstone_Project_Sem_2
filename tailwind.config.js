module.exports = {
  theme: {
    extend: {
      animation: {
        fadein: 'fadein 1.5s ease-out',
        bounce: 'bounce 1s infinite',
        'zoom-in': 'zoom-in 0.5s ease-in-out',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
};
