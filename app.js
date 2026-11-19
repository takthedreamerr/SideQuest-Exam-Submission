/* =========================================================
   SIDEQUEST — SHARED WEBSITE JAVASCRIPT
  
   ========================================================= */


const EVENTS = [
  {
    "id": "tm-917949273",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-19",
    "time": "19:30",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/917949273",
    "type": "event"
  },
  {
    "id": "tm-1665721643",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-20",
    "time": "19:30",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/1665721643",
    "type": "event"
  },
  {
    "id": "tm-236572199",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-21",
    "time": "15:00",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/236572199",
    "type": "event"
  },
  {
    "id": "tm-379696135",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-21",
    "time": "19:30",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/379696135",
    "type": "event"
  },
  {
    "id": "tm-1186764144",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-22",
    "time": "14:00",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/1186764144",
    "type": "event"
  },
  {
    "id": "tm-667736496",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-22",
    "time": "18:00",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/667736496",
    "type": "event"
  },
  {
    "id": "tm-908964196",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-26",
    "time": "19:30",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/908964196",
    "type": "event"
  },
  {
    "id": "q-rowlene-2026",
    "source": "Quicket",
    "category": "music",
    "title": "Rowlene — Last Seen Tour: Johannesburg",
    "date": "2026-11-27",
    "time": "19:00",
    "city": "Johannesburg",
    "location": "Artistry JHB, Sandton, Johannesburg",
    "price": 150,
    "description": "Rowlene presents songs from Some Strings Attached and fan favourites in an intimate full-band performance. 18+.",
    "image": "",
    "url": "https://www.quicket.co.za/events/400180-last-seen-tour-johannesburg/",
    "type": "event"
  },
  {
    "id": "tm-596732376",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-27",
    "time": "19:30",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/596732376",
    "type": "event"
  },
  {
    "id": "tm-1519369515",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-28",
    "time": "15:00",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/1519369515",
    "type": "event"
  },
  {
    "id": "q-wonderboom-2026",
    "source": "Quicket",
    "category": "music",
    "title": "WONDERboom Live at Music Box JHB",
    "date": "2026-11-28",
    "time": "18:00",
    "city": "Johannesburg",
    "location": "The Art of Expressions / Music Box JHB, Kensington, Johannesburg",
    "price": 799,
    "description": "WONDERboom celebrates 30 years with an intimate show; the listed ticket includes dinner and refreshments.",
    "image": "",
    "url": "https://www.quicket.co.za/events/387728-wonderboom-live-at-music-box-jhb/",
    "type": "event"
  },
  {
    "id": "tm-kfm-cpt-2026",
    "source": "Ticketmaster",
    "category": "music",
    "title": "KFM Vinyl Classic Party",
    "date": "2026-11-28",
    "time": "19:00",
    "city": "Cape Town",
    "location": "Cabo Beach Club, Cape Town",
    "price": 250,
    "description": "An evening of throwback hits and dance music with KFM DJs. 18+.",
    "image": "https://s1.ticketm.net/dam/a/908/477fa993-bf23-4cdc-8216-d5ed7ca18908_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/kfm-vinyl-classic-party-tickets/1181711166",
    "type": "event"
  },
  {
    "id": "tm-1608650510",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-28",
    "time": "19:30",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/1608650510",
    "type": "event"
  },
  {
    "id": "tm-1385144070",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "MAMMA MIA! The Musical!",
    "date": "2026-11-29",
    "time": "14:00",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "A separately ticketed performance of the international feel-good musical at Montecasino. Ages 3+.",
    "image": "https://s1.ticketm.net/dam/a/ac3/707f0ec4-22a8-47bb-9e4b-cbb838d18ac3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/mamma-mia-the-musical-tickets/1385144070",
    "type": "event"
  },
  {
    "id": "q-xmasmarket-cpt-2026",
    "source": "Quicket",
    "category": "markets",
    "title": "Christmas Market at Lycée Français du Cap",
    "date": "2026-12-05",
    "time": "10:00",
    "city": "Cape Town",
    "location": "Cape Town French School, Sea Point, Cape Town",
    "price": 50,
    "description": "Festive market with handmade gifts, food, live music and family activities. Children under two enter free.",
    "image": "",
    "url": "https://www.quicket.co.za/events/401911-christmas-market-2026-at-lyce-franais-du-cap/",
    "type": "event"
  },
  {
    "id": "tm-jcole-jhb-2026",
    "source": "Ticketmaster",
    "category": "music",
    "title": "J. Cole: The Fall-Off Tour",
    "date": "2026-12-12",
    "time": "18:00",
    "city": "Johannesburg",
    "location": "FNB Stadium, Johannesburg",
    "price": "",
    "description": "J. Cole brings The Fall-Off Tour to FNB Stadium in Johannesburg.",
    "image": "https://s1.ticketm.net/dam/a/cc7/bdd0a6dc-49b6-4d87-a1ba-14d401c71cc7_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/j-cole-the-fall-off-tour-tickets/628285647",
    "type": "event"
  },
  {
    "id": "tm-1140930466",
    "source": "Ticketmaster",
    "category": "music",
    "title": "Limp Bizkit",
    "date": "2026-12-13",
    "time": "18:00",
    "city": "Johannesburg",
    "location": "FNB Stadium, Johannesburg",
    "price": "",
    "description": "Limp Bizkit live at FNB Stadium with Ecca Vandal and Jack Parow on the lineup.",
    "image": "https://s1.ticketm.net/dam/a/cd3/2735b753-2f55-46e8-9681-00fa32169cd3_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/limp-bizkit-tickets/1140930466",
    "type": "event"
  },
  {
    "id": "tm-kehlani-pta-2026",
    "source": "Ticketmaster",
    "category": "music",
    "title": "The Kehlani World Tour: South Africa",
    "date": "2026-12-15",
    "time": "20:00",
    "city": "Pretoria",
    "location": "SunBet Arena, Time Square, Pretoria",
    "price": "",
    "description": "Kehlani performs in Pretoria on the South African leg of her world tour.",
    "image": "https://s1.ticketm.net/dam/a/228/5aabb35c-494a-4512-bb5f-55befd505228_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-kehlani-world-tour-south-africa-tickets/1434250696",
    "type": "event"
  },
  {
    "id": "tm-kehlani-cpt-2026",
    "source": "Ticketmaster",
    "category": "music",
    "title": "The Kehlani World Tour: Cape Town",
    "date": "2026-12-17",
    "time": "20:00",
    "city": "Cape Town",
    "location": "Grand Arena at GrandWest, Cape Town",
    "price": "",
    "description": "Kehlani performs at Grand Arena at GrandWest.",
    "image": "https://s1.ticketm.net/dam/a/228/5aabb35c-494a-4512-bb5f-55befd505228_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-kehlani-world-tour-south-africa-tickets/66679430",
    "type": "event"
  },
  {
    "id": "q-prime-nye-2026",
    "source": "Quicket",
    "category": "music",
    "title": "Prime Presents New Year's Eve — The Nest",
    "date": "2026-12-31",
    "time": "16:00",
    "city": "Johannesburg",
    "location": "The Nest, New Doornfontein, Johannesburg",
    "price": 60,
    "description": "New Year’s Eve event featuring hip hop, R&B, house and gqom. 18+.",
    "image": "",
    "url": "https://www.quicket.co.za/events/397607-prime-presents-new-years-eve-jhb-the-nest-31-december-2026/",
    "type": "event"
  },
  {
    "id": "tm-2009402532",
    "source": "Ticketmaster",
    "category": "music",
    "title": "TYLA — THE A*POP WORLD TOUR",
    "date": "2027-01-08",
    "time": "20:00",
    "city": "Pretoria",
    "location": "SunBet Arena Time Square, Pretoria",
    "price": "",
    "description": "Tyla brings The A*POP World Tour to Pretoria.",
    "image": "https://s1.ticketm.net/dam/a/2a8/79053334-c247-436d-b9ab-d68a9785f2a8_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/tyla-the-apop-world-tour-tickets/2009402532",
    "type": "event"
  },
  {
    "id": "tm-746470441",
    "source": "Ticketmaster",
    "category": "music",
    "title": "TYLA — THE A*POP WORLD TOUR",
    "date": "2027-01-09",
    "time": "20:00",
    "city": "Pretoria",
    "location": "SunBet Arena Time Square, Pretoria",
    "price": "",
    "description": "Tyla brings The A*POP World Tour to Pretoria.",
    "image": "https://s1.ticketm.net/dam/a/2a8/79053334-c247-436d-b9ab-d68a9785f2a8_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/tyla-the-apop-world-tour-tickets/746470441",
    "type": "event"
  },
  {
    "id": "tm-legend-pta-2027",
    "source": "Ticketmaster",
    "category": "music",
    "title": "John Legend MUSE TOUR — Pretoria",
    "date": "2027-02-20",
    "time": "20:00",
    "city": "Pretoria",
    "location": "SunBet Arena, Time Square, Pretoria",
    "price": "",
    "description": "John Legend brings the MUSE TOUR to SunBet Arena.",
    "image": "https://s1.ticketm.net/dam/a/5c6/764ef90d-5d62-46ca-be40-0bb116e9a5c6_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/john-legend-muse-tour-tickets/1844810073",
    "type": "event"
  },
  {
    "id": "tm-legend-dbn-2027",
    "source": "Ticketmaster",
    "category": "music",
    "title": "John Legend MUSE TOUR — Durban",
    "date": "2027-02-23",
    "time": "20:00",
    "city": "Durban",
    "location": "Durban ICC, Durban",
    "price": "",
    "description": "John Legend brings the MUSE TOUR to Durban ICC.",
    "image": "https://s1.ticketm.net/dam/a/5c6/764ef90d-5d62-46ca-be40-0bb116e9a5c6_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/john-legend-muse-tour-tickets/895471205",
    "type": "event"
  },
  {
    "id": "tm-legend-cpt-2027",
    "source": "Ticketmaster",
    "category": "music",
    "title": "John Legend MUSE TOUR — Cape Town",
    "date": "2027-02-26",
    "time": "20:00",
    "city": "Cape Town",
    "location": "Grand Arena at GrandWest, Cape Town",
    "price": "",
    "description": "John Legend brings the MUSE TOUR to Cape Town.",
    "image": "https://s1.ticketm.net/dam/a/5c6/764ef90d-5d62-46ca-be40-0bb116e9a5c6_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/john-legend-muse-tour-tickets/1820353785",
    "type": "event"
  },
  {
    "id": "tm-1212114891",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-12",
    "time": "19:30",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/1212114891",
    "type": "event"
  },
  {
    "id": "tm-1609802785",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-13",
    "time": "15:00",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/1609802785",
    "type": "event"
  },
  {
    "id": "tm-314526995",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-13",
    "time": "19:30",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/314526995",
    "type": "event"
  },
  {
    "id": "tm-545974614",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "Jimmy Carr: Laughs Funny — Pretoria",
    "date": "2027-03-13",
    "time": "20:00",
    "city": "Pretoria",
    "location": "SunBet Arena Time Square, Pretoria",
    "price": "",
    "description": "Jimmy Carr performs his Laughs Funny stand-up show.",
    "image": "https://s1.ticketm.net/dam/a/ce6/22ffa673-bd5c-4896-8f42-10b795735ce6_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/jimmy-carr-laughs-funny-tickets/545974614",
    "type": "event"
  },
  {
    "id": "tm-1889818028",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-14",
    "time": "17:00",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/1889818028",
    "type": "event"
  },
  {
    "id": "tm-1613657909",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "Jimmy Carr: Laughs Funny — Cape Town",
    "date": "2027-03-14",
    "time": "20:00",
    "city": "Cape Town",
    "location": "Grand Arena at GrandWest, Cape Town",
    "price": "",
    "description": "Jimmy Carr performs his Laughs Funny stand-up show.",
    "image": "https://s1.ticketm.net/dam/a/ce6/22ffa673-bd5c-4896-8f42-10b795735ce6_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/jimmy-carr-laughs-funny-tickets/1613657909",
    "type": "event"
  },
  {
    "id": "tm-911993669",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-16",
    "time": "19:30",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/911993669",
    "type": "event"
  },
  {
    "id": "tm-921623737",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-17",
    "time": "19:30",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/921623737",
    "type": "event"
  },
  {
    "id": "tm-524795002",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-18",
    "time": "19:30",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/524795002",
    "type": "event"
  },
  {
    "id": "tm-937226690",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-19",
    "time": "19:30",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/937226690",
    "type": "event"
  },
  {
    "id": "tm-1642552528",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-20",
    "time": "15:00",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/1642552528",
    "type": "event"
  },
  {
    "id": "tm-1203082632",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-20",
    "time": "19:30",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/1203082632",
    "type": "event"
  },
  {
    "id": "tm-1085755643",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-21",
    "time": "14:00",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/1085755643",
    "type": "event"
  },
  {
    "id": "tm-1397702408",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "The Bodyguard | The Musical",
    "date": "2027-03-21",
    "time": "18:00",
    "city": "Cape Town",
    "location": "Artscape Opera House, Cape Town",
    "price": "",
    "description": "A separately ticketed performance of The Bodyguard musical at Artscape Opera House. Ages 5+.",
    "image": "https://s1.ticketm.net/dam/a/19d/65e17bde-9126-4c2d-a500-660968b2e19d_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/the-bodyguard-%7C-the-musical-tickets/1397702408",
    "type": "event"
  },
  {
    "id": "tm-1008633209",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "Urzila Carlson — Live in South Africa",
    "date": "2027-07-28",
    "time": "20:00",
    "city": "Cape Town",
    "location": "CTICC, Cape Town",
    "price": "",
    "description": "Urzila Carlson performs her live stand-up show. Ages 16+.",
    "image": "https://s1.ticketm.net/dam/a/0a8/45ec5100-88f8-449a-b9dd-db7a7eff50a8_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/urzila-carlson--live-in-south-africa-tickets/1008633209",
    "type": "event"
  },
  {
    "id": "tm-303096872",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "Urzila Carlson — Live in South Africa",
    "date": "2027-07-31",
    "time": "20:00",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "Urzila Carlson performs her live stand-up show. Ages 16+.",
    "image": "https://s1.ticketm.net/dam/a/0a8/45ec5100-88f8-449a-b9dd-db7a7eff50a8_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/urzila-carlson--live-in-south-africa-tickets/303096872",
    "type": "event"
  },
  {
    "id": "tm-1944357495",
    "source": "Ticketmaster",
    "category": "arts",
    "title": "Urzila Carlson — Live in South Africa",
    "date": "2027-08-01",
    "time": "20:00",
    "city": "Johannesburg",
    "location": "Teatro at Montecasino, Johannesburg",
    "price": "",
    "description": "Urzila Carlson performs her live stand-up show. Ages 16+.",
    "image": "https://s1.ticketm.net/dam/a/0a8/45ec5100-88f8-449a-b9dd-db7a7eff50a8_EVENT_DETAIL_PAGE_16_9.jpg",
    "url": "https://www.ticketmaster.co.za/event/urzila-carlson--live-in-south-africa-tickets/1944357495",
    "type": "event"
  }
];

/* DINEPLAN RESTAURANT DIRECTORY — official provider listings, checked November 2026.
   Curated snapshot; not a live availability API. Bookings open on Dineplan.
   Photos from verified URLs or the provided Dineplan screenshots.
   Some listings still use original labelled artwork where a matching photo could not be verified. */
