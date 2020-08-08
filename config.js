var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiZ2dyaW5uZWxsIiwiYSI6ImNrZDd1bjViMjAwcGwydG82YnEwZGdmcTkifQ.qYHXmEW553IMGCB8V-x6uA',
    showMarkers: true,
    theme: 'dark',
    alignment: 'right',
    title: 'History on your doorstep: Boston\'s Jazz Corner',
    subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.<div id="leftSide"><img src="images/route.jpg"><ol class="routeList"><li>Boston Opera House</li><li>New England Conservatory of Music</li><li>Arcadia Ballroom</li></ol></div>',
    byline: '',
    footer: 'All photos courtesy of Northeastern University Archives and Special Collections or Wikipedia Commons unless otherwise noted.',
    chapters: [
        {
            id: 'krentzman',
            title: '',
            image: 'images/venueAddress-directories/Huntington/343 Huntington/krentzman.jpg',
            description: 'We\'ll start our walking tour from Northeastern\'s Krentzman Quad, stepping out onto Huntington Avenue. Directly across the street you will see Speare Hall, once the site of The Boston Opera House.',
            location: {
                center: [-71.08877, 42.34025],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'operaHouse-text',
            title: '<span class="stopNumber">1</span>343 Huntington Avenue',
            image: 'images/venueAddress-directories/Huntington/343 Huntington/before_after.jpg',
            description: '<h2>Boston Opera House</h2><h3>1909-1957</h3><p>While not a jazz venue per se, The Boston Opera House hosted many jazz events in its relatively short tenure on Huntington Ave. Opened in 1909 and touted as another jewel in Boston’s crown of the arts along with Symphony Hall and The Boston Public Library, it was the home of the Boston Opera Company who were arch competitors of New York’s Metropolitan Opera Company. When the Boston Opera Company went bankrupt in 1915, the venue began hosting events by other companies (including the Met) and even made forays into popular music and theater. It was during these later years that the Opera House saw many jazz events on its stage including the world premiere of <a href="https://en.wikipedia.org/wiki/Duke_Ellington">Duke Ellington</a>’s afro-centric retelling of The Beggars Opera, a classic satire from the 18th century. While Ellington’s musical (entitled <a href="https://www.troystreet.com/tspots/2013/12/06/dec-6-1946-the-mavericks-in-twilight-alley/">Twilight Alley</a>, aka Beggar’s Holiday) was not well received by critics, it featured an impressive cast and crew including director <a href="https://www.imdb.com/name/nm0002144/">John Houseman</a> and actor <a href="https://www.imdb.com/name/nm0609216">Zero Mostel</a> and was revolutionary for its day in casting African-American actors in the lead roles and featuring an inter-racial romance at the heart of the story.<div class="iframe-container"><iframe src="https://www.youtube.com/embed/UZlUEpANShA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>Other popular stars such as <a href="https://en.wikipedia.org/wiki/Bill_Robinson">Bill “Bojangles” Robinson</a> and <a href="https://www.britannica.com/biography/Sidney-Bechet">Sidney Bechet</a> made appearances throughout the thirties and forties but the Opera House eventually fell into disuse and disrepair and was demolished in the 1950s. All that remains today is the street name Opera Place which runs from Huntington Avenue along the east wall of Speare Hall.</p>',

            location: {
                center: [-71.08896, 42.34043],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'operaHouse-supp',
            description: '<div id="leftSide"><div class="mediaOne"><img src="images/venueAddress-directories/Huntington/343 Huntington/Huntington_Avenue_Grounds.jpg"><p class="mediaCaption">Looking north towards Huntington Avenue from the Northeastern campus circa 1911. In the foreground are the Huntington Avenue Grounds–original home of the Boston Red Sox–where the Cabot Center stands today. In the background, to the right, is the Boston Storage Warehouse (current site of the Marino Center) and to the left is the Boston Opera House (current site of Speare Hall). Photo courtesy of Wikimedia Commons.</p></div><div class="mediaTwo"><img src="images/venueAddress-directories/Huntington/343 Huntington/operaHseDemo.png"><p class="mediaCaption">Demolition of the Boston Opera House and construction of Speare Hall in 1958. Fun fact: A single brick was saved from the demolition by Boston radio personality and music historian, <a href="https://www.classicalwcrb.org/people/ron-della-chiesa#stream/0">Ron Della Chiasa</a>, and currently resides in Snell Library as part of Northeastern University Archives and Special Collections. Photos courtesy of Northeastern University Archives and Special Collections.</p></div></div>',
            location: {
                center: [-71.08896, 42.34043],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nec-text',
            title: '<span class="stopNumber">2</span>3290 Huntington Avenue',
            image: 'images/venueAddress-directories/Huntington/290huntington/before_after.jpg',
            description: '<h2>New England Conservatory of Music</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-71.08656, 42.34116],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nec-supp',
            description: '<div id="leftSide"><div class="mediaOne"><img src="images/venueAddress-directories/Huntington/290huntington/jordanHallInt.jpg"><p class="mediaCaption">Jordan Hall. Photo courtesy of Wikimedia Commons.</p></div><div class="mediaTwo"><div class="iframe-container"><iframe src="https://www.youtube.com/embed/bTsuT0EgGio" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p class="mediaCaption">Third Stream Music: The Modern Jazz Quartet & Guests. Gunther Schiller, conducting.</div></div></div>',
            location: {
                center: [-71.08656, 42.34116],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'arcadia-text',
            title: '252-254 Huntington Avenue',
            image: 'http://huskynunews.wpengine.com/interactive/walkingTour1/venueAddress-directories/MassAve/199/today.jpg',
            description: '<h2>Arcadia Ballroom</h2><h3>dates</h3><h2>Showboat</h2><h3>dates<h3/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-71.08656, 42.34116],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'arcadia-supp',
            description: '<div id="leftSide">additional media goes here</div>',
            location: {
                center: [-71.08513, 42.34212],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'raymor-text',
            title: '253 Huntington Avenue',
            image: 'http://huskynunews.wpengine.com/interactive/walkingTour1/venueAddress-directories/MassAve/199/today.jpg',
            description: '<h2>Raymor/Playmor Ballroom</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-71.08533, 42.34258],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'raymor-supp',
            description: '<div id="leftSide">additional media goes here</div>',
            location: {
                center: [-71.08533, 42.34258],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'symphony-text',
            title: '253 Huntington Avenue',
            image: 'http://huskynunews.wpengine.com/interactive/walkingTour1/venueAddress-directories/MassAve/199/today.jpg',
            description: '<h2>Symphony Hall</h2><h3>1900 - present</h3>While not a regular destination for jazz, this venerable concert hall has hosted many jazz greats and notable performances. The Paul Whiteman orchestra presented a series of “symphonic jazz’ concerts here in the 1920s in an attempt to make the new music more palatable to conservative audiances. Later, during the swing era, the seats at the front of the hall were removed to accommodate dancing to the music of Count Basie, Jimmie Lunceford, Benny Goodman and other hard swinging outfits. In a nod to egalitarianism, many of these jazz performances were set on Thursday nights—-traditionally the servant\’s night off in Boston. In January 1943, Duke Ellington presented one of only three complete performances of his landmark Black, Brown, and Beige Symphony, a “tone parallel to the history of the American Negro”.',
            location: {
                center: [-71.08577, 42.3429],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'symphony-supp',
            description: '<div id="leftSide">additional media goes here</div>',
            location: {
                center: [-71.08577, 42.3429],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'afm-text',
            title: '409 Massachusetts Avenue',
            image: 'http://huskynunews.wpengine.com/interactive/walkingTour1/venueAddress-directories/MassAve/199/today.jpg',
            description: '<h2>American Federation of Musicians Local 535</h2><h3>1935 - 1970</h3>Until 1970, the American Federation of Musicians was racially segregated and maintained two separate chapters in Boston: Local 9 for whites and Local 535 for blacks. Black musicians had actually lobbied for this separation as the original charter—while in theory looking out for the interests of all members, regardless of race—in practice restricted black musicians to lower paying dance and jazz work while the whites received the bulk of the lucrative commercial, symphonic, and ballroom bookings. After a few temporary moves, (including a short stint upstairs from Charlie’s Sandwich Shoppe at 429 Columbus Ave.) the new AFM Local 535 moved to its permanent home at 409 Mass Ave. in 1939. The building housed rehearsal rooms, meeting halls and space for networking and job postings.<p class="quote">“Rehearsal up and downstairs. Several bands and groups rehearsed there. Real camaraderie, like you say...That’s where you met musicians and people and got gigs. We got all our own work, ’cause there was still plenty of places where we played, in and outside of Boston, all over the state. “<span class="byline"> - Charles Walker AFM 535</span></p> While having a dedicated local helped in addressing the needs of black musicians and allowed a more targeted allocation of resources, segregation of work opportunities was always an issue.<p class="quote">“I came here in ’45 and first thing, ’cause I’m from North Carolina, I was surprised there were separate unions in Boston. [W]hat existed was they had clubs where only black played and places where only white played... We couldn’t work Blimstrom’s, we knew that, they could never hire, or do the circus or anything. So it was more of less zoned off. Black people worked this club and white people worked that club. Simple as that.”<span class="byline">- Andy McGhee AFM 535</span></p><p>Eventually, the American Federation of Musicians ordered the unions in Boston to merge and in 1970 they formed AFM Local 9-535 closing the Mass. Ave. location and  moving all operations to 56 St. Boltoph St. where the white AFM Local 9 had their union hall.</p>',
            location: {
                center: [ -71.08286, 42.341],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'afm-supp',
            description: '<div id="leftSide">additional media goes here</div>',
            location: {
                center: [ -71.08286, 42.341],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
