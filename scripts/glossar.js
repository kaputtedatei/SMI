document.addEventListener('DOMContentLoaded', function() {
  const glossarItems = document.getElementById('glossar-items');
  const glossarTerms = document.querySelectorAll('.glossar-term');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let activeDescEl = null;
  let activeFilter = null;

  // Filter-Logik
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Toggle: wenn gleicher Filter nochmal geklickt, deaktivieren
      if (activeFilter === filter) {
        activeFilter = null;
        btn.classList.remove('active');
        // Alle Begriffe wieder normal anzeigen
        glossarTerms.forEach(term => term.classList.remove('faded'));
        // Alle Buttons wieder in normalen Zustand
        filterBtns.forEach(b => {
          b.style.removeProperty('background-color');
          b.style.removeProperty('color');
        });
      } else {
        // Anderen Filter aktivieren
        activeFilter = filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Buttons-Styling: aktiver bleibt wie ist, inaktive bekommen weißen Hintergrund
        filterBtns.forEach(b => {
          if (b === btn) {
            b.style.removeProperty('background-color'); // Entferne inline-style, damit CSS-Klasse wirkt
            b.style.removeProperty('color'); // Entferne auch Textfarbe für aktiven Button
          } else {
            b.style.backgroundColor = 'white';
            b.style.color = 'black';
          }
        });
        
        // Begriffe filtern
        glossarTerms.forEach(term => {
          const category = term.getAttribute('data-category');
          if (category === filter) {
            term.classList.remove('faded');
          } else {
            term.classList.add('faded');
            // Wenn dieser Term aktiv war, schließe ihn
            if (term.classList.contains('active')) {
              term.classList.remove('active');
              if (activeDescEl) {
                activeDescEl.remove();
                activeDescEl = null;
              }
            }
          }
        });
      }
    });
  });

  // Klick-Logik für einzelne Begriffe
  glossarTerms.forEach(term => {
    term.addEventListener('click', () => {
      // Wenn Begriff gefaded ist (gefiltert), nicht klickbar
      if (term.classList.contains('faded')) {
        return;
      }
      
      const wasActive = term.classList.contains('active');
      
      // Entferne aktive Klasse von allen Begriffen
      glossarTerms.forEach(t => t.classList.remove('active'));
      
      // Entferne vorhandene Beschreibung
      if (activeDescEl) {
        activeDescEl.remove();
        activeDescEl = null;
      }
      
      // Wenn nicht bereits aktiv, zeige Beschreibung
      if (!wasActive) {
        term.classList.add('active');
        
        const desc = term.getAttribute('data-desc');
        if (desc) {
          // Erstelle Beschreibungs-Element
          activeDescEl = document.createElement('div');
          activeDescEl.className = 'glossar-description-inline';
          activeDescEl.innerHTML = '<p>' + desc + '</p>';
          
          // Fuege nach dem Begriff ein
          term.insertAdjacentElement('afterend', activeDescEl);
          
          // Warte kurz bis Layout aktualisiert ist, dann scrolle wenn nötig
          requestAnimationFrame(() => {
            const rect = activeDescEl.getBoundingClientRect();
            const screenMid = window.innerHeight / 2;
            
            if (rect.top > screenMid) {
              // Scrolle so, dass die Beschreibung vertikal zentriert ist
              activeDescEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          });
        }
      }
    });
  });

  // URL-Parameter prüfen und entsprechenden Begriff öffnen
  const urlParams = new URLSearchParams(window.location.search);
  const termId = urlParams.get('term');
  if (termId) {
    const targetTerm = document.querySelector(`.glossar-term[data-id="${termId}"]`);
    if (targetTerm) {
      // Simuliere Klick auf den Begriff
      setTimeout(() => {
        targetTerm.click();
        targetTerm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }
});