const RESTAURANTS = [
  {
    "id": "dp-mikes-heritage-house",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Mikes Heritage House",
    "city": "Johannesburg",
    "area": "Parktown",
    "cuisine": "South African",
    "location": "Parktown, Johannesburg",
    "description": "Heritage steakhouse dining",
    "image": "./assets/mikes.jpg",
    "url": "https://www.dineplan.com/restaurant/mikes-heritage-house",
    "price": null
  },
  {
    "id": "dp-olives-and-plates-club-and-conferences",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Olives and Plates Club and Conferences",
    "city": "Johannesburg",
    "area": "Parktown",
    "cuisine": "Mediterranean",
    "location": "Parktown, Johannesburg",
    "description": "Mezze, sharing plates & garden dining",
    "image": "./assets/olives.jpg",
    "url": "https://www.dineplan.com/restaurant/olives-and-plates-club-and-conferences",
    "price": null
  },
  {
    "id": "dp-cyra",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Cyra",
    "city": "Johannesburg",
    "area": "Houghton Estate",
    "cuisine": "Fine dining",
    "location": "Houghton Estate, Johannesburg",
    "description": "Chef-led tasting menus and culinary storytelling",
    "image": "https://static-prod.dineplan.com/restaurant/restaurants/images/4375/cyra-1745502736.jpg?d=1746541856",
    "url": "https://www.dineplan.com/restaurant/cyra",
    "price": null
  },
  {
    "id": "dp-nova-at-the-houghton-hotel",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Nova at The Houghton Hotel",
    "city": "Johannesburg",
    "area": "Houghton Estate",
    "cuisine": "Contemporary",
    "location": "Houghton Estate, Johannesburg",
    "description": "All-day dining at The Houghton Hotel",
    "image": "./assets/nova.jpg",
    "url": "https://www.dineplan.com/restaurant/nova-at-the-houghton-hotel",
    "price": null
  },
  {
    "id": "dp-blind-tiger-cafe",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "cafe",
    "title": "Blind Tiger Cafe",
    "city": "Johannesburg",
    "area": "Parkview",
    "cuisine": "Fusion",
    "location": "Parkview, Johannesburg",
    "description": "Neighbourhood café, cocktails and fusion plates",
    "image": "./assets/blind.jpg",
    "url": "https://www.dineplan.com/restaurant/blind-tiger-cafe",
    "price": null
  },
  {
    "id": "dp-proud-mary",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Proud Mary",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Contemporary",
    "location": "Rosebank, Johannesburg",
    "description": "Modern classics, all-day dining and wine bar",
    "image": "https://images.squarespace-cdn.com/content/v1/60a23657a6164d69e38ddad0/1622645251969-4R5VFDUWTBTSQYRCEQKS/Proud%2BMary%2BWine%2BBar%2BFront.jpg?format=1000w",
    "url": "https://www.dineplan.com/restaurant/proud-mary",
    "price": null
  },
  {
    "id": "dp-marble-johannesburg",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Marble Johannesburg",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "South African",
    "location": "Rosebank, Johannesburg",
    "description": "Open-fire contemporary dining",
    "image": "https://marble.restaurant/wp-content/uploads/2018/06/marble-4.jpg",
    "url": "https://www.dineplan.com/restaurant/marble-johannesburg",
    "price": null
  },
  {
    "id": "dp-momo-kuro",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Momo Kuro",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Asian",
    "location": "Rosebank, Johannesburg",
    "description": "Rooftop dim sum and Asian sharing plates",
    "image": "https://s.inyourpocket.com/img/text/southafrica/johannesburg/momo-kuro-small_2.jpg",
    "url": "https://www.dineplan.com/restaurant/momo-kuro",
    "price": null
  },
  {
    "id": "dp-saint-restaurant",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Saint Restaurant",
    "city": "Johannesburg",
    "area": "Sandton",
    "cuisine": "Italian",
    "location": "Sandton, Johannesburg",
    "description": "Contemporary Italian-inspired dining",
    "image": "https://i.pinimg.com/736x/09/81/d9/0981d9bc18bf3c6847c5d1f3d07fdb80.jpg",
    "url": "https://www.dineplan.com/restaurant/saint-restaurant",
    "price": null
  },
  {
    "id": "dp-tang-sandton-johannesburg",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "TANG Sandton Johannesburg",
    "city": "Johannesburg",
    "area": "Sandton",
    "cuisine": "Japanese",
    "location": "Sandton, Johannesburg",
    "description": "Japanese and Cantonese flavours",
    "image": "https://www.wantedonline.co.za/resizer/v2/YFBBXLYCZNNK3NW6OXDEPQPNNI.jpg?auth=ec5e795de4bc6b32951aca6574756724b47268c5e10bdbb368c6cc52989be778&height=630&smart=true&width=1200",
    "url": "https://www.dineplan.com/restaurant/tang-sandton-johannesburg",
    "price": null
  },
  {
    "id": "dp-epicure-at-one",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Epicure AT ONE",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "African",
    "location": "Rosebank, Johannesburg",
    "description": "Pan-African sharing plates and refined African cooking",
    "image": "https://storage.googleapis.com/prza/picture/image/12833/large_baa1d19c04.jpg",
    "url": "https://www.dineplan.com/restaurant/epicure-at-one",
    "price": null
  },
  {
    "id": "dp-pana",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "PANA",
    "city": "Johannesburg",
    "area": "Fourways",
    "cuisine": "Contemporary",
    "location": "Fourways, Johannesburg",
    "description": "Contemporary restaurant, bar and social lounge",
    "image": "https://static-prod.dineplan.com/restaurant/restaurants/images/5105/pana-1782480148.jpg?d=1782487349",
    "url": "https://www.dineplan.com/restaurant/pana",
    "price": null
  },
  {
    "id": "dp-the-salt-road-houghton",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "The Salt Road Houghton",
    "city": "Johannesburg",
    "area": "Houghton Estate",
    "cuisine": "Fine dining",
    "location": "Houghton Estate, Johannesburg",
    "description": "Refined dining in Houghton",
    "image": "https://static.wixstatic.com/media/00ea55_ea0d94ec90c34808902164ddfc976ec6~mv2.png/v1/fill/w_1000%2Ch_667%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01/00ea55_ea0d94ec90c34808902164ddfc976ec6~mv2.png",
    "url": "https://www.dineplan.com/restaurant/the-salt-road-houghton",
    "price": null
  },
  {
    "id": "dp-sec-restaurant",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Sec Restaurant",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Contemporary",
    "location": "Rosebank, Johannesburg",
    "description": "Chef-led contemporary cuisine",
    "image": "https://www.restaurants.co.za/images/gallery/full/sec_restaurant_17.JPG?d=20260325213912",
    "url": "https://www.dineplan.com/restaurant/sec-restaurant",
    "price": null
  },
  {
    "id": "dp-nine-lives",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "nightlife",
    "title": "Nine Lives",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Bar & lounge",
    "location": "Rosebank, Johannesburg",
    "description": "Hidden speakeasy-style dining and cocktails",
    "image": "https://s.inyourpocket.com/img/text/southafrica/johannesburg/nine-lives-hyde-hotel-interior-dsc05407-hdr.jpeg",
    "url": "https://www.dineplan.com/restaurant/nine-lives",
    "price": null
  },
  {
    "id": "dp-doppiozero-rosebank",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "cafe",
    "title": "Doppio Zero Rosebank",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Italian",
    "location": "Rosebank, Johannesburg",
    "description": "All-day Italian-inspired café dining",
    "image": "https://s.inyourpocket.com/img/text/southafrica/johannesburg/doppio-zero_rosebank.jpg",
    "url": "https://www.dineplan.com/restaurant/doppiozero-rosebank",
    "price": null
  },
  {
    "id": "dp-akti-mediterranean-rosebank",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Akti Mediterranean Rosebank",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Mediterranean",
    "location": "Rosebank, Johannesburg",
    "description": "Mediterranean dining in Rosebank",
    "image": "https://images.squarespace-cdn.com/content/v1/65b7421ac1e2d52e89ab376c/b50ac9e6-e137-4dcf-95d1-6d469d3335a9/Akti_hero.jpg",
    "url": "https://www.dineplan.com/restaurant/akti-mediterranean-rosebank",
    "price": null
  },
  {
    "id": "dp-liban-cafe-and-restaurant",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "cafe",
    "title": "Liban Cafe & Restaurant",
    "city": "Johannesburg",
    "area": "Parkhurst",
    "cuisine": "Lebanese",
    "location": "Parkhurst, Johannesburg",
    "description": "Lebanese food on 4th Avenue",
    "image": "https://static-prod.dineplan.com/api/images/restaurants/2101/liban-cafe-and-restaurant-1674639252.jpg?d=1674646453",
    "url": "https://www.dineplan.com/restaurant/liban-cafe-and-restaurant",
    "price": null
  },
  {
    "id": "dp-insights-at-sanctuary-mandela",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Insights at Sanctuary Mandela",
    "city": "Johannesburg",
    "area": "Houghton Estate",
    "cuisine": "South African",
    "location": "Houghton Estate, Johannesburg",
    "description": "South African heritage dishes",
    "image": "https://media.timeout.com/images/106293932/750/562/image.jpg",
    "url": "https://www.dineplan.com/restaurant/insights-at-sanctuary-mandela",
    "price": null
  },
  {
    "id": "dp-verdicchio",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Verdicchio Restaurant and Wine Cellar",
    "city": "Johannesburg",
    "area": "Fourways",
    "cuisine": "Italian",
    "location": "Fourways, Johannesburg",
    "description": "Italian dining and wine cellar at Montecasino",
    "image": "https://storage.googleapis.com/prza/picture/image/8049/large_cf0f6c0f32.jpg",
    "url": "https://www.dineplan.com/restaurant/verdicchio",
    "price": null
  },
  {
    "id": "dp-artuero-tequila",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "nightlife",
    "title": "ARTÜRO TEQUILA",
    "city": "Johannesburg",
    "area": "Melville",
    "cuisine": "Latin American",
    "location": "Melville, Johannesburg",
    "description": "Afro-Latino food and drinks",
    "image": "https://static-prod.dineplan.com/restaurant/restaurants/images/4743/artuero-tequila-1755696601.jpg?d=1770903307",
    "url": "https://www.dineplan.com/restaurant/artuero-tequila",
    "price": null
  },
  {
    "id": "dp-pera-rosebank",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "PERA Rosebank",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Turkish",
    "location": "Rosebank, Johannesburg",
    "description": "Turkish-inspired dining and lounge",
    "image": "https://static-prod.dineplan.com/restaurant/restaurants/images/5016/pera-rosebank-1774534199.jpg?d=1774541400",
    "url": "https://www.dineplan.com/restaurant/pera-rosebank",
    "price": null
  },
  {
    "id": "dp-tightline-johannesburg",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Tightline Johannesburg",
    "city": "Johannesburg",
    "area": "Sandton",
    "cuisine": "Seafood",
    "location": "Sandton, Johannesburg",
    "description": "Coastal-inspired seafood restaurant",
    "image": "",
    "url": "https://www.dineplan.com/restaurant/tightline-johannesburg",
    "price": null
  },
  {
    "id": "dp-la-parada-cedar-square",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "La Parada Cedar Square",
    "city": "Johannesburg",
    "area": "Fourways",
    "cuisine": "Spanish",
    "location": "Fourways, Johannesburg",
    "description": "Tapas and contemporary shared plates",
    "image": "",
    "url": "https://www.dineplan.com/restaurant/la-parada-cedar-square",
    "price": null
  },
  {
    "id": "dp-la-parada-rosebank",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "La Parada Rosebank",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Spanish",
    "location": "Rosebank, Johannesburg",
    "description": "Tapas, drinks and social dining",
    "image": "https://s.inyourpocket.com/img/text/southafrica/johannesburg/la-parada-rosebank-14.jpg",
    "url": "https://www.dineplan.com/restaurant/la-parada-rosebank",
    "price": null
  },
  {
    "id": "dp-medeo-restaurant-at-palazzo-hotel",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Medeo Restaurant at Palazzo Hotel",
    "city": "Johannesburg",
    "area": "Fourways",
    "cuisine": "Contemporary",
    "location": "Fourways, Johannesburg",
    "description": "Classic breakfast, lunch and dinner",
    "image": "https://zb2g8qspmxpc-u2909.pressidiumcdn.com/wp-content/uploads/2022/09/Medeo-at-the-Palazzo-1024x512.jpg",
    "url": "https://www.dineplan.com/restaurant/medeo-restaurant-at-palazzo-hotel",
    "price": null
  },
  {
    "id": "dp-fugazzi",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Fugazzi",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Italian",
    "location": "Rosebank, Johannesburg",
    "description": "Rosebank Italian-inspired dining",
    "image": "https://storage.googleapis.com/prza/user_picture/image/15141/5232aeb6e3.jpeg",
    "url": "https://www.dineplan.com/restaurant/fugazzi",
    "price": null
  },
  {
    "id": "dp-hudsons-in-fourways",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Hudsons in Fourways",
    "city": "Johannesburg",
    "area": "Fourways",
    "cuisine": "American",
    "location": "Fourways, Johannesburg",
    "description": "Burgers, drinks and casual plates",
    "image": "",
    "url": "https://www.dineplan.com/restaurant/hudsons-in-fourways",
    "price": null
  },
  {
    "id": "dp-mamasamba",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "MAMASAMBA",
    "city": "Johannesburg",
    "area": "Rosebank",
    "cuisine": "Latin American",
    "location": "Rosebank, Johannesburg",
    "description": "Latin American-inspired sharing plates",
    "image": "https://storage.googleapis.com/joburg-co-za-media/wp-content/uploads/2023/05/mamasamba-top.jpg",
    "url": "https://www.dineplan.com/restaurant/mamasamba",
    "price": null
  },
  {
    "id": "dp-nice-on-poplar",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "cafe",
    "title": "Nice on Poplar",
    "city": "Johannesburg",
    "area": "Riverclub",
    "cuisine": "Contemporary",
    "location": "Riverclub, Johannesburg",
    "description": "Seasonal all-day café",
    "image": "https://static-prod.dineplan.com/restaurant/restaurants/images/5019/nice-on-poplar-1773741231.jpg?d=1773748431",
    "url": "https://www.dineplan.com/restaurant/nice-on-poplar",
    "price": null
  },
  {
    "id": "dp-nomad-montecasino",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Nomad Montecasino",
    "city": "Johannesburg",
    "area": "Fourways",
    "cuisine": "Contemporary",
    "location": "Fourways, Johannesburg",
    "description": "Dining and social experience at Montecasino",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e9/04/e2/welcome-to-nomad-montecasino.jpg?h=800&s=1&w=1400",
    "url": "https://www.dineplan.com/restaurant/nomad-montecasino",
    "price": null
  },
  {
    "id": "dp-the-big-mouth",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "The Big Mouth",
    "city": "Johannesburg",
    "area": "Sandton",
    "cuisine": "Japanese",
    "location": "Sandton, Johannesburg",
    "description": "Sushi and contemporary dining at Mandela Square",
    "image": "https://images.squarespace-cdn.com/content/v1/560ce2c1e4b09f3d88571fe8/1499679005974-USMMTZI9YVLCJH40345Q/DSC_1801-1.jpg?format=1500w",
    "url": "https://www.dineplan.com/restaurant/the-big-mouth",
    "price": null
  },
  {
    "id": "dp-the-butcher-shop-and-grill-sandton",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "The Butcher Shop & Grill - Sandton",
    "city": "Johannesburg",
    "area": "Sandton",
    "cuisine": "Steakhouse",
    "location": "Sandton, Johannesburg",
    "description": "Classic Johannesburg steakhouse",
    "image": "https://starwinelist.com/storage/images/venue/2569/800x450/p8HkzPTBq75yVFI0fgcbZv94RGiOTr0p0iURNwG4.jpeg?signature=cd13a697df8a9ca1baddba8c516583d2cb9f2bb1bf2e202acae360cdd61e34ef",
    "url": "https://www.dineplan.com/restaurant/the-butcher-shop-and-grill-sandton",
    "price": null
  },
  {
    "id": "dp-chiefs-boma-restaurant",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Chief’s Boma Restaurant",
    "city": "Johannesburg",
    "area": "Fourways",
    "cuisine": "African",
    "location": "Fourways, Johannesburg",
    "description": "African dining experience at Indaba Hotel",
    "image": "https://www.restaurants.co.za/images/gallery/full/chiefs_boma_restaurant_2.JPG?d=20260315092741",
    "url": "https://www.dineplan.com/restaurant/chiefs-boma-restaurant",
    "price": null
  },
  {
    "id": "dp-the-green-fork",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "cafe",
    "title": "The Green Fork",
    "city": "Johannesburg",
    "area": "Melville",
    "cuisine": "Plant-based",
    "location": "Melville, Johannesburg",
    "description": "Neighbourhood Melville dining",
    "image": "",
    "url": "https://www.dineplan.com/restaurant/the-green-fork",
    "price": null
  },
  {
    "id": "dp-hard-rock-cafe-johannesburg",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "restaurant",
    "title": "Hard Rock Cafe Johannesburg",
    "city": "Johannesburg",
    "area": "Sandton",
    "cuisine": "American",
    "location": "Sandton, Johannesburg",
    "description": "American classics at Nelson Mandela Square",
    "image": "https://applications-media.feverup.com/image/upload/w_620%2Ch_420%2Cc_fill%2Cq_auto%2Cf_auto%2Cg_auto/fever2/plan/photo/b8bfd2c2-2dc7-11f1-97a3-1294490538b9.jpg",
    "url": "https://www.dineplan.com/restaurant/hard-rock-cafe-johannesburg",
    "price": null
  },
  {
    "id": "dp-karaoke-kong",
    "source": "Dineplan",
    "type": "restaurant",
    "category": "nightlife",
    "title": "Karaoke Kong",
    "city": "Johannesburg",
    "area": "Melville",
    "cuisine": "Bar & lounge",
    "location": "Melville, Johannesburg",
    "description": "Karaoke, cocktails and bar food",
    "image": "https://images.mindtrip.ai/restaurants/6d12/7518/4214/fa75/2cf8/c83e/f469/2d18",
    "url": "https://www.dineplan.com/restaurant/karaoke-kong",
    "price": null
  }
];

let allEvents = [...EVENTS];
let allRestaurants = [...RESTAURANTS];

/* Video files. Each list is tried in order, so a video still plays
   if you later rename it to the short name. Keep the files in the
   SAME folder as index.html. */
const HERO_VIDEO_SOURCES = [
  "Sidequest hero section ad (2).mp4",
  "hero-ad.mp4"
];

const ABOUT_VIDEO_SOURCES = [
  "Aesthetic Anime Cooking「4K 60FPS」.mp4",
  "Aesthetic Anime Cooking【4K 60FPS】.mp4",
  "Aesthetic Anime Cooking.mp4",
  "about-video.mp4"
];

function videoSourcesHTML(names) {
  return names
    .map(name => `<source src="./${encodeURIComponent(name)}" type="video/mp4">`)
    .join("\n          ");
}

/* Your logo image. Keep website_logo.png in the SAME folder as index.html. */
const LOGO_PATH = "./website_logo.png";

