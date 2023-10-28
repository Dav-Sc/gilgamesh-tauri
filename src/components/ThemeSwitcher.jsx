import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  // Define the list of themes
  const themes = [
    "dark",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "forest",
    "black",
    "luxury",
    "dracula",
    "business",
    "night",
    "coffee",
  ];

  // Initialize the theme state with the value from localStorage if available, or 'light' as a default
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem('selectedTheme') || 'light'
  );

  // Function to handle theme selection
  const handleThemeChange = (theme) => {
    // Set the selected theme in state
    setSelectedTheme(theme);
    // Save the selected theme in localStorage for next launch
    localStorage.setItem('selectedTheme', theme);
    // Apply the selected theme to the <html> tag
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Use useEffect to apply the selected theme when the component mounts
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  return (
      <ul>
        {themes.map((theme) => (
          <li key={theme}>
            <a onClick={() => handleThemeChange(theme)}>{theme}</a>
          </li>
        ))}
      </ul>
  );
};

export default ThemeSwitcher;
