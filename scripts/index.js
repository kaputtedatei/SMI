// --- Scrollpositionen generell nicht speichern ---
// Verhindere, dass der Browser die Scrollposition automatisch wiederherstellt
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/* Detailansicht Indexeinträge 
fsff
*/   
    const timeline = document.getElementById('timeline');
    const detail = document.getElementById('detail');
    const detailTitle = document.getElementById('detail-title');
    const detailContent = document.getElementById('detail-content');
    const detailClose = document.getElementById('detail-close');
    const col2 = document.getElementById('col2');
    const col3 = document.getElementById('col3');
    const dynamicImage = document.getElementById('dynamicImage');
    const gridContainer = document.getElementById('grid-container');







// --- Inaktivitäts-Hinweis für Resizer ---
(function() {
  const resizer = document.getElementById('resize-divider');
  if (!resizer) return;
  
  let inactivityTimer = null;
  const INACTIVITY_DELAY = 5000; // 5 Sekunden Inaktivität
  
  function showResizerHint() {
    if (!resizer.classList.contains('hint-animation')) {
      resizer.classList.add('hint-animation');
      // Animation-Klasse nach Ende entfernen
      setTimeout(() => {
        resizer.classList.remove('hint-animation');
      }, 1000);
    }
  }
  
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showResizerHint, INACTIVITY_DELAY);
  }
  
  // Cursor-Bewegung erkennen
  document.addEventListener('mousemove', resetInactivityTimer);
  document.addEventListener('mousedown', resetInactivityTimer);
  document.addEventListener('keydown', resetInactivityTimer);
  document.addEventListener('scroll', resetInactivityTimer, true);
  
  // Timer initial starten
  resetInactivityTimer();
})();






    // Wiggle Animation für callme-button jede Minute
    const hofButtonElement = document.querySelector('.hof-button');
    if (hofButtonElement) {
      setInterval(() => {
        hofButtonElement.classList.add('wiggle');
        setTimeout(() => {
          hofButtonElement.classList.remove('wiggle');
        }, 400);
      }, 20000); // 60000ms = 1 Minute
    }








// --- Sortierlogik Index-Items ---
const sortButtons = document.querySelectorAll('#sortBar .sort-btn');
let yearSortAscending = false; // Track year sort direction
let yearClickCount = 0; // Track clicks on year button
let currentContinentFilter = null; // Track current continent filter

sortButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sortBy = button.getAttribute('data-sort');
    const isActive = button.classList.contains('active');
    
    // Special handling for year sort - toggle direction, deselect on third click
    if (sortBy === 'year') {
      if (isActive) {
        yearClickCount++;
        if (yearClickCount >= 2) {
          // Third click (2 toggles done): deselect and return to alphabetical
          sortButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.remove('desc');
          yearClickCount = 0;
          yearSortAscending = false;
          currentContinentFilter = null;
          sortTimeline('alphabet', false);
          localStorage.setItem('sortBy', 'alphabet');
          return;
        }
        // Second click: toggle direction
        yearSortAscending = !yearSortAscending;
        button.classList.toggle('desc');
      } else {
        // First click: activate with descending
        yearClickCount = 0;
        yearSortAscending = false;
        button.classList.remove('desc');
      }
      currentContinentFilter = null;
      sortButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      sortTimeline(sortBy, yearSortAscending);
      localStorage.setItem('sortBy', sortBy);
      localStorage.setItem('yearSortAscending', yearSortAscending);
      return;
    }
    
    // Toggle behavior for other buttons: if already active, deselect and return to alphabetical
    if (isActive) {
      sortButtons.forEach(btn => btn.classList.remove('active'));
      currentContinentFilter = null;
      sortTimeline('alphabet', false);
      localStorage.setItem('sortBy', 'alphabet');
      return;
    }
    
    // Reset year click count when switching to other buttons
    yearClickCount = 0;
    
    if (sortBy === 'european' || sortBy === 'asian' || sortBy === 'us-american') {
      // Continent filter
      currentContinentFilter = sortBy;
    } else {
      // For other sorts, remove active state from year button
      const yearBtn = document.querySelector('[data-sort="year"]');
      if (yearBtn) yearBtn.classList.remove('active');
      currentContinentFilter = null; // Reset continent filter
    }
    
    sortButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    sortTimeline(sortBy, yearSortAscending);


    

    // Sortierung im localStorage speichern
    localStorage.setItem('sortBy', sortBy);
    localStorage.setItem('yearSortAscending', yearSortAscending);
  });
});