/* ---------------------------------------------------------
   GENERAL HELPERS
--------------------------------------------------------- */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function formatDate(value) {
  if (!value) return "Date to be confirmed";

  const date = new Date(`${value}T12:00:00`);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function formatPrice(value) {
  if (value === 0 || value === "0") return "Free";

  if (value === null || value === undefined || value === "") {
    return "Price to be confirmed";
  }

  const number = Number(value);

  return Number.isFinite(number)
    ? `R${number}`
    : String(value);
}

function notify(message) {
  const toast = $("#toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(notify.timeout);

  notify.timeout = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function readStorage(key, fallback = []) {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "null");
    return stored === null ? fallback : stored;
  } catch {
    return fallback;
  }
}

function getSaved() {
  return readStorage("sidequest-saved", []).filter(item => ["Ticketmaster", "Quicket", "Dineplan"].includes(item.source));
}

function setSaved(items) {
  localStorage.setItem("sidequest-saved", JSON.stringify(items));
}

function getTickets() {
  return []; // Old demo ticket records are not real bookings.
}

function setTickets(tickets) {
  localStorage.setItem("sidequest-tickets", JSON.stringify(tickets));
}

function getAllItems() {
  return [...allEvents, ...allRestaurants];
}

function getItemById(id) {
  return getAllItems().find(item => item.id === id);
}

/* ---------------------------------------------------------
   OPTIONAL API CONNECTION
--------------------------------------------------------- */

async function loadAPIData() {
  // Curated verified listings are bundled with SideQuest.
  // No remote API is called and no demo listings are substituted.
  allEvents = [...EVENTS].filter(event => event.url);
  allRestaurants = [...RESTAURANTS];
}


/* ---------------------------------------------------------
   NAVIGATION
--------------------------------------------------------- */

function initNavigation() {
  const toggle = $("#menu-toggle");
  const nav = $("#main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------
   CARD RENDERING
--------------------------------------------------------- */

/* ---------------------------------------------------------
   HIGH-QUALITY EVENT ARTWORK
   Ticketmaster: official provider artwork at its supplied quality.
   Quicket: original 3840 x 2160 SVG poster, clearly not represented
   as a provider photograph. The poster also replaces broken links.
   SVG stays crisp at 4K (and larger) without external image assets.
--------------------------------------------------------- */
function eventPosterSVG(item) {
  const palettes = {
    music: ["#171224", "#ad5367", "#ffcc8e"],
    arts: ["#12263c", "#5b6b98", "#fbd5a7"],
    markets: ["#173c36", "#6f9879", "#fbe3aa"],
    festivals: ["#34142f", "#ca6373", "#ffd787"],
    other: ["#25182b", "#8d6680", "#fad9ac"]
  };
  const [dark, medium, light] = palettes[item.category] || palettes.other;
  const clean = value => escapeHTML(String(value || ""));
  // Create 3 readable title lines, without clipping long titles.
  const words = String(item.title || "SIDEQUEST EVENT").split(/\s+/);
  const lines = [];
  for (const word of words) {
    const i = lines.length - 1;
    if (i >= 0 && (lines[i] + " " + word).length <= 25) {
      lines[i] += " " + word;
    } else {
      lines.push(word);
    }
  }
  const titleLines = lines.slice(0, 4);
  if (lines.length > 4) titleLines[3] += " …";
  const fontSize = titleLines.length > 3 ? 140 : titleLines.length > 2 ? 165 : 205;
  const top = 880 - Math.max(0, titleLines.length - 2) * 85;
  const tspans = titleLines.map((line, i) =>
    `<tspan x="220" dy="${i ? 1.13 : 0}em">${clean(line)}</tspan>`
  ).join("");
  const date = item.date ? formatDate(item.date) : "Details on official site";
  const city = item.city || item.location || "South Africa";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="3840" height="2160" viewBox="0 0 3840 2160" role="img" aria-label="Custom SideQuest graphic for ${clean(item.title)}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${dark}"/><stop offset="1" stop-color="${medium}"/></linearGradient>
      <radialGradient id="flare"><stop stop-color="${light}" stop-opacity=".85"/><stop offset="1" stop-color="${light}" stop-opacity="0"/></radialGradient>
      <pattern id="p" width="120" height="120" patternUnits="userSpaceOnUse"><path d="M120 0H0V120" fill="none" stroke="${light}" stroke-opacity=".09" stroke-width="2"/></pattern>
    </defs>
    <rect width="3840" height="2160" fill="url(#bg)"/>
    <rect width="3840" height="2160" fill="url(#p)"/>
    <circle cx="3100" cy="700" r="1250" fill="url(#flare)"/>
    <circle cx="3150" cy="900" r="650" fill="none" stroke="${light}" stroke-width="28" opacity=".42"/>
    <circle cx="3150" cy="900" r="850" fill="none" stroke="${light}" stroke-width="8" opacity=".28"/>
    <path d="M2650 180l800 1490m-1200-600l1400-230" stroke="${light}" stroke-width="35" opacity=".20"/>
    <text x="220" y="280" fill="${light}" font-family="Arial,sans-serif" font-size="76" font-weight="700" letter-spacing="18">SIDEQUEST. / EVENTS</text>
    <path d="M220 365h1690" stroke="${light}" stroke-width="8" opacity=".8"/>
    <text x="220" y="${top}" fill="#ffffff" font-family="Arial,sans-serif" font-size="${fontSize}" font-weight="800" letter-spacing="-6">${tspans}</text>
    <rect x="220" y="1740" width="3240" height="6" fill="${light}" opacity=".75"/>
    <text x="220" y="1900" fill="#ffffff" font-family="Arial,sans-serif" font-size="81" font-weight="700">${clean(date)}</text>
    <text x="220" y="2010" fill="${light}" font-family="Arial,sans-serif" font-size="72">${clean(city)}</text>
    <text x="3560" y="2060" text-anchor="end" fill="${light}" font-family="Arial,sans-serif" font-size="42">CUSTOM SIDEQUEST ARTWORK</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

/* High-resolution 3840 x 2160 branded food artwork (not a restaurant photograph). */
function restaurantPosterSVG(item) {
  const clean = value => escapeHTML(String(value || ""));
  const title = clean(item.title);
  const area = clean(item.area);
  const cuisine = clean(item.cuisine);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 2160" width="3840" height="2160">
    <defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#f6efe2"/><stop offset="1" stop-color="#d4af8c"/></linearGradient></defs>
    <rect width="3840" height="2160" fill="url(#bg)"/>
    <circle cx="3030" cy="680" r="900" fill="#8b4f43" opacity=".13"/>
    <circle cx="2960" cy="710" r="600" stroke="#6a222c" stroke-width="22" fill="none" opacity=".3"/>
    <path d="M2800 270c-360 490-310 1000 400 1320" stroke="#6a222c" stroke-width="40" fill="none" opacity=".23"/>
    <text x="230" y="290" fill="#63202a" font-size="92" font-weight="700" font-family="Arial,sans-serif">SIDEQUEST. / FOOD DISCOVERY</text>
    <rect x="230" y="390" width="1550" height="7" fill="#63202a"/>
    <foreignObject x="210" y="680" width="3130" height="680"><div xmlns="http://www.w3.org/1999/xhtml" style="font:800 205px/1.13 Arial,sans-serif;color:#41121b;overflow-wrap:break-word;">${title}</div></foreignObject>
    <text x="230" y="1790" fill="#63202a" font-size="85" font-family="Arial,sans-serif">${cuisine} · ${area}</text>
    <text x="230" y="1980" fill="#63202a" font-size="49" font-family="Arial,sans-serif">ORIGINAL SIDEQUEST ILLUSTRATION · SEE ACTUAL PHOTOS ON DINEPLAN</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function foodCardHTML(item) {
  const saved = getSaved().some(entry => entry.id === item.id);
  const fallback = restaurantPosterSVG(item);
  const officialPhoto = Boolean(item.image);
  return `
    <article class="result-card verified-event-card verified-food-card">
      <div class="event-image">
        <img src="${escapeHTML(item.image || fallback)}" data-fallback="${escapeHTML(fallback)}"
          alt="${escapeHTML(officialPhoto ? 'Restaurant image for ' + item.title : 'Original SideQuest illustration for ' + item.title)}"
          loading="lazy" decoding="async" width="3840" height="2160">
      </div>
      <div class="card-body">
        <div class="event-card-topline"><span>DINEPLAN / RESTAURANTS</span><span>${escapeHTML(item.area)}</span></div>
        <h3>${escapeHTML(item.title)}</h3>
        <p class="event-card-location">${escapeHTML(item.cuisine)} · ${escapeHTML(item.location)}</p>
        <p class="event-card-description">${escapeHTML(item.description)}</p>
        <p class="food-card-disclaimer">Menus, availability and prices are confirmed on Dineplan.</p>
        <div class="card-actions">
          <a class="button primary official-ticket-link" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="See ${escapeHTML(item.title)} on Dineplan">View on Dineplan ↗</a>
          <button type="button" data-save="${escapeHTML(item.id)}" aria-label="${saved ? 'Remove' : 'Save'} ${escapeHTML(item.title)}">${saved ? 'Remove saved' : 'Save plan ♡'}</button>
        </div>
      </div>
    </article>`;
}

function cardHTML(item) {
  const saved = getSaved().some(entry => entry.id === item.id);
  const eventUrl = /^https:\/\/(?:www\.)?(?:ticketmaster\.co\.za|quicket\.co\.za)\//.test(item.url || "") ? item.url : "";
  const priceLabel = item.price === "" || item.price == null
    ? "Check official ticket price"
    : `From ${formatPrice(item.price)}`;
  const poster = eventPosterSVG(item);
  const officialArt = typeof item.image === "string" && /^https:\/\//i.test(item.image);
  const source = officialArt ? item.image : poster;
  const alt = officialArt
    ? `Event artwork for ${item.title}`
    : `Original SideQuest poster for ${item.title}`;
  return `
    <article class="result-card verified-event-card">
      <div class="event-image">
        <img src="${escapeHTML(source)}" data-fallback="${escapeHTML(poster)}"
          alt="${escapeHTML(alt)}" loading="lazy" decoding="async" width="3840" height="2160">
      </div>
      <div class="card-body">
        <div class="event-card-topline"><span>${escapeHTML(item.source)}</span><span>${escapeHTML(item.category)}</span></div>
        <h3>${escapeHTML(item.title)}</h3>
        <p class="event-card-location">${escapeHTML(item.location)}</p>
        <p class="event-card-date">${escapeHTML(formatDate(item.date))}${item.time ? ` · ${escapeHTML(item.time)}` : ""}</p>
        <p class="card-price">${escapeHTML(priceLabel)}</p>
        <p class="event-card-description">${escapeHTML(item.description)}</p>
        <div class="card-actions">
          ${eventUrl ? `<a class="button primary official-ticket-link" href="${escapeHTML(eventUrl)}" target="_blank" rel="noopener noreferrer">Official tickets ↗</a>` : ""}
          <button type="button" data-save="${escapeHTML(item.id)}">${saved ? "Remove saved" : "Save plan ♡"}</button>
        </div>
      </div>
    </article>
  `;
}

// Even if Ticketmaster's image host blocks hotlinking, every event still
// displays its own 4K vector poster; no broken-image icons remain.
document.addEventListener("error", event => {
  const img = event.target;
  if (!(img instanceof HTMLImageElement)) return;
  if (!img.matches(".verified-event-card .event-image img, .verified-food-card .event-image img")) return;
  const fallback = img.dataset.fallback;
  if (!fallback || img.dataset.didFallback === "true") return;
  img.dataset.didFallback = "true";
  img.src = fallback;
  img.alt = img.alt.replace(/^Event artwork for /, "Original SideQuest poster for ");
}, true);

function renderCards(container, items, emptyTitle, emptyText) {
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>${escapeHTML(emptyTitle)}</h2>
        <p>${escapeHTML(emptyText)}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => item.type === "restaurant" ? foodCardHTML(item) : cardHTML(item)).join("");
}

/* ---------------------------------------------------------
   SAVING AND REMOVING PLANS
--------------------------------------------------------- */

function toggleSaved(id) {
  const item = getItemById(id);

  if (!item) return;

  const saved = getSaved();
  const exists = saved.some(entry => entry.id === id);

  if (exists) {
    setSaved(saved.filter(entry => entry.id !== id));
    notify("Removed from your saved plans.");
  } else {
    setSaved([...saved, item]);
    notify("Added to your saved plans.");
  }

  refreshCurrentPage();
}

function refreshCurrentPage() {
  const page = document.body.dataset.page;

  if (page === "home") renderHome();
  if (page === "events") renderEvents();
  if (page === "food") renderFood();
  if (page === "saved") renderSaved();
  if (page === "surprise") renderSurprise();
}

/* ---------------------------------------------------------
   DEMO TICKET PURCHASE SYSTEM
--------------------------------------------------------- */

function ensureTicketModal() {
  if ($("#ticket-modal")) return;

  const modal = document.createElement("div");
  modal.id = "ticket-modal";
  modal.className = "ticket-modal";

  modal.innerHTML = `
    <section
      class="ticket-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ticket-modal-title"
    >
      <button
        type="button"
        class="ticket-close"
        id="ticket-close"
        aria-label="Close ticket window"
      >×</button>

      <div id="ticket-modal-content"></div>
    </section>
  `;

  document.body.appendChild(modal);

  modal.addEventListener("click", event => {
    if (event.target === modal) closeTicketModal();
  });

  $("#ticket-close", modal).addEventListener("click", closeTicketModal);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeTicketModal();
  });
}

function openTicketModal(eventId) {
  const eventItem = allEvents.find(item => item.id === eventId);

  if (!eventItem) {
    notify("We couldn't find that event.");
    return;
  }

  ensureTicketModal();

  const modal = $("#ticket-modal");
  const content = $("#ticket-modal-content");

  content.innerHTML = `
    <div class="ticket-kicker">SIDEQUEST TICKET OFFICE / DEMO CHECKOUT</div>

    <h2 id="ticket-modal-title">Make it a date.</h2>

    <p class="ticket-description">
      You're one step away from making a plan. Choose your ticket
      quantity and enter your details below.
    </p>

    <div class="ticket-event-summary">
      <div>
        <span class="ticket-detail-label">Event</span>
        <span class="ticket-detail-value">${escapeHTML(eventItem.title)}</span>
      </div>

      <div>
        <span class="ticket-detail-label">Date</span>
        <span class="ticket-detail-value">${escapeHTML(formatDate(eventItem.date))}</span>
      </div>

      <div>
        <span class="ticket-detail-label">Location</span>
        <span class="ticket-detail-value">${escapeHTML(eventItem.location)}</span>
      </div>

      <div>
        <span class="ticket-detail-label">Price per ticket</span>
        <span class="ticket-detail-value">${escapeHTML(formatPrice(eventItem.price))}</span>
      </div>
    </div>

    <form class="ticket-form" id="ticket-form">

      <label>
        Your name
        <input
          type="text"
          id="ticket-name"
          name="name"
          placeholder="Enter your full name"
          maxlength="80"
          required
        >
      </label>

      <label>
        Email address
        <input
          type="email"
          id="ticket-email"
          name="email"
          placeholder="you@example.com"
          maxlength="120"
          required
        >
      </label>

      <label>
        Number of tickets
        <select id="ticket-quantity" name="quantity">
          <option value="1">1 ticket</option>
          <option value="2">2 tickets</option>
          <option value="3">3 tickets</option>
          <option value="4">4 tickets</option>
          <option value="5">5 tickets</option>
          <option value="6">6 tickets</option>
        </select>
      </label>

      <div class="ticket-total">
        <span>Total for your tickets</span>
        <strong id="ticket-total">R${Number(eventItem.price) || 0}</strong>
      </div>

      <p class="ticket-demo-note">
        Demo checkout only. No payment will be taken and these tickets
        are not valid for real-world entry.
      </p>

      <button class="button primary" type="submit">
        Confirm booking ↗
      </button>

    </form>
  `;

  const quantityInput = $("#ticket-quantity");
  const totalOutput = $("#ticket-total");

  function updateTotal() {
    const quantity = Number(quantityInput.value);
    const total = (Number(eventItem.price) || 0) * quantity;

    totalOutput.textContent = total === 0
      ? "FREE"
      : `R${total.toLocaleString("en-ZA")}`;
  }

  quantityInput.addEventListener("change", updateTotal);

  $("#ticket-form").addEventListener("submit", event => {
    event.preventDefault();
    completeTicketPurchase(eventItem);
  });

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  $("#ticket-name").focus();
}

function closeTicketModal() {
  const modal = $("#ticket-modal");

  if (!modal) return;

  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function createTicketReference() {
  const randomPart = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `SQ-${Date.now().toString().slice(-6)}-${randomPart}`;
}

function completeTicketPurchase(eventItem) {
  const name = $("#ticket-name").value.trim();
  const email = $("#ticket-email").value.trim();
  const quantity = Number($("#ticket-quantity").value);

  if (!name || !email || quantity < 1 || quantity > 6) {
    notify("Please complete your ticket details.");
    return;
  }

  const reference = createTicketReference();
  const unitPrice = Number(eventItem.price) || 0;

  const ticket = {
    reference,
    eventId: eventItem.id,
    eventTitle: eventItem.title,
    eventDate: eventItem.date,
    location: eventItem.location,
    name,
    email,
    quantity,
    unitPrice,
    total: unitPrice * quantity,
    purchasedAt: new Date().toISOString()
  };

  const tickets = getTickets();
  tickets.unshift(ticket);
  setTickets(tickets);

  showTicketConfirmation(ticket);
}

function barcodeHTML(reference) {
  const seed = reference.replace(/[^A-Z0-9]/gi, "");
  let bars = "";

  for (let index = 0; index < 85; index++) {
    const character = seed.charCodeAt(index % seed.length);
    const width = ((character + index * 7) % 3) + 1;

    bars += `<span style="width:${width}px"></span>`;

    if (index % 4 === 0) {
      bars += `<span style="width:1px"></span>`;
    }
  }

  return bars;
}

function showTicketConfirmation(ticket) {
  const content = $("#ticket-modal-content");

  content.innerHTML = `
    <div class="ticket-kicker">SIDEQUEST / BOOKING CONFIRMED</div>

    <h2 id="ticket-modal-title">You're on the list.</h2>

    <p class="ticket-description">
     
    </p>

    <article class="generated-ticket">

      <div class="generated-ticket-top">
        <span class="generated-ticket-brand">
          <img
            class="ticket-logo"
            src="${escapeHTML(new URL(LOGO_PATH, window.location.href).href)}"
            alt=""
            onerror="this.remove()"
          >SideQuest.
        </span>
        <span class="generated-ticket-status">DEMO TICKET / CONFIRMED</span>
      </div>

      <h3>${escapeHTML(ticket.eventTitle)}</h3>

      <div class="generated-ticket-meta">

        <div>
          <span class="ticket-detail-label">Ticket holder</span>
          <span class="ticket-detail-value">${escapeHTML(ticket.name)}</span>
        </div>

        <div>
          <span class="ticket-detail-label">Event date</span>
          <span class="ticket-detail-value">${escapeHTML(formatDate(ticket.eventDate))}</span>
        </div>

        <div>
          <span class="ticket-detail-label">Location</span>
          <span class="ticket-detail-value">${escapeHTML(ticket.location)}</span>
        </div>

        <div>
          <span class="ticket-detail-label">Quantity</span>
          <span class="ticket-detail-value">${ticket.quantity} ticket(s)</span>
        </div>

        <div>
          <span class="ticket-detail-label">Total</span>
          <span class="ticket-detail-value">${ticket.total === 0 ? "FREE" : `R${ticket.total}`}</span>
        </div>

        <div>
          <span class="ticket-detail-label">Booking reference</span>
          <span class="ticket-detail-value">${escapeHTML(ticket.reference)}</span>
        </div>

      </div>

      <div class="ticket-barcode" aria-label="barcode">
        ${barcodeHTML(ticket.reference)}
      </div>

      <div class="ticket-number">${escapeHTML(ticket.reference)}</div>

    </article>

    <p class="ticket-confirmation">
      
    </p>

    <div class="ticket-success-actions">
      <button class="button primary" type="button" id="ticket-print">
        Print ticket ↗
      </button>

      <button class="button" type="button" id="ticket-done">
        Done
      </button>
    </div>
  `;

  $("#ticket-print").addEventListener("click", printTicket);
  $("#ticket-done").addEventListener("click", closeTicketModal);

  notify("Your ticket has been saved.");
}

function printTicket() {
  const ticket = $(".generated-ticket");

  if (!ticket) return;

  const printWindow = window.open("", "_blank", "width=700,height=800");

  if (!printWindow) {
    notify("Please allow pop-ups to print your ticket.");
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>SideQuest Demo Ticket</title>
      <style>
        body {
          padding: 35px;
          background: #fff;
          font-family: Arial, sans-serif;
        }
        .generated-ticket {
          max-width: 520px;
          margin: 20px auto;
          padding: 25px;
          border: 2px solid #c09137;
          background: #fff6b9;
          color: #350006;
        }
        .generated-ticket-top {
          padding-bottom: 16px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed #350006;
        }
        .generated-ticket-brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 23px;
          font-weight: 800;
        }
        .ticket-logo {
          display: block;
          width: auto;
          height: 52px;
          max-width: 64px;
          object-fit: contain;
        }
        .generated-ticket-status,
        .ticket-detail-label,
        .ticket-number {
          font-size: 10px;
        }
        .generated-ticket h3 {
          margin: 20px 0;
          font-size: 27px;
        }
        .generated-ticket-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .ticket-detail-label,
        .ticket-detail-value {
          display: block;
          margin-bottom: 5px;
        }
        .ticket-barcode {
          height: 65px;
          margin-top: 20px;
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 2px;
        }
        .ticket-barcode span {
          background: #350006;
        }
        .ticket-number {
          text-align: center;
          margin-top: 8px;
        }
      </style>
    </head>
    <body>
      ${ticket.outerHTML}
      <script>
        window.onload = () => {
          window.print();
        };
      <\/script>
    </body>
    </html>
  `);

  printWindow.document.close();
}

/* ---------------------------------------------------------
   GLOBAL CARD AND TICKET BUTTON EVENTS
--------------------------------------------------------- */

document.addEventListener("click", event => {
  const target = event.target;

  if (!(target instanceof Element)) return;

  const ticketButton = target.closest("[data-buy-ticket]");

  if (ticketButton) {
    openTicketModal(ticketButton.dataset.buyTicket);
    return;
  }

  const saveButton = target.closest("[data-save]");

  if (saveButton) {
    toggleSaved(saveButton.dataset.save);
    return;
  }

  const openButton = target.closest("[data-open]");

  if (openButton) {
    const item = getItemById(openButton.dataset.open);

    if (item?.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  }
});

/* ---------------------------------------------------------
   HOME PAGE
--------------------------------------------------------- */

function renderHome() {
  const root = $("#app-content");

  if (!root) return;

  root.innerHTML = `
    <div class="page-shell">

      <section class="home-hero sq-home-tv-hero">

        <!-- SideQuest's retro TV uses the real ad as its screen. -->
        <div class="sq-tv-station" aria-label="SideQuest television and remote">
          <div class="sq-tv-set" id="sq-tv-set">
            <div class="sq-tv-aerials" aria-hidden="true"><i></i><i></i></div>
            <div class="sq-tv-face">
              <div class="sq-tv-bezel">
                <div class="sq-tv-picture">
                  <video
                    class="home-video"
                    id="home-video"
                    autoplay muted loop playsinline webkit-playsinline preload="auto"
                    aria-label="SideQuest promotional video"
                  >
                    ${videoSourcesHTML(HERO_VIDEO_SOURCES)}
                    Your browser does not support HTML video.
                  </video>
                  <div class="video-fallback" id="video-fallback" role="button" tabindex="0"
                       aria-label="Play the SideQuest video">
                    <span>PRESS PLAY ON THE REMOTE</span>
                  </div>
                  <div class="sq-tv-glass" aria-hidden="true"></div>
                  <div class="sq-tv-flicker" id="sq-tv-flicker" aria-hidden="true"></div>
                  <span class="sq-tv-channel" id="sq-ad-channel-no">CH 01 / 03</span>
                </div>
              </div>
              <aside class="sq-tv-dials" aria-label="TV detail">
                <button type="button" class="sq-tv-dial" id="sq-ad-tv" aria-label="Change video channel" title="Change channel">
                  <span aria-hidden="true"></span>
                </button>
                <span class="sq-tv-dial-label">CH</span>
                <div class="sq-tv-speaker" aria-hidden="true"></div>
                <span class="sq-tv-light" aria-hidden="true"></span>
              </aside>
            </div>
            <div class="sq-tv-brand"><span>SIDEQUEST <b>TV.</b></span><span>MADE FOR THE PLOT.</span></div>
          </div>

          <div class="sq-tv-remote" id="sq-tv-remote" aria-label="Video remote control">
            <div class="sq-remote-intro"><strong>THE REMOTE.</strong><span id="sq-ad-channel-title">THE LITTLE IDEA</span></div>
            <div class="sq-remote-keys">
              <button type="button" id="sq-ad-rewind" title="Rewind 10 seconds" aria-label="Rewind video 10 seconds">↶ <small>10s</small></button>
              <button type="button" id="sq-ad-pause" class="sq-remote-primary" aria-label="Pause video">Ⅱ <small>PAUSE</small></button>
              <button type="button" id="sq-ad-replay" title="Restart video" aria-label="Restart video">↺ <small>START</small></button>
              <button type="button" id="sq-ad-next" title="Next chapter" aria-label="Next video chapter">↷ <small>CH</small></button>
            </div>
            <div class="sq-remote-volume">
              <button type="button" id="sq-ad-mute" aria-label="Unmute the ad video" aria-pressed="false">SOUND OFF</button>
              <label for="sq-ad-volume">VOL</label>
              <input type="range" id="sq-ad-volume" min="0" max="100" step="5" value="60" aria-label="Ad video volume">
            </div>
            <div class="sq-remote-progress"><span id="sq-ad-progress-fill"></span></div>
          </div>
        </div>

        <div class="home-copy">

          <div class="hero-kicker"></div>

          <h1>
            <span>What are</span>
            <span>we up to</span>
            <span>today?</span>
          </h1>

          <p>
            Find verified South African events from Ticketmaster and Quicket.
            Book directly with the official ticket provider.
          </p>

          <form class="home-search" id="home-search">
            <input
              type="search"
              id="home-search-input"
              placeholder="What are you in the mood for?"
              aria-label="Search SideQuest"
            >
            <button type="submit" aria-label="Search">⌕</button>
          </form>

          <div class="hero-stats">
            <div><strong>${allEvents.length}</strong><span>verified events</span></div>
            <div><strong>${new Set(allEvents.map(e => e.city)).size}</strong><span>cities</span></div>
            <div><strong>2</strong><span>ticket providers</span></div>
          </div>

        </div>

        <div class="video-caption">
          <span>SOUTH AFRICAN EVENT ARCHIVE </span>
          <div class="music-controls" data-music-control>
            <button
              class="video-sound"
              id="video-sound"
              type="button"
              data-music-toggle
              aria-label="Toggle background music"
            >SOUND OFF</button>

            <label class="music-volume" title="Volume">
              <span>VOL</span>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value="60"
                data-music-volume
                aria-label="Music volume"
              >
            </label>
          </div>
        </div>

      </section>

      <div class="home-bottom">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section class="home-categories">

        <div class="eyebrow">
          <span></span>
          <span></span>
        </div>

        <h2>See popular categories</h2>

        <div class="category-list">

          <a class="category-link" href="./events.html?category=music">
            <small></small>
            <strong>Music &amp; Gigs ↗</strong>
          </a>

          <a class="category-link" href="./events.html?category=markets">
            <small></small>
            <strong>Markets ↗</strong>
          </a>

          <a class="category-link" href="./events.html?category=arts">
            <small></small>
            <strong>Art &amp; Culture ↗</strong>
          </a>

          <a class="category-link" href="./events.html?category=festivals">
            <small></small>
            <strong>Festivals ↗</strong>
          </a>

        </div>

      </section>

      <section class="home-featured">

        <div class="eyebrow">
          <span></span>
          <a href="./events.html">ALL EVENTS ↗</a>
        </div>

        <h2>Yeah, tickets and all...</h2>

        <div class="result-grid" id="home-events"></div>

      </section>



    </div>
  `;

  renderCards(
    $("#home-events"),
    allEvents.slice(0, 3),
    "No events yet",
    "Check back soon."
  );

  renderCards(
    $("#home-food"),
    allRestaurants.slice(0, 3),
    "No restaurants yet",
    "Check back soon."
  );

  $("#home-search")?.addEventListener("submit", event => {
    event.preventDefault();

    const query = $("#home-search-input").value.trim();

    window.location.href =
      `./events.html?q=${encodeURIComponent(query)}`;
  });

  initHeroVideo();
  initSideQuestAdControls();
  updateMusicUI();
}

/* ---------------------------------------------------------
   HERO VIDEO
--------------------------------------------------------- */

function initHeroVideo() {
  const video = $("#home-video");
  const fallback = $("#video-fallback");

  if (!video || !fallback) return;

  video.muted = true;
  video.defaultMuted = true;
  // Keep the chosen volume ready for the remote; mute controls initial autoplay.
  video.volume = 0.6;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;

  fallback.classList.remove("hidden");

  video.addEventListener("playing", () => {
    fallback.classList.add("hidden");
  });

  const sources = video.querySelectorAll("source");

  sources[sources.length - 1]?.addEventListener("error", () => {
    fallback.classList.remove("hidden");

    console.error(
      "SIDEQUEST VIDEO: none of the video files could be loaded. " +
      "Check that the file is in the same folder as index.html and its name matches."
    );
  });

  const playVideo = () => {
    video.play().catch(error => {
      console.warn("Could not autoplay video:", error);
    });
  };

  fallback.addEventListener("click", playVideo);

  fallback.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      playVideo();
    }
  });

  video.load();

  if (video.readyState >= 2) {
    playVideo();
  } else {
    video.addEventListener("canplay", playVideo, { once: true });
  }
}


/* ---------------------------------------------------------
   INTERACTIVE HOME AD — the TV behaves like a channel switcher.
   It seeks within the visitor's actual ad footage; no demo content.
   GSAP supplies a short physical TV-switch movement and on-screen
   channel transition. Controls work without GSAP too.
--------------------------------------------------------- */
function initSideQuestAdControls() {
  const video = document.querySelector('body[data-page="home"] #home-video');
  const tv = document.getElementById('sq-tv-set');
  const knob = document.getElementById('sq-ad-tv');
  const next = document.getElementById('sq-ad-next');
  const title = document.getElementById('sq-ad-channel-title');
  const number = document.getElementById('sq-ad-channel-no');
  const fill = document.getElementById('sq-ad-progress-fill');
  const pause = document.getElementById('sq-ad-pause');
  const rewind = document.getElementById('sq-ad-rewind');
  const replay = document.getElementById('sq-ad-replay');
  const mute = document.getElementById('sq-ad-mute');
  const volume = document.getElementById('sq-ad-volume');
  const flicker = document.getElementById('sq-tv-flicker');
  if (![video,tv,knob,next,title,number,fill,pause,rewind,replay,mute,volume,flicker].every(Boolean)) return;

  const labels = ['THE LITTLE IDEA', 'THE POSSIBILITIES', 'YOUR NEXT SIDEQUEST'];
  const reduced = sidequestReducedMotion();
  let chapter = 0;
  let preferredVolume = Number(volume.value) / 100;

  function chapterTime(index) {
    return Number.isFinite(video.duration) && video.duration > 0
      ? Math.max(0, Math.min(video.duration - 0.2, video.duration * index / 3)) : 0;
  }
  function updateRemote() {
    if (Number.isFinite(video.duration) && video.duration > 0) {
      chapter = Math.min(2, Math.floor(video.currentTime / (video.duration / 3)));
      fill.style.width = `${Math.max(0, Math.min(100, video.currentTime / video.duration * 100))}%`;
    }
    number.textContent = `CH ${String(chapter + 1).padStart(2,'0')} / 03`;
    title.textContent = labels[chapter];
    pause.innerHTML = video.paused ? '▶ <small>PLAY</small>' : 'Ⅱ <small>PAUSE</small>';
    pause.setAttribute('aria-label', video.paused ? 'Play ad video' : 'Pause ad video');
    mute.textContent = (video.muted || video.volume === 0) ? 'SOUND OFF' : 'SOUND ON';
    mute.setAttribute('aria-label', (video.muted || video.volume === 0) ? 'Unmute ad video' : 'Mute ad video');
    mute.setAttribute('aria-pressed', String(!video.muted && video.volume > 0));
  }
  function switchEffect() {
    if (reduced || !window.gsap) return;
    const gsap = window.gsap;
    gsap.killTweensOf([flicker,knob,number,title]);
    gsap.timeline()
      .to(knob, {rotation:95, duration:.22, ease:'power2.out'}, 0)
      .fromTo(flicker, {autoAlpha:0}, {autoAlpha:.9, duration:.08, yoyo:true, repeat:3}, 0)
      .fromTo([number,title], {y:8, opacity:.2}, {y:0, opacity:1, stagger:.08, duration:.35}, .23)
      .to(knob, {rotation:0, duration:.45, ease:'back.out(2)'}, .25);
  }
  function play() {
    const attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(error => {
        console.warn('SideQuest video could not play:', error);
        updateRemote();
      });
    }
  }
  function seekTo(seconds) {
    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.currentTime = Math.max(0, Math.min(video.duration - 0.05, seconds));
    }
  }
  function nextChapter() {
    chapter = (chapter + 1) % 3;
    seekTo(chapterTime(chapter));
    play(); updateRemote(); switchEffect();
  }
  knob.addEventListener('click', nextChapter);
  next.addEventListener('click', nextChapter);
  rewind.addEventListener('click', () => {
    seekTo(video.currentTime - 10);
    updateRemote(); switchEffect();
  });
  pause.addEventListener('click', () => {
    if (video.paused) play(); else video.pause();
    updateRemote();
  });
  replay.addEventListener('click', () => {
    seekTo(0); chapter=0; play(); updateRemote(); switchEffect();
  });
  // Ad audio controls are independent of the existing site's background music.
  mute.addEventListener('click', () => {
    video.muted=!video.muted;
    if (!video.muted) {
      video.volume = preferredVolume > 0 ? preferredVolume : .6;
      if (preferredVolume === 0) {
        preferredVolume = .6;
        volume.value = '60';
      }
    }
    updateRemote();
  });
  volume.addEventListener('input', () => {
    preferredVolume=Number(volume.value)/100;
    video.volume=preferredVolume;
    video.muted=preferredVolume===0;
    updateRemote();
  });
  video.addEventListener('loadedmetadata', updateRemote);
  video.addEventListener('timeupdate', updateRemote);
  video.addEventListener('play', updateRemote);
  video.addEventListener('pause', updateRemote);
  video.addEventListener('volumechange', updateRemote);
  updateRemote();

  if (!reduced) initialiseGSAP().then(() => {
    if (!window.gsap || !tv.isConnected) return;
    const gsap=window.gsap;
    // This is a short physical TV switch-on, not a looping distraction.
    gsap.timeline()
      .from(tv, {y:55, rotation:-4, scale:.90, opacity:0, duration:1.05, ease:'back.out(1.4)'})
      .from('.sq-tv-remote', {y:26, opacity:0, duration:.55, ease:'power2.out'}, '-=.45')
      .fromTo(flicker, {autoAlpha:.85}, {autoAlpha:0, duration:.18, repeat:2, yoyo:true}, '-=.5');
  });
}

/* ---------------------------------------------------------
   EVENTS PAGE
--------------------------------------------------------- */

function renderEvents() {
  const root = $("#app-content");
  if (!root) return;

  // Build the dropdowns from the actual listings, so no city is omitted.
  const cities = [...new Set(allEvents.map(item => item.city).filter(Boolean))]
    .sort((a,b) => a.localeCompare(b));
  const categories = [...new Set(allEvents.map(item => item.category).filter(Boolean))]
    .sort((a,b) => a.localeCompare(b));
  const categoryNames = {music:"Music",arts:"Arts & Culture",markets:"Markets",festivals:"Festivals",other:"Other"};

  root.innerHTML = `
    <div class="page-shell">
      <div class="eyebrow"><span></span><span> </span></div>
      <h1 class="page-title">Your next greatest SideQuest awaits...</h1>
      <p class="page-intro">Browse ${allEvents.length} </p>
      <div class="toolbar">
        <input id="event-search" type="search" placeholder="Search events, performers or venues..." aria-label="Search events">
        <select id="event-source" aria-label="Filter by ticket provider">
          <option value="all">Both ticket providers</option>
          <option value="Ticketmaster">Ticketmaster</option>
          <option value="Quicket">Quicket</option>
        </select>
        <select id="event-city" aria-label="Filter by city">
          <option value="all">All South Africa</option>
          ${cities.map(city => `<option value="${escapeHTML(city)}">${escapeHTML(city)}</option>`).join("")}
        </select>
        <select id="event-category" aria-label="Filter by category">
          <option value="all">All categories</option>
          ${categories.map(cat => `<option value="${escapeHTML(cat)}">${escapeHTML(categoryNames[cat] || cat)}</option>`).join("")}
        </select>
        <select id="event-date" aria-label="Filter by date">
          <option value="all">All upcoming dates</option>
          <option value="today">Today</option>
          <option value="weekend">This weekend</option>
          <option value="month">This month</option>
          <option value="next30">Next 30 days</option>
          <option value="2026">Rest of 2026</option>
          <option value="2027">2027</option>
        </select>
        <select id="event-budget" aria-label="Filter by budget">
          <option value="all">Any budget</option>
          <option value="free">Free (confirmed)</option>
          <option value="100">R100 or less (confirmed)</option>
          <option value="250">R250 or less (confirmed)</option>
          <option value="500">R500 or less (confirmed)</option>
          <option value="unknown">Price not published</option>
        </select>
        <button type="button" class="button" id="event-reset">Clear filters</button>
      </div>
      <p class="result-count" id="event-count" aria-live="polite"></p>
      <div class="result-grid" id="event-results"></div>
    </div>`;

  const params = new URLSearchParams(window.location.search);
  $("#event-search").value = params.get("q") || "";
  const requestedCategory = params.get("category") || "all";
  if ([...$("#event-category").options].some(opt => opt.value === requestedCategory)) {
    $("#event-category").value = requestedCategory;
  }
  ["event-search","event-source","event-city","event-category","event-date","event-budget"].forEach(id => {
    const el = $("#" + id);
    el.addEventListener(id === "event-search" ? "input" : "change", updateEventResults);
  });
  $("#event-reset").addEventListener("click", () => {
    $("#event-search").value = "";
    ["event-source","event-city","event-category","event-date","event-budget"].forEach(id => $("#"+id).value="all");
    updateEventResults();
  });
  updateEventResults();
}

// Avoid UTC shifting South African event dates by parsing the calendar day locally.
function eventLocalDay(value) {
  if (!value) return null;
  const day = new Date(`${String(value).slice(0,10)}T12:00:00`);
  return Number.isNaN(day.valueOf()) ? null : day;
}

function isInDateRange(dateValue, filter) {
  const date = eventLocalDay(dateValue);
  if (!date) return false;
  if (filter === "all") return true;
  const today = new Date(); today.setHours(12,0,0,0);
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate()+1);
  if (filter === "today") return date.toDateString() === today.toDateString();
  if (filter === "month") return date.getFullYear()===today.getFullYear() && date.getMonth()===today.getMonth() && date>=today;
  if (filter === "2026") return date.getFullYear()===2026 && date>=today;
  if (filter === "2027") return date.getFullYear()===2027;
  if (filter === "next30") {
    const end = new Date(today); end.setDate(today.getDate()+30);
    return date>=today && date<=end;
  }
  if (filter === "weekend") {
    const start = new Date(today);
    const daysToSaturday = (6 - today.getDay() + 7) % 7;
    start.setDate(start.getDate()+daysToSaturday);
    const end = new Date(start); end.setDate(start.getDate()+1);
    return date>=start && date<=end;
  }
  return true;
}

function updateEventResults() {
  const controls = ["event-search","event-source","event-city","event-category","event-date","event-budget"];
  if (controls.some(id => !$("#"+id))) return;
  const query = $("#event-search").value.trim().toLocaleLowerCase();
  const source = $("#event-source").value;
  const city = $("#event-city").value;
  const category = $("#event-category").value;
  const date = $("#event-date").value;
  const budget = $("#event-budget").value;
  const results = allEvents.filter(item => {
    const searchable = [item.title,item.description,item.location,item.city,item.source,item.category]
      .join(" ").toLocaleLowerCase();
    const priceKnown = item.price !== "" && item.price !== null && item.price !== undefined && Number.isFinite(Number(item.price));
    const matchesBudget = budget === "all" ? true
      : budget === "unknown" ? !priceKnown
      : budget === "free" ? priceKnown && Number(item.price) === 0
      : priceKnown && Number(item.price) <= Number(budget);
    return (!query || searchable.includes(query))
      && (source === "all" || item.source === source)
      && (city === "all" || item.city === city)
      && (category === "all" || item.category === category)
      && isInDateRange(item.date,date)
      && matchesBudget;
  });
  $("#event-count").textContent = `${results.length} of ${allEvents.length} verified, separately bookable listings · Prices/availability may change`;
  renderCards($("#event-results"), results, "No events match those filters.", "Try a different city, date, provider or price—or clear the filters.");
  window.dispatchEvent(new CustomEvent("sidequest:cards-updated"));
}

/* ---------------------------------------------------------
   FOOD PAGE
--------------------------------------------------------- */

function renderFood() {
  const root = $("#app-content");
  if (!root) return;

  const areas = [...new Set(allRestaurants.map(item => item.area))].sort();
  const cuisines = [...new Set(allRestaurants.map(item => item.cuisine))].sort();
  root.innerHTML = `
    <div class="page-shell">
      <div class="eyebrow"><span></span><span></span></div>
      <h1 class="page-title">Find your next fav place for a chat with your homies</h1>
      <p class="page-intro">Discover ${allRestaurants.length} real Johannesburg restaurants, cafés and dining spots with official Dineplan pages. Choose your spot, save it for later, then check real availability and book directly on Dineplan.</p>
      <div class="toolbar" role="search" aria-label="Filter restaurants">
        <input id="food-search" type="search" placeholder="Search restaurants or neighbourhoods..." aria-label="Search restaurants">
        <select id="food-area" aria-label="Filter by neighbourhood">
          <option value="all">All neighbourhoods</option>
          ${areas.map(a => `<option value="${escapeHTML(a)}">${escapeHTML(a)}</option>`).join("")}
        </select>
        <select id="food-cuisine" aria-label="Filter by cuisine">
          <option value="all">All cuisines</option>
          ${cuisines.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join("")}
        </select>
        <select id="food-category" aria-label="Filter by dining style">
          <option value="all">All dining styles</option>
          <option value="restaurant">Restaurants</option>
          <option value="cafe">Cafés</option>
          <option value="nightlife">Bars &amp; lounges</option>
        </select>
        <select id="food-sort" aria-label="Sort restaurants">
          <option value="name">Name A–Z</option>
          <option value="area">Neighbourhood A–Z</option>
        </select>
        <button type="button" class="button" id="food-reset">Clear filters</button>
      </div>
      <p class="result-count" id="food-count" aria-live="polite"></p>
      <div class="result-grid" id="food-results"></div>
      <p class="data-source-note"></p>
    </div>`;
  ["food-search", "food-area", "food-cuisine", "food-category", "food-sort"].forEach(id => {
    $("#" + id).addEventListener(id === "food-search" ? "input" : "change", updateFoodResults);
  });
  $("#food-reset").addEventListener("click", () => {
    $("#food-search").value = "";
    ["food-area", "food-cuisine", "food-category"].forEach(id => $("#"+id).value = "all");
    $("#food-sort").value = "name";
    updateFoodResults();
  });
  updateFoodResults();
}

function updateFoodResults() {
  const search = $("#food-search");
  if (!search) return;
  const query = search.value.trim().toLocaleLowerCase();
  const area = $("#food-area").value;
  const cuisine = $("#food-cuisine").value;
  const category = $("#food-category").value;
  const sortBy = $("#food-sort").value;
  const filtered = allRestaurants.filter(item => {
    const haystack = [item.title,item.description,item.location,item.area,item.cuisine,item.category].join(" ").toLocaleLowerCase();
    return (!query || haystack.includes(query))
      && (area === "all" || area === item.area)
      && (cuisine === "all" || cuisine === item.cuisine)
      && (category === "all" || category === item.category);
  }).sort((a,b) => sortBy === "area" ? a.area.localeCompare(b.area) || a.title.localeCompare(b.title) : a.title.localeCompare(b.title));
  $("#food-count").textContent = `${filtered.length} of ${allRestaurants.length} real Dineplan-listed restaurants`;
  renderCards($("#food-results"), filtered, "No restaurants match those filters.", "Try a different area or cuisine, or clear the filters.");
  window.dispatchEvent(new CustomEvent("sidequest:cards-updated"));
}

/* ---------------------------------------------------------
   SAVED PLANS PAGE
--------------------------------------------------------- */

/* SAVED PLANS — a small, interactive planning desk.
   The content and actions still work when GSAP isn't available. */
let savedMotionRun = 0;
let savedShuffleTimeline = null;

function savedCounts(items) {
  return {
    all: items.length,
    event: items.filter(item => item.type === "event").length,
    restaurant: items.filter(item => item.type === "restaurant").length
  };
}

function renderSaved() {
  const root = $("#app-content");
  if (!root) return;
  const counts = savedCounts(getSaved());
  root.innerHTML = `
    <div class="page-shell saved-page">
      <div class="eyebrow"><span></span><span></span></div>
      <section class="saved-hero" aria-labelledby="saved-heading">
        <div>
          <p class="section-label"></p>
          <h1 class="page-title" id="saved-heading"><br><em></em></h1>
          <p class="page-intro"> Ah, we see you have some saved plans. They sound like the start of the most epic coming-of-age movie yet! Don't leave the next stry for your future kids hanging!! See your saved plans through, my boy!!</p>
        </div>
        <button class="saved-tv-trigger" id="saved-pick" type="button" ${counts.all ? '' : 'disabled'} aria-label="Shuffle my saved plans using the SideQuest TV" title="Click the TV to choose a saved plan">
          <img src="./website_logo.png" alt="" aria-hidden="true">
          <span>CLICK THE TV TO PICK A PLAN ↗</span>
        </button>
      </section>

      <section class="saved-overview" aria-label="Your collection at a glance">
        <div class="saved-stat" data-stat="all"><span>ALL MY PLANS</span><strong>${counts.all}</strong><small>The whole collection</small></div>
        <div class="saved-stat" data-stat="event"><span>EVENTS</span><strong>${counts.event}</strong><small>Things worth showing up for</small></div>
        <div class="saved-stat" data-stat="restaurant"><span>FOOD SPOTS</span><strong>${counts.restaurant}</strong><small>Tables worth booking</small></div>
      </section>

      <section class="saved-desk" aria-label="Plan something">
        <div class="saved-desk-copy"><span class="section-label"></span><h2>Let the plans pick you.</h2><p>Already saved a few things? Tap the TV above to shuffle your own collection. We'll pick one for you.</p></div>

        <div class="saved-pick-result" id="saved-pick-result" role="status" aria-live="polite"><span>${counts.all ? 'YOUR NEXT PLOT TWIST IS ONE CLICK AWAY' : 'SAVE A FEW PLANS TO UNLOCK THE SHUFFLE'}</span></div>
      </section>

      <section class="saved-collection" aria-labelledby="saved-collection-title">
        <div class="saved-collection-heading"><div><span class="section-label"></span><h2 id="saved-collection-title">Your shortlist.</h2></div><p></p></div>
        <div class="toolbar saved-toolbar">
          <label for="saved-category" class="sr-only">Filter saved plans</label>
          <select id="saved-category"><option value="all">Everything saved</option><option value="event">Events</option><option value="restaurant">Restaurants</option></select>
          <label for="saved-sort" class="sr-only">Sort saved plans</label>
          <select id="saved-sort"><option value="newest">Recently saved</option><option value="title">Name A–Z</option><option value="date">Event date</option></select>
          <button class="button" id="share-plans" type="button">Share my plans ↗</button>
          <button class="button" id="clear-plans" type="button">Clear saved plans</button>
        </div>
        <p class="result-count" id="saved-count" role="status" aria-live="polite"></p>
        <div class="result-grid" id="saved-results"></div>
      </section>
    </div>
  `;
  $("#saved-category").addEventListener("change", updateSavedResults);
  $("#saved-sort").addEventListener("change", updateSavedResults);
  $("#share-plans").addEventListener("click", shareSavedPlans);
  $("#clear-plans").addEventListener("click", clearSavedPlans);
  $("#saved-pick").addEventListener("click", chooseSavedPlan);
  updateSavedResults();
  animateSavedPage();
}

function updateSavedResults() {
  const categoryInput = $("#saved-category");
  if (!categoryInput) return;
  const saved = getSaved();
  const category = categoryInput.value;
  const sort = $("#saved-sort")?.value || "newest";
  const results = saved.filter(item => category === "all" || item.type === category);
  if (sort === "title") results.sort((a, b) => String(a.title).localeCompare(String(b.title)));
  if (sort === "date") results.sort((a, b) => String(a.date || "9999").localeCompare(String(b.date || "9999")));
  const count = $("#saved-count");
  if (count) count.textContent = `${results.length} saved ${results.length === 1 ? "plan" : "plans"}`;
  renderCards($("#saved-results"), results, "Your collection starts here.", "Browse events and food spots, then tap Save Plan on anything you love.");
  const counts = savedCounts(saved);
  document.querySelectorAll(".saved-stat").forEach(stat => {
    const target = counts[stat.dataset.stat] || 0;
    const display = stat.querySelector("strong");
    if (!display) return;
    const prior = Number(display.dataset.count ?? display.textContent) || 0;
    display.dataset.count = String(target);
    if (window.gsap && !sidequestReducedMotion()) {
      const value = { count: prior };
      window.gsap.to(value, { count: target, duration: .65, ease: "power2.out", onUpdate: () => display.textContent = String(Math.round(value.count)) });
    } else display.textContent = String(target);
  });
  const button = $("#saved-pick");
  if (button) button.disabled = !saved.length;
  const result = $("#saved-pick-result");
  if (!saved.length && result) result.innerHTML = "<span>SAVE A FEW PLANS TO UNLOCK THE SHUFFLE</span>";
  window.dispatchEvent(new CustomEvent("sidequest:cards-updated"));
}

function chooseSavedPlan() {
  const saved = getSaved();
  const result = document.getElementById('saved-pick-result');
  const button = document.getElementById('saved-pick');
  if (!saved.length || !result || !button || button.disabled) return;
  savedShuffleTimeline?.kill();
  const chosen = saved[Math.floor(Math.random() * saved.length)];
  const show = () => {
    result.innerHTML = `<div class="saved-picked-full">
       <p class="section-label">YOUR NEXT LITTLE ADVENTURE</p>
       ${chosen.type === 'restaurant' ? foodCardHTML(chosen) : cardHTML(chosen)}
     </div>`;
    button.disabled = false;
    if (window.gsap && !sidequestReducedMotion()) {
      window.gsap.fromTo(result.querySelector('.saved-picked-full'),
        { y: 75, rotation: -5, autoAlpha: 0, scale: .82 },
        { y: 0, rotation: 0, autoAlpha: 1, scale: 1, duration: .85, ease: 'back.out(1.8)' });
      window.gsap.fromTo(button.querySelector('img'),
        { rotation: -12 }, { rotation: 0, duration: .7, ease: 'elastic.out(1,.4)' });
    }
    result.querySelector('.saved-picked-full')?.scrollIntoView?.({block:'nearest', behavior: sidequestReducedMotion() ? 'instant' : 'smooth'});
  };
  // Three genuine saved photos become a little fan of playing cards.
  const deck = Array.from({length: Math.min(3, Math.max(1, saved.length))}, (_, i) => saved[(i + Math.floor(Math.random() * saved.length)) % saved.length]);
  result.innerHTML = `<div class="saved-shuffle-deck" aria-label="Shuffling your saved plans">${deck.map((item, i) => {
    const fallback = item.type === 'restaurant' ? restaurantPosterSVG(item) : eventPosterSVG(item);
    return `<div class="saved-shuffle-card" style="--deck-index:${i}"><img src="${escapeHTML(item.image || fallback)}" data-fallback="${escapeHTML(fallback)}" alt="" decoding="async"><b>${escapeHTML(item.title)}</b></div>`;
  }).join('')}</div>`;
  if (!window.gsap || sidequestReducedMotion()) { show(); return; }
  button.disabled = true;
  const cards = result.querySelectorAll('.saved-shuffle-card');
  const gsap = window.gsap;
  gsap.set(cards, { x: 0, y: 0, rotation: i => (i-1) * 8, scale: .92 });
  const tl = gsap.timeline({ onComplete: show });
  tl.to(cards, { x: i => (i-1) * 92, rotation: i => (i-1) * 15, y: i => Math.abs(i-1) * 14,
    scale: 1, duration: .4, stagger: .08, ease: 'back.out(1.4)' })
    .to(cards, { x: i => (1-i) * 70, rotation: i => (1-i) * 14, duration: .27, stagger: .08, ease: 'power2.inOut' })
    .to(cards, { x: i => (i-1) * 100, rotation: i => (i-1) * -10, duration: .3, stagger: .07 })
    .to(cards, { x: 0, y: 0, rotation: 0, scale: .82, duration: .3, stagger: .06, ease: 'power2.in' })
    .to(cards, { y: 38, autoAlpha: 0, duration: .22, stagger: .05 });
  savedShuffleTimeline = tl;
}

function animateSavedPage() {
  if (sidequestReducedMotion()) return;
  initialiseGSAP().then(() => {
    if (document.body.dataset.page !== "saved" || !window.gsap) return;
    const gsap = window.gsap;
    gsap.fromTo(".saved-tv-trigger img", { rotation: -30, scale: .55, autoAlpha: 0, y: 35 }, { rotation: 0, scale: 1, autoAlpha: 1, y: 0, duration: 1.2, ease: "elastic.out(1,.6)" });
    const savedTV = document.querySelector('.saved-tv-trigger');
    const savedTVImg = savedTV?.querySelector('img');
    if (savedTV && savedTVImg) {
      savedTV.addEventListener('pointerenter', () => gsap.to(savedTVImg, {rotation: 8, y: -13, scale: 1.08, duration: .4, ease: 'back.out(1.5)', overwrite:'auto'}));
      savedTV.addEventListener('pointerleave', () => gsap.to(savedTVImg, {rotation: 0, y: 0, scale: 1, duration: .55, ease: 'elastic.out(1,.5)', overwrite:'auto'}));
    }
    gsap.fromTo(".saved-stat", { y: 85, rotation: -5, scale: .82, autoAlpha: 0 }, { y: 0, rotation: 0, scale: 1, autoAlpha: 1, duration: .95, stagger: .18, ease: "back.out(1.8)" });
    document.querySelectorAll(".saved-stat").forEach(stat => {
      stat.addEventListener("pointerenter", () => gsap.to(stat, { y: -10, rotation: -1, duration: .3, overwrite: "auto" }));
      stat.addEventListener("pointerleave", () => gsap.to(stat, { y: 0, rotation: 0, duration: .5, ease: "back.out(1.6)", overwrite: "auto" }));
    });
    if (window.ScrollTrigger) {
      gsap.fromTo(".saved-desk", { y: 70, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .9, ease: "power3.out", scrollTrigger: { trigger: ".saved-desk", start: "top 90%", once: true } });
      gsap.fromTo(".saved-collection-heading", { x: -60, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: .8, scrollTrigger: { trigger: ".saved-collection", start: "top 85%", once: true } });
    }
  });
}

function renderSavedTickets() {
  const container = $("#saved-ticket-list");

  if (!container) return;

  const tickets = getTickets();

  if (!tickets.length) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>No tickets yet.</h2>
        <p></p>
      </div>
    `;
    return;
  }

  container.innerHTML = tickets.map(ticket => `
    <article class="saved-ticket-item">
      <div>
        <h3>${escapeHTML(ticket.eventTitle)}</h3>
        <p>
          ${escapeHTML(formatDate(ticket.eventDate))}
          · ${ticket.quantity} ticket(s)
          · ${ticket.total === 0 ? "Free" : `R${ticket.total}`}
        </p>
        <p>Reference: ${escapeHTML(ticket.reference)}</p>
      </div>

      <button
        type="button"
        data-view-ticket="${escapeHTML(ticket.reference)}"
      >
        View ticket ↗
      </button>
    </article>
  `).join("");
}

function viewSavedTicket(reference) {
  const ticket = getTickets().find(
    item => item.reference === reference
  );

  if (!ticket) {
    notify("Ticket not found.");
    return;
  }

  ensureTicketModal();
  $("#ticket-modal").classList.add("open");
  document.body.style.overflow = "hidden";
  showTicketConfirmation(ticket);
}

async function shareSavedPlans() {
  const saved = getSaved();

  if (!saved.length) {
    notify("Save something first, then share your plans.");
    return;
  }

  const message = [
    "My SideQuest plans:",
    ...saved.map(item => `• ${item.title} — ${item.location}`)
  ].join("\n");

  try {
    if (navigator.share) {
      await navigator.share({
        title: "My SideQuest Plans",
        text: message
      });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(message);
      notify("Your plans have been copied.");
    } else {
      notify("Sharing is not supported in this browser.");
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      notify("Unable to share right now.");
    }
  }
}

function clearSavedPlans() {
  if (!getSaved().length) {
    notify("You don't have any saved plans to clear.");
    return;
  }

  if (!window.confirm("Are you sure you want to remove all saved plans?")) {
    return;
  }

  setSaved([]);
  updateSavedResults();
  notify("Your saved plans have been cleared.");
}

/* ---------------------------------------------------------
   SAVED TICKET BUTTON EVENT
--------------------------------------------------------- */

document.addEventListener("click", event => {
  const target = event.target;

  if (!(target instanceof Element)) return;

  const viewButton = target.closest("[data-view-ticket]");

  if (viewButton) {
    viewSavedTicket(viewButton.dataset.viewTicket);
  }
});

/* ---------------------------------------------------------
   SURPRISE ME — THE LOGO IS THE BUTTON
   Two simple decks: events and food. GSAP shuffles three
   real image cards before landing on a complete listing.
--------------------------------------------------------- */
const surpriseBusy = {event: false, restaurant: false};
function surpriseOptions(kind) {
  const items = kind === "event" ? EVENTS : RESTAURANTS;
  return items.filter(item => !!item.url);
}
function surpriseImage(item) {
  const fallback = item.type === "restaurant" ? restaurantPosterSVG(item) : eventPosterSVG(item);
  return {src: item.image || fallback, fallback};
}
function renderSurprise() {
  const root = $("#app-content");
  if (!root) return;
  root.innerHTML = `
    <div class="page-shell sq-surprise-page">
      <div class="eyebrow"><span></span><span></span></div>
      <h1 class="page-title">Can we surprise you?</h1>
      <p class="page-intro">Click the tv and see what we think you should be up to with your girlies and guylies today or sometime super duper soon. Is it market hopping, a festival or rafe, a gallery exhibition or a play?! Find out!!</p>
      <section class="sq-pick-section" aria-labelledby="sq-event-heading">
        <div class="sq-pick-heading"><span class="section-label"></span><h2 id="sq-event-heading">An event, please.</h2></div>
        <button type="button" class="sq-logo-picker" data-surprise-kind="event" aria-label="Shuffle real event cards and pick an event">
          <img src="${LOGO_PATH}" alt="" aria-hidden="true" draggable="false">
        </button>
        <p class="sq-pick-hint">Tap the TV to shuffle events</p>
        <div class="sq-pick-result" id="sq-event-result" aria-live="polite" aria-atomic="true"></div>
      </section>
      <section class="sq-pick-section" aria-labelledby="sq-food-heading">
        <div class="sq-pick-heading"><span class="section-label"></span><h2 id="sq-food-heading">Food sounds good.</h2></div>
        <button type="button" class="sq-logo-picker" data-surprise-kind="restaurant" aria-label="Shuffle real restaurant cards and pick a restaurant">
          <img src="${LOGO_PATH}" alt="" aria-hidden="true" draggable="false">
        </button>
        <p class="sq-pick-hint">Tap the TV to shuffle restaurants</p>
        <div class="sq-pick-result" id="sq-food-result" aria-live="polite" aria-atomic="true"></div>
      </section>
    </div>`;
  root.querySelectorAll('[data-surprise-kind]').forEach(button => {
    button.addEventListener('click', () => chooseSurpriseKind(button.dataset.surpriseKind));
  });
  const startFloat = () => {
    if (!window.gsap || sidequestReducedMotion() || !root.isConnected) return;
    root.querySelectorAll('.sq-logo-picker img').forEach((img, i) => {
      window.gsap.fromTo(img, {y:0,rotation:-7}, {y:-13,rotation:5,duration:2.25+i*.25,yoyo:true,repeat:-1,ease:'sine.inOut'});
    });
  };
  if (window.gsap) startFloat(); else initialiseGSAP().then(startFloat);
}

async function chooseSurpriseKind(kind) {
  if (!['event','restaurant'].includes(kind) || surpriseBusy[kind]) return;
  const items = surpriseOptions(kind);
  if (!items.length) { notify('No suggestions are available right now.'); return; }
  const choice = items[Math.floor(Math.random()*items.length)];
  const target = document.getElementById(kind === 'event' ? 'sq-event-result' : 'sq-food-result');
  const button = document.querySelector(`[data-surprise-kind="${kind}"]`);
  if (!target || !button) return;
  surpriseBusy[kind] = true;
  button.disabled = true;
  button.setAttribute('aria-busy','true');
  target.setAttribute('aria-busy','true');
  const finish = () => {
    if (!target.isConnected) return;
    target.innerHTML = `<div class="sq-picked-card"><p class="section-label">YOUR PICK</p>${kind === 'event' ? cardHTML(choice) : foodCardHTML(choice)}</div>`;
    button.disabled = false;
    button.removeAttribute('aria-busy');
    target.removeAttribute('aria-busy');
    surpriseBusy[kind] = false;
    if (window.gsap && !sidequestReducedMotion()) {
      window.gsap.fromTo(target.querySelector('.result-card'),
        {autoAlpha:0,y:65,rotation:-5,scale:.82},
        {autoAlpha:1,y:0,rotation:0,scale:1,duration:.95,ease:'back.out(1.7)',clearProps:'transform,opacity,visibility'});
    }
  };
  if (sidequestReducedMotion()) { finish(); return; }
  await initialiseGSAP();
  if (!window.gsap || !target.isConnected) { finish(); return; }
  const gsap = window.gsap;
  const others = Array.from({length:3},()=>items[Math.floor(Math.random()*items.length)]);
  // Each shuffle card uses the REAL listing image, plus its honest fallback.
  target.innerHTML = `<div class="sq-shuffle-deck" aria-hidden="true">${others.map((item,index)=>{
    const art=surpriseImage(item);
    return `<div class="sq-playing-card" data-deck-index="${index}"><div class="sq-playing-image"><img src="${escapeHTML(art.src)}" data-fallback="${escapeHTML(art.fallback)}" alt="" decoding="async"></div><strong>${escapeHTML(item.title)}</strong></div>`;
  }).join('')}</div>`;
  const deck = target.querySelector('.sq-shuffle-deck');
  const cards = [...deck.children];
  gsap.set(cards,{x:0,y:0,rotation:(i)=>(i-1)*9,scale:.91,autoAlpha:1});
  const tl=gsap.timeline({onComplete:finish});
  tl.fromTo(deck,{autoAlpha:0,y:35},{autoAlpha:1,y:0,duration:.3});
  for(let round=0;round<3;round++) {
    tl.to(cards,{x:(i)=>(i-1)*110,y:(i)=>i===1?-17:12,rotation:(i)=>(i-1)*18,duration:.34,ease:'power2.out',stagger:.07});
    tl.to(cards,{x:0,y:0,rotation:(i)=>(i-1)*7,duration:.28,ease:'power2.inOut',stagger:.05});
  }
  tl.to(cards,{x:(i)=>(i-1)*260,y:55,rotation:(i)=>(i-1)*22,autoAlpha:0,duration:.45,stagger:.06,ease:'power3.in'});
}

/* ---------------------------------------------------------
   ABOUT PAGE
--------------------------------------------------------- */

/* ABOUT — a short scroll-based story, not a different visual identity. */
function renderAbout() {
  const root = $("#app-content");
  if (!root) return;
  root.innerHTML = `
    <div class="page-shell about-page">
      <section class="home-hero about-hero" aria-labelledby="about-heading">
        <video class="home-video" id="home-video" autoplay muted loop playsinline webkit-playsinline preload="auto">
          ${videoSourcesHTML(ABOUT_VIDEO_SOURCES)}
          Your browser does not support HTML video.
        </video>
        <div class="video-fallback" id="video-fallback" role="button" tabindex="0" aria-label="Play the SideQuest hero video"></div>
        <div class="hero-overlay"></div>
        <div class="home-copy">
          <div class="hero-kicker"></div>
          <h1 id="about-heading"><span></span><span></span></h1>
          <p>Psst!! Pssst! Keep scrolling down to find out a little bit more about SideQuest and the magical (not really) story of how it came to be below. Or maybe you just wanna explore events and food discovery?</p>
          <div class="hero-actions"><a class="button primary" href="./events.html">Explore events ↗</a><a class="button" href="./food.html">Find somewhere to eat ↗</a></div>
        </div>
        <div class="video-caption"><span></span>
          <div class="music-controls" data-music-control><button class="video-sound" id="video-sound" type="button" data-music-toggle aria-label="Toggle background music">SOUND OFF</button><label class="music-volume" title="Volume"><span>VOL</span><input type="range" min="0" max="100" step="1" value="60" data-music-volume aria-label="Music volume"></label></div>
        </div>
      </section>

      <section class="about-manifesto" aria-labelledby="manifesto-heading">
        <div class="eyebrow"><span></span><span></span></div>
        <p class="section-label"></p>
        <h2 id="manifesto-heading"> "The magical story of how SideQuest<br><em> came to be."</em></h2>
        <p>SideQuest is an interactive discovery website I designed to help the youth of our country
navigate, find, and decide where to go, what to do, and where to eat when they want to
have a good time but don't know where to start. My idea came about when my friends
and I first heard about the popular youth music festival, “Lentedag” first announced that
it was renewed for another year and tickets were soon to be on sale in March for the
festival, which was hosted on the 16th of September. We all rushed to buy tickets by
April, and now it felt the anticipation of Lentedag was all we really had going on for the 6
months leading up to the festival. Looking for events, cute cafes and meaningful
sidequests that were within our student budgets, locational limitations, and were
frequent and interesting enough for us to be interested in and attend consistently for fun
proved incredibly far fetched. With all of the potential constraints that may ne
encountered by the majority of the young people of South African, SideQuest is a
realistically functional and feasible solution to finding genuinely enjoyable, and
authentically meaningful places to go and things to do and enjoy done for the youth, by
the youth.</p>
      </section>

      <section class="about-journey" aria-labelledby="journey-heading">
        <div class="eyebrow"><span></span><span></span></div>
        <h2 id="journey-heading"> " But why SideQuest?"</h2>
        <div class="about-story" id="about-story">
          <svg class="about-path" viewBox="0 0 80 660" preserveAspectRatio="none" aria-hidden="true"><path class="about-path-guide" d="M40 0 C0 90 80 170 40 270 S0 440 40 520 S80 615 40 660"/><path class="about-path-line" d="M40 0 C0 90 80 170 40 270 S0 440 40 520 S80 615 40 660"/></svg>
          <article class="about-step"><span class="about-step-no">01</span><div><span class="section-label"></span><h3>It's quicker.</h3><p>Deciding what to do with your free time a student often means searching across
multiple platforms. You may have to look through event websites, restaurant apps,
Google Maps, social media, and reviews before you can actually make a decision. This
creates a common, recurring, and easily managable problem. The question, “I want to
go out, but I don’t know where to start in making anything happen.”
My website aims to make that decision easier by bringing relevant activities and food
options together in one visually engaging experience.</p></div></article>
          <article class="about-step"><span class="about-step-no">02</span><div><span class="section-label"></span><h3>It's all in one place.</h3><p>Sometimes the hardest part of making plans isn't finding something to do, but keeping track of everything you've found. You might see an event on Instagram, a restaurant on TikTok, or something interesting while scrolling online, but then completely forget about it when you actually want to go out. SideQuest allows users to explore different options and save the ones that catch their attention. This means that instead of having to search for the same places again, everything is kept in one place for when you're ready to make plans.</p></div></article>
          <article class="about-step"><span class="about-step-no">03</span><div><span class="section-label"></span><h3>It makes trying something new way less daunting.</h3><p>I built SideQuest as the kind of website I wanted in that moment: a place to browse real event listings and restaurants together, save possibilities and get a spontaneous suggestion when I can't decide. It doesn't replace Ticketmaster, Quicket or Dineplan; it helps me find something worth bookinIt's easy to keep going to the same restaurants or doing the same activities because they're familiar and you already know what to expect. But there's actually so much happening around us that we don't always know about. SideQuest encourages users to explore beyond their usual choices by introducing them to different events, restaurants and experiences. The Surprise Me feature also makes the process a little more interesting by suggesting something for you when you can't decide. The idea is to make discovering something new feel less like a task and more like part of the experience.g, then links me to the original provider. That small idea became the whole project.</p></div></article>
        </div>
      </section>

      <section class="about-facts" aria-label="What makes SideQuest useful">
        <div class="about-fact"><strong>42</strong><span>curated event performances</span></div>
        <div class="about-fact"><strong>37</strong><span>restaurant listings</span></div>
        <div class="about-fact"><strong>1</strong><span>place to make a plan</span></div>
      </section>

      <section class="about-final" aria-labelledby="about-final-heading">
        <span class="section-label"></span>
        <h2 id="about-final-heading">From one bored day<br><em>to your next plan.</em></h2>
        <p>SideQuest started because I wanted an easier way to make plans, and it's built for anyone who has ever said “there's nothing to do” while plenty is happening around them. The listings are curated rather than live, so always confirm dates, prices and availability on the official provider's page.</p>
        <div class="hero-actions"><a class="button primary" href="./events.html">Find an event ↗</a><a class="button" href="./surprise.html">Surprise me ↗</a></div>
      </section>
    </div>`;
  initHeroVideo();
  updateMusicUI();
  animateAboutPage();
}

function animateAboutPage() {
  if (sidequestReducedMotion()) return;
  initialiseGSAP().then(() => {
    if (document.body.dataset.page !== "about" || !window.gsap || !window.ScrollTrigger) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const steps = document.querySelectorAll(".about-step");
    const path = document.querySelector(".about-path-line");
    if (path && typeof path.getTotalLength === "function") {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".about-story", start: "top 75%", end: "bottom 70%", scrub: .7 } });
    }
    steps.forEach((step, index) => {
      gsap.fromTo(step, { x: index % 2 ? 75 : -75, scale: .9, autoAlpha: 0, rotation: index % 2 ? 3 : -3 }, { x: 0, scale: 1, autoAlpha: 1, rotation: 0, duration: 1, ease: "back.out(1.5)", scrollTrigger: { trigger: step, start: "top 85%", once: true } });
    });
    document.querySelectorAll(".about-fact strong").forEach(element => {
      const target = Number(element.textContent) || 0;
      const counter = { value: 0 };
      gsap.to(counter, { value: target, duration: 1.7, ease: "power2.out", onUpdate: () => element.textContent = String(Math.round(counter.value)), scrollTrigger: { trigger: ".about-facts", start: "top 85%", once: true } });
    });
    gsap.fromTo(".about-final h2", { y: 85, scale: .88, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 1.15, ease: "back.out(1.5)", scrollTrigger: { trigger: ".about-final", start: "top 85%", once: true } });
    ScrollTrigger.refresh();
  });
}

