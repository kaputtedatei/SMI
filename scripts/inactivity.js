(function() {
  const resizer = document.getElementById('resize-divider');
  let inactivityTimer = null;
  let screenDimTimer = null;
  let animationLoopTimer = null;
  
  const RESIZER_HINT_DELAY = 5000;  // 5 Sekunden
  const SCREEN_DIM_DELAY = 30000;   // 30 Sekunden
  const ANIMATION_LOOP_DELAY = 30000; // 30 Sekunden Pause zwischen Loops
  
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
    }
  }
  
  // Screen Dim Animation
  function showScreenDim() {
    createDimOverlay();
    
    // Spans zurücksetzen vor dem Anzeigen
    const spans = dimOverlay.querySelectorAll('.inactivity-message span');
    spans.forEach((span) => {
      span.style.opacity = '0';
      span.style.transform = 'translateY(0)';
      span.style.animation = 'none';
    });
    
    // Overlay aktivieren (Background faded ein)
    dimOverlay.classList.add('active');
    
    // Warten bis Background vollständig sichtbar ist (1s transition im CSS)
    setTimeout(() => {
      // Jetzt Buchstaben nacheinander einblenden
      spans.forEach((span, i) => {
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transition = 'opacity 0.05s ease';
        }, i * 100); // 100ms zwischen jedem Buchstaben
      });
      
      // Nach 10 Sekunden + Zeit für alle Buchstaben wieder ausfaden
      const totalAppearTime = spans.length * 100;
      setTimeout(() => {
        // Rückwärts ausblenden
        const total = spans.length;
        spans.forEach((span, i) => {
          setTimeout(() => {
            span.style.opacity = '0';
            span.style.transition = 'opacity 0.05s ease';
          }, (total - 1 - i) * 100);
        });
        
        // Warten bis alle Buchstaben verschwunden sind, dann Background ausblenden
        const totalDisappearTime = total * 100;
        setTimeout(() => {
          dimOverlay.classList.remove('active');
          
          // Animation wieder starten nach Pause (Loop)
          animationLoopTimer = setTimeout(() => {
            showScreenDim();
          }, ANIMATION_LOOP_DELAY);
          
        }, totalDisappearTime + 100);
        
      }, 10000);
    }, 1000); // 1 Sekunde warten (Background transition Zeit)
  }
  
  function hideScreenDim() {
    if (dimOverlay) {
      dimOverlay.classList.remove('active');
      // Spans komplett zurücksetzen
      const spans = dimOverlay.querySelectorAll('.inactivity-message span');
      spans.forEach(span => {
        span.style.opacity = '0';
        span.style.transform = 'translateY(0)';
        span.style.animation = 'none';
        span.style.transition = '';
      });
    }
    // Loop-Timer auch stoppen
    clearTimeout(animationLoopTimer);
  }
  
  // Timer zurücksetzen
  function resetInactivityTimers() {
    // Resizer Timer
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showResizerHint, RESIZER_HINT_DELAY);
    
    // Screen Dim Timer
    clearTimeout(screenDimTimer);
    clearTimeout(animationLoopTimer); // Loop auch stoppen
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