import { Driver, Race, RacePrediction, Team } from "@/types/race";

export const drivers: Driver[] = [
  {
    id: "verstappen",
    name: "Max Verstappen",
    team: "Red Bull Racing",
    number: 1,
    points: 374,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png",
    country: "Netherlands",
    podiums: 103,
    championships: 3,
    wins: 61,
    bio: "Max Verstappen is a Dutch racing driver and the 2021, 2022, and 2023 Formula One World Champion. He competes under the Dutch flag in Formula One for Red Bull Racing. Known for his aggressive driving style, Verstappen became the youngest driver to compete in Formula One at the age of 17.",
  },
  {
    id: "perez",
    name: "Sergio Perez",
    team: "Red Bull Racing",
    number: 11,
    points: 150,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col-retina/image.png",
    country: "Mexico",
    podiums: 38,
    championships: 0,
    wins: 6,
    bio: "Sergio 'Checo' Perez is a Mexican racing driver currently driving for Red Bull Racing. Known for his tire management skills and race craft, Perez has established himself as a reliable performer in Formula One.",
  },
  {
    id: "leclerc",
    name: "Charles Leclerc",
    team: "Ferrari",
    number: 16,
    points: 224,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png",
    country: "Monaco",
    podiums: 32,
    championships: 0,
    wins: 5,
    bio: "Charles Leclerc is a Monégasque racing driver currently racing for Scuderia Ferrari. A Ferrari Driver Academy graduate, Leclerc won the GP3 Series championship in 2016 and the FIA Formula 2 Championship in 2017.",
  },
  {
    id: "sainz",
    name: "Carlos Sainz",
    team: "Ferrari",
    number: 55,
    points: 200,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png",
    country: "Spain",
    podiums: 20,
    championships: 0,
    wins: 3,
    bio: "Carlos Sainz Jr. is a Spanish racing driver currently competing for Scuderia Ferrari. The son of double World Rally Champion Carlos Sainz, he has competed for Toro Rosso, Renault, and McLaren before joining Ferrari.",
  },
  {
    id: "hamilton",
    name: "Lewis Hamilton",
    team: "Mercedes",
    number: 44,
    points: 190,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col-retina/image.png",
    country: "United Kingdom",
    podiums: 197,
    championships: 7,
    wins: 103,
    bio: "Sir Lewis Hamilton is a British racing driver currently competing in Formula One for Mercedes. A seven-time World Champion, he holds the record for the most wins, pole positions, and podium finishes in Formula One history.",
  },
  {
    id: "russell",
    name: "George Russell",
    team: "Mercedes",
    number: 63,
    points: 156,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png",
    country: "United Kingdom",
    podiums: 14,
    championships: 0,
    wins: 2,
    bio: "George Russell is a British racing driver currently competing in Formula One for Mercedes. A former Formula 2 champion, Russell joined Mercedes in 2022 after three seasons with Williams.",
  },
  {
    id: "norris",
    name: "Lando Norris",
    team: "McLaren",
    number: 4,
    points: 246,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png",
    country: "United Kingdom",
    podiums: 18,
    championships: 0,
    wins: 2,
    bio: "Lando Norris is a British-Belgian racing driver currently competing in Formula One for McLaren. Known for his engaging personality and streaming presence, Norris has quickly become a fan favorite in the sport.",
  },
  {
    id: "piastri",
    name: "Oscar Piastri",
    team: "McLaren",
    number: 81,
    points: 155,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col-retina/image.png",
    country: "Australia",
    podiums: 5,
    championships: 0,
    wins: 1,
    bio: "Oscar Piastri is an Australian racing driver currently competing in Formula One for McLaren. A former Formula 2 and Formula 3 champion, Piastri joined McLaren in 2023 after a controversial contract dispute.",
  },
  {
    id: "alonso",
    name: "Fernando Alonso",
    team: "Aston Martin",
    number: 14,
    points: 116,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col-retina/image.png",
    country: "Spain",
    podiums: 106,
    championships: 2,
    wins: 32,
    bio: "Fernando Alonso is a Spanish racing driver currently competing for Aston Martin. A two-time Formula One World Champion, Alonso is widely regarded as one of the greatest drivers of his generation.",
  },
  {
    id: "stroll",
    name: "Lance Stroll",
    team: "Aston Martin",
    number: 18,
    points: 24,
    image:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col-retina/image.png",
    country: "Canada",
    podiums: 3,
    championships: 0,
    wins: 0,
    bio: "Lance Stroll is a Canadian racing driver currently competing in Formula One for Aston Martin. The son of team owner Lawrence Stroll, he became the second-youngest driver to achieve a podium finish in Formula One.",
  },
];

