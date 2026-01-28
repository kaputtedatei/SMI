(function() {
  console.log('Glossar-Linking Script gestartet');
  
  // Nur ausführen, wenn wir NICHT auf der Glossar-Seite sind
  if (document.getElementById('glossar-items')) {
    console.log('Auf Glossar-Seite - Script wird nicht ausgeführt');
    return;
  }
  
  console.log('Nicht auf Glossar-Seite - Script wird ausgeführt');
  
  // Vollständige Glossar-Begriffe Liste
  const glossarTerms = [
    { text: 'Affordanzen', id: 'affordanzen' },
    { text: 'Algorithmus', id: 'algorithmus' },
    { text: 'Algorithmic Bias', id: 'algorithmicbias' },
    { text: 'Algorithmische Kuratierung', id: 'algorithmischekuratierung' },
    { text: 'Arbeitsgedächtnis', id: 'arbeitsgedaechtnis' },
    { text: 'AR-Filter', id: 'arfilter' },
    { text: 'Audience', id: 'audience' },
    { text: 'Attention Economy', id: 'attentioneconomy' },
    { text: 'Aufmerksamkeitsökonomie', id: 'attentioneconomy' },
    { text: 'Aufmerksamkeitsspanne', id: 'aufmerksamkeitsspanne' },
    { text: 'Backfire-Effekt', id: 'backfireeffekt' },
    { text: 'Bestätigungsfehler', id: 'bestaetigungsfehler' },
    { text: 'Bewährpädagogik', id: 'bewaehrpaedagogik' },
    { text: 'Bildschirmzeit', id: 'bildschirmzeit' },
    { text: 'Screentime', id: 'bildschirmzeit' },
    { text: 'Blogroll', id: 'blogroll' },
    { text: 'Brain Rot', id: 'brainrot' },
    { text: 'Breadcrumbing', id: 'breadcrumbing' },
    { text: 'Bubble', id: 'bubble' },
    { text: 'Cancelung', id: 'cancelung' },
    { text: 'Cancel Culture', id: 'cancelung' },
    { text: 'Chatbot', id: 'chatbot' },
    { text: 'Clickbait', id: 'clickbait' },
    { text: 'Clicktivism', id: 'clicktivism' },
    { text: 'Click-Through-Rate', id: 'clickthroughrate' },
    { text: 'CTR', id: 'clickthroughrate' },
    { text: 'Client', id: 'client' },
    { text: 'Co-Creator', id: 'cocreator' },
    { text: 'Content Creator', id: 'contentcreator' },
    { text: 'Content Moderation', id: 'contentmoderation' },
    { text: 'Context Collapse', id: 'contextcollapse' },
    { text: 'Coping-Strategie', id: 'copingstrategie' },
    { text: 'Copium', id: 'copium' },
    { text: 'Cringe', id: 'cringe' },
    { text: 'Crowdsourcing', id: 'crowdsourcing' },
    { text: 'Cybergrooming', id: 'cybergrooming' },
    { text: 'Cybermobbing', id: 'cybermobbing' },
    { text: 'Cyberspace', id: 'cyberspace' },
    { text: 'Cyberstalking', id: 'cyberstalking' },
    { text: 'Dark Pattern', id: 'darkpattern' },
    { text: 'Data Mining', id: 'datamining' },
    { text: 'Debunking', id: 'debunking' },
    { text: 'Deepfake', id: 'deepfake' },
    { text: 'Deepnude', id: 'deepnude' },
    { text: 'Digital Divide', id: 'digitaldivide' },
    { text: 'Digitale Amnesie', id: 'digitaleamnesie' },
    { text: 'Digitaler Detox', id: 'digitalerdetox' },
    { text: 'Digitaler Fußabdruck', id: 'digitalerfussabdruck' },
    { text: 'Digital Labour', id: 'digitallabour' },
    { text: 'Digital Natives', id: 'digitalnatives' },
    { text: 'Digitaler Schnuller', id: 'digitalerschnuller' },
    { text: 'DM', id: 'dm' },
    { text: 'Direktnachricht', id: 'dm' },
    { text: 'Doomscrolling', id: 'doomscrolling' },
    { text: 'Dopaminausschüttung', id: 'dopaminausschuettung' },
    { text: 'Echokammer', id: 'echokammer' },
    { text: 'Empathie', id: 'empathie' },
    { text: 'Engagement', id: 'engagement' },
    { text: 'Fake News', id: 'fakenews' },
    { text: 'Fediverse', id: 'fediverse' },
    { text: 'Flame War', id: 'flamewar' },
    { text: 'Flow', id: 'flow' },
    { text: 'Forum', id: 'forum' },
    { text: 'FOMO', id: 'fomo' },
    { text: 'For You Page', id: 'foryoupage' },
    { text: 'Gamification', id: 'gamification' },
    { text: 'Gen Z', id: 'genz' },
    { text: 'Geotargeting', id: 'geotargeting' },
    { text: 'Ghostwriter', id: 'ghostwriter' },
    { text: 'Granfluencer', id: 'granfluencer' },
    { text: 'Growth Hacking', id: 'growthhacking' },
    { text: 'Hashtag', id: 'hashtag' },
    { text: 'Hate Speech', id: 'hatespeech' },
    { text: 'Hassrede', id: 'hatespeech' },
    { text: 'Hookup Culture', id: 'hookupculture' },
    { text: 'Impulsivität', id: 'impulsivitaet' },
    { text: 'Individualmedien', id: 'individualmedien' },
    { text: 'Infinite Scroll', id: 'infinitescroll' },
    { text: 'Influencer', id: 'influencer' },
    { text: 'Instagrammable', id: 'instagrammable' },
    { text: 'Intermediär', id: 'intermediaer' },
    { text: 'Intimitätsmotiv', id: 'intimitaetsmotiv' },
    { text: 'Kognitive Dissonanz', id: 'kognitivedissonanz' },
    { text: 'Konditionierung', id: 'konditionierung' },
    { text: 'Lifelogging', id: 'lifelogging' },
    { text: 'Lurker', id: 'lurker' },
    { text: 'Machine Learning', id: 'machinelearning' },
    { text: 'Massenmedien', id: 'massenmedien' },
    { text: 'Medienkompetenz', id: 'medienkompetenz' },
    { text: 'Medienpsychologie', id: 'medienpsychologie' },
    { text: 'Meme-Kultur', id: 'memekultur' },
    { text: 'Messenger', id: 'messenger' },
    { text: 'Meta', id: 'meta' },
    { text: 'Metadaten', id: 'metadaten' },
    { text: 'Metrik', id: 'metrik' },
    { text: 'Microblogging', id: 'microblogging' },
    { text: 'Millennial', id: 'millennial' },
    { text: 'Mobile Health', id: 'mobilehealth' },
    { text: 'Mood-Management-Theorie', id: 'moodmanagementtheorie' },
    { text: 'Negativity Bias', id: 'negativitybias' },
    { text: 'Newsfeed', id: 'newsfeed' },
    { text: 'Nomophobia', id: 'nomophobia' },
    { text: 'Nudging', id: 'nudging' },
    { text: 'Onlinedating', id: 'onlinedating' },
    { text: 'Parasoziale Interaktion', id: 'parasozialeinteraktion' },
    { text: 'Polarisierung', id: 'polarisierung' },
    { text: 'Pop-Up', id: 'popup' },
    { text: 'Populismus', id: 'populismus' },
    { text: 'Postdigitalität', id: 'postdigitalitaet' },
    { text: 'Präfrontaler Kortex', id: 'praefrontalerkortex' },
    { text: 'Prebunking', id: 'prebunking' },
    { text: 'Produktplatzierung', id: 'produktplatzierung' },
    { text: 'Profitmaximierung', id: 'profitmaximierung' },
    { text: 'Prokrastination', id: 'prokrastination' },
    { text: 'Prosument', id: 'prosument' },
    { text: 'Push-Benachrichtigung', id: 'pushbenachrichtigung' },
    { text: 'Rabbithole', id: 'rabbithole' },
    { text: 'Reach Decay', id: 'reachdecay' },
    { text: 'Reichweite', id: 'reichweite' },
    { text: 'Reach', id: 'reichweite' },
    { text: 'Reizüberflutung', id: 'reizueberflutung' },
    { text: 'Relativismus', id: 'relativismus' },
    { text: 'Routine', id: 'routine' },
    { text: 'Salienter Reiz', id: 'salienterreiz' },
    { text: 'Second Screen', id: 'secondscreen' },
    { text: 'Selbstdisziplin', id: 'selbstdisziplin' },
    { text: 'Selbstinszenierung', id: 'selbstinszenierung' },
    { text: 'Selbstregulation', id: 'selbstregulation' },
    { text: 'Selektive Aufmerksamkeit', id: 'selektiveaufmerksamkeit' },
    { text: 'Sensorische Stimulation', id: 'sensorischestimulation' },
    { text: 'Sexting', id: 'sexting' },
    { text: 'Shadow Banning', id: 'shadowbanning' },
    { text: 'Silicon Valley', id: 'siliconvalley' },
    { text: 'Smartphonesucht', id: 'smartphonesucht' },
    { text: 'Smombie', id: 'smombie' },
    { text: 'Snapchat-Dysmorphophobie', id: 'snapchatdysmorphophobie' },
    { text: 'Social Bot', id: 'socialbot' },
    { text: 'Social Engineer', id: 'socialengineer' },
    { text: 'Social Proof', id: 'socialproof' },
    { text: 'Soziabilität', id: 'soziabilitaet' },
    { text: 'Soziale Medien', id: 'sozialemedien' },
    { text: 'Sozialer Vergleich', id: 'sozialervergleich' },
    { text: 'Streak', id: 'streak' },
    { text: 'Stressbewältigung', id: 'stressbewaeltigung' },
    { text: 'Targeting', id: 'targeting' },
    { text: 'Technoference', id: 'technoference' },
    { text: 'Telephobia', id: 'telephobia' },
    { text: 'Tencent', id: 'tencent' },
    { text: 'Überwachungskapitalismus', id: 'ueberwachungskapitalismus' },
    { text: 'UGC', id: 'ugc' },
    { text: 'User Generated Content', id: 'ugc' },
    { text: 'User', id: 'user' },
    { text: 'Wiederholungszwang', id: 'wiederholungszwang' },
    { text: 'Wokeness', id: 'wokeness' },
    { text: 'World Wide Web', id: 'worldwideweb' },
    { text: 'Zeitwahrnehmung', id: 'zeitwahrnehmung' },
    { text: 'Zivilisationskrankheit', id: 'zivilisationskrankheit' }
  ];
  
  // Sortiere nach Länge (längste zuerst)
  glossarTerms.sort((a, b) => b.text.length - a.text.length);
  
  // Funktion zum Verlinken von Begriffen in einem Container
  function linkGlossarTerms(container) {
    const paragraphs = container.querySelectorAll('p');
    console.log('Verarbeite', paragraphs.length, 'Paragraphen in Container');
    
    paragraphs.forEach((p, index) => {
      // Überspringe Paragraphen, die bereits verlinkt wurden
      if (p.dataset.glossarLinked) return;
      
      // Überspringe Paragraphen, die bereits in Links sind
      if (p.closest('a')) {
        console.log(`Paragraph ${index} ist in einem Link - wird übersprungen`);
        return;
      }
      
      // Verarbeite Text-Knoten, um Links zu vermeiden
      processTextNodes(p);
      
      p.dataset.glossarLinked = 'true'; // Markiere als verarbeitet
    });
  }
  
  // Rekursive Funktion zum Verarbeiten von Text-Knoten
  function processTextNodes(node) {
    const childNodes = Array.from(node.childNodes);
    
    childNodes.forEach(child => {
      // Wenn es ein Text-Knoten ist
      if (child.nodeType === 3) {
        const text = child.textContent;
        let html = text;
        let hasChanges = false;
        
        glossarTerms.forEach(term => {
          const escapedTerm = term.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b(${escapedTerm})\\b`, 'gi');
          
          if (regex.test(html)) {
            console.log(`Begriff "${term.text}" gefunden`);
            html = html.replace(regex, (match) => {
              return `<a href="glossar.html?term=${term.id}" class="glossar-link" data-term-id="${term.id}">${match}</a>`;
            });
            hasChanges = true;
          }
        });
        
        if (hasChanges) {
          const span = document.createElement('span');
          span.innerHTML = html;
          node.replaceChild(span, child);
          console.log('Text-Knoten wurde verlinkt');
        }
      }
      // Wenn es ein Element-Knoten ist, aber KEIN Link
      else if (child.nodeType === 1 && child.tagName !== 'A') {
        processTextNodes(child);
      }
      // Links werden übersprungen
    });
  }
  
  // Initiales Verlinken beim Laden
  linkGlossarTerms(document.body);
  
  // MutationObserver für dynamisch geladene Inhalte (Detail-Spalte)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        // Nur Element-Nodes verarbeiten
        if (node.nodeType === 1) {
          console.log('Neuer Content erkannt, verlinke Glossarbegriffe...');
          linkGlossarTerms(node);
        }
      });
    });
  });
  
  // Beobachte den detail-content Container
  const detailContent = document.getElementById('detail-content');
  if (detailContent) {
    console.log('Beobachte detail-content für Änderungen');
    observer.observe(detailContent, {
      childList: true,
      subtree: true
    });
  }
  
  console.log('Glossar-Linking Setup abgeschlossen');
})();