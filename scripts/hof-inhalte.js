// Hall of Fame Daten: Plattformen mit ihren beliebtesten Posts
const HOF_DATA = [
    { 
    id: 'facebook', 
    title: 'Facebook', 
    year: 2005,
    images: ['2005.1.jpg'],
    desc: 'Facebook entstand 2004 an der Harvard University zunächst als geschlossenes Netzwerk für Studierende und trug den Namen „TheFacebook“. Die Plattform orientierte sich an analogen Face Books, gedruckten Verzeichnissen mit Fotos und Namen von Studierenden, die soziale Orientierung auf dem Campus erleichtern sollten. Entsprechend stand zu Beginn nicht Selbstdarstellung im Vordergrund, sondern Identifikation und Zuordnung. Profile in den frühen Jahren waren funktional, statisch und stark normiert. Nutzer:innen trugen ihren Namen, ihr Studienfach, ihren Wohnort und ein einzelnes Profilfoto ein. Inhalte wurden kaum kuratiert, sondern dienten der sozialen Verortung innerhalb eines klar abgegrenzten Netzwerks. Die Nutzung war primär beobachtend: Man „schaute nach“, wer wer ist, wer mit wem verbunden ist und wie soziale Gefüge strukturiert sind. Anders als heutige Plattformen war Facebook zunächst frei von algorithmischen Feeds, Werbung und performativem Druck. Interaktion fand über Pinnwandeinträge und private Nachrichten statt, oft halböffentlich und mit geringer Reichweite. Medienwissenschaftlich lässt sich diese Phase als Übergang von analogen sozialen Verzeichnissen zu digitalen Identitätsräumen lesen. Facebook war weniger Bühne als Infrastruktur – ein Werkzeug zur sozialen Orientierung, das erst später zur zentralen Plattform digitaler Selbstinszenierung und Aufmerksamkeitsökonomie wurde.'
    },

{ 
    id: 'youtube', 
    title: 'YouTube', 
    year: 2005,
    link: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    images: ['2005.1.png'],
    desc: 'Das erste YouTube-Video „Me at the zoo“ von Jawed Karim, hochgeladen am 23. April 2005, gilt als Ursprung einer Plattform, die später das globale Bewegtbild fundamental verändern sollte. Das Video zeigt Karim vor Elefanten im Zoo von San Diego und wirkt bewusst unspektakulär, improvisiert und technisch roh. Gerade diese Alltäglichkeit macht den Clip medienhistorisch bedeutsam. Inhaltlich folgt das Video keiner narrativen, ästhetischen oder kommerziellen Logik, sondern dient primär als Funktionsnachweis: Jemand spricht in eine Kamera und teilt einen Moment. Es gibt keine Inszenierung, kein Storytelling und keine performative Identität im heutigen Sinne. Damit steht Me at the zoo für eine frühe Phase digitaler Öffentlichkeit, in der Authentizität aus Unmittelbarkeit entstand. Rückblickend kontrastiert das Video stark mit der heutigen YouTube-Kultur, die von Professionalität, Monetarisierung und algorithmischer Optimierung geprägt ist. Medienwissenschaftlich markiert Jawed Karims Clip den Übergang von passivem Medienkonsum zu partizipativer Videokultur. Das Video ist weniger wegen seines Inhalts relevant, sondern als Startpunkt einer Plattform, auf der jede Person potenziell zum Sender werden konnte.'
  },

{ 
    id: 'x', 
    title: 'X (ehemalig Twitter)', 
    year: 2006,
    link: 'https://x.com/jack/status/20',
    images: ['2006.1.png'],
    desc: 'Der erste Tweet auf Twitter wurde am 21. März 2006 von Jack Dorsey veröffentlicht und lautet schlicht: „just setting up my twttr“. Inhaltlich ist die Nachricht unspektakulär und funktional, genau darin liegt jedoch ihre historische Bedeutung. Der Tweet ist weniger als Aussage gedacht, sondern als technischer Test eines neuen Kommunikationssystems. Die Kürze und Alltagshaftigkeit des Tweets spiegeln die ursprüngliche Idee von Twitter als Status-Update-Dienst wider, nicht als Bühne für politische Debatten oder öffentliche Selbstinszenierung. Es gibt keine Pointe, keine Meinung und kein Publikum im heutigen Sinne. Kommunikation ist hier noch experimentell, offen und nicht strategisch. Rückblickend markiert dieser Tweet den Beginn einer Plattform, die später zu einem zentralen Ort digitaler Öffentlichkeit, Echtzeitdiskurse und politischer Auseinandersetzung wurde. Medienwissenschaftlich steht Dorseys erster Tweet für den Übergang von privater Kurzkommunikation zu globaler Sichtbarkeit. Der Satz „just setting up my twttr“ fungiert damit als Ursprung einer Kommunikationsform, die die Logik öffentlicher Debatten nachhaltig verändert hat.'
  },

{ 
    id: 'instagram', 
    title: 'Instagram', 
    year: 2010,
    link: 'https://www.instagram.com/p/C/',
    images: ['2010.1.png'],
    desc: 'Der erste Instagram-Post wurde 2010 von Mitgründer Kevin Systrom veröffentlicht und zeigt einen Hund neben dem Fuß seiner damaligen Freundin in Mexiko. Das Foto trägt den Titel „test“ und verweist auf den experimentellen Charakter der Plattform in ihrer Anfangsphase. Inhaltlich ist der Post vollkommen unspektakulär: kein zentriertes Motiv, keine Inszenierung, keine erkennbare Erzählabsicht. Gerade diese Beiläufigkeit macht den Beitrag medienhistorisch bedeutsam. Systrom nutzte Instagram zunächst als persönliches Testfeld und nicht als Bühne für Öffentlichkeit oder Reichweite. Der Post steht damit für eine Phase, in der Social Media noch als soziales Werkzeug gedacht war, nicht als ökonomisierte Aufmerksamkeitsmaschine. Rückblickend kontrastiert dieses Bild stark mit der heutigen Plattformlogik, die auf Sichtbarkeit, Performance und Markenbildung ausgerichtet ist. Der Hund auf Systroms Foto fungiert somit als stilles Symbol für den Übergang von privater Dokumentation zu globaler digitaler Öffentlichkeit.'
  },

  { 
    id: 'instagram', 
    title: 'Instagram', 
    year: 2022,
    link: 'https://www.instagram.com/p/CmUv48DLvxd/?img_index=1',
    images: ['2022.1.png', '2022.2.png', '2022.3.png'],
    desc: 'Der meistgelikte Instagram-Post aller Zeiten: Lionel Messis Fotos vom WM-Sieg Argentiniens 2022 in Katar. Die Bilder zeigen den emotionalen Moment, als Messi den lang ersehnten WM-Pokal in den Händen hält – ein Triumph, der ihm jahrelang verwehrt geblieben war. Mit über 75 Millionen Likes wurde dieser Post zum Symbol für sportliche Vollendung und digitale Reichweite.'
  },
  
  { 
    id: 'instagram', 
    title: 'Instagram', 
    year: 2024,
    link: 'https://www.facebook.com/Cristiano/posts/weve-made-history-1-billion-followers-this-is-more-than-just-a-number-its-a-test/1161539691999236/',
    images: ['2024.3.png'],
    desc: 'Im Jahr 2024 erreichte Cristiano Ronaldo als erster Mensch weltweit die Marke von einer Milliarde Follower auf verschiedenen Social-Media-Plattformen. Der portugiesische Fußballstar bewies damit erneut seine enorme globale Popularität, die weit über den Sport hinausreicht. Seine Präsenz auf Plattformen wie Instagram, Facebook und X (ehemals Twitter) machte ihn zu einer der einflussreichsten Persönlichkeiten im digitalen Raum. Mit diesem Meilenstein setzte Ronaldo neue Maßstäbe für Sportler und Influencer gleichermaßen.'
  },

  { 
    id: 'instagram', 
    title: 'Instagram', 
    year: 2025,
    link: 'https://www.instagram.com/p/DRPzD6oCLFZ/?hl=de&img_index=1',
    images: ['2025.1.png', '2025.2.png'],
    desc: 'Cristiano Ronaldos Instagram-Account ist einer der reichweitenstärksten der Welt (Platz zwei nach @instagram) und fungiert längst nicht mehr nur als Sportprofil, sondern als globale Medienmarke. Seine Posts verbinden Leistungssport, Lifestyle, Familie und kommerzielle Partnerschaften und erreichen ein Publikum, das weit über den Fußball hinausgeht. Dadurch wird jeder Beitrag automatisch politisch aufladbar, selbst wenn er nicht explizit politisch gemeint ist. Die im Jahr 2025 kursierenden Inhalte und Bezüge rund um Donald Trump wurden deshalb nicht nur als persönliche Geste, sondern als symbolischer Akt wahrgenommen. In der Logik sozialer Medien zählt weniger die Intention als die Sichtbarkeit und Anschlussfähigkeit eines solchen Moments. Ronaldos Plattform wirkt dabei als Verstärker, der politische Figuren in popkulturelle Kontexte überführt. Die Posts lassen sich als Beispiel für parasoziale Aufmerksamkeit und Prominenten-Legitimation lesen: Politische Akteure profitieren von der Aura globaler Stars. Gleichzeitig zeigt sich, wie stark Sport, Popkultur und Politik im digitalen Raum ineinander greifen. Ronaldos Account wird so Teil einer vernetzten Öffentlichkeit, in der Grenzen zwischen Unterhaltung, Imagepflege und politischer Symbolik zunehmend verschwimmen.'
  },

  
  { 
    id: 'instagram', 
    title: 'Instagram', 
    year: 2025,
    link: 'https://www.instagram.com/deepikapadukone/?hl=de',
    images: ['2024.1.png', '2024.2.png'],
    desc: 'Das Werbe-Reel von Hilton mit Deepika Padukone gilt als das meistgesehene Instagram Reel und markiert einen Wendepunkt in der Verbindung von Celebrity-Kultur, Markenkommunikation und Plattformlogik. Im Zentrum steht weniger ein klassischer Werbemoment als eine kurze, ästhetisch reduzierte Szene, die globale Wiedererkennbarkeit erzeugt. Deepika Padukone fungiert dabei nicht nur als Testimonial, sondern als kulturelle Schnittstelle zwischen westlicher Luxusmarke und südasiatischer Popkultur. Der enorme Erfolg des Reels lässt sich algorithmisch durch extrem hohe Watchtime, internationale Anschlussfähigkeit und wiederholtes Abspielen erklären. Inhaltlich ist das Video bewusst offen gehalten und verzichtet auf Sprache, wodurch es kultur- und sprachübergreifend funktioniert. Gleichzeitig verschiebt das Reel die Wahrnehmung von Werbung: Marke und Person verschmelzen zu einem performativen Image. Medienwissenschaftlich zeigt sich hier eine neue Form der Aufmerksamkeitsökonomie, in der globale Stars als algorithmische Verstärker wirken. Das Reel ist weniger ein einzelner Post als ein Ereignis der digitalen Öffentlichkeit. Es steht exemplarisch für eine Social-Media-Ära, in der Reichweite, Ästhetik und Markenidentität untrennbar miteinander verbunden sind.'
  },

    { 
    id: 'youtube', 
    title: 'YouTube', 
    year: 2025,
    link: 'https://www.youtube.com/watch?v=4l97aNza_Zc',
    images: ['2025.1.png', '2025.2.png'],
    desc: 'MrBeast, bürgerlich Jimmy Donaldson, steht exemplarisch für die vollständige Durchökonomisierung von YouTube als Plattform. Seine Videos sind keine spontanen Uploads mehr, sondern hochgradig geplante Medienprodukte, die auf maximale Watchtime, Wiedererkennbarkeit und algorithmische Skalierung ausgelegt sind. Extreme Challenges, hohe Geldbeträge und klare narrative Strukturen dienen dabei als Aufmerksamkeitstreiber. Zentral ist, dass Großzügigkeit bei MrBeast zugleich Inhalt und Mechanik ist: Spenden, Geschenke und Rekorde erzeugen Emotion, Teilbarkeit und moralische Legitimation. Seine Videos funktionieren weniger über Persönlichkeit als über Format, was sie weltweit reproduzierbar macht. Medienwissenschaftlich lässt sich MrBeast als Beispiel für „Industrial YouTube“ lesen, in dem Content wie ein Produkt entwickelt, getestet und optimiert wird. Gleichzeitig verschiebt er die Grenzen zwischen Unterhaltung, Wohltätigkeit und Marketing. MrBeast ist damit nicht nur YouTuber, sondern ein Knotenpunkt aus Plattformlogik, Kapital und Aufmerksamkeit. Seine Reichweite zeigt, wie stark Erfolg auf YouTube heute von datengetriebener Optimierung abhängt – und wie weit sich die Plattform von ihren ursprünglichen, amateurhaften Anfängen entfernt hat.'
  },

      { 
    id: 'x', 
    title: 'X (ehemalig Twitter)', 
    year: 2025,
    link: 'https://x.com/BarackObama',
    images: ['2025.1.jpg', '2025.2.png'],
    desc: 'Die meistgefolgten Accounts auf X (ehemals Twitter) sind Ausdruck davon, wie stark persönliche Sichtbarkeit, politische Macht und Plattformlogik miteinander verflochten sind. An der Spitze steht Elon Musk, was sich weniger aus klassischer Popularität als aus seiner strukturellen Position ergibt: Als Eigentümer der Plattform ist er zugleich Nutzer, Infrastruktur und permanentes Medienthema. Seine Tweets werden algorithmisch stark verbreitet, medial weiterverwertet und durch Kontroversen kontinuierlich sichtbar gehalten. Musk verkörpert damit eine neue Form digitaler Macht, bei der Reichweite nicht nur sozial, sondern auch technisch abgesichert ist. Im Kontrast dazu steht Barack Obama, dessen hohe Followerzahl aus einer anderen Logik heraus entstanden ist. Obama nutzte Twitter früh als politisches Kommunikationsinstrument und etablierte den Account während seiner Präsidentschaft als offizielle Stimme politischer Öffentlichkeit. Seine Posts sind vergleichsweise zurückhaltend, selten impulsiv und stark symbolisch. Gerade diese Distanz verleiht ihnen Autorität. Medienwissenschaftlich lässt sich Obama als Beispiel für institutionalisierte digitale Sichtbarkeit lesen: Reichweite entsteht hier durch Vertrauen, historische Bedeutung und Repräsentation, nicht durch permanente Interaktion. Während Musk die Plattform performativ nutzt und ständig neu besetzt, fungiert Obama als stabiler Referenzpunkt. Die beiden Accounts markieren damit zwei gegensätzliche Modelle von Macht auf X – algorithmische Dominanz versus symbolisches Kapital.'
  },

  // Weitere Plattformen werden hier hinzugefügt
];