export const teams: Team[] = [
  {
    id: "red-bull",
    name: "Red Bull Racing",
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/2col-retina/image.png",
    color: "#0600EF",
    constructorPoints: 524,
    drivers: drivers.filter((d) => d.team === "Red Bull Racing"),
  },
  {
    id: "ferrari",
    name: "Ferrari",
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2024/ferrari.png.transform/2col-retina/image.png",
    color: "#DC0000",
    constructorPoints: 424,
    drivers: drivers.filter((d) => d.team === "Ferrari"),
  },
  {
    id: "mercedes",
    name: "Mercedes",
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2024/mercedes.png.transform/2col-retina/image.png",
    color: "#00D2BE",
    constructorPoints: 346,
    drivers: drivers.filter((d) => d.team === "Mercedes"),
  },
  {
    id: "mclaren",
    name: "McLaren",
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2024/mclaren.png.transform/2col-retina/image.png",
    color: "#FF8700",
    constructorPoints: 401,
    drivers: drivers.filter((d) => d.team === "McLaren"),
  },
  {
    id: "aston-martin",
    name: "Aston Martin",
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2024/aston-martin.png.transform/2col-retina/image.png",
    color: "#006F62",
    constructorPoints: 140,
    drivers: drivers.filter((d) => d.team === "Aston Martin"),
  },
];

export const races: Race[] = [
  {
    id: "monaco",
    name: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    location: "Monte Carlo",
    country: "Monaco",
    date: "2023-05-28",
    image:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png.transform/7col-retina/image.png",
    trackMap:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png.transform/7col-retina/image.png",
    laps: 78,
    distance: 260.286,
    lapRecord: {
      time: "1:12.909",
      driver: "Lewis Hamilton",
      year: 2021,
    },
  },
  {
    id: "canada",
    name: "Canadian Grand Prix",
    circuit: "Circuit Gilles Villeneuve",
    location: "Montreal",
    country: "Canada",
    date: "2023-06-18",
    image:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/7col-retina/image.png",
    trackMap:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/7col-retina/image.png",
    laps: 70,
    distance: 305.27,
    lapRecord: {
      time: "1:13.078",
      driver: "Valtteri Bottas",
      year: 2019,
    },
  },
  {
    id: "british",
    name: "British Grand Prix",
    circuit: "Silverstone Circuit",
    location: "Silverstone",
    country: "United Kingdom",
    date: "2023-07-09",
    image:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/7col-retina/image.png",
    trackMap:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/7col-retina/image.png",
    laps: 52,
    distance: 306.198,
    lapRecord: {
      time: "1:27.097",
      driver: "Max Verstappen",
      year: 2020,
    },
  },
  {
    id: "hungary",
    name: "Hungarian Grand Prix",
    circuit: "Hungaroring",
    location: "Budapest",
    country: "Hungary",
    date: "2023-07-23",
    image:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/7col-retina/image.png",
    trackMap:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/7col-retina/image.png",
    laps: 70,
    distance: 306.63,
    lapRecord: {
      time: "1:16.627",
      driver: "Lewis Hamilton",
      year: 2020,
    },
  },
  {
    id: "belgium",
    name: "Belgian Grand Prix",
    circuit: "Circuit de Spa-Francorchamps",
    location: "Spa",
    country: "Belgium",
    date: "2023-07-30",
    image:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/7col-retina/image.png",
    trackMap:
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/7col-retina/image.png",
    laps: 44,
    distance: 308.052,
    lapRecord: {
      time: "1:46.286",
      driver: "Valtteri Bottas",
      year: 2018,
    },
  },
];