/* ---------------------------------------------------------
   BACKGROUND MUSIC (keeps playing across every page)
--------------------------------------------------------- */

/* Each song lists the filename(s) to try, in order.
   Put the three mp3 files in the SAME folder as index.html. */
const MUSIC_TRACKS = [
  ["song-1.mp3", "DtMF, Best part (Loop) [8WQkJrlL95M].mp3"],
  ["song-2.mp3", "Matilda Mann - Inventing (Lyrics) _Love is just too weak of a word_.mp3"],
  ["song-3.mp3", "Young Wild and Free - Wiz Khalifa (Lyrics) [Q-9RTuupI6g].mp3"]
];

const MUSIC_SESSION_KEY = "sidequest-music-session";
const MUSIC_VOLUME_KEY = "sidequest-music-volume";

const music = {
  audio: null,
  trackIndex: -1,
  enabled: true,
  volume: 0.6,
  failures: 0
};

function readMusicSession() {
  try {
    return JSON.parse(sessionStorage.getItem(MUSIC_SESSION_KEY) || "null") || {};
  } catch {
    return {};
  }
}

function writeMusicSession(patch) {
  try {
    sessionStorage.setItem(
      MUSIC_SESSION_KEY,
      JSON.stringify({ ...readMusicSession(), ...patch })
    );
  } catch {
    /* storage unavailable: music still works, it just can't resume */
  }
}

