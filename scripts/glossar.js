// Glossar-Filter: Entfernt .active von allen Glossarwörtern beim Filterwechsel
// Nur Begriffe, die zum Filter passen, sind ausklappbar

document.addEventListener('DOMContentLoaded', function () {
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const glossarTerms = document.querySelectorAll('.glossar-term');

  // Filterlogik: Nur .faded Begriffe sind deaktiviert
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Alle Begriffe zuklappen, auch die gerade aktiven
      glossarTerms.forEach(term => {
        term.classList.remove('active');      // <- wichtig: active immer entfernen

        // Deaktivieren, wenn .faded
        if (term.classList.contains('faded')) {
          term.disabled = true;              // nur sinnvoll, wenn es echte <button> sind
        } else {
          term.disabled = false;
        }
      });

      // Alle angezeigten Beschreibungen entfernen
      document
        .querySelectorAll('.glossar-description-inline')
        .forEach(desc => desc.remove());
    });
  });

  // Klick auf Glossar-Begriff: Nur wenn nicht disabled
  glossarTerms.forEach(term => {
    term.addEventListener('click', function () {
      if (!this.disabled) {
        // Nur ein Begriff aktiv
        glossarTerms.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
});
