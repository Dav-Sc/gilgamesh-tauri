import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  // Define the list of themes
  const themes = [
    "dark", "synthwave", "retro", "cyberpunk", "valentine",
    "halloween", "forest", "black", "luxury", "dracula",
    "business", "night", "coffee",
  ];

  // State for the selected theme
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem('selectedTheme') || 'light'
  );

  // State to control the visibility of the theme list
  const [isListVisible, setIsListVisible] = useState(false);

  // Function to handle theme selection
  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem('selectedTheme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Apply the selected theme when the component mounts
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  return (
    <div>
      {/* Turn this into an up or down icon later */}
      <button onClick={() => setIsListVisible(!isListVisible)}>
        {isListVisible ? 'C' : 'O'}
      </button>

      {isListVisible && (
        <ul>
          {themes.map((theme) => (
            <li key={theme}>
              <a onClick={() => handleThemeChange(theme)}>{theme}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeSwitcher;