function readMusicVolume() {
  try {
    const stored = parseFloat(localStorage.getItem(MUSIC_VOLUME_KEY));
    return Number.isFinite(stored) ? Math.min(1, Math.max(0, stored)) : 0.6;
  } catch {
    return 0.6;
  }
}

function pickRandomTrack(exclude = -1) {
  const choices = MUSIC_TRACKS
    .map((_, index) => index)
    .filter(index => index !== exclude);

  return choices[Math.floor(Math.random() * choices.length)];
}

function loadTrack(index, startAt = 0) {
  const audio = music.audio;

  music.trackIndex = index;
  audio.innerHTML = "";

  const names = MUSIC_TRACKS[index];

  names.forEach((name, position) => {
    const source = document.createElement("source");

    source.src = `./${encodeURIComponent(name)}`;
    source.type = "audio/mpeg";

    if (position === names.length - 1) {
      source.addEventListener("error", () => {
        console.error("SideQuest music: could not load", names);

        music.failures += 1;

        if (music.failures < MUSIC_TRACKS.length) {
          loadTrack(pickRandomTrack(index));

          if (music.enabled) audio.play().catch(() => {});
        }
      });
    }

    audio.appendChild(source);
  });

  audio.load();

  if (startAt > 0) {
    audio.addEventListener("loadedmetadata", () => {
      if (!audio.duration || startAt < audio.duration - 1) {
        audio.currentTime = startAt;
      }
    }, { once: true });
  }

  writeMusicSession({ track: index, time: startAt, savedAt: Date.now() });
}

