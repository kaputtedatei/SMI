// Theme-Button Text je nach Theme aktualisieren
    function updateThemeButtonText() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const themeText = document.getElementById('theme-text');
      const themeTextCol1 = document.getElementById('theme-text-col1');
      const newText = currentTheme === 'dark' ? 'light' : 'dark';
      
      if (themeText) {
        themeText.textContent = newText;
      }
      if (themeTextCol1) {
        themeTextCol1.textContent = newText;
      }
    }
    
    // Theme wechseln Funktion
    function toggleTheme() {
      const root = document.documentElement;
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeButtonText();
    }
    
    // Theme wechseln beim Klick auf theme-button (beide Buttons)
    document.getElementById('theme-button').addEventListener('click', toggleTheme);
    document.getElementById('theme-button-col1').addEventListener('click', toggleTheme);
    
    // Initial setzen
    updateThemeButtonText();

      // HOF Button: gehe zu hof.html
      if (hofButton) {
        hofButton.addEventListener('click', () => {
          window.location.href = 'hof.html';
        });
      }