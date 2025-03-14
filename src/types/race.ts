export interface Driver {
  id: string;
  name: string;
  team: string;
  number: number;
  points: number;
  image: string;
  country: string;
  podiums?: number;
  championships?: number;
  wins?: number;
  bio?: string;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  color: string;
  constructorPoints: number;
  drivers: Driver[];
}

export interface Race {
  id: string;
  name: string;
  circuit: string;
  location: string;
  country: string;
  date: string;
  image: string;
  trackMap?: string;
  laps?: number;
  distance?: number;
  lapRecord?: {
    time: string;
    driver: string;
    year: number;
  };
}

export interface RacePrediction {
  raceId: string;
  predictions: DriverPrediction[];
  lastUpdated: string;
  factors: PredictionFactor[];
}

export interface DriverPrediction {
  driverId: string;
  position: number;
  winProbability: number;
  podiumProbability: number;
  pointsProbability: number;
}

export interface PredictionFactor {
  name: string;
  description: string;
  impact: number; // -10 to 10 scale
}

export interface RaceResult {
  raceId: string;
  results: DriverResult[];
  fastestLap?: {
    driverId: string;
    time: string;
  };
}

export interface DriverResult {
  driverId: string;
  position: number;
  points: number;
  status: "Finished" | "DNF" | "DSQ" | "DNS";
  gridPosition: number;
  laps: number;
  time?: string;
}
