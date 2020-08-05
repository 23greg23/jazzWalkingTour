var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiZ2dyaW5uZWxsIiwiYSI6ImNrZDd1bjViMjAwcGwydG82YnEwZGdmcTkifQ.qYHXmEW553IMGCB8V-x6uA',
    showMarkers: true,
    theme: 'dark',
    alignment: 'right',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'krentzman',
            title: '',
            image: 'http://huskynunews.wpengine.com/interactive/walkingTour1/venueAddress-directories/MassAve/199/today.jpg',
            description: 'We\'ll start our walking tour from Northeastern\'s Krentzman Quad leaving from the southest gate.',
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
            title: '343 Huntington Avenue',
            image: 'http://huskynunews.wpengine.com/interactive/walkingTour1/venueAddress-directories/MassAve/199/today.jpg',
            description: '<h2>Boston Opera House</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            description: '<div id="leftSide">additional media goes here</div>',
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
            title: '290 Huntington Avenue',
            image: 'http://huskynunews.wpengine.com/interactive/walkingTour1/venueAddress-directories/MassAve/199/today.jpg',
            description: '<h2>New England Conservatory of Music</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            description: '<div id="leftSide">additional media goes here</div>',
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
            description: '<h2>Arcadia Ballroom</h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            description: '<h2>American Federation of Musicians Local 535</h2><h3>1915 - 1970</h3>Until 1970, the American Federation of Musicians was racially segregated and maintained two separate chapters in Boston: Local 9 for whites and Local 535 for blacks. Black musicians actually lobbied for this separation as the original charter—while in theory looking out for the interests of all members, regardless of race—in practice restricted black musicians to lower paying dance and jazz work while the whites received the bulk of the lucrative commercial, symphonic,  and ballroom bookings. After a few moves, (including a short stint upstairs from Charlie\’s Sandwich Shoppe at 429 Columbus Ave.) the new AFM Local 535 moved to its permanent home here at 409 Mass Ave. <p class="quote">“Rehearsal up and downstairs. Several bands and groups rehearsed there. Real camaraderie, like you say... That\’s where you met musicians and people and got gigs. We got all our own work, \’cause there was still plenty of places where we played, in and outside of Boston, all over the state.“<br/> - Charles Walker AFM 535</p>While having a dedicated local helped in addressing the needs of black musicians and allowed a more targeted allocation of resources, segregation of work opportunities was always an issue.<span class="quote">“I came here in \’45 and first thing, \’cause I’m from North Carolina, I was surprised there were separate unions in Boston. [W]hat existed was they had clubs where only black played and places where only white played... We couldn\’t work Blimstrom\’s, we knew that, they could never hire, or do the circus or anything. So it was more of less zoned off. Black people worked this club and white people worked that club. Simple as that.”<br/>- Andy McGhee AFM 535</span>Eventually, the American Federation of Musicians ordered the unions in Boston to merge and in 1970 they formed AFM Local 9-535 moving all operations to 56 St. Boltoph St. where the white Local 9 had been housed.'
,
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