// Indexeinträge mit Sortierinfos zu Jahren, Nutzerzahlen, alphabetischer Ordnung, continent, aktueller Marktwert
const timelineData = [
    { id: "4chan", year: 2003, users: 20000000, alphabet: 1, value: 999, continent: "us" },
    { id: "bbs", year: 1978, users: 0, alphabet: 2, value: 999, continent: "us" },
    { id: "bebo", year: 2005, users: 0, alphabet: 3, value: 999, continent: "us" },
    { id: "bereal", year: 2020, users: 40000000, alphabet: 4, value: 999, continent: "europe" },
    { id: "bluesky", year: 2023, users: 10000000, alphabet: 5, value: 999, continent: "us" },
    { id: "bondee", year: 2023, users: 5000000, alphabet: 6, value: 999, continent: "asia" },
    { id: "byte", year: 2016, users: 2000000, alphabet: 7, value: 999, continent: "us" },
    { id: "classmates", year: 1995, users: 50000000, alphabet: 8, value: 999, continent: "us" },
    { id: "clubhouse", year: 2020, users: 10000000, alphabet: 9, value: 999, continent: "us" },
    { id: "dailymotion", year: 2005, users: 0, alphabet: 10, value: 999, continent: "europe" },
    { id: "discord", year: 2013, users: 200000000, alphabet: 11, value: 999, continent: "us" },
    { id: "facebook", year: 2004, users: 3000000000, alphabet: 12, value: 1, continent: "us" },
    { id: "flickr", year: 2004, users: 60000000, alphabet: 13, value: 999, continent: "us" },
    { id: "fotolog", year: 2002, users: 20000000, alphabet: 14, value: 999, continent: "south-america" },
    { id: "foursquare", year: 2009, users: 0, alphabet: 15, value: 999, continent: "us" },
    { id: "friendster", year: 2002, users: 115000000, alphabet: 16, value: 999, continent: "us" },
    { id: "geocities", year: 1994, users: 38000000, alphabet: 17, value: 999, continent: "us" },
    { id: "habbo", year: 2000, users: 10000000, alphabet: 18, value: 999, continent: "europe" },
    { id: "hi5", year: 2003, users: 70000000, alphabet: 19, value: 999, continent: "us" },
    { id: "houseparty", year: 2016, users: 50000000, alphabet: 20, value: 999, continent: "us" },
    { id: "instagram", year: 2010, users: 2000000000, alphabet: 21, value: 1, continent: "us" },
    { id: "kik", year: 2010, users: 300000000, alphabet: 22, value: 999, continent: "canada" },
    { id: "kuaishou", year: 2011, users: 700000000, alphabet: 23, value: 999, continent: "asia" },
    { id: "lapse", year: 2021, users: 1200000, alphabet: 24, value: 999, continent: "europe" },
    { id: "lastfm", year: 2003, users: 30000000, alphabet: 25, value: 999, continent: "europe" },
    { id: "line", year: 2011, users: 200000000, alphabet: 26, value: 999, continent: "asia" },
    { id: "linkedin", year: 2003, users: 1000000000, alphabet: 27, value: 999, continent: "us" },
    { id: "livejournal", year: 1999, users: 10000000, alphabet: 28, value: 999, continent: "us" },
    { id: "mastodon", year: 2016, users: 2000000, alphabet: 29, value: 999, continent: "europe" },
    { id: "musically", year: 2014, users: 0, alphabet: 31, value: 999, continent: "us" },
    { id: "myspace", year: 2003, users: 115000000, alphabet: 32, value: 999, continent: "us" },
    { id: "noplace", year: 2021, users: 1000000, alphabet: 33, value: 999, continent: "europe" },
    { id: "onlyfans", year: 2016, users: 200000000, alphabet: 34, value: 999, continent: "europe" },
    { id: "orkut", year: 2004, users: 0, alphabet: 35, value: 999, continent: "us" },
    { id: "parler", year: 2018, users: 3000000, alphabet: 36, value: 999, continent: "us" },
    { id: "pinterest", year: 2010, users: 450000000, alphabet: 37, value: 999, continent: "us" },
    { id: "qq", year: 1999, users: 800000000, alphabet: 38, value: 3, continent: "asia" },
    { id: "reddit", year: 2005, users: 430000000, alphabet: 39, value: 999, continent: "us" },
    { id: "sinaweibo2010", year: 2010, users: 600000000, alphabet: 40, value: 999, continent: "asia" },
    { id: "skype", year: 2003, users: 0, alphabet: 41, value: 999, continent: "europe" },
    { id: "snapchat", year: 2011, users: 750000000, alphabet: 42, value: 999, continent: "us" },
    { id: "soundcloud", year: 2007, users: 75000000, alphabet: 43, value: 999, continent: "europe" },
    { id: "spacehey", year: 2020, users: 500000, alphabet: 44, value: 999, continent: "europe" },
    { id: "telegram", year: 2013, users: 800000000, alphabet: 45, value: 999, continent: "europe" },
    { id: "tenten", year: 2024, users: 6000000, alphabet: 46, value: 999, continent: "europe" },
    { id: "threads", year: 2023, users: 300000000, alphabet: 47, value: 999, continent: "us" },
    { id: "tinder", year: 2012, users: 75000000, alphabet: 48, value: 2, continent: "us" },
    { id: "tiktok", year: 2018, users: 1500000000, alphabet: 49, value: 2, continent: "asia" },
    { id: "tripadvisor", year: 2000, users: 450000000, alphabet: 50, value: 999, continent: "us" },
    { id: "truthsocial", year: 2022, users: 5000000, alphabet: 51, value: 999, continent: "us" },
    { id: "tumblr", year: 2007, users: 135000000, alphabet: 52, value: 999, continent: "us" },
    { id: "vimeo", year: 2004, users: 260000000, alphabet: 53, value: 999, continent: "europe" },
    { id: "vine", year: 2013, users: 0, alphabet: 54, value: 999, continent: "us" },
    { id: "wechat", year: 2011, users: 1300000000, alphabet: 55, value: 3, continent: "asia" },
    { id: "weibo", year: 2009, users: 580000000, alphabet: 56, value: 999, continent: "asia" },
    { id: "whatsapp", year: 2009, users: 2000000000, alphabet: 57, value: 1, continent: "us" },
    { id: "x", year: 2006, users: 500000000, alphabet: 58, value: 999, continent: "us" },
    { id: "yelp", year: 2004, users: 180000000, alphabet: 59, value: 999, continent: "us" },
    { id: "youtube", year: 2005, users: 2500000000, alphabet: 60, value: 999, continent: "us" },
  ];






  // Setze data-year Attribute auf Timeline-Items für Hover-Anzeige
  timelineData.forEach(item => {
    const btn = document.querySelector(`.timeline-item[data-id="${item.id}"]`);
    if (btn) {
      btn.setAttribute('data-year', item.year);
    }
  });





  // Sortierfunktion
  function sortTimeline(criteria, yearAscending = false) {
    const timelineList = document.getElementById('timeline');
    const items = Array.from(timelineList.querySelectorAll('li'));

    const enriched = items.map(li => {
      const id = li.querySelector('.timeline-item').getAttribute('data-id');
      const data = timelineData.find(d => d.id === id);
      return {
        li,
        id,
        year: data ? data.year : 9999,
        users: data ? data.users : 0,
        alphabet: data ? data.alphabet : 9999,
        value: data ? data.value : 9999,
        continent: data ? data.continent : 'other',
      };
    });

    const isContinentFilter = (criteria === 'european' || criteria === 'asian' || criteria === 'us-american');

    if (isContinentFilter) {
      const key = criteria === 'european' ? 'europe' : (criteria === 'asian' ? 'asia' : 'us');

      // Sortiere so, dass passende Einträge oben stehen (sekundär nach Jahr)
      enriched.sort((a, b) => {
        const aMatch = a.continent === key ? 0 : 1;
        const bMatch = b.continent === key ? 0 : 1;
        if (aMatch !== bMatch) return aMatch - bMatch;
        return b.year - a.year;
      });

      // Zeige passende Einträge normal, andere blasser
      enriched.forEach(e => {
        if (e.continent === key) {
          e.li.classList.remove('faded');
          timelineList.appendChild(e.li);
        } else {
          e.li.classList.add('faded');
          timelineList.appendChild(e.li);
        }
      });

      // Grid-Items: passende bleiben normal, andere werden blasser
      applyGridContinentFilter(key);

    } else {
      // Bei normalen Sortierungen: alle Items wieder sichtbar machen und wie gewohnt sortieren
      enriched.sort((a, b) => {
        if (criteria === 'year') {
          return yearAscending ? a.year - b.year : b.year - a.year;
        }
        if (criteria === 'users') return b.users - a.users;
        if (criteria === 'alphabet') return a.alphabet - b.alphabet;
        if (criteria === 'value') return a.value - b.value;
        return 0;
      });

      enriched.forEach(e => {
        e.li.classList.remove('faded'); // faded-Klasse entfernen
        timelineList.appendChild(e.li);
      });

      // Grid-Items: Filter entfernen, alle normal anzeigen
      removeGridContinentFilter();
    }

    // Grid-Items in gleicher Reihenfolge sortieren
    sortGridItems(enriched.map(e => e.id));
  }






  // Funktion zum Sortieren der Grid-Items
  function sortGridItems(orderedIds) {
    if (!gridContainer) return;
    
    const gridItems = Array.from(gridContainer.querySelectorAll('.grid-item'));
    
    // Sortiere Grid-Items nach der Reihenfolge der IDs
    orderedIds.forEach(id => {
      const gridItem = gridItems.find(item => item.getAttribute('data-id') === id);
      if (gridItem) {
        gridContainer.appendChild(gridItem);
      }
    });
  }

  // Funktion für Kontinentfilter auf Grid-Items
  function applyGridContinentFilter(continent) {
    if (!gridContainer) return;
    
    const gridItems = gridContainer.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      const itemContinent = item.getAttribute('data-continent');
      if (itemContinent === continent) {
        item.classList.remove('faded');
      } else {
        item.classList.add('faded');
      }
    });
  }

  // Funktion zum Entfernen des Kontinentfilters von Grid-Items
  function removeGridContinentFilter() {
    if (!gridContainer) return;
    
    const gridItems = gridContainer.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.classList.remove('faded');
    });
  }





    // Handle hover events for timeline items
    timeline.addEventListener('mouseover', (e) => {
      const btn = e.target.closest('.timeline-item');
      if (!btn) return;
      const id = btn.getAttribute('data-id');
      updateImage(id);
    });

    // Add mouseout handler to hide image
    timeline.addEventListener('mouseout', (e) => {
      hideImage();
    });

    timeline.addEventListener('click', (e) => {
      const btn = e.target.closest('.timeline-item');
      if (!btn) close;
      // Scrollposition zurücksetzen bevor ein neuer Eintrag geöffnet wird
      detail.scrollTop = 0;
      detailContent.scrollTop = 0;
      window.scrollTo(0, 0);
      // Entferne .active-detail von allen Timeline-Items
      document.querySelectorAll('.timeline-item.active-detail').forEach(el => el.classList.remove('active-detail'));
      // Füge dem geklickten Button .active-detail hinzu
      btn.classList.add('active-detail');
      const id = btn.getAttribute('data-id');
      showDetail(id, btn.textContent.trim());
    });

    // Handle click events for grid items
    if (gridContainer) {
      gridContainer.addEventListener('click', (e) => {
        const gridItem = e.target.closest('.grid-item');
        if (!gridItem) return;
        // Scrollposition zurücksetzen bevor ein neuer Eintrag geöffnet wird
        detail.scrollTop = 0;
        detailContent.scrollTop = 0;
        window.scrollTo(0, 0);
        const id = gridItem.getAttribute('data-id');
        // Finde den passenden Timeline-Button für den Fallback-Titel
        const timelineBtn = document.querySelector(`.timeline-item[data-id="${id}"]`);
        const fallbackTitle = timelineBtn ? timelineBtn.textContent.trim() : id;
        showDetail(id, fallbackTitle);
      });
    }

    // Stelle sicher, dass sowohl detailClose als auch .close-btn das Detail schließen
    // Scrollposition wird nur beim Öffnen (showDetail) zurückgesetzt!