export const racePredictions: RacePrediction[] = [
  {
    raceId: "monaco",
    predictions: [
      {
        driverId: "verstappen",
        position: 1,
        winProbability: 0.42,
        podiumProbability: 0.85,
        pointsProbability: 0.98,
      },
      {
        driverId: "leclerc",
        position: 2,
        winProbability: 0.25,
        podiumProbability: 0.75,
        pointsProbability: 0.95,
      },
      {
        driverId: "hamilton",
        position: 3,
        winProbability: 0.15,
        podiumProbability: 0.65,
        pointsProbability: 0.92,
      },
      {
        driverId: "norris",
        position: 4,
        winProbability: 0.08,
        podiumProbability: 0.45,
        pointsProbability: 0.9,
      },
      {
        driverId: "sainz",
        position: 5,
        winProbability: 0.05,
        podiumProbability: 0.35,
        pointsProbability: 0.88,
      },
    ],
    lastUpdated: "2023-05-26T14:30:00Z",
    factors: [
      {
        name: "Track History",
        description: "Verstappen has performed well at Monaco in recent years",
        impact: 7,
      },
      {
        name: "Current Form",
        description: "Verstappen has won 3 of the last 5 races",
        impact: 8,
      },
      {
        name: "Weather Forecast",
        description: "Clear conditions expected, favoring Red Bull's setup",
        impact: 5,
      },
      {
        name: "Qualifying Performance",
        description:
          "Red Bull has secured pole position in 4 of 6 races this season",
        impact: 9,
      },
    ],
  },
  {
    raceId: "canada",
    predictions: [
      {
        driverId: "verstappen",
        position: 1,
        winProbability: 0.38,
        podiumProbability: 0.8,
        pointsProbability: 0.97,
      },
      {
        driverId: "norris",
        position: 2,
        winProbability: 0.22,
        podiumProbability: 0.7,
        pointsProbability: 0.94,
      },
      {
        driverId: "hamilton",
        position: 3,
        winProbability: 0.18,
        podiumProbability: 0.68,
        pointsProbability: 0.93,
      },
      {
        driverId: "leclerc",
        position: 4,
        winProbability: 0.12,
        podiumProbability: 0.55,
        pointsProbability: 0.91,
      },
      {
        driverId: "russell",
        position: 5,
        winProbability: 0.05,
        podiumProbability: 0.4,
        pointsProbability: 0.89,
      },
    ],
    lastUpdated: "2023-06-16T10:15:00Z",
    factors: [
      {
        name: "Track Characteristics",
        description: "Circuit suits Red Bull's straight-line speed advantage",
        impact: 8,
      },
      {
        name: "Recent Upgrades",
        description:
          "McLaren's recent upgrades have shown significant performance gains",
        impact: 6,
      },
      {
        name: "Weather Uncertainty",
        description: "Potential for rain could mix up the order",
        impact: -2,
      },
      {
        name: "Driver Form",
        description:
          "Norris has outperformed expectations in the last three races",
        impact: 7,
      },
    ],
  },
];

export function getDriverById(id: string): Driver | undefined {
  return drivers.find((driver) => driver.id === id);
}

export function getTeamById(id: string): Team | undefined {
  return teams.find((team) => team.id === id);
}

export function getRaceById(id: string): Race | undefined {
  return races.find((race) => race.id === id);
}

export function getPredictionForRace(
  raceId: string,
): RacePrediction | undefined {
  return racePredictions.find((prediction) => prediction.raceId === raceId);
}

export function getUpcomingRaces(count: number = 3): Race[] {
  // In a real app, this would filter based on current date
  return races.slice(0, count);
}

export function getTopDrivers(count: number = 3): Driver[] {
  // Sort by points and return top drivers
  return [...drivers].sort((a, b) => b.points - a.points).slice(0, count);
}
