/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        textColorPP: "#490057",
        ppurpleColor: "#A303A0",
        whiteColor: "#FFFFFF",
        ppurpleBG: "#490057",
        bgColors: "#E5E5E5",
        borderColor: "#030229",
        bgIgmaeColor: "#FBB03B",
        bgiiagme1: "#D5D3FF",
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        homeBackground: "url('/public/assets/images/Topology-2-min.png')",
        a1: "url('/public/assets/images/اخرى (1).png')",
        a2: "url('/public/assets/images/شركات (1).png')",
        a3: "url('/public/assets/images/عيادات (1).png')",
        a4: "url('/public/assets/images/متاجر (1).png')",
        a5: "url('/public/assets/images/مدارس (1).png')",
        a6: "url('/public/assets/images/مطاعم (1).png')",
      },

    },
  },
  plugins: [],
}