function updateMusicUI() {
  if (!music.audio) return;

  const playing = !music.audio.paused;

  document.querySelectorAll("[data-music-toggle]").forEach(button => {
    button.textContent = playing ? "SOUND ON" : "SOUND OFF";
    button.setAttribute("aria-pressed", String(playing));
  });

  document.querySelectorAll("[data-music-volume]").forEach(slider => {
    slider.value = String(Math.round(music.volume * 100));
  });
}

function setMusicVolume(value) {
  const volume = Math.min(1, Math.max(0, value));

  music.volume = volume;

  if (music.audio) music.audio.volume = volume;

  try {
    localStorage.setItem(MUSIC_VOLUME_KEY, String(volume));
  } catch {
    /* ignore */
  }

  updateMusicUI();
}

function toggleMusic() {
  const audio = music.audio;

  if (!audio) return;

  if (audio.paused) {
    music.enabled = true;
    writeMusicSession({ enabled: true });
    audio.play().catch(error => {
      console.warn("Could not start music:", error);
    });
  } else {
    music.enabled = false;
    writeMusicSession({ enabled: false });
    audio.pause();
  }

  updateMusicUI();
}

function ensureMiniMusicControl() {
  if ($("#music-mini")) return;

  const mini = document.createElement("div");

  mini.id = "music-mini";
  mini.className = "music-controls music-mini";
  mini.setAttribute("data-music-control", "");

  mini.innerHTML = `
    <button
      class="video-sound"
      type="button"
      data-music-toggle
      aria-label="Toggle background music"
    >SOUND OFF</button>

    <label class="music-volume" title="Volume">
      <span>VOL</span>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value="60"
        data-music-volume
        aria-label="Music volume"
      >
    </label>
  `;

  document.body.appendChild(mini);
  updateMusicUI();
}

function initMusic() {
  if (music.audio) return;

  const audio = new Audio();

  audio.preload = "auto";

  music.audio = audio;
  music.volume = readMusicVolume();
  audio.volume = music.volume;

  const session = readMusicSession();

  music.enabled = session.enabled !== false;

  /* Refreshing picks a new random song. Moving between pages
     carries on with the same song from where it was. */
  const navigation = performance.getEntriesByType?.("navigation")?.[0];
  const isReload = navigation?.type === "reload";
  const isRecent = session.savedAt && Date.now() - session.savedAt < 20000;
  const canResume =
    !isReload &&
    isRecent &&
    Number.isInteger(session.track) &&
    Boolean(MUSIC_TRACKS[session.track]);

  if (canResume) {
    loadTrack(session.track, Number(session.time) || 0);
  } else {
    loadTrack(pickRandomTrack());
  }

  audio.addEventListener("ended", () => {
    loadTrack(pickRandomTrack(music.trackIndex));

    if (music.enabled) audio.play().catch(() => {});
  });

  audio.addEventListener("timeupdate", () => {
    writeMusicSession({
      track: music.trackIndex,
      time: audio.currentTime,
      savedAt: Date.now()
    });
  });

  audio.addEventListener("play", updateMusicUI);
  audio.addEventListener("pause", updateMusicUI);

  audio.addEventListener("playing", () => {
    music.failures = 0;
    updateMusicUI();
  });

  /* Browsers block sound until the visitor interacts with the page,
     so if autoplay is refused, the first click, tap or key press starts it. */
  const unlockEvents = ["pointerdown", "keydown", "touchstart"];

  function unlockMusic(event) {
    const target = event.target;

    if (target instanceof Element && target.closest("[data-music-control]")) return;
    if (!music.enabled || !audio.paused) return;

    audio.play().catch(() => {});
  }

  unlockEvents.forEach(type =>
    document.addEventListener(type, unlockMusic, true)
  );

  audio.addEventListener("playing", () => {
    unlockEvents.forEach(type =>
      document.removeEventListener(type, unlockMusic, true)
    );
  }, { once: true });

  document.addEventListener("click", event => {
    const target = event.target;

    if (target instanceof Element && target.closest("[data-music-toggle]")) {
      toggleMusic();
    }
  });

  document.addEventListener("input", event => {
    const target = event.target;

    if (target instanceof HTMLInputElement && target.matches("[data-music-volume]")) {
      setMusicVolume(Number(target.value) / 100);
    }
  });

  window.addEventListener("pagehide", () => {
    writeMusicSession({
      track: music.trackIndex,
      time: audio.currentTime,
      savedAt: Date.now()
    });
  });

  window.addEventListener("pageshow", event => {
    if (event.persisted && music.enabled && audio.paused) {
      audio.play().catch(() => {});
    }
  });

  if (music.enabled) {
    audio.play().catch(() => {});
  }

  updateMusicUI();
}



const USERS_KEY = "sidequest-users";
const CURRENT_USER_KEY = "sidequest-current-user";

const ACCOUNT_COPY = {
  signin: {
    kicker: "WELCOME BACK",
    title: "Welcome back.",
    lede: "Sign in to pick up where you left off and keep your name with you as you move around SideQuest."
  },
  register: {
    kicker: "NEW HERE?",
    title: "Start your sidequest.",
    lede: "Create an account to put your name on SideQuest. It only takes a moment."
  }
};

