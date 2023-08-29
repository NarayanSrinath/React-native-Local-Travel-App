# React-native-Local-Travel-App
# TailWind Css 
Link: https://www.nativewind.dev/
install nativewind and it's peer dependency tailwindcss.

yarn add nativewind
yarn add --dev tailwindcss@3.3.2 
/// use this instaed
// yarn add --dev tailwindcss@3.3.2

Run npx tailwindcss init to create a tailwind.config.js file

// tailwind.config.js

module.exports = {
- content: [],
+ content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
// Add you Directory names
  theme: {
    extend: {},
  },
  plugins: [],
}


# Modify your babel.config.js

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    //Add this code in Babel file
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
+     "nativewind/babel",
    ],
  };
};


  # Native Navigation
  ->yarn add @react-navigation/native
  ->npx expo install react-native-screens react-native-safe-area-context
  for mac user
  ->npx pod-install ios
  ->yarn add @react-navigation/native-stack

  Create a nvagtaion.js file 
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
