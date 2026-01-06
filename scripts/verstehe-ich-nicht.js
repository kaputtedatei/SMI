 /* Detailansicht Indexeinträge */   
    const timeline = document.getElementById('timeline');
    const detail = document.getElementById('detail');
    const detailTitle = document.getElementById('detail-title');
    const detailContent = document.getElementById('detail-content');
    const detailClose = document.getElementById('detail-close');
    const col2 = document.getElementById('col2');
    const col3 = document.getElementById('col3');
    const dynamicImage = document.getElementById('dynamicImage');




// --- Sortierlogik Index-Items ---
const sortButtons = document.querySelectorAll('#sortBar .sort-btn');
let yearSortAscending = false; // Track year sort direction

sortButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sortBy = button.getAttribute('data-sort');
    
    // Special handling for year sort - toggle direction
    if (sortBy === 'year') {
      yearSortAscending = !yearSortAscending;
      button.classList.toggle('desc');
    } else {
      // For other sorts, remove active state from year button
      document.querySelector('[data-sort="year"]').classList.remove('active');
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
    { id: "bebo", year: 2005, users: 40000000, alphabet: 3, value: 999, continent: "us" },
    { id: "bereal", year: 2020, users: 50000000, alphabet: 4, value: 999, continent: "europe" },
    { id: "bondee", year: 2019, users: 5000000, alphabet: 5, value: 999, continent: "asia" },
    { id: "bluesky", year: 2022, users: 7000000, alphabet: 6, value: 999, continent: "us" },
    { id: "byte", year: 2016, users: 2000000, alphabet: 7, value: 999, continent: "us" },
    { id: "classmates", year: 1995, users: 50000000, alphabet: 8, value: 999, continent: "us" },
    { id: "clubhouse", year: 2018, users: 10000000, alphabet: 9, value: 999, continent: "us" },
    { id: "dailymotion", year: 2006, users: 300000000, alphabet: 10, value: 999, continent: "europe" },
    { id: "delicious", year: 2005, users: 5000000, alphabet: 11, value: 999, continent: "us" },
    { id: "discord", year: 2013, users: 200000000, alphabet: 12, value: 999, continent: "us" },
    { id: "ello", year: 2014, users: 4000000, alphabet: 13, value: 999, continent: "us" },
    { id: "facebook", year: 2004, users: 2900000000, alphabet: 14, value: 1, continent: "us" },
    { id: "flickr", year: 2004, users: 90000000, alphabet: 15, value: 999, continent: "us" },
    { id: "fotolog", year: 2002, users: 20000000, alphabet: 16, value: 999, continent: "south-america" },
    { id: "foursquare", year: 2009, users: 55000000, alphabet: 17, value: 999, continent: "us" },
    { id: "friendster", year: 2001, users: 115000000, alphabet: 18, value: 999, continent: "us" },
    { id: "geocities", year: 1994, users: 38000000, alphabet: 19, value: 999, continent: "us" },
    { id: "habbo", year: 2000, users: 310000000, alphabet: 20, value: 999, continent: "europe" },
    { id: "hi5", year: 2003, users: 70000000, alphabet: 21, value: 999, continent: "us" },
    { id: "houseparty", year: 2016, users: 50000000, alphabet: 22, value: 999, continent: "us" },
    { id: "instagram", year: 2010, users: 2000000000, alphabet: 23, value: 1, continent: "us" },
    { id: "jappy", year: 2001, users: 1500000, alphabet: 24, value: 999, continent: "europe" },
    { id: "kik", year: 2012, users: 300000000, alphabet: 25, value: 999, continent: "canada" },
    { id: "kuaishou", year: 2011, users: 700000000, alphabet: 26, value: 999, continent: "asia" },
    { id: "lapse", year: 2021, users: 1200000, alphabet: 27, value: 999, continent: "europe" },
    { id: "lastfm", year: 2002, users: 40000000, alphabet: 27, value: 999, continent: "europe" },
    { id: "line", year: 2011, users: 178000000, alphabet: 28, value: 999, continent: "asia" },
    { id: "linkedin", year: 2003, users: 900000000, alphabet: 29, value: 999, continent: "us" },
    { id: "livejournal", year: 1998, users: 18000000, alphabet: 30, value: 999, continent: "us" },
    { id: "mastodon", year: 2016, users: 15000000, alphabet: 31, value: 999, continent: "europe" },
    { id: "medium", year: 2013, users: 100000000, alphabet: 32, value: 999, continent: "us" },
    { id: "musically", year: 2014, users: 200000000, alphabet: 33, value: 999, continent: "us" },
    { id: "myspace", year: 2003, users: 115000000, alphabet: 34, value: 999, continent: "us" },
    { id: "noplace", year: 2021, users: 1000000, alphabet: 35, value: 999, continent: "europe" },
    { id: "orkut", year: 2004, users: 100000000, alphabet: 36, value: 999, continent: "us" },
    { id: "parler", year: 2019, users: 20000000, alphabet: 37, value: 999, continent: "us" },
    { id: "periscope", year: 2015, users: 10000000, alphabet: 38, value: 999, continent: "us" },
    { id: "pinterest", year: 2009, users: 480000000, alphabet: 39, value: 999, continent: "us" },
    { id: "qq", year: 1999, users: 600000000, alphabet: 40, value: 3, continent: "asia" },
    { id: "qzone", year: 2005, users: 600000000, alphabet: 41, value: 3, continent: "asia" },
    { id: "reddit", year: 2005, users: 430000000, alphabet: 42, value: 999, continent: "us" },
    { id: "sinaweibo2010", year: 2010, users: 600000000, alphabet: 43, value: 999, continent: "asia" },
    { id: "sixdegrees", year: 1997, users: 3500000, alphabet: 44, value: 999, continent: "us" },
    { id: "skype", year: 2003, users: 660000000, alphabet: 45, value: 999, continent: "europe" },
    { id: "snapchat", year: 2011, users: 600000000, alphabet: 46, value: 999, continent: "us" },
    { id: "soundcloud", year: 2007, users: 130000000, alphabet: 47, value: 999, continent: "europe" },
    { id: "spacehey", year: 2020, users: 2000000, alphabet: 48, value: 999, continent: "europe" },
    { id: "telegram", year: 2012, users: 900000000, alphabet: 49, value: 999, continent: "europe" },
    { id: "tenten", year: 2024, users: 12000000, alphabet: 49.5, value: 999, continent: "europe" },
    { id: "threads", year: 2017, users: 150000000, alphabet: 50, value: 999, continent: "us" },
    { id: "tiktok", year: 2013, users: 1500000000, alphabet: 51, value: 2, continent: "asia" },
    { id: "tripadvisor", year: 2000, users: 490000000, alphabet: 52, value: 999, continent: "us" },
    { id: "truthsocial", year: 2021, users: 3000000, alphabet: 53, value: 999, continent: "us" },
    { id: "tumblr", year: 2007, users: 135000000, alphabet: 54, value: 999, continent: "us" },
    { id: "vimeo", year: 2004, users: 200000000, alphabet: 53, value: 999, continent: "europe" },
    { id: "vine", year: 2012, users: 200000000, alphabet: 54, value: 999, continent: "us" },
    { id: "wechat", year: 2011, users: 1300000000, alphabet: 55, value: 3, continent: "asia" },
    { id: "weibo2009", year: 2009, users: 600000000, alphabet: 56, value: 999, continent: "asia" },
    { id: "whatsapp", year: 2008, users: 2500000000, alphabet: 57, value: 1, continent: "us" },
    { id: "x", year: 2006, users: 400000000, alphabet: 58, value: 999, continent: "us" },
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

      // Zeige nur passende Einträge, andere ausblenden
      enriched.forEach(e => {
        if (e.continent === key) {
          e.li.style.display = ''; // sichtbar
          timelineList.appendChild(e.li);
        } else {
          e.li.style.display = 'none'; // ausblenden
        }
      });

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
        e.li.style.display = ''; // sicherstellen, dass sichtbar
        timelineList.appendChild(e.li);
      });
    }
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
      if (!btn) return;
      const id = btn.getAttribute('data-id');
      showDetail(id, btn.textContent.trim());
    });

    detailClose.addEventListener('click', hideDetail);

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
      if (!skipScroll) {
        detailClose.focus();
        detail.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      // Aktiven Detaileintrag im localStorage speichern
      localStorage.setItem('activeDetailId', id);
      localStorage.setItem('activeDetailTitle', fallbackTitle || '');

      // Aktuellen Filter beibehalten (falls einer aktiv ist), sonst "alles" als Default
      const activeFilterBtn = document.querySelector('.detail-filters .filter-btn.active');
      const currentFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
      applyDetailFilter(currentFilter);
    }

    function hideDetail() {
      detail.classList.remove('active');
      col2.classList.remove('col-hide');
      col3.classList.remove('col-hide');
      
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
      
      if (savedSortBy) {
        yearSortAscending = savedYearAsc;
        
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