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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
                    { name: "abc", imgUrl: "assets/images/dummyprofile.jpeg" },
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