const ACCOUNT_NOTE =
  "";

let accountMode = "signin";
let accountFlash = "";

function getUsers() {
  const stored = readStorage(USERS_KEY, []);

  if (!Array.isArray(stored)) return [];

  return stored.filter(user =>
    user &&
    typeof user === "object" &&
    typeof user.id === "string" &&
    typeof user.email === "string" &&
    typeof user.name === "string"
  );
}

function saveUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  } catch {
    return false;
  }
}

/* Accounts are remembered in localStorage, but being signed in lasts for the
   browser session (sessionStorage). Every new visit starts at the login page,
   and moving between pages keeps you signed in. */
function getCurrentUser() {
  try {
    const id = sessionStorage.getItem(CURRENT_USER_KEY);

    if (!id) return null;

    return getUsers().find(user => user.id === id) || null;
  } catch {
    return null;
  }
}

function setCurrentUserId(id) {
  try {
    sessionStorage.setItem(CURRENT_USER_KEY, id);
    return true;
  } catch {
    return false;
  }
}

function clearCurrentUser() {
  try {
    sessionStorage.removeItem(CURRENT_USER_KEY);
  } catch {
    /* ignore */
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim());
}

function getFirstName(name) {
  return String(name || "").trim().split(/\s+/)[0] || "friend";
}

function createSalt() {
  try {
    const bytes = new Uint8Array(12);
    window.crypto.getRandomValues(bytes);
    return [...bytes].map(byte => byte.toString(16).padStart(2, "0")).join("");
  } catch {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
}

/* Demo only: a salted hash so passwords are not kept as plain text.
   This does not make browser storage secure. */
async function hashPassword(password, salt) {
  const text = `${salt}:${password}`;

  try {
    if (window.crypto?.subtle && typeof TextEncoder !== "undefined") {
      const digest = await window.crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(text)
      );

      return "sha256:" + [...new Uint8Array(digest)]
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
    }
  } catch {
    /* fall through to the simple hash */
  }

  let hash = 5381;

  for (const character of text) {
    hash = ((hash << 5) + hash + character.charCodeAt(0)) >>> 0;
  }

  return "demo:" + hash.toString(16);
}

async function registerAccount({ name, email, password, confirm }) {
  const errors = {};
  const cleanName = String(name || "").trim().replace(/\s+/g, " ");
  const cleanEmail = String(email || "").trim().toLowerCase();
  const pass = String(password || "");
  const confirmation = String(confirm || "");

  const anyMissing = !cleanName || !cleanEmail || !pass || !confirmation;

  if (!cleanName) errors.name = "Enter your full name.";
  else if (cleanName.length < 2) errors.name = "That name looks a little short.";

  if (!cleanEmail) errors.email = "Enter your email address.";
  else if (!isValidEmail(cleanEmail)) errors.email = "That doesn't look like a valid email address.";

  if (!pass) errors.password = "Create a password.";
  else if (pass.length < 8) errors.password = "Use at least 8 characters.";

  if (!confirmation) errors.confirm = "Confirm your password.";
  else if (pass && confirmation !== pass) errors.confirm = "The passwords don't match.";

  if (!errors.email && getUsers().some(user => user.email === cleanEmail)) {
    errors.email = "An account with this email already exists. Try signing in instead.";
  }

  if (Object.keys(errors).length) {
    return {
      ok: false,
      errors,
      message: anyMissing
        ? "Please fill in all the fields."
        : "Please fix the highlighted fields."
    };
  }

  const salt = createSalt();

  const user = {
    id: `u-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    name: cleanName,
    email: cleanEmail,
    salt,
    passwordHash: await hashPassword(pass, salt),
    createdAt: new Date().toISOString()
  };

  if (!saveUsers([...getUsers(), user]) || !setCurrentUserId(user.id)) {
    return {
      ok: false,
      errors: {},
      message: "We couldn't save your account in this browser. Check that storage isn't blocked and try again."
    };
  }

  return { ok: true, user };
}

async function signInAccount({ email, password }) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  const pass = String(password || "");
  const errors = {};

  if (!cleanEmail) errors.email = "Enter your email address.";
  else if (!isValidEmail(cleanEmail)) errors.email = "That doesn't look like a valid email address.";

  if (!pass) errors.password = "Enter your password.";

  if (Object.keys(errors).length) {
    return {
      ok: false,
      errors,
      message: !cleanEmail || !pass
        ? "Please fill in both fields."
        : "Please fix the highlighted fields."
    };
  }

  const user = getUsers().find(entry => entry.email === cleanEmail);

  if (!user) {
    return {
      ok: false,
      errors: { email: "We couldn't find an account with that email." },
      message: "No account found. You can create one in a moment."
    };
  }

  const hash = await hashPassword(pass, user.salt || "");

  if (hash !== user.passwordHash) {
    return {
      ok: false,
      errors: { password: "That password isn't right." },
      message: "Those details don't match. Please try again."
    };
  }

  if (!setCurrentUserId(user.id)) {
    return {
      ok: false,
      errors: {},
      message: "We couldn't keep you signed in. Check that browser storage isn't blocked."
    };
  }

  return { ok: true, user };
}

function signOutAccount() {
  clearCurrentUser();
}

/* ----- Navigation: Account link on every page ----- */

function updateAccountUI() {
  const user = getCurrentUser();
  const onAccountPage = document.body.dataset.page === "login";

  document.querySelectorAll("[data-account-link]").forEach(link => {
    link.classList.toggle("is-signed-in", Boolean(user));

    link.setAttribute(
      "aria-label",
      user ? `Account, signed in as ${user.name}` : "Account"
    );

    if (user) {
      link.title = `Signed in as ${user.name}`;
    } else {
      link.removeAttribute("title");
    }

    if (onAccountPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function initAccountNav() {
  const nav = $("#main-nav");

  if (nav && !nav.querySelector("[data-account-link]")) {
    const existing = [...nav.querySelectorAll("a")].find(link =>
      /login\.html$/i.test(link.getAttribute("href") || "")
    );

    if (existing) {
      existing.setAttribute("data-account-link", "");
    } else {
      const link = document.createElement("a");

      link.href = "./login.html";
      link.textContent = "Account";
      link.setAttribute("data-account-link", "");

      nav.appendChild(link);
    }
  }

  updateAccountUI();
}

/* ----- Login gate: the first screen of the site ----- */

/* The video behind the login. Uses the anime cooking video; swap to
   HERO_VIDEO_SOURCES here if you would rather use the SideQuest ad. */
const GATE_VIDEO_SOURCES = ABOUT_VIDEO_SOURCES;

let gateOpener = null;
let gateKeysBound = false;

function navigateTo(url) {
  window.location.replace(url);
}

function isLoginPage() {
  return (
    document.body?.dataset.page === "login" ||
    /login\.html$/i.test(window.location.pathname)
  );
}

function getNextDestination() {
  const next = new URLSearchParams(window.location.search).get("next") || "";

  return /^[\w-]+\.html$/i.test(next) && !/^login\.html$/i.test(next)
    ? `./${next}`
    : "./index.html";
}

/* Every page except the login page needs a signed-in visitor. */
function enforceLoginGate() {
  if (isLoginPage()) return true;
  if (getCurrentUser()) return true;

  document.documentElement.style.visibility = "hidden";

  const file = window.location.pathname.split("/").pop() || "";
  const next =
    /^[\w-]+\.html$/i.test(file) && !/^index\.html$/i.test(file)
      ? `?next=${encodeURIComponent(file)}`
      : "";

  navigateTo(`./login.html${next}`);

  return false;
}

function accountFieldHTML(prefix, key, label, options = {}) {
  const {
    type = "text",
    autocomplete = "off",
    placeholder = "",
    password = false
  } = options;

  const id = `${prefix}-${key}`;

  return `
    <div class="field" data-field="${key}">
      <label for="${id}">${escapeHTML(label)}</label>

      <div class="field-control${password ? " has-toggle" : ""}">
        <input
          id="${id}"
          name="${key}"
          type="${type}"
          autocomplete="${autocomplete}"
          placeholder="${escapeHTML(placeholder)}"
          aria-describedby="${id}-error"
          ${key === "name" ? 'maxlength="80"' : ""}
          ${key === "email" ? 'maxlength="120" autocapitalize="off" spellcheck="false"' : ""}
        >

        ${password ? `
          <button
            type="button"
            class="field-toggle"
            data-toggle-password="${id}"
            aria-label="Show password"
            aria-pressed="false"
          >SHOW</button>
        ` : ""}
      </div>

      <p class="field-error" id="${id}-error" role="alert"></p>
    </div>
  `;
}

function clearFormErrors(form) {
  if (!form) return;

  form.querySelectorAll(".field").forEach(field => {
    field.classList.remove("has-error");

    const input = field.querySelector("input");
    const error = field.querySelector(".field-error");

    if (input) input.removeAttribute("aria-invalid");
    if (error) error.textContent = "";
  });

  const status = form.querySelector(".form-status");

  if (status) {
    status.textContent = "";
    status.classList.remove("is-success");
  }
}

function showFormErrors(form, errors = {}, message = "") {
  clearFormErrors(form);

  let firstInvalid = null;

  Object.entries(errors).forEach(([key, text]) => {
    const field = form.querySelector(`[data-field="${key}"]`);

    if (!field) return;

    field.classList.add("has-error");

    const input = field.querySelector("input");
    const error = field.querySelector(".field-error");

    if (error) error.textContent = text;

    if (input) {
      input.setAttribute("aria-invalid", "true");
      if (!firstInvalid) firstInvalid = input;
    }
  });

  const status = form.querySelector(".form-status");

  if (status) status.textContent = message;

  if (firstInvalid) firstInvalid.focus();
}

function togglePasswordVisibility(button) {
  const input = document.getElementById(button.dataset.togglePassword);

  if (!input) return;

  const show = input.type === "password";

  input.type = show ? "text" : "password";
  button.textContent = show ? "HIDE" : "SHOW";
  button.setAttribute("aria-label", show ? "Hide password" : "Show password");
  button.setAttribute("aria-pressed", String(show));
}

function formatMemberSince(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Recently";

  return new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function gateLogoHTML() {
  return `
    <div class="logo gate-logo">
      <img
        class="logo-mark"
        src="${LOGO_PATH}"
        alt=""
        aria-hidden="true"
        decoding="async"
        onerror="this.remove()"
      >
      <span class="logo-stack">
        <span class="logo-word">SideQuest.</span>
        <span class="logo-signature"><span class="sig-by">developed by</span> Tak Chakahwata</span>
      </span>
    </div>
  `;
}

function gateVideoHTML() {
  return `
    <video
      class="home-video gate-video"
      id="home-video"
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline
      preload="auto"
    >
      ${videoSourcesHTML(GATE_VIDEO_SOURCES)}
    </video>

    <div class="video-fallback" id="video-fallback" aria-hidden="true"></div>
    <div class="gate-shade"></div>
  `;
}

function musicControlsHTML() {
  return `
    <div class="music-controls" data-music-control>
      <button
        class="video-sound"
        id="video-sound"
        type="button"
        data-music-toggle
        aria-label="Toggle background music"
      >SOUND OFF</button>

      <label class="music-volume" title="Volume">
        <span>VOL</span>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value="60"
          data-music-volume
          aria-label="Music volume"
        >
      </label>
    </div>
  `;
}

function gateSignatureHTML() {
  return `
    <p class="gate-sign">
      <span class="sig-by">developed by</span> Tak Chakahwata
    </p>
  `;
}

function setAccountMode(mode, shouldFocus = false) {
  accountMode = mode === "register" ? "register" : "signin";

  const copy = ACCOUNT_COPY[accountMode];

  const kicker = $("#account-kicker");
  const title = $("#account-title");
  const lede = $("#account-lede");

  if (kicker) kicker.textContent = copy.kicker;
  if (title) title.textContent = copy.title;
  if (lede) lede.textContent = copy.lede;

  document.querySelectorAll("[data-account-tab]").forEach(tab => {
    tab.setAttribute(
      "aria-pressed",
      String(tab.dataset.accountTab === accountMode)
    );
  });

  const signinForm = $("#signin-form");
  const registerForm = $("#register-form");

  if (signinForm) signinForm.hidden = accountMode !== "signin";
  if (registerForm) registerForm.hidden = accountMode !== "register";

  document.querySelectorAll(".account-form").forEach(clearFormErrors);

  try {
    history.replaceState(
      null,
      "",
      accountMode === "register" ? "#register" : "#signin"
    );
  } catch {
    /* ignore */
  }

  if (shouldFocus) {
    $(accountMode === "register" ? "#register-name" : "#signin-email")?.focus();
  }
}

function openGateSheet(mode, opener) {
  const gate = $("#gate");
  const sheet = $("#gate-sheet");

  if (!gate || !sheet) return;

  gateOpener = opener || document.activeElement;

  setAccountMode(mode, false);

  gate.classList.add("is-open");
  sheet.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {
    $(accountMode === "register" ? "#register-name" : "#signin-email")
      ?.focus({ preventScroll: true });
  }, 450);
}

function closeGateSheet() {
  const gate = $("#gate");
  const sheet = $("#gate-sheet");

  if (!gate || !sheet || !gate.classList.contains("is-open")) return;

  gate.classList.remove("is-open");
  sheet.setAttribute("aria-hidden", "true");

  try {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  } catch {
    /* ignore */
  }

  if (gateOpener && typeof gateOpener.focus === "function") {
    gateOpener.focus({ preventScroll: true });
  }

  gateOpener = null;
}

function showGateSuccess(user, kicker, headline) {
  const inner = $("#gate-sheet-inner");

  if (!inner) return;

  const destination = getNextDestination();

  inner.innerHTML = `
    <div class="gate-success" role="status">
      <img
        class="gate-tv"
        src="${LOGO_PATH}"
        alt=""
        aria-hidden="true"
        decoding="async"
        onerror="this.remove()"
      >

      <p class="section-label">${escapeHTML(kicker)}</p>

      <h2 class="gate-sheet-title">${escapeHTML(headline)}</h2>

      <p class="gate-sheet-lede">Taking you to SideQuest…</p>

      <div class="gate-progress" aria-hidden="true"><span></span></div>

      <a class="gate-textlink" href="${destination}">Continue now</a>
    </div>

    ${gateSignatureHTML()}
  `;

  window.setTimeout(() => navigateTo(destination), 1400);
}

async function handleSignInSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');

  clearFormErrors(form);

  if (button) button.disabled = true;

  const result = await signInAccount({
    email: form.elements.email.value,
    password: form.elements.password.value
  });

  if (button) button.disabled = false;

  if (!result.ok) {
    showFormErrors(form, result.errors, result.message);
    return;
  }

  updateAccountUI();

  showGateSuccess(
    result.user,
    "",
    `Welcome back, ${getFirstName(result.user.name)}.`
  );
}

async function handleRegisterSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');

  clearFormErrors(form);

  if (button) button.disabled = true;

  const result = await registerAccount({
    name: form.elements.name.value,
    email: form.elements.email.value,
    password: form.elements.password.value,
    confirm: form.elements.confirm.value
  });

  if (button) button.disabled = false;

  if (!result.ok) {
    showFormErrors(form, result.errors, result.message);
    return;
  }

  updateAccountUI();

  showGateSuccess(
    result.user,
    "ACCOUNT CREATED",
    `You're in, ${getFirstName(result.user.name)}.`
  );
}

function handleLogout() {
  signOutAccount();

  accountFlash = "You've been logged out.";
  accountMode = "signin";

  try {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  } catch {
    /* ignore */
  }

  updateAccountUI();
  renderLogin();
}

function renderGateAccount(root, user) {
  const destination = getNextDestination();
  const savedCount = getSaved().length;
  const ticketCount = getTickets().length;

  root.innerHTML = `
    <section class="gate gate--account" id="gate">

      ${gateVideoHTML()}

      <header class="gate-top">
        ${gateLogoHTML()}

        <nav class="gate-links" aria-label="Account">
          <a class="gate-link" href="${destination}">Enter SideQuest</a>
        </nav>
      </header>

      <img class="gate-hero-tv gate-account-tv" src="${LOGO_PATH}" alt="" aria-hidden="true" decoding="async" onerror="this.remove()">

      <div class="gate-main">
        <p class="gate-kicker"></p>

        <h1 class="gate-title">
          <span>Welcome,</span>
          <span class="gate-em">${escapeHTML(getFirstName(user.name))}!</span>
        </h1>

        <p class="gate-lede">
          You're signed in as ${escapeHTML(user.email)}.
          Your plans and tickets are right where you left them.
        </p>

        <dl class="gate-facts">
          
        </dl>

        <div class="gate-cta">
          <a class="gate-button" href="${destination}">
            Continue to SideQuest <span aria-hidden="true">↗</span>
          </a>

          <a class="gate-textlink" href="./saved.html">View saved plans</a>

          <button class="gate-textlink" type="button" id="logout-button">Log out</button>
        </div>
      </div>

      <footer class="gate-bottom">
        ${musicControlsHTML()}
        <p class="gate-fine"></p>
      </footer>

    </section>
  `;

  $("#logout-button")?.addEventListener("click", handleLogout);
}

