// Glassmorphism Design System with Warm Orange/Brown Palette
export const glassmorphism = {
  // Glass Card Components
  card: (isDarkMode: boolean) => `
    rounded-2xl backdrop-blur-md border transition-all duration-300 ease-out
    ${isDarkMode 
      ? "bg-slate-900/50 border-slate-700/50" 
      : "bg-white/70 border-gray-200/50"
    } 
    shadow-lg hover:shadow-xl
  `.trim(),

  // Interactive Glass Elements
  button: (isDarkMode: boolean) => `
    p-3 rounded-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 
    backdrop-blur-md border group
    ${isDarkMode 
      ? "bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50" 
      : "bg-white/50 border-gray-200/50 hover:bg-white/70"
    }
    shadow-lg hover:shadow-xl
  `.trim(),

  // Primary Action Button (Orange)
  primaryButton: `
    p-2 rounded-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 group 
    bg-[#c68346] text-white shadow-lg hover:shadow-orange-500/25
    border border-orange-400/30
  `.trim(),

  // Text Colors
  text: {
    primary: (isDarkMode: boolean) => isDarkMode ? "text-slate-100" : "text-gray-900",
    secondary: (isDarkMode: boolean) => isDarkMode ? "text-slate-200" : "text-gray-800", 
    muted: (isDarkMode: boolean) => isDarkMode ? "text-slate-400" : "text-gray-600",
    subtle: (isDarkMode: boolean) => isDarkMode ? "text-slate-500" : "text-gray-500",
    accent: "text-[#c68346]"
  },

  // Background Colors from Design Philosophy
  background: {
    page: (isDarkMode: boolean) => isDarkMode ? "bg-slate-900" : "bg-orange-50",
    glass: (isDarkMode: boolean) => isDarkMode ? "bg-slate-900/50" : "bg-white/70",
    hover: (isDarkMode: boolean) => isDarkMode ? "bg-slate-900/30" : "bg-white/50",
    active: (isDarkMode: boolean) => isDarkMode ? "bg-slate-800/50" : "bg-white/90"
  }
};