import LiveRaceDetailPage from "./live-page";

export default function RaceDetailPage({ params }: { params: { id: string } }) {
  return <LiveRaceDetailPage raceId={params.id} />;
}