function renderGateSignedOut(root) {
  const flash = accountFlash;

  accountFlash = "";

  const hash = window.location.hash;
  const hashMode = hash === "#register" ? "register" : hash === "#signin" ? "signin" : "";

  accountMode = hashMode || "signin";

  const copy = ACCOUNT_COPY[accountMode];

  root.innerHTML = `
    <section class="gate" id="gate">

      ${gateVideoHTML()}

      <header class="gate-top">
        ${gateLogoHTML()}

        <nav class="gate-links" aria-label="Sign in or join">
          <button type="button" class="gate-link" data-gate-open="signin">Sign in</button>
          <button type="button" class="gate-link" data-gate-open="register">Join now</button>
        </nav>
      </header>

      <img
        class="gate-hero-tv"
        src="${LOGO_PATH}"
        alt=""
        aria-hidden="true"
        decoding="async"
        onerror="this.remove()"
      >

      <div class="gate-main">
        <p class="gate-kicker"></p>

        <h1 class="gate-title gate-title-culture">
          <span class="gate-em">For the youth.</span>
        </h1>

        <p class="gate-lede">
          Events, places to eat and everyday plans, all in one place, and at your fingertips no less.
          Sign in or create an account to step inside.
        </p>

        ${flash ? `<p class="gate-flash" role="status">${escapeHTML(flash)}</p>` : ""}

        <div class="gate-cta">
          <button type="button" class="gate-button" data-gate-open="register">
            Join now <span aria-hidden="true">↗</span>
          </button>

          <button type="button" class="gate-textlink" data-gate-open="signin">
            I already have an account
          </button>
        </div>
      </div>

      <footer class="gate-bottom">
        ${musicControlsHTML()}
        <p class="gate-fine"></p>
      </footer>

      <div class="gate-scrim" data-gate-close></div>

      <aside
        class="gate-sheet"
        id="gate-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-title"
        aria-hidden="true"
      >
        <button type="button" class="gate-close" data-gate-close>CLOSE ✕</button>

        <div class="gate-sheet-inner" id="gate-sheet-inner">

          <img
            class="gate-tv"
            src="${LOGO_PATH}"
            alt=""
            aria-hidden="true"
            decoding="async"
            onerror="this.remove()"
          >

          <div class="account-tabs" role="group" aria-label="Account options">
            <button
              type="button"
              class="account-tab"
              data-account-tab="signin"
              aria-pressed="${accountMode === "signin"}"
            >Sign in</button>

            <button
              type="button"
              class="account-tab"
              data-account-tab="register"
              aria-pressed="${accountMode === "register"}"
            >Create account</button>
          </div>

          <p class="section-label gate-sheet-kicker" id="account-kicker">${escapeHTML(copy.kicker)}</p>

          <h2 class="gate-sheet-title" id="account-title">${escapeHTML(copy.title)}</h2>

          <p class="gate-sheet-lede" id="account-lede">${escapeHTML(copy.lede)}</p>

          <form
            class="account-form"
            id="signin-form"
            novalidate
            ${accountMode === "signin" ? "" : "hidden"}
          >
            ${accountFieldHTML("signin", "email", "Email address", {
              type: "email",
              autocomplete: "email",
              placeholder: "you@example.com"
            })}

            ${accountFieldHTML("signin", "password", "Password", {
              type: "password",
              autocomplete: "current-password",
              placeholder: "Your password",
              password: true
            })}

            <p class="form-status" role="status" aria-live="polite"></p>

            <button class="gate-button" type="submit">
              Sign in <span aria-hidden="true">↗</span>
            </button>

            <p class="form-switch">
              New to SideQuest?
              <button type="button" class="link-button" data-account-switch="register">Create an account</button>
            </p>
          </form>

          <form
            class="account-form"
            id="register-form"
            novalidate
            ${accountMode === "register" ? "" : "hidden"}
          >
            ${accountFieldHTML("register", "name", "Full name", {
              autocomplete: "name",
              placeholder: "Your full name"
            })}

            ${accountFieldHTML("register", "email", "Email address", {
              type: "email",
              autocomplete: "email",
              placeholder: "you@example.com"
            })}

            ${accountFieldHTML("register", "password", "Password", {
              type: "password",
              autocomplete: "new-password",
              placeholder: "At least 8 characters",
              password: true
            })}

            ${accountFieldHTML("register", "confirm", "Confirm password", {
              type: "password",
              autocomplete: "new-password",
              placeholder: "Type it once more",
              password: true
            })}

            <p class="form-status" role="status" aria-live="polite"></p>

            <button class="gate-button" type="submit">
              Create account <span aria-hidden="true">↗</span>
            </button>

            <p class="form-switch">
              Already have an account?
              <button type="button" class="link-button" data-account-switch="signin">Sign in</button>
            </p>
          </form>

          <p class="account-fineprint">${escapeHTML(ACCOUNT_NOTE)}</p>

          ${gateSignatureHTML()}

        </div>
      </aside>

    </section>
  `;

  root.querySelectorAll("[data-gate-open]").forEach(button => {
    button.addEventListener("click", () =>
      openGateSheet(button.dataset.gateOpen, button)
    );
  });

  root.querySelectorAll("[data-gate-close]").forEach(element => {
    element.addEventListener("click", closeGateSheet);
  });

  $("#signin-form").addEventListener("submit", handleSignInSubmit);
  $("#register-form").addEventListener("submit", handleRegisterSubmit);

  root.querySelectorAll("[data-account-tab]").forEach(tab => {
    tab.addEventListener("click", () => setAccountMode(tab.dataset.accountTab, true));
  });

  root.querySelectorAll("[data-account-switch]").forEach(button => {
    button.addEventListener("click", () => setAccountMode(button.dataset.accountSwitch, true));
  });

  root.querySelectorAll("[data-toggle-password]").forEach(button => {
    button.addEventListener("click", () => togglePasswordVisibility(button));
  });

  if (!gateKeysBound) {
    gateKeysBound = true;

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeGateSheet();
    });
  }

  if (hashMode) {
    window.setTimeout(() => openGateSheet(hashMode), 350);
  }
}

function renderLogin() {
  const root = $("#app-content");

  if (!root) return;

  const user = getCurrentUser();

  if (user) {
    renderGateAccount(root, user);
  } else {
    renderGateSignedOut(root);
  }

  initHeroVideo();
  updateMusicUI();
}

/* ---------------------------------------------------------
   BRAND: LOGO NEXT TO EVERY "SideQuest." + BROWSER TAB ICON
--------------------------------------------------------- */

function initBrandLogos() {
  /* The full "TV switches on" intro plays once per visit, not on every page. */
  try {
    if (!sessionStorage.getItem("sidequest-intro")) {
      document.documentElement.classList.add("intro");
      sessionStorage.setItem("sidequest-intro", "1");
    }
  } catch {
    /* storage unavailable: skip the intro */
  }

  document.querySelectorAll(".logo").forEach(logo => {
    if (logo.querySelector(".logo-mark")) return;

    const text = logo.textContent.trim() || "SideQuest.";

    const mark = document.createElement("img");
    mark.className = "logo-mark";
    mark.src = LOGO_PATH;
    mark.alt = "";
    mark.decoding = "async";
    mark.setAttribute("aria-hidden", "true");
    mark.addEventListener("error", () => mark.remove());

    const word = document.createElement("span");
    word.className = "logo-word";
    word.textContent = text;

    logo.textContent = "";
    logo.append(mark, word);
  });
}

function initSignature() {
  document.querySelectorAll(".site-header .logo").forEach(logo => {
    if (logo.querySelector(".logo-signature")) return;

    const word = logo.querySelector(".logo-word");

    if (!word) return;

    const stack = document.createElement("span");
    stack.className = "logo-stack";

    const signature = document.createElement("span");
    signature.className = "logo-signature";
    signature.innerHTML =
      '<span class="sig-by">developed by</span> Tak Chakahwata';

    word.replaceWith(stack);
    stack.append(word, signature);
  });
}

function initFavicon() {
  document
    .querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]')
    .forEach(link => link.remove());

  const icon = document.createElement("link");
  icon.rel = "icon";
  icon.type = "image/png";
  icon.href = LOGO_PATH;

  const touchIcon = document.createElement("link");
  touchIcon.rel = "apple-touch-icon";
  touchIcon.href = LOGO_PATH;

  document.head.append(icon, touchIcon);
}


/* ------------------------------------------------------------------
   EVENT TICKET CARDS — WHITE DESIGN
   This supplements existing styles.css without modifying other pages.
------------------------------------------------------------------ */
(function addVerifiedEventStyles(){
  const css = `
    .verified-event-card { background: #fff !important; color: #171717 !important; border: 1px solid #e8e7e4 !important; box-shadow: 0 9px 26px rgba(0,0,0,.12); border-radius: 3px; }
    .verified-event-card .event-image { height: 230px; overflow: hidden; background: #f2f0ec; }
    .verified-event-card .event-image img { width: 100%; height: 100%; object-fit: cover; display:block; image-rendering:auto; }
    .verified-event-card .event-image.image-failed { background: #f2f0ec; }
    .verified-event-card .event-art-unavailable { padding:22px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; color:#580d13; background:linear-gradient(145deg,#fff6e8,#ece2d9); }
    .verified-event-card .event-art-unavailable span { font:700 10px 'Space Mono',monospace; text-transform:uppercase; letter-spacing:1.5px; }
    .verified-event-card .event-art-unavailable strong { font:700 clamp(21px,2vw,32px) 'Syne',sans-serif; line-height:1.08; }
    .verified-event-card .card-body { background:#fff !important; color:#161616 !important; padding:22px; }
    .verified-event-card .card-body h3 { color:#151515 !important; font-family:'Syne',sans-serif; font-size:21px; line-height:1.16; }
    .verified-event-card .card-body p { color:#4f4f4f !important; }
    .verified-event-card .card-body .card-price { color:#161616 !important; font-weight:800; font-size:14px; }
    .verified-event-card .event-card-topline { display:flex; justify-content:space-between; gap:10px; color:#7b1821; font:700 10px 'Space Mono',monospace; text-transform:uppercase; margin-bottom:12px; }
    .verified-event-card .event-card-description { display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:3; overflow:hidden; min-height:54px; }
    .verified-event-card .card-actions { display:flex; flex-wrap:wrap; gap:9px; }
    .verified-event-card .card-actions .official-ticket-link { background:#171717 !important; border:1px solid #171717 !important; color:#fff !important; font:700 11px 'Syne',sans-serif; text-decoration:none; }
    .verified-event-card .card-actions button { border:1px solid #171717 !important; color:#171717 !important; background:#fff !important; padding:12px; }
    .verified-event-card .card-actions button:hover { background:#f4efe6 !important; }
    .verified-event-card .card-actions .official-ticket-link:hover { background:#550608 !important; }
    .verified-event-card:hover { transform:translateY(-4px); }
  `;
  const el=document.createElement('style'); el.textContent=css; document.head.appendChild(el);
})();

/* =========================================================
   SIDEQUEST — GSAP SHOWCASE
   Three clearly visible, purposeful GSAP motion systems:
   1. Timeline: dramatic brand logo and entrance choreography.
   2. ScrollTrigger: staggered ticket / restaurant arrivals and hero parallax.
   3. Draggable: large floating login TV with keyboard controls.
   Bonus: GSAP card/image hover and logo hover interactions.
   If GSAP is unavailable or reduced motion is requested, all
   page content and controls remain usable without animation.
   ========================================================= */
let gsapReady = null;
const sidequestReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function loadGSAPScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
function initialiseGSAP() {
  if (gsapReady) return gsapReady;
  if (sidequestReducedMotion()) return Promise.resolve();

  gsapReady = (async () => {
    try {
      if (!window.gsap) {
        await loadGSAPScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
      }
      if (!window.ScrollTrigger) {
        await loadGSAPScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
      }
      if (!window.Draggable) {
        await loadGSAPScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min.js");
      }
      if (!window.gsap || !window.ScrollTrigger || !window.Draggable) return;
      const { gsap, ScrollTrigger, Draggable } = window;
      gsap.registerPlugin(ScrollTrigger, Draggable);
      document.documentElement.classList.add("gsap-ready", "sq-motion-enabled");
      const isSmall = window.matchMedia("(max-width: 760px)").matches;

      /* GSAP TIMELINE — a branded intro, with logo spin + overshoot. */
      const logo = document.querySelector(".site-header .logo-mark, .gate-logo .logo-mark");
      const logoWord = document.querySelector(".site-header .logo-word, .gate-logo .logo-word");
      const heading = document.querySelector(".home-copy h1, .gate-title, .page-title");
      const paragraph = document.querySelector(".home-copy p, .gate-lede, .page-intro");
      const nav = document.querySelector(".main-nav, .gate-links");
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (logo) {
        timeline.fromTo(logo,
          { autoAlpha: 0, scale: .35, rotation: -65, y: -65 },
          { autoAlpha: 1, scale: 1, rotation: 0, y: 0, duration: 1.25, ease: "back.out(2.6)" }, 0);
        timeline.to(logo,
          { rotation: 11, scale: 1.09, duration: .25, yoyo: true, repeat: 1, ease: "sine.inOut" }, 1.18);
      }
      if (logoWord) timeline.fromTo(logoWord,
        { autoAlpha: 0, x: -35, skewX: -10 },
        { autoAlpha: 1, x: 0, skewX: 0, duration: .75 }, .34);
      if (heading) timeline.fromTo(heading,
        { autoAlpha: 0, y: isSmall ? 42 : 85, rotation: -2, scale: .94 },
        { autoAlpha: 1, y: 0, rotation: 0, scale: 1, duration: 1.05, ease: "expo.out" }, .45);
      if (paragraph) timeline.fromTo(paragraph,
        { autoAlpha: 0, y: 32 },
        { autoAlpha: 1, y: 0, duration: .8 }, .87);
      if (nav) timeline.fromTo(nav,
        { autoAlpha: 0, y: -25 },
        { autoAlpha: 1, y: 0, duration: .7 }, .9);

      /* Playful but clear branding movement on hover. Clicking navigates as usual. */
      document.querySelectorAll(".site-header .logo-mark, .site-footer .logo-mark, .gate-logo .logo-mark")
        .forEach(mark => {
          const holder = mark.closest("a") || mark;
          holder.addEventListener("pointerenter", () => {
            gsap.to(mark, { rotation: 360, scale: 1.22, duration: 1, ease: "back.out(1.6)", overwrite: "auto" });
          });
          holder.addEventListener("pointerleave", () => {
            gsap.to(mark, { rotation: 0, scale: 1, duration: .65, ease: "elastic.out(1, .55)", overwrite: "auto" });
          });
        });

      /* SCROLLTRIGGER — strong staggered entrance for every real listing. */
      function animateCards() {
        const cards = Array.from(document.querySelectorAll(".result-grid .result-card"))
          .filter(card => !card.dataset.sqMotionReady);
        if (!cards.length) return;
        cards.forEach(card => card.dataset.sqMotionReady = "true");
        // Cards are grouped into rows so filtering always gets a fresh motion sequence.
        const rowSize = isSmall ? 1 : window.matchMedia("(max-width: 1000px)").matches ? 2 : 3;
        for (let i = 0; i < cards.length; i += rowSize) {
          const row = cards.slice(i, i + rowSize);
          gsap.fromTo(row,
            { autoAlpha: 0, y: isSmall ? 65 : 110, rotation: -4, scale: .86 },
            { autoAlpha: 1, y: 0, rotation: 0, scale: 1, duration: 1.05,
              stagger: .17, ease: "back.out(1.5)",
              scrollTrigger: { trigger: row[0], start: "top 97%", once: true },
              onComplete: () => gsap.set(row, { clearProps: "transform,opacity,visibility" }) }
          );
        }

        cards.forEach(card => {
          const img = card.querySelector(".event-image img");
          const body = card.querySelector(".card-body");
          // GSAP-powered microinteraction is intentionally limited to hover devices.
          if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
          card.addEventListener("pointerenter", () => {
            gsap.to(card, { y: -13, rotation: .6, scale: 1.02, duration: .35, ease: "power3.out", overwrite: "auto" });
            if (img) gsap.to(img, { scale: 1.14, rotation: 1, duration: .8, ease: "power2.out", overwrite: "auto" });
            if (body) gsap.to(body, { y: -2, duration: .35, overwrite: "auto" });
          });
          card.addEventListener("pointerleave", () => {
            gsap.to(card, { y: 0, rotation: 0, scale: 1, duration: .55, ease: "elastic.out(1, .65)", overwrite: "auto" });
            if (img) gsap.to(img, { scale: 1, rotation: 0, duration: .7, ease: "power2.out", overwrite: "auto" });
            if (body) gsap.to(body, { y: 0, duration: .4, overwrite: "auto" });
          });
        });
        ScrollTrigger.refresh();
      }
      animateCards();
      window.addEventListener("sidequest:cards-updated", animateCards);

      /* Additional ScrollTrigger narrative: the main feature image moves on scroll. */
      const heroVisual = document.querySelector(".home-visual");
      if (heroVisual) {
        gsap.fromTo(heroVisual,
          { scale: .93, rotation: 2 },
          { scale: 1, rotation: 0, ease: "none", scrollTrigger: {
            trigger: heroVisual, start: "top 90%", end: "bottom 15%", scrub: .7
          }});
      }
      document.querySelectorAll(".home-categories, .home-featured, .about-section, .saved-ticket-section")
        .forEach(section => {
          gsap.fromTo(section,
            { autoAlpha: .45, y: 65 },
            { autoAlpha: 1, y: 0, duration: 1.1, ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 85%", once: true } });
        });

      /* DRAGGABLE — the large floating login logo, including keyboard control. */
      const tv = document.querySelector(".gate-hero-tv");
      const gate = document.querySelector(".gate");
      if (tv && gate) {
        gsap.set(tv, { transformOrigin: "50% 80%" });
        timeline.fromTo(tv,
          { autoAlpha: 0, x: isSmall ? 55 : 130, y: 150, rotation: -27, scale: .5 },
          { autoAlpha: 1, x: 0, y: 0, rotation: 7, scale: 1, duration: 1.3, ease: "elastic.out(1, .55)" }, 1.05);
        const floatTween = gsap.to(tv,
          { y: -24, rotation: -6, duration: 2.1, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 2.4 });
        if (window.matchMedia("(min-width: 901px)").matches) {
          tv.removeAttribute("aria-hidden");
          tv.setAttribute("role", "button");
          tv.setAttribute("aria-label", "Move floating SideQuest TV logo. Drag or press arrow keys. Enter resets position.");
          tv.setAttribute("tabindex", "0");
          tv.style.pointerEvents = "auto";
          tv.style.cursor = "grab";
          tv.style.touchAction = "none";
          tv.addEventListener("keydown", e => {
            const d = e.shiftKey ? 36 : 16;
            const moves = { ArrowLeft: [-d,0], ArrowRight:[d,0], ArrowUp:[0,-d], ArrowDown:[0,d] };
            if (e.key === "Enter") { e.preventDefault(); floatTween.pause(); gsap.to(tv, { x: 0,y:0,rotation:7,duration:.55,ease:"back.out(2)" }); return; }
            if (!moves[e.key]) return;
            e.preventDefault(); floatTween.pause();
            gsap.to(tv, { x:`+=${moves[e.key][0]}`, y:`+=${moves[e.key][1]}`, duration: .16 });
          });
          Draggable.create(tv, {
            type: "x,y", bounds: gate, edgeResistance: .82,
            onPress() { floatTween.pause(); tv.style.cursor = "grabbing"; },
            onRelease() { tv.style.cursor = "grab"; gsap.to(tv, { rotation: 7, duration: .6, ease: "back.out(1.7)" }); }
          });
        }
      }
    } catch (err) {
      console.warn("SideQuest GSAP CDN could not load; the website still works.", err);
    }
  })();
  return gsapReady;
}

/* ---------------------------------------------------------
   STARTUP
--------------------------------------------------------- */

async function startSideQuest() {
  if (!enforceLoginGate()) return;

  initBrandLogos();
  initSignature();
  initFavicon();
  initAccountNav();
  initNavigation();
  initMusic();

  await loadAPIData();

  const page = document.body.dataset.page;

  switch (page) {
    case "home":
      renderHome();
      break;

    case "events":
      renderEvents();
      break;

    case "food":
      renderFood();
      break;

    case "saved":
      renderSaved();
      break;

    case "surprise":
      renderSurprise();
      break;

    case "about":
      renderAbout();
      break;

    case "login":
      renderLogin();
      break;

    default:
      renderHome();
  }

  if (!$("#video-sound")) ensureMiniMusicControl();

  updateMusicUI();
  window.dispatchEvent(new CustomEvent("sidequest:page-rendered"));
  initialiseGSAP();
}

/* Hide and redirect straight away if someone isn't signed in. */
enforceLoginGate();

/* Pressing Back after logging out must not reveal a protected page. */
window.addEventListener("pageshow", event => {
  if (event.persisted) enforceLoginGate();
});

document.addEventListener("DOMContentLoaded", startSideQuest);