detailClose.addEventListener('click', hideDetail);
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', hideDetail);
});

    function hideImage() {
      dynamicImage.classList.remove('visible');
    }

    function updateImage(id) {
      dynamicImage.classList.remove('visible');
      setTimeout(() => {
        const imgPng = new Image();
        imgPng.onerror = () => {
          // PNG failed, try JPG
          dynamicImage.src = `bilder/${id}.jpg`;
        };
        imgPng.onload = () => {
          // PNG exists, use it
          dynamicImage.src = `bilder/${id}.png`;
        };
        imgPng.src = `bilder/${id}.png`;
        dynamicImage.classList.add('visible');
      }, 200);
    }

    function showDetail(id, fallbackTitle, skipScroll = false) {
      const entry = DETAILS[id];
      detailTitle.textContent = entry ? entry.title : fallbackTitle || 'Detail';
      detailContent.innerHTML = entry ? entry.html : '<p>Keine zusätzliche Info verfügbar.</p>';
      detail.classList.add('active');
      col2.classList.add('col-hide');
      col3.classList.add('col-hide');
      // Scrollposition nach DOM-Update sicher zurücksetzen
      requestAnimationFrame(() => {
        detail.scrollTop = 0;
        detailContent.scrollTop = 0;
        window.scrollTo(0, 0);
      });
      if (!skipScroll) {
        detailClose.focus();
        detail.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    
      


      function resetDetailScroll() {
  const detailContent = document.getElementById('detail-content');
  if (!detailContent) return;

  // Scroll-Kontext hart zurücksetzen
  detailContent.style.overflowY = 'hidden';
  detailContent.scrollTop = 0;

  requestAnimationFrame(() => {
    detailContent.scrollTop = 0;
    detailContent.style.overflowY = 'auto';
  });
}






      const currentFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
      applyDetailFilter(currentFilter);
    }

    function hideDetail() {
  detail.classList.remove('active');
  col2.classList.remove('col-hide');
  col3.classList.remove('col-hide');

  // Entferne .active-detail von allen Timeline-Items
  document.querySelectorAll('.timeline-item.active-detail')
    .forEach(el => el.classList.remove('active-detail'));

  // Scrollposition EXPLIZIT zurücksetzen
  requestAnimationFrame(() => {
    detail.scrollTop = 0;
    detailContent.scrollTop = 0;
  });

  // Detaileintrag aus localStorage entfernen
  localStorage.removeItem('activeDetailId');
  localStorage.removeItem('activeDetailTitle');
}


    // --- Detail-Header Filter (Bild / Text / alles) ---
    const detailFilterBtns = document.querySelectorAll('.detail-filters .filter-btn');

    detailFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        detailFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyDetailFilter(btn.dataset.filter);
        
        // Filter im localStorage speichern
        localStorage.setItem('detailFilter', btn.dataset.filter);
      });
    });

    function applyDetailFilter(filter) {
      const container = detailContent.querySelector('.index-detail') || detailContent;
      if (!container) return;

      const imageEls = container.querySelectorAll('img, picture, svg, iframe, video, figcaption');
      const textEls = container.querySelectorAll('p, h1, h2, h3, h4, h5, blockquote, ul, ol, li');

      if (filter === 'all') {
        container.querySelectorAll('*').forEach(el => el.style.display = '');
      } else if (filter === 'image') {
        imageEls.forEach(el => el.style.display = '');
        textEls.forEach(el => el.style.display = 'none');
        container.querySelectorAll('figcaption').forEach(el => el.style.display = '');
      } else if (filter === 'text') {
        imageEls.forEach(el => el.style.display = 'none');
        textEls.forEach(el => el.style.display = '');
      }
    }

    // --- Gespeicherten Zustand beim Laden wiederherstellen ---
    (function restoreState() {
      // Sortierung wiederherstellen
      const savedSortBy = localStorage.getItem('sortBy');
      const savedYearAsc = localStorage.getItem('yearSortAscending') === 'true';
      
      if (savedSortBy && savedSortBy !== 'alphabet') {
        yearSortAscending = savedYearAsc;
        
        // Track continent filter state
        if (savedSortBy === 'european' || savedSortBy === 'asian' || savedSortBy === 'us-american') {
          currentContinentFilter = savedSortBy;
        }
        
        // Aktiven Button setzen (nur im sortBar)
        document.querySelectorAll('#sortBar .sort-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector('#sortBar [data-sort="' + savedSortBy + '"]');
        if (activeBtn) {
          activeBtn.classList.add('active');
          if (savedSortBy === 'year' && savedYearAsc) {
            activeBtn.classList.add('desc');
          }
        }
        
        // Sortierung anwenden
        sortTimeline(savedSortBy, savedYearAsc);
      } else {
        // Initiale Sortierung: alphabetisch (kein Button aktiv)
        document.querySelectorAll('#sortBar .sort-btn').forEach(btn => btn.classList.remove('active'));
        sortTimeline('alphabet', false);
      }
      
      // Aktiven Detaileintrag wiederherstellen
      const savedDetailId = localStorage.getItem('activeDetailId');
      const savedDetailTitle = localStorage.getItem('activeDetailTitle');
      
      // Filter wiederherstellen
      const savedFilter = localStorage.getItem('detailFilter');
      if (savedFilter) {
        document.querySelectorAll('.detail-filters .filter-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.filter === savedFilter);
        });
      }
      
      if (savedDetailId && DETAILS[savedDetailId]) {
        // Detail öffnen
        const entry = DETAILS[savedDetailId];
        detailTitle.textContent = entry ? entry.title : savedDetailTitle || 'Detail';
        detailContent.innerHTML = entry ? entry.html : '<p>Keine zusätzliche Info verfügbar.</p>';
        detail.classList.add('active');
        col2.classList.add('col-hide');
        col3.classList.add('col-hide');

        // Filter nach dem Laden des Details anwenden
        const filterToApply = savedFilter || 'all';
        setTimeout(function() {
          applyDetailFilter(filterToApply);
          // Scrollposition NACH dem Einblenden und Filtern ganz nach oben setzen
          detail.scrollTop = 0;
          detailContent.scrollTop = 0;
          window.scrollTo(0, 0);
        }, 50);
      }
      
    })();


    // Letztes Theme wiederherstellen
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', savedTheme);


    // --- Session-basiertes Link-Tracking ---
    // Links werden nur innerhalb der aktuellen Session als "besucht" markiert
    // (sessionStorage wird bei Browser-Refresh oder Tab-Schließen gelöscht)
    
    function getVisitedLinks() {
      const stored = sessionStorage.getItem('visitedLinks');
      return stored ? JSON.parse(stored) : [];
    }

    function markLinkAsVisited(href) {
      const visited = getVisitedLinks();
      if (!visited.includes(href)) {
        visited.push(href);
        sessionStorage.setItem('visitedLinks', JSON.stringify(visited));
      }
    }

    function applyVisitedStyles() {
      const visited = getVisitedLinks();
      document.querySelectorAll('a').forEach(link => {
        if (visited.includes(link.href)) {
          link.classList.add('visited');
        }
      });
    }

    // Beim Laden der Seite: vorhandene visited-Klassen anwenden
    applyVisitedStyles();

    // Links beim Klicken als besucht markieren
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.href) {
        markLinkAsVisited(link.href);
        link.classList.add('visited');
      }
    });

    // MutationObserver für dynamisch hinzugefügte Links (z.B. in Detailansicht)
    const linkObserver = new MutationObserver(() => {
      applyVisitedStyles();
    });
    linkObserver.observe(document.body, { childList: true, subtree: true });


        // Wiggle Animation für callme-button jede Minute
    const pauseButtonElement = document.querySelector('.pause-button');
    if (pauseButtonElement) {
      setInterval(() => {
        pauseButtonElement.classList.add('wiggle');
        setTimeout(() => {
          pauseButtonElement.classList.remove('wiggle');
        }, 250);
      }, 20000); // 60000ms = 1 Minute
    }



    // --- Resize Divider Logik ---
    (function initResizeDivider() {
      const container = document.querySelector('.container');
      const resizeDivider = document.getElementById('resize-divider');
      const col1 = document.getElementById('col1');
      const col2 = document.getElementById('col2'); 
      if (!resizeDivider || !container || !col1 || !col2) return;
      let isResizing = false;
      let startX = 0;
      let startCol1Width = 0;
      
      // Gespeicherte Spaltenbreite (Pixel) wiederherstellen oder Standard-Breite setzen
      const savedCol1Px = localStorage.getItem('col1WidthPx');
      if (savedCol1Px) {
        updateGridColumns(parseFloat(savedCol1Px));
      } else {
        updateGridColumns(400);
      }
      
      resizeDivider.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startCol1Width = col1.getBoundingClientRect().width;
        
        document.body.classList.add('resizing');
        resizeDivider.classList.add('active');
        
        e.preventDefault();
      });
      
      document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        
        const containerWidth = container.getBoundingClientRect().width;
        const dividerWidth = resizeDivider.getBoundingClientRect().width;
        const deltaX = e.clientX - startX;
        let newCol1Width = startCol1Width + deltaX;
        
        // Mindest- und Maximalbreiten
        const minWidth = 400;
        const maxWidth = containerWidth - dividerWidth - 450;
        
        newCol1Width = Math.max(minWidth, Math.min(maxWidth, newCol1Width));
        
        updateGridColumns(newCol1Width);
      });
      
      document.addEventListener('mouseup', () => {
        if (isResizing) {
          isResizing = false;
          document.body.classList.remove('resizing');
          resizeDivider.classList.remove('active');
          // Spaltenbreite als exakten Pixelwert speichern
          const col1Width = col1.getBoundingClientRect().width;
          localStorage.setItem('col1WidthPx', col1Width);
        }
      });
      
      function updateGridColumns(col1Width) {
        const containerWidth = container.getBoundingClientRect().width;
        const dividerWidth = 1;
        const col2TotalWidth = containerWidth - col1Width - dividerWidth;
        
        // Berechne Prozentsätze für zoom-unabhängiges Layout
        const col1Percent = (col1Width / containerWidth) * 100;
        
        applyGridColumnsPercent(col1Percent);
      }
      
      function applyGridColumnsPercent(col1Percent) {
        const dividerWidth = 1;
        const col2Percent = 100 - col1Percent;
        
        container.style.gridTemplateColumns = 
          `${col1Percent}% ${dividerWidth}px calc(${col2Percent}% - ${dividerWidth}px)`;
        
        // Aktuelle Pixelwerte für Logik berechnen
        const containerWidth = container.getBoundingClientRect().width;
        const col1Width = (col1Percent / 100) * containerWidth;
        const col2TotalWidth = (col2Percent / 100) * containerWidth;
        
        // Theme-Button Sichtbarkeit basierend auf Spaltenbreiten
        const themeButton = document.getElementById('theme-button');
        const themeButtonCol1 = document.getElementById('theme-button-col1');
        if (themeButton && themeButtonCol1) {
          if (col1Width > col2TotalWidth) {
            // col1 ist breiter - Theme-Button in col1 anzeigen, anderen verstecken
            themeButtonCol1.classList.add('visible');
            themeButton.style.display = 'none';
          } else {
            // col2 ist breiter - Theme-Button in buttons-container anzeigen
            themeButtonCol1.classList.remove('visible');
            themeButton.style.display = '';
          }
        }
        
        // Timeline-Layout basierend auf col2-Breite anpassen
        const timeline = document.getElementById('timeline');
        if (timeline) {
          if (col2TotalWidth < 1100) {
            timeline.classList.add('timeline-flow');
          } else {
            timeline.classList.remove('timeline-flow');
          }
        }
        
        // Jahreszahlen dauerhaft anzeigen wenn col1 >= 800px
        if (col1Width >= 750) {
          timeline.classList.add('show-years');
        } else {
          timeline.classList.remove('show-years');
        }
        
      }


    })();