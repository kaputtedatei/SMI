// Dieses Skript setzt die Größe der HOF-Bilder beim Laden zufällig zwischen 20x20px und 25x25px
// und sorgt dafür, dass sie beim Vergrößern (Hover) alle gleich groß werden.

document.addEventListener('DOMContentLoaded', function() {
  // Warte, bis alle Bilder geladen und platziert sind
  setTimeout(() => {
    const hofImages = document.querySelectorAll('.hof-image');
    hofImages.forEach(div => {
      // Zufällige Größe zwischen 20 und 25 px
      const size = 18 + Math.random() * 14;
      div.style.width = size + 'px';
      div.style.height = size + 'px';
    });
  }, 100); // 100ms warten, damit Bilder platziert sind
});
