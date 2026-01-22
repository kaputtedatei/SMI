(function() {
  const resizer = document.getElementById('resize-divider');
  let inactivityTimer = null;
  let screenDimTimer = null;
  
  const RESIZER_HINT_DELAY = 5000;  // 5 Sekunden
  const SCREEN_DIM_DELAY = 8000;   // 60 Sekunden (1 Minute)
  
  // Resizer Hint Animation (5 Sekunden)
  function showResizerHint() {
    if (resizer && !resizer.classList.contains('hint-animation')) {
      resizer.classList.add('hint-animation');
      setTimeout(() => resizer.classList.remove('hint-animation'), 2000);
    }
  }
  


  
  // Screen Dim Overlay erstellen (wird nur einmal erstellt)
  let dimOverlay = null;
  
  function createDimOverlay() {
    if (!dimOverlay) {
      dimOverlay = document.createElement('div');
      dimOverlay.className = 'inactivity-overlay';
      // Ursprünglicher Text
      const messageText = "Try me! <br> Don't be so shy...";
      // Hilfsfunktion: Text in Spans umbrechen (ohne HTML-Tags wie <br>)
      function wrapLetters(text) {
        return text.replace(/([^<])/g, function(match, p1) {
          if (p1 === ' ') return '<span>&nbsp;</span>';
          return '<span>' + p1 + '</span>';
        });
      }
      // Textteile splitten, <br> erhalten
      const parts = messageText.split(/(<br>)/i);
      let html = '';
      parts.forEach(part => {
        if (part.toLowerCase() === '<br>') {
          html += '<br>';
        } else {
          html += wrapLetters(part);
        }
      });
      dimOverlay.innerHTML = `<div class="inactivity-message">${html}</div>`;
      document.body.appendChild(dimOverlay);
      // Animation-Delay für jeden Buchstaben setzen
      const spans = dimOverlay.querySelectorAll('.inactivity-message span');
      // Längere Verzögerung zwischen Buchstaben (z.B. 0.15s)
      spans.forEach((span, i) => {
        span.style.animationDelay = (i * 0.2) + 's';
      });
    }
  }
  
  // Screen Dim Animation (60 Sekunden)
  function showScreenDim() {
    createDimOverlay();
    // Kurze Verzögerung für smooth transition
    setTimeout(() => {
      dimOverlay.classList.add('active');
      // Nach 10 Sekunden wieder ausfaden mit Rückwärts-Animation
      setTimeout(() => {
        // Rückwärts-Animation: .fading-Klasse setzen, Animation-Delay rückwärts
        const spans = dimOverlay.querySelectorAll('.inactivity-message span');
        const total = spans.length;
        spans.forEach((span, i) => {
          span.style.animationName = 'fadeOutLetter';
          span.style.animationDelay = ((total - 1 - i) * 0.15) + 's';
        });
        dimOverlay.classList.add('fading');
        // Nach Animation Overlay ausblenden
        setTimeout(() => {
          dimOverlay.classList.remove('active');
          dimOverlay.classList.remove('fading');
          // Animation zurücksetzen für nächsten Aufruf
          spans.forEach((span, i) => {
            span.style.animationName = 'fadeInLetter';
            span.style.animationDelay = (i * 0.15) + 's';
          });
        }, total * 0.15 * 1000 + 2000); // Warte auf alle Buchstaben + Animationsdauer
      }, 10000);
    }, 10);
  }
  
  function hideScreenDim() {
    if (dimOverlay) {
      dimOverlay.classList.remove('active');
    }
  }
  
  // Timer zurücksetzen
  function resetInactivityTimers() {
    // Resizer Timer
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showResizerHint, RESIZER_HINT_DELAY);
    
    // Screen Dim Timer
    clearTimeout(screenDimTimer);
    hideScreenDim();
    screenDimTimer = setTimeout(showScreenDim, SCREEN_DIM_DELAY);
  }
  
  // Event Listener für Aktivität
  const activityEvents = ['mousemove', 'mousedown', 'keydown', 'click', 'touchstart'];
  activityEvents.forEach(evt => {
    document.addEventListener(evt, resetInactivityTimers);
  });
  
  // Scroll-Events (auch für Scroll-Container)
  document.addEventListener('scroll', resetInactivityTimers, true);
  
  // Initial starten
  resetInactivityTimers();
})();