(function() {
  // Theme sofort beim Laden setzen (verhindert Flackern)
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

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
  
  // Benachrichtige andere Tabs/Fenster (für noch bessere Sync)
  window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
}

// Event-Listener hinzufügen wenn DOM bereit ist
document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.getElementById('theme-button');
  const themeButtonCol1 = document.getElementById('theme-button-col1');
  
  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }
  if (themeButtonCol1) {
    themeButtonCol1.addEventListener('click', toggleTheme);
  }
  
  // Initial Button-Text setzen
  updateThemeButtonText();
});

// Lausche auf Theme-Änderungen in anderen Tabs/Fenster
window.addEventListener('storage', function(e) {
  if (e.key === 'theme' && e.newValue) {
    document.documentElement.setAttribute('data-theme', e.newValue);
    updateThemeButtonText();
  }
});