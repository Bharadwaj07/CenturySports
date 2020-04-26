export const SPORTS = [
    {
        sport: "cricket",
        details: [
            {
                country: "India",
                officialWebsite: 'https://www.bcci.tv/',
                teamImg: "teamindcrick.jpg",
                overview: {
                    test: { rank: 1, rating: 116, points: 5211 },
                    odi: { rank: 2, rating: 118, points: 7939 },
                    t20: { rank: 4, rating: 264, points: 12141 }
                },
                players: [
                    { name: "Bhuvneshwar Kumar", imgUrl: "assets/images/sports/cricket/india/bhuvneshwar-kumar.webp" },
                    { name: "Dinesh Karthik", imgUrl: "assets/images/sports/cricket/india/dinesh-karthik.webp" },
                    { name: "Hardik Pandya", imgUrl: "assets/images/sports/cricket/india/hardik-pandya.webp" },
                    { name: "Jasprit Bumrah", imgUrl: "assets/images/sports/cricket/india/jasprit-bumrah.webp" },
                    { name: "Kedar Jadhav", imgUrl: "assets/images/sports/cricket/india/kedar-jadhav.webp" },
                    { name: "Kuldeep Yadav", imgUrl: "assets/images/sports/cricket/india/kuldeep-yadav.webp" },
                    { name: "Lokesh Rahul", imgUrl: "assets/images/sports/cricket/india/lokesh-rahul.webp" },
                    { name: "Mohammed Shami", imgUrl: "assets/images/sports/cricket/india/mohammed-shami.webp" },
                    { name: "MS Dhoni", imgUrl: "assets/images/sports/cricket/india/ms-dhoni.webp" },
                    { name: "Ravindra Jadeja", imgUrl: "assets/images/sports/cricket/india/ravindra-jadeja.webp" },
                    { name: "Rohit Sharma", imgUrl: "assets/images/sports/cricket/india/rohit-sharma.webp" },
                    { name: "Shikhar Dhawan", imgUrl: "assets/images/sports/cricket/india/shikhar-dhawan.webp" },
                    { name: "Vijay Shankar", imgUrl: "assets/images/sports/cricket/india/vijay-shankar.webp" },
                    { name: "Virat Kohli", imgUrl: "assets/images/sports/cricket/india/virat-kohli.webp" },
                    { name: "Yuzvendra Chahal", imgUrl: "assets/images/sports/cricket/india/yuzvendra-chahal.webp" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Eng 1st T20',
                        venue: "Motera Stadium Ahmadabad",
                        embed: 'Sardar%20Patel%20Stadium%20or%20Motera%20Cricket%20Stadium%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-5-1'),
                        details: 'Ind Vs Aus 12st ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Melbourne%20Cricket%20ground&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-5-14'),
                        details: 'Ind Vs Nz  Test Series',
                        venue: "Rajeev Gandhi stadium",
                        embed: 'Rajiv%20Gandhi%20International%20Cricket%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-6-5'),
                        details: 'Aus vs Ind  Test',
                        venue: "MCG Melburn Australia",
                        embed: 'Adelaide%20Oval&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-6-14'),
                        details: 'Ind Vs Eng 2nd ODI',
                        venue: "Docklands Australia",
                        embed: 'Docklands%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "India qualify for ICC Women’s Cricket World Cup 2021",
                        newsImg: "",
                        news: "The ICC Women’s Cricket World Cup Qualifier is scheduled to be played from 3-19 July in Sri Lanka, this is subject to review due to the COVID-19 pandemic. The 10 teams vying for the three remaining places in the ICC Women’s Cricket World Cup 2021 will be the hosts, Sri Lanka, along with Pakistan and West Indies from the ICC Women’s Championship, the two other teams with ODI status, Bangladesh and Ireland, and the winners of the five regional qualifiers - Thailand (Asia), Zimbabwe (Africa), Papua New Guinea (East Asia Pacific), United States of America (Americas) and the Netherlands (Europe)."
                    },
                    {
                        newsTitle: "Domestic matches put on hold",
                        newsImg: "",
                        news: "In view of the ongoing Novel Corona Virus (COVID-19) outbreak, the BCCI on Saturday announced that all matches of the Paytm Irani Cup, Senior Women One-Day Knockout, Vizzy Trophy, Senior Women One-Day Challenger, Women Under 19 One-Day knockout, Women’s Under 19 T20 League, Super League and knockout, Women Under 19 T20  Challenger Trophy, Women Under 23 knockout, Women’s Under 23 One-Day Challenger have been put on hold till further notice."
                    },
                    {
                        newsTitle: "India’s ODI squad for South Africa home series announced",
                        newsImg: "",
                        news: "The All-India Senior Selection Committee on Sunday announced the Indian Cricket Team for the upcoming three-match ODI series against South Africa. India’s ODI squad: Shikhar Dhawan, Prithvi Shaw, Virat Kohli (C ), KL Rahul, Manish Pandey, Shreyas Iyer, Rishabh Pant, Hardik Pandya, Ravindra Jadeja, Bhuvneshwar Kumar, Yuzvendra Chahal, Jasprit Bumrah, Navdeep Saini, Kuldeep Yadav, Shubman Gill."
                    }
                ]
            },
            {
                country: "Australia",
                officialWebsite: 'https://www.cricket.com.au/',
                teamImg: "AusCricket.jpg",
                overview: {
                    test: { rank: 3, rating: 176, points: 5211 },
                    odi: { rank: 3, rating: 148, points: 7939 },
                    t20: { rank: 2, rating: 268, points: 12141 }
                },
                players: [
                    { name: "Aaron Finch", imgUrl: "assets/images/sports/cricket/australia/aaron-finch.webp" },
                    { name: "Adam Zampa", imgUrl: "assets/images/sports/cricket/australia/adam-zampa.webp" },
                    { name: "Alex Carey", imgUrl: "assets/images/sports/cricket/australia/alex-carey.webp" },
                    { name: "David Warner", imgUrl: "assets/images/sports/cricket/australia/david-warner.webp" },
                    { name: "Glenn Maxwell", imgUrl: "assets/images/sports/cricket/australia/glenn-maxwell.webp" },
                    { name: "Jason Behrendorff", imgUrl: "assets/images/sports/cricket/australia/jason-behrendorff.webp" },
                    { name: "Kane Richardson", imgUrl: "assets/images/sports/cricket/australia/kane-richardson.webp" },
                    { name: "Marcus Stoinis", imgUrl: "assets/images/sports/cricket/australia/marcus-stoinis.webp" },
                    { name: "Mitchell Starc", imgUrl: "assets/images/sports/cricket/australia/mitchell-starc.webp" },
                    { name: "Nathan Coulter Nile", imgUrl: "assets/images/sports/cricket/australia/nathan-coulter-nile.webp" },
                    { name: "Nathan Lyon", imgUrl: "assets/images/sports/cricket/australia/nathan-lyon.webp" },
                    { name: "Pat Cummins", imgUrl: "assets/images/sports/cricket/australia/pat-cummins.webp" },
                    { name: "Shaun Marsh", imgUrl: "assets/images/sports/cricket/australia/shaun-marsh.webp" },
                    { name: "Steven Smith", imgUrl: "assets/images/sports/cricket/australia/steven-smith.webp" },
                    { name: "usman-khawaja", imgUrl: "assets/images/sports/cricket/australia/usman-khawaja.webp" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Sardar%20Patel%20Stadium%20or%20Motera%20Cricket%20Stadium%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Melbourne%20Cricket%20ground&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Rajiv%20Gandhi%20International%20Cricket%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Adelaide%20Oval&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Docklands%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "Hampshire pull plug on Lyon county deal",
                        newsImg: "",
                        news: "Nathan Lyon will not feature for Hampshire this year after a mutual decision was made to cancel the Australia off-spinner's contract. Lyon would have added considerable pedigree to Hampshire's slow bowling stocks but the coronavirus pandemic has delayed the start of the domestic season to at least May 28."
                    },
                    {
                        newsTitle: "Game changer: Rolton's records leave lasting legacy",
                        newsImg: "",
                        news: "Two-time World Cup winner Karen Rolton forged an incredible career as a power-hitting allrounder during an extraordinary time for the women's game.When Karen Rolton returned home from a successful Ashes tour in 2001 that saw her break the record for the highest ever score in a women's Test, she walked back into her job at a motel in Adelaide and was greeted by a photo that every batter would baulk at. "
                    },
                ]
            },
            {
                country: "England",
                officialWebsite: 'https://www.ecb.co.uk/',
                teamImg: "engcricket.jpg",
                overview: {
                    test: { rank: 1, rating: 116, points: 5211 },
                    odi: { rank: 2, rating: 118, points: 7939 },
                    t20: { rank: 4, rating: 264, points: 12141 }
                },
                players: [
                    { name: "Adil Rashid", imgUrl: "assets/images/sports/cricket/england/adil-rashid.webp" },
                    { name: "Ben Stokes", imgUrl: "assets/images/sports/cricket/england/ben-stokes.webp" },
                    { name: "Chris Woakes", imgUrl: "assets/images/sports/cricket/england/chris-woakes.webp" },
                    { name: "Colin De Grandhomme", imgUrl: "assets/images/sports/cricket/england/colin-de-grandhomme.webp" },
                    { name: "Colin Munro", imgUrl: "assets/images/sports/cricket/england/colin-munro.webp" },
                    { name: "Eoin Morgan", imgUrl: "assets/images/sports/cricket/england/eoin-morgan.webp" },
                    { name: "Henry Nicholls", imgUrl: "assets/images/sports/cricket/england/henry-nicholls.webp" },
                    { name: "Ish Sodhi", imgUrl: "assets/images/sports/cricket/england/ish-sodhi.webp" },                    
                    { name: "James Neesham", imgUrl: "assets/images/sports/cricket/england/james-neesham.webp" },
                    { name: "James Vince", imgUrl: "assets/images/sports/cricket/england/james-vince.webp" },
                    { name: "Jason Roy", imgUrl: "assets/images/sports/cricket/england/jason-roy.webp" },
                    { name: "Joe Root", imgUrl: "assets/images/sports/cricket/england/joe-root.webp" },
                    { name: "Jofra Archer", imgUrl: "assets/images/sports/cricket/england/jofra-archer.webp" },
                    { name: "Jonny Bairstow", imgUrl: "assets/images/sports/cricket/england/jonny-bairstow.webp" },
                    { name: "Jos Buttler", imgUrl: "assets/images/sports/cricket/england/jos-buttler.webp" },
                    { name: "Kane Williamson", imgUrl: "assets/images/sports/cricket/england/kane-williamson.webp" },
                    { name: "Liam Dawson", imgUrl: "assets/images/sports/cricket/england/liam-dawson.webp" },
                    { name: "Liam Plunkett", imgUrl: "assets/images/sports/cricket/england/liam-plunkett.webp" },
                    { name: "Lockie Ferguson", imgUrl: "assets/images/sports/cricket/england/lockie-ferguson.webp" },
                    { name: "Mark Wood", imgUrl: "assets/images/sports/cricket/england/mark-wood.webp" },
                    { name: "Martin Guptill", imgUrl: "assets/images/sports/cricket/england/martin-guptill.webp" },
                    { name: "Matt Henry", imgUrl: "assets/images/sports/cricket/england/matt-henry.webp" },
                    { name: "Mitchell Santner", imgUrl: "assets/images/sports/cricket/england/mitchell-santner.webp" },
                    { name: "Moeen Ali", imgUrl: "assets/images/sports/cricket/england/moeen-ali.webp" },
                    { name: "Ross Taylor", imgUrl: "assets/images/sports/cricket/england/ross-taylor.webp" },
                    { name: "Tim Southee", imgUrl: "assets/images/sports/cricket/england/tim-southee.webp" },
                    { name: "Tom Blundell", imgUrl: "assets/images/sports/cricket/england/tom-blundell.webp" },
                    { name: "Tom Curran", imgUrl: "assets/images/sports/cricket/england/tom-curran.webp" },
                    { name: "Tom Latham", imgUrl: "assets/images/sports/cricket/england/tom-latham.webp" },
                    { name: "Trent Boult", imgUrl: "assets/images/sports/cricket/england/trent-boult.webp" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Sardar%20Patel%20Stadium%20or%20Motera%20Cricket%20Stadium%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Melbourne%20Cricket%20ground&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Rajiv%20Gandhi%20International%20Cricket%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Adelaide%20Oval&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Docklands%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "Yorkshire CCC will be ready for saturation cricket",
                        newsImg: "",
                        news: "The England and Wales Cricket Board is modelling potential schedules based on whether the season can begin in June, July or August.The governing body has already stated that it will prioritise money-spinning white-ball games to help struggling counties, which means that the T20 Blast will be top of the agenda.It is still hoped that some form of County Championship will be possible, although it depends on the length of the lockdown."
                    },
                    {
                        newsTitle: "Paul Farbrace: 'England's World Cup triumph was hard for me to watch after walking away'",
                        newsImg: "",
                        news: "Lockdown is allowing everyone time for reflection that might not otherwise have been possible. Even with the benefit of hindsight, though, Paul Farbrace has no regrets about walking away from England before one of the sport’s biggest summers.Farbrace played a critical role alongside Trevor Bayliss in turning England from one-day tortoises into the fastest of 50-over hares. He was also an immensely well-respected member of England’s coaching staff."
                    },
                    {
                        newsTitle: "India’s ODI squad for South Africa home series announced",
                        newsImg: "",
                        news: "The All-India Senior Selection Committee on Sunday announced the Indian Cricket Team for the upcoming three-match ODI series against South Africa. India’s ODI squad: Shikhar Dhawan, Prithvi Shaw, Virat Kohli (C ), KL Rahul, Manish Pandey, Shreyas Iyer, Rishabh Pant, Hardik Pandya, Ravindra Jadeja, Bhuvneshwar Kumar, Yuzvendra Chahal, Jasprit Bumrah, Navdeep Saini, Kuldeep Yadav, Shubman Gill."
                    }
                ]
            },
            {
                country: "NewZealand",
                officialWebsite: 'https://www.nzc.nz/cricketnation',
                teamImg: "newzealand.jpg",
                overview: {
                    test: { rank: 1, rating: 116, points: 5211 },
                    odi: { rank: 2, rating: 118, points: 7939 },
                    t20: { rank: 4, rating: 264, points: 12141 }
                },
                players: [
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Sardar%20Patel%20Stadium%20or%20Motera%20Cricket%20Stadium%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Melbourne%20Cricket%20ground&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Rajiv%20Gandhi%20International%20Cricket%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Adelaide%20Oval&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Docklands%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "Another 100 for Derek Walker",
                        newsImg: "",
                        news: "New Zealand umpire Derek Walker is about to raise his third century in as many months.The former Otago cricketer will stand 100th first-class match when Otago's sixth-round Plunket Shield clash with Central Districts gets underway in his hometown of Dunedin."
                    },
                    {
                        newsTitle: "Lucrative IPL contracts set to elude Black Caps",
                        newsImg: "",
                        news: "Neesham, 29, was the only New Zealand player to pick up a contract at the IPL auction in December, signing on with the Kings XI Punjab on a $107,000 contract.Fellow Kane Williamson (Sunrisers Hyderabad), Lockie Ferguson (Kolkata Knight Riders), Mitchell Santner (Chennai Super Kings) and Mitchell McClenaghan (Mumbai Indians) were all retained by their sides, while Trent Boult was traded from the Delhi Capitals to Mumbai.The tournament was due to start on 29 March, before being pushed back to 15 April.It now appeared to be delayed indefinitely due to Covid-19."
                    }
                ]
            }
        ]
    },
    {
        sport: "football",
        details: [
            {
                country: "Brazil",
                officialWebsite: 'https://www.cbf.com.br/',
                teamImg: "brazilFB.jpg",
                overview: {
                    fifa: { rank: 3, points: 5211 },
                    stats: { captain: 'Dani Alves', coach: 'Tite' },

                },
                players: [
                    { name: "Alex Sandro", imgUrl: "assets/images/sports/football/brazil/alex-sandro.jpeg" },
                    { name: "Alex Telles", imgUrl: "assets/images/sports/football/brazil/alex-telles.jpeg" },
                    { name: "Casemiro", imgUrl: "assets/images/sports/football/brazil/casemiro.jpeg" },
                    { name: "Dani Alves", imgUrl: "assets/images/sports/football/brazil/dani-alves.jpeg" },
                    { name: "Danilo", imgUrl: "assets/images/sports/football/brazil/danilo.jpeg" },
                    { name: "Eder Militao", imgUrl: "assets/images/sports/football/brazil/eder-militao.jpeg" },
                    { name: "Ederson Santana De Moraes", imgUrl: "assets/images/sports/football/brazil/ederson-santana-de-moraes.jpeg" },
                    { name: "Everton Ribeiro", imgUrl: "assets/images/sports/football/brazil/everton-ribeiro.jpeg" },               
                    { name: "Everton Soares", imgUrl: "assets/images/sports/football/brazil/everton-soares.jpeg" },
                    { name: "Fabinho", imgUrl: "assets/images/sports/football/brazil/fabinho.jpeg" },
                    { name: "Felipe Augusto De Almeida Monteiro", imgUrl: "assets/images/sports/football/brazil/felipe-augusto-de-almeida-monteiro.jpeg" },
                    { name: "Gabriel Barbosa", imgUrl: "assets/images/sports/football/brazil/gabriel-barbosa.jpeg" },
                    { name: "Gabriel Jesus", imgUrl: "assets/images/sports/football/brazil/gabriel-jesus.jpeg" },
                    { name: "Mario Fernandes", imgUrl: "assets/images/sports/football/brazil/mario-fernandes.jpeg" },
                    { name: "Marquinhos", imgUrl: "assets/images/sports/football/brazil/marquinhos.jpeg" },               
                    { name: "Neymar", imgUrl: "assets/images/sports/football/brazil/neymar.jpeg" },
                    { name: "Philippe Coutinho", imgUrl: "assets/images/sports/football/brazil/philippe-coutinho.jpeg" },
                    { name: "Richarlison", imgUrl: "assets/images/sports/football/brazil/richarlison.jpeg" },
                    { name: "Roberto Firmino", imgUrl: "assets/images/sports/football/brazil/roberto-firmino.jpeg" },
                    { name: "Thiago Silva", imgUrl: "assets/images/sports/football/brazil/thiago-silva.jpeg" },
                    { name: "Weverton Pereira Da Silva", imgUrl: "assets/images/sports/football/brazil/weverton-pereira-da-silva.jpeg" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: '%20De%20Meer%20Stadion&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Estadio%20Da%20Luz&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Juventus%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Anfield&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'First%20National%20Bank%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "Kopenhagen launches Easter Egg of the Brazilian team",
                        newsImg: "",
                        news: "Surely you have already enjoyed yourself with a sweet victory by rout of Brazil. At Easter this year, to remember our historic triumphs, Kopenhagen acquired the right to license and use the CBF brand and presents the Brazilian Selection Chocolate Egg.The product contains 150 grams of milk chocolate, filled with chocolate chips, and comes in a green, yellow and blue packaging. To make the date even more special, Ovo accompanies a mini ball of the official mascot of the Brazilian Football Teams, Canarinho."
                    },
                    {
                        newsTitle: "Women's team moves up one more position in the FIFA ranking and occupies the 8th place",
                        newsImg: "",
                        news: "The Women's Team moved up one more position in the FIFA National Team Ranking. In this Friday, 27th update, which takes into account the first FIFA date of the year, the team appears in 8th position, tied with Canada, both with 1,958 points.In the first challenge of the year, in March, the Women's Team competed in the International Tournament of France. In the competition, Brazil drew with the vice-world champions, the Netherlands, in 0 to 0, and with Canada, in 2 to 2. Both results were important for the team to reach another place in the official list. In the tournament, the Brazilians also suffered their first defeat at the helm of Pia Sundhage, against France, 1-0."
                    },
                    {
                        newsTitle: "BRAZIL TIES WITH CANADA AT THE CLOSE OF THE INTERNATIONAL TOURNAMENT OF FRANCE",
                        newsImg: "",
                        news: "The Women's Team ended their participation in the International Tournament of France, on Tuesday (10), with a 2-2 draw against Canada. At the Stade de L'Épopée, in Calais (FRA), Brazil dominated the first half and even opened 2-0 with Marta and Ludmila, but, in the complementary stage Matheson and Beckie left everything the same for the Canadians. Canarinho ends the competition with two draws and a defeat.With an eye on the Tokyo Olympic Games, the Brazilian team will return to the field on the April FIFA Date to face Costa Rica, on the 8th, and the United States, on the 14th. "
                    }
                ]
            },
            {
                country: "Argentina",
                officialWebsite: 'https://mundoalbiceleste.com/',
                teamImg: "argentinaFB.jpg",
                overview: {
                    fifa: { rank: 3, points: 5211 },
                    stats: { captain: 'Dani Alves', coach: 'Tite' },
                },
                players: [
                    { name: "Alexis Mac Allister", imgUrl: "assets/images/sports/football/argentina/alexis-mac-allister.jpeg" },
                    { name: "Exequiel palacios", imgUrl: "assets/images/sports/football/argentina/exequiel-palacios.jpeg" },
                    { name: "German Pezzella", imgUrl: "assets/images/sports/football/argentina/german-pezzella.jpeg" },
                    { name: "Giovani Lo Celso", imgUrl: "assets/images/sports/football/argentina/giovani-lo-celso.jpeg" },
                    { name: "Guido Rodriguez", imgUrl: "assets/images/sports/football/argentina/guido-rodriguez.jpeg" },
                    { name: "Juan Musso", imgUrl: "assets/images/sports/football/argentina/juan-musso.jpeg" },
                    { name: "Lautaro Martinez", imgUrl: "assets/images/sports/football/argentina/lautaro-martinez.jpeg" },
                    { name: "Leandro Paredes", imgUrl: "assets/images/sports/football/argentina/leandro-paredes.jpeg" },
                    { name: "Leonardo Balerdi", imgUrl: "assets/images/sports/football/argentina/leonardo-balerdi.jpeg" },
                    { name: "Lionel Messi", imgUrl: "assets/images/sports/football/argentina/lionel-messi.jpeg" },
                    { name: "Lucas Ocampos", imgUrl: "assets/images/sports/football/argentina/lucas-ocampos.jpeg" },
                    { name: "Marcos Acuna", imgUrl: "assets/images/sports/football/argentina/marcos-acuna.jpeg" },
                    { name: "Nehuen Perez", imgUrl: "assets/images/sports/football/argentina/nehuen-perez.jpeg" },
                    { name: "Nicolas Dominguez", imgUrl: "assets/images/sports/football/argentina/nicolas-dominguez.jpeg" },
                    { name: "Nicolas Gonzalez", imgUrl: "assets/images/sports/football/argentina/nicolas-gonzalez.jpeg" },
                    { name: "Nicolas Otamendi", imgUrl: "assets/images/sports/football/argentina/nicolas-otamendi.jpeg" },
                    { name: "Nicolas Tagliafico", imgUrl: "assets/images/sports/football/argentina/nicolas-tagliafico.jpeg" },
                    { name: "Paulo Dybala", imgUrl: "assets/images/sports/football/argentina/paulo-dybala.jpeg" },
                    { name: "Renzo Saravia", imgUrl: "assets/images/sports/football/argentina/renzo-saravia.jpeg" },
                    { name: "Roberto Pereyra", imgUrl: "assets/images/sports/football/argentina/roberto-pereyra.jpeg" },
                    { name: "Rodrigo De Paul", imgUrl: "assets/images/sports/football/argentina/rodrigo-de-paul.jpeg" },
                    { name: "Sergio Aguero", imgUrl: "assets/images/sports/football/argentina/sergio-aguero.jpeg" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: '%20De%20Meer%20Stadion&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Estadio%20Da%20Luz&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Juventus%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Anfield&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'First%20National%20Bank%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "Argentina legend Mario Kempes wants Lautaro Martinez to join Barcelona",
                        newsImg: "",
                        news: "Argentina legend Mario Kempes has urged Lautaro Martinez to join Lionel Messi at Barcelona.Mario Kempes would like for Lautaro Martinez to leave Inter and join Lionel Messi at Barcelona as he thinks it could be a good leap for the Argentina man. Speaking with TuttoSport, here’s what Kempes had to say:'INTER ARE A GREAT CLUB AND THEY ARE KNOWN WORLD WIDE BUT BARCELONA IS TOTALLY DIFFERENT. THE TRAIN ONLY PASSES ONCE IN YOUR LIFE.'PLAYING WITH MESSI WOULD BE FANTASTIC FOR HIM. IF HE STAYS WITH INTER, IT COULD ALSO BE GOOD FOR HIM TO CONTINUE GAINING EXPERIENCE. IT’S BEEN A FEW YEARS NOW HE HAS SHOWN THAT HE’S A GREAT NUMBER NINE. HE HAS SHOWN IT WITH INTER AND WITH ARGENTINA.'"
                    },
                    {
                        newsTitle: "Argentine legend Crespo: ‘Messi’s greatness goes beyond winning the World Cup’",
                        newsImg: "",
                        news: "This Wednesday, former striker Hernán Crespo spoke about Lionel Messi in an interview with Diario Olé. He believes that ‘it is very difficult to be Messi’, because ‘nobody can put yourself in his place’ and that the Barcelona legend is “much more than a great soccer player’.“His greatness goes much further than as a player or athlete, he is an example of a professional, with seriousness, honesty, and always being the right person. I think he is much more than a great soccer player.”, said Crespo. "
                    },
                ]
            },
            {
                country: "England",
                officialWebsite: 'http://www.thefa.com/',
                teamImg: "engFb.jpg",
                overview: {
                    fifa: { rank: 3, points: 5211 },
                    stats: { captain: 'Dani Alves', coach: 'Tite' },
                },
                players: [
                    { name: "Alex Oxalde Chamberlain", imgUrl: "assets/images/sports/football/england/alex-oxalde-chamberlain.jpeg" },
                    { name: "Ben Chilwell", imgUrl: "assets/images/sports/football/england/ben-chilwell.jpeg" },
                    { name: "Callum Hudson Odoi", imgUrl: "assets/images/sports/football/england/callum-hudson-odoi.jpeg" },
                    { name: "Callum Wilson", imgUrl: "assets/images/sports/football/england/callum-wilson.jpeg" },
                    { name: "Danny Rose", imgUrl: "assets/images/sports/football/england/danny-rose.jpeg" },
                    { name: "Dean Henderson", imgUrl: "assets/images/sports/football/england/dean-henderson.jpeg" },
                    { name: "Declan Rice", imgUrl: "assets/images/sports/football/england/declan-rice.jpeg" },
                    { name: "Dele Alli", imgUrl: "assets/images/sports/football/england/dele-alli.jpeg" },                    
                    { name: "Eric Dier", imgUrl: "assets/images/sports/football/england/eric-dier.jpeg" },
                    { name: "Fabian Delph", imgUrl: "assets/images/sports/football/england/fabian-delph.jpeg" },
                    { name: "Fikayo Tomori", imgUrl: "assets/images/sports/football/england/fikayo-tomori.jpeg" },
                    { name: "Harry Kane", imgUrl: "assets/images/sports/football/england/harry-kane.jpeg" },
                    { name: "Harry Maguire", imgUrl: "assets/images/sports/football/england/harry-maguire.jpeg" },
                    { name: "Harry Winks", imgUrl: "assets/images/sports/football/england/harry-winks.jpeg" },
                    { name: "Jack Butland", imgUrl: "assets/images/sports/football/england/jack-butland.jpeg" },                    
                    { name: "Jadon Sancho", imgUrl: "assets/images/sports/football/england/jadon-sancho.jpeg" },
                    { name: "James Maddison", imgUrl: "assets/images/sports/football/england/james-maddison.jpeg" },
                    { name: "James Tarkowski", imgUrl: "assets/images/sports/football/england/james-tarkowski.jpeg" },
                    { name: "James Ward Prowse", imgUrl: "assets/images/sports/football/england/james-ward-prowse.jpeg" },
                    { name: "Jesse Lingard", imgUrl: "assets/images/sports/football/england/jesse-lingard.jpeg" },
                    { name: "Joe Gomez", imgUrl: "assets/images/sports/football/england/joe-gomez.jpeg" },
                    { name: "John Stones", imgUrl: "assets/images/sports/football/england/john-stones.jpeg" },
                    { name: "Jordan Henderson", imgUrl: "assets/images/sports/football/england/jordan-henderson.jpeg" },
                    { name: "Jordan Picjford", imgUrl: "assets/images/sports/football/england/jordan-picjford.jpeg" },
                    { name: "Kieran Trippier", imgUrl: "assets/images/sports/football/england/kieran-trippier.jpeg" },
                    { name: "Kyle Walker", imgUrl: "assets/images/sports/football/england/kyle-walker.jpeg" },
                    { name: "Marcus Rashford", imgUrl: "assets/images/sports/football/england/marcus-rashford.jpeg" },
                    { name: "Mason Mount", imgUrl: "assets/images/sports/football/england/mason-mount.jpeg" },
                    { name: "Michael Keane", imgUrl: "assets/images/sports/football/england/michael-keane.jpeg" },
                    { name: "Nathan Redmond", imgUrl: "assets/images/sports/football/england/nathan-redmond.jpeg" },
                    { name: "Nick Pope", imgUrl: "assets/images/sports/football/england/nick-pope.jpeg" },
                    { name: "Raheem Sterling", imgUrl: "assets/images/sports/football/england/raheem-sterling.jpeg" },
                    { name: "Ross Barkley", imgUrl: "assets/images/sports/football/england/ross-barkley.jpeg" },
                    { name: "Tammy Abraham", imgUrl: "assets/images/sports/football/england/tammy-abraham.jpeg" },
                    { name: "Tom Heaton", imgUrl: "assets/images/sports/football/england/tom-heaton.jpeg" },
                    { name: "Trent Alexander Arnold", imgUrl: "assets/images/sports/football/england/trent-alexander-arnold.jpeg" },
                    { name: "Tyrone Mings", imgUrl: "assets/images/sports/football/england/tyrone-mings.jpeg" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: '%20De%20Meer%20Stadion&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Estadio%20Da%20Luz&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Juventus%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Anfield&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'First%20National%20Bank%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "OUR LIONESSES JOIN FORCES WITH GOOGLE CLOUD TO URGE PEOPLE TO HELP PROTECT THE NHS",
                        newsImg: "",
                        news: "England Women's stars such as Lucy Bronze, Alex Greenwood, Georgia Stanway and Jordan Nobbs have linked up with Google Cloud to back a campaign to kick Coronavirus into touch.The Lionesses quartet are urging people across the UK to stay home, protect the NHS and ultimately save lives.You can watch the video as the girls share the message as well as show their skills while at home during the latest week of lockdown."
                    },
                    {
                        newsTitle: "HEAR HOW THE ENGLAND MEN'S SENIOR TEAM GAVE FAN REBECCA HOWELL INSPIRATION IN 2019",
                        newsImg: "",
                        news: "It was a birthday present for me from both my family and a friend, who came along to Wembley with me and it's a night I won't forget.Football has been up and down for me really, and it's been a difficult few years since I was suffering depression with anxiety.Sometimes I found it hard to get up in the morning and sometimes, I feel like I just don't want to do anything.However, when I watched the World Cup 2018, I fell in love with football again and it really helped me.Seeing the England team doing so well, with the people all singing and cheering during our games, it was like a giant party and it gave me the enthusiasm to go and watch football again."
                    },
                ]
            },
            {
                country: "Italy",
                officialWebsite: 'https://www.football-italia.net/',
                teamImg: "italyFB.jpg",
                overview: {
                    fifa: { rank: 3, points: 5211 },
                    stats: { captain: 'Dani Alves', coach: 'Tite' },
                },
                players: [
                    { name: "Alessandro Florenzi", imgUrl: "assets/images/sports/football/italy/alessandro-florenzi.jpeg" },
                    { name: "Alessio Cragno", imgUrl: "assets/images/sports/football/italy/alessio-cragno.jpeg" },
                    { name: "Alessio Romagnoli", imgUrl: "assets/images/sports/football/italy/alessio-romagnoli.jpeg" },
                    { name: "Alex Meret", imgUrl: "assets/images/sports/football/italy/alex-meret.jpeg" },
                    { name: "Andrea Belotti", imgUrl: "assets/images/sports/football/italy/andrea-belotti.jpeg" },
                    { name: "Andrea Cistana", imgUrl: "assets/images/sports/football/italy/andrea-cistana.jpeg" },
                    { name: "Antonio Miranteabc", imgUrl: "assets/images/sports/football/italy/antonio-mirante.jpeg" },
                    { name: "Armando Izzo", imgUrl: "assets/images/sports/football/italy/armando-izzo.jpeg" },
                    { name: "Bryan Cristante", imgUrl: "assets/images/sports/football/italy/bryan-cristante.jpeg" },
                    { name: "Ciro Immobile", imgUrl: "assets/images/sports/football/italy/ciro-immobile.jpeg" },
                    { name: "Cristiano Biraghi", imgUrl: "assets/images/sports/football/italy/cristiano-biraghi.jpeg" },
                    { name: "Cristiano Piccini", imgUrl: "assets/images/sports/football/italy/cristiano-piccini.jpeg" },
                    { name: "Danilo D'ambrosio", imgUrl: "assets/images/sports/football/italy/danilo-d'ambrosio.jpeg" },
                    { name: "Emerson Palmieri", imgUrl: "assets/images/sports/football/italy/emerson-palmieri.jpeg" },
                    { name: "Fabio Quagliarella", imgUrl: "assets/images/sports/football/italy/fabio-quagliarella.jpeg" },
                    { name: "Federico Bernardeschi", imgUrl: "assets/images/sports/football/italy/federico-bernardeschi.jpeg" },
                    { name: "Federico Chiesa", imgUrl: "assets/images/sports/football/italy/federico-chiesa.jpeg" },
                    { name: "Francesco Acerbi", imgUrl: "assets/images/sports/football/italy/francesco-acerbi.jpeg" },
                    { name: "Gaetano Cartrovilli", imgUrl: "assets/images/sports/football/italy/gaetano-cartrovilli.jpeg" },
                    { name: "Gianluca Mancini", imgUrl: "assets/images/sports/football/italy/gianluca-mancini.jpeg" },
                    { name: "Gianluigi Donnarumma", imgUrl: "assets/images/sports/football/italy/gianluigi-donnarumma.jpeg" },
                    { name: "Giorgio Chiellini", imgUrl: "assets/images/sports/football/italy/giorgio-chiellini.jpeg" },
                    { name: "Giovanni Di Lorenzo", imgUrl: "assets/images/sports/football/italy/giovanni-di-lorenzo.jpeg" },
                    { name: "Jorginho", imgUrl: "assets/images/sports/football/italy/jorginho.jpeg" },
                    { name: "Kevin Lasagna", imgUrl: "assets/images/sports/football/italy/kevin-lasagna.jpeg" },
                    { name: "Leonardo Bonucci", imgUrl: "assets/images/sports/football/italy/leonardo-bonucci.jpeg" },
                    { name: "Leonardo Pavoletti", imgUrl: "assets/images/sports/football/italy/leonardo-pavoletti.jpeg" },
                    { name: "Leonardo Spinazzola", imgUrl: "assets/images/sports/football/italy/leonardo-spinazzola.jpeg" },
                    { name: "Lorenzo Insigne", imgUrl: "assets/images/sports/football/italy/lorenzo-insigne.jpeg" },
                    { name: "Lorenzo Pellegrini", imgUrl: "assets/images/sports/football/italy/lorenzo-pellegrini.jpeg" },
                    { name: "Luca Pellegrini", imgUrl: "assets/images/sports/football/italy/luca-pellegrini.jpeg" },
                    { name: "Marco Verratti", imgUrl: "assets/images/sports/football/italy/marco-verratti.jpeg" },
                    { name: "Matteo Politano", imgUrl: "assets/images/sports/football/italy/matteo-politano.jpeg" },
                    { name: "Mattia De Scigilo", imgUrl: "assets/images/sports/football/italy/mattia-de-scigilo.jpeg" },
                    { name: "Mattia Perin", imgUrl: "assets/images/sports/football/italy/mattia-perin.jpeg" },
                    { name: "Moise Kean", imgUrl: "assets/images/sports/football/italy/moise-kean.jpeg" },
                    { name: "Nicolo Barella", imgUrl: "assets/images/sports/football/italy/nicolo-barella.jpeg" },
                    { name: "Nicolo Zaniolo", imgUrl: "assets/images/sports/football/italy/nicolo-zaniolo.jpeg" },
                    { name: "Pierluigi Gollini", imgUrl: "assets/images/sports/football/italy/pierluigi-gollini.jpeg" },
                    { name: "Riccardo Orsolini", imgUrl: "assets/images/sports/football/italy/riccardo-orsolini.jpeg" },
                    { name: "Rolando Mandragora", imgUrl: "assets/images/sports/football/italy/rolando-mandragora.jpeg" },
                    { name: "Salvatore Sirigu", imgUrl: "assets/images/sports/football/italy/salvatore-sirigu.jpeg" },
                    { name: "Sandro Tonali", imgUrl: "assets/images/sports/football/italy/sandro-tonali.jpeg" },
                    { name: "Stefano Sensi", imgUrl: "assets/images/sports/football/italy/stefano-sensi.jpeg" },
                    { name: "Stephan El Shaarawy", imgUrl: "assets/images/sports/football/italy/stephan-el-shaarawy.jpeg" },
                    { name: "Vincenzo Grifo", imgUrl: "assets/images/sports/football/italy/vincenzo-grifo.jpeg" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: '%20De%20Meer%20Stadion&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Estadio%20Da%20Luz&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Juventus%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Anfield&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'First%20National%20Bank%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "UEFA discussing Champions options",
                        newsImg: "",
                        news: "UEFA have announced a series of meetings next week to discuss “developments across both domestic and European competitions” amid reports of a Champions League Final Eight.Football has been halted all over the continent for a month now due to the coronavirus pandemic, but Spain, Italy and Germany are edging towards resuming training from the start of May.“The UEFA Executive Committee will meet via videoconference next Thursday 23 April for an update meeting to discuss the latest developments regarding the impact caused by the coronavirus outbreak on European football,” read a statement."
                    },
                    {
                        newsTitle: "Cellino: 'I hope Tonali stays in Italy'",
                        newsImg: "",
                        news: "Brescia President Massimo Cellino points out the changes in Italian football and is preparing to let Sandro Tonali go this summer: “I would love to see him in Naples or Rome.”The Rondinelle are bottom of Serie A after 26 rounds and patron Cellino spoke to Tuttosport about the current climate in the top tier and the future of his most wanted talent in the Brescia squad. “I want to make everybody understand the current environment of Italia football,” he told Tuttosport. “For Easter I received thousands of greetings, but not one from another President in Serie A."
                    }
                ]
            }
        ]
    },
    {
        sport: "hockey",
        details: [
            {
                country: "India",
                officialWebsite: 'https://www.hockeyindia.org/',
                teamImg: "indHockey.jpg",
                overview: {
                    test: { rank: 1, rating: 116, points: 5211 },
                    odi: { rank: 2, rating: 118, points: 7939 },
                    t20: { rank: 4, rating: 264, points: 12141 }
                },
                players: [
                    { name: "Akashdeep Singh", imgUrl: "assets/images/sports/hockey/india/akashdeep-singh.jpeg" },
                    { name: "Amit Rohidas", imgUrl: "assets/images/sports/hockey/india/amit-rohidas.jpeg" },
                    { name: "Birendra Lakra", imgUrl: "assets/images/sports/hockey/india/birendra-lakra.jpeg" },
                    { name: "Chinglensana singh", imgUrl: "assets/images/sports/hockey/india/chinglensana-singh.jpeg" },
                    { name: "Gurindar Singh", imgUrl: "assets/images/sports/hockey/india/gurindar-singh.jpg" },
                    { name: "Gurjant Singh", imgUrl: "assets/images/sports/hockey/india/gurjant-singh.png" },
                    { name: "Gursahibjit Singh", imgUrl: "assets/images/sports/hockey/india/gursahibjit-singh.jpeg" },
                    { name: "Harmanpreet Singh", imgUrl: "assets/images/sports/hockey/india/harmanpreet-singh.jpeg" },
                    { name: "Kothajit Singh Khadangbam", imgUrl: "assets/images/sports/hockey/india/kothajit-singh-khadangbam.jpeg" },
                    { name: "Krishan Pathak", imgUrl: "assets/images/sports/hockey/india/krishan-pathak.jpeg" },
                    { name: "Lalit Kumar Upadhyay", imgUrl: "assets/images/sports/hockey/india/lalit-kumar-upadhyay.jpeg" },
                    { name: "Mandeep Singh", imgUrl: "assets/images/sports/hockey/india/mandeep-singh.jpeg" },
                    { name: "Manpreet Singh", imgUrl: "assets/images/sports/hockey/india/manpreet-singh.jpeg" },
                    { name: "Nilkanta Sharma", imgUrl: "assets/images/sports/hockey/india/nilkanta-sharma.jpeg" },
                    { name: "Parattu Raveendran Sreejesh", imgUrl: "assets/images/sports/hockey/india/parattu-raveendran-sreejesh.jpeg" },
                    { name: "Ruoinder Pal Singh", imgUrl: "assets/images/sports/hockey/india/ruoinder-pal-singh.jpeg" },
                    { name: "Somwarpet Vittalacharya Sunil", imgUrl: "assets/images/sports/hockey/india/somwarpet-vittalacharya-sunil.jpeg" },
                    { name: "Sumit Kumar", imgUrl: "assets/images/sports/hockey/india/sumit-kumar.jpeg" },
                    { name: "Surendar Kumar", imgUrl: "assets/images/sports/hockey/india/surendar-kumar.jpeg" },
                    { name: "Vivek Sagar Prasad", imgUrl: "assets/images/sports/hockey/india/vivek-sagar-prasad.jpeg" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Sardar%20Patel%20Stadium%20or%20Motera%20Cricket%20Stadium%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Melbourne%20Cricket%20ground&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Rajiv%20Gandhi%20International%20Cricket%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Adelaide%20Oval&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Docklands%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "Trying circumstances but we will emerge stronger than ever,says Indian Men's Team Forward SV Sunil",
                        newsImg: "",
                        news: "Bengaluru, 16 April 2020: With India's Hon’ble Prime Minister Shri Narendra Modi having announced on Tuesday that the nation-wide lock-down will be extended for 19 more days till 3rd May 2020, the Indian Men's Hockey Team's experienced Forward SV Sunil believes that this period will further help his side in improving as a collective unit. 'We were all expecting the lock-down period to be extended, and it is justified given the extent of the damage that the pandemic has been causing not just in India, but around the world,' said Sunil."
                    },
                    {
                        newsTitle: "Hockey India postpones various 2020 National Championships due to extension of nation-wide lockdown",
                        newsImg: "",
                        news: "Due to the ongoing Covid-19 pandemic and subsequent extension of the nation-wide lockdown, Hockey India has taken a decision to postpone the remaining annual 2020 Hockey India National Championships keeping in mind the well-being of all our stakeholders including the players, Coaches, organisers, fans and officials. These tournaments have been postponed indefinitely and we will announce new dates basis the evolution of the Covid-19 situation in India. At this moment, Hockey India is working with the Government of India along with the Ministry of Youth Affairs and Sports, Ministry of Heath and Family Welfare and all the other relevant Central and State Government departments to ensure that all necessary precautions are duly taken to maintain the public health and welfare of all parties involved, stated Hockey India President Mohd Mushtaque Ahmad."
                    },
                ]
            },
            {
                country: "Argentina",
                officialWebsite: 'http://www.cahockey.org.ar/',
                teamImg: "argentinaHockey.jpg",
                overview: {
                    test: { rank: 1, rating: 116, points: 5211 },
                    odi: { rank: 2, rating: 118, points: 7939 },
                    t20: { rank: 4, rating: 264, points: 12141 }
                },
                players: [
                    { name: "Agustin Bugallo", imgUrl: "assets/images/sports/hockey/argentina/agustin-bugallo.jpeg" },
                    { name: "Emiliano Bosso", imgUrl: "assets/images/sports/hockey/argentina/emiliano-bosso.jpeg" },
                    { name: "Federico Fernandez", imgUrl: "assets/images/sports/hockey/argentina/federico-fernandez.jpeg" },
                    { name: "Federico Monja", imgUrl: "assets/images/sports/hockey/argentina/federico-monja.jpeg" },
                    { name: "Ignacio Ortiz", imgUrl: "assets/images/sports/hockey/argentina/ignacio-ortiz.jpg" },
                    { name: "Juan Cata╠ünbc", imgUrl: "assets/images/sports/hockey/argentina/juan-cata╠ün.png" },
                    { name: "Juan Manuel Vivaldi", imgUrl: "assets/images/sports/hockey/argentina/juan-manuel-vivaldi.jpg" },
                    { name: "Juan Martin Lopez", imgUrl: "assets/images/sports/hockey/argentina/juan-martin-lopez.jpeg" },
                    { name: "Leandro Tolini", imgUrl: "assets/images/sports/hockey/argentina/leandro-tolini.jpg" },
                    { name: "Lucas Martinez", imgUrl: "assets/images/sports/hockey/argentina/lucas-martinez.jpeg" },
                    { name: "Lucas Vila", imgUrl: "assets/images/sports/hockey/argentina/lucas-vila.jpg" },
                    { name: "Maico Casella", imgUrl: "assets/images/sports/hockey/argentina/maico-casella.jpeg" },
                    { name: "Martin Ferreiro", imgUrl: "assets/images/sports/hockey/argentina/martin-ferreiro.jpg" },
                    { name: "Nicolas Cicileo", imgUrl: "assets/images/sports/hockey/argentina/nicolas-cicileo.jpeg" },
                    { name: "Nicolas Keenan", imgUrl: "assets/images/sports/hockey/argentina/nicolas-keenan.jpg" },
                    { name: "Pedro Ibarra", imgUrl: "assets/images/sports/hockey/argentina/pedro-ibarra.jpeg" },
                    { name: "Tomas Bettaglio", imgUrl: "assets/images/sports/hockey/argentina/tomas-bettaglio.jpeg" },
                    { name: "Tomas Domene", imgUrl: "assets/images/sports/hockey/argentina/tomas-domene.jpeg" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Sardar%20Patel%20Stadium%20or%20Motera%20Cricket%20Stadium%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Melbourne%20Cricket%20ground&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Rajiv%20Gandhi%20International%20Cricket%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Adelaide%20Oval&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Docklands%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "Argentina wins Rabo Trophy",
                        newsImg: "",
                        news: "The women's team of Argentina surprisingly claimed the Rabo Trophy, defeating Netherlands 3-0 in the final in Valkenswaard, Netherlands. New Zealand finished third after a 3-2 victory over China. Netherland has defeated Argentina in the pool phase of the Rabo Trophy, was not able to repeat this effort in the final. Netherlands dominated the first half, but was unable to score."
                    },
                    {
                        newsTitle: "POSTERGATION OF ARGENTINE CHAMPIONSHIPS ORGANIZED BY THE CAH",
                        newsImg: "",
                        news: "Due to the reasons that are publicly known, the Board of Directors has taken the decision to postpone the Regional Club Championships to be held in March in order to minimize the health impact of the spread of Covid-19."
                    },
                ]
            },
            {
                country: "Germany",
                officialWebsite: 'https://web.hockey.de/',
                teamImg: "germanyHockey.jpg",
                overview: {
                    test: { rank: 1, rating: 116, points: 5211 },
                    odi: { rank: 2, rating: 118, points: 7939 },
                    t20: { rank: 4, rating: 264, points: 12141 }
                },
                players: [
                    { name: "Alexander Stadler", imgUrl: "assets/images/sports/hockey/germany/alexander-stadler.jpg" },
                    { name: "Benedikt Furk", imgUrl: "assets/images/sports/hockey/germany/benedikt-furk.jpg" },
                    { name: "Christopher Ruhr", imgUrl: "assets/images/sports/hockey/germany/christopher-ruhr.jpeg" },
                    { name: "Constantin Staib", imgUrl: "assets/images/sports/hockey/germany/constantin-staib.jpeg" },
                    { name: "Ferdinand Weinke", imgUrl: "assets/images/sports/hockey/germany/ferdinand-weinke.jpeg" },
                    { name: "Florian- Fuchs", imgUrl: "assets/images/sports/hockey/germany/florian-fuchs.jpeg" },
                    { name: "Jan Schiffer", imgUrl: "assets/images/sports/hockey/germany/jan-schiffer.jpg" },
                    { name: "Johannes Grosse", imgUrl: "assets/images/sports/hockey/germany/johannes-grosse.jpg" },
                    { name: "Jonas Gomol", imgUrl: "assets/images/sports/hockey/germany/jonas-gomol.jpg" },
                    { name: "Justus Weigand", imgUrl: "assets/images/sports/hockey/germany/justus-weigand.jpeg" },
                    { name: "Ablinus Mullerc", imgUrl: "assets/images/sports/hockey/germany/linus-muller.jpg" },
                    { name: "Lucas Windfeder", imgUrl: "assets/images/sports/hockey/germany/lucas-windfeder.jpeg" },
                    { name: "Malte Hellwig", imgUrl: "assets/images/sports/hockey/germany/malte-hellwig.jpg" },
                    { name: "Marco Miltkau", imgUrl: "assets/images/sports/hockey/germany/marco-miltkau.jpeg" },
                    { name: "Mark Appel", imgUrl: "assets/images/sports/hockey/germany/mark-appel.jpg" },
                    { name: "Martin Zwicker", imgUrl: "assets/images/sports/hockey/germany/martin-zwicker.jpeg" },
                    { name: "Martis Haner", imgUrl: "assets/images/sports/hockey/germany/martis-haner.jpeg" },
                    { name: "Mathias Muler", imgUrl: "assets/images/sports/hockey/germany/mathias-muler.jpg" },
                    { name: "Mats Grambusch", imgUrl: "assets/images/sports/hockey/germany/mats-grambusch.jpeg" },
                    { name: "nikalas Wellen", imgUrl: "assets/images/sports/hockey/germany/nikalas-wellen.jpeg" },
                    { name: "Niklas Bosserhoff", imgUrl: "assets/images/sports/hockey/germany/niklas-bosserhoff.jpg" },
                    { name: "Paul Philipp Kaufmann", imgUrl: "assets/images/sports/hockey/germany/paul-philipp-kaufmann.jpg" },
                    { name: "Teo Hinrichs", imgUrl: "assets/images/sports/hockey/germany/teo-hinrichs.jpg" },
                    { name: "Timm Herzbruch", imgUrl: "assets/images/sports/hockey/germany/timm-herzbruch.jpeg" },
                    { name: "Timus Oruz", imgUrl: "assets/images/sports/hockey/germany/timus-oruz.jpeg" },
                    { name: "Tobias Hauke", imgUrl: "assets/images/sports/hockey/germany/tobias-hauke.jpg" },
                    { name: "Victor Aly", imgUrl: "assets/images/sports/hockey/germany/victor-aly.jpeg" },
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Sardar%20Patel%20Stadium%20or%20Motera%20Cricket%20Stadium%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Melbourne%20Cricket%20ground&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Rajiv%20Gandhi%20International%20Cricket%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Adelaide%20Oval&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Docklands%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "FINAL FOUR 2020 in Mannheim canceled",
                        newsImg: "",
                        news: "England Women's stars such as Lucy Bronze, Alex Greenwood, Georgia Stanway and Jordan Nobbs have linked up with Google Cloud to back a campaign to kick Coronavirus into touch.The Lionesses quartet are urging people across the UK to stay home, protect the NHS and ultimately save lives.You can watch the video as the girls share the message as well as show their skills while at home during the latest week of lockdown."
                    },
                    {
                        newsTitle: "MHC: Andreu Enrich new men's coach",
                        newsImg: "",
                        news: "Born and raised in Barcelona, ​​Enrich can look back on impressive successes as a player. In 11 years he won the Spanish championship eight times with his home club Atlètic Terrassa - four of them as captain, four times European champion (U16, U18, U21 and men) and in 2004 won the Champions Trophy with Spain for the first time.He has held the following positions as a trainer and assistant since 2013: Pinoké HC (Netherlands), Atlètic Terrassa Hockey Club (Spain), Spanish Hockey Association, Hamburg Polo Club, KHC Leuven (Belgium), Belgian Hockey Association. “The MHC is an interesting club that is now operating at a top European level. I really like the structure of the club because the concept is sustainable, ”Enrich explains his impressions of the MHC. I am a trainer who works with great attention to detail to develop individual and team-specific performance. My coaching is of course very emotional - I'm Spanish, that's normal, ”Enrich describes his coaching style with a wink."
                    },
                ]
            },
            {
                country: "Australia",
                officialWebsite: 'https://hockey.org.au/',
                teamImg: "ausHockey.jpg",
                overview: {
                    test: { rank: 1, rating: 116, points: 5211 },
                    odi: { rank: 2, rating: 118, points: 7939 },
                    t20: { rank: 4, rating: 264, points: 12141 }
                },
                players: [
                ],
                fixture: [
                    {
                        date: new Date('2020-4-18'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Sardar%20Patel%20Stadium%20or%20Motera%20Cricket%20Stadium%2C%20Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Melbourne%20Cricket%20ground&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Rajiv%20Gandhi%20International%20Cricket%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Adelaide%20Oval&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    },
                    {
                        date: new Date('2020-4-14'),
                        details: 'Ind Vs Aus 2nd ODI',
                        venue: "MCG Melburn Australia",
                        embed: 'Docklands%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    }
                ],
                imgUrl: ['ind1.jpeg', 'ind2.jpeg', 'ind3.jpeg', 'ind4.jpeg'],
                videos: ["Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY", "Lz5098-SeFY"],
                news: [
                    {
                        newsTitle: "KOOKABURRAS THRASH ARGENTINA IN EDDIE’S MILESTONE GAME",
                        newsImg: "",
                        news: "Inspired by Eddie Ockenden’s record breaking milestone, the Kookaburras have rinsed the current Olympic Champions Argentina 5-1 in Perth to move into second position on the FIH Pro League table.In a history-breaking night for Australian hockey, Ockenden led his side onto the field in his 366th international appearance, passing legend Jamie Dwyer’s mark of 365 games. “Having the whole squad and my family here was special, including my partner Louie, but also seeing a video before the game with lots of ex-teammates and old Kookas who made it here has made it more special and it was really nice to feel the love from all of the boys,” said Ockenden post match."
                    },
                    {
                        newsTitle: "Hockey Australia and Fortescue extend sponsorship agreement",
                        newsImg: "",
                        news: "Fortescue Metals Group (Fortescue) has announced an extension of its long-term sponsorship of Australia’s national men’s and women’s hockey teams, bringing the duration of the Company’s commitment to the sport to a decade.Announced during the Indigenous round of the International Hockey Federation (FIH) Pro League this month, the new agreement will see Fortescue remain a Naming Rights Partner of the Kookaburras and Supporting Partner of the Hockeyroos until mid-2021.The agreement encompasses the highly successful Fortescue Hockey Community Program, which provides Aboriginal students in the Pilbara the opportunity to engage in hockey and increase their engagement and attendance at school. The program has grown from its initial pilot status at Roebourne Primary School to now include 10 schools in Karratha and Port Hedland."
                    }
                ]
            }
        ]
    }
]