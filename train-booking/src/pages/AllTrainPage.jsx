import react from "react"
import trainData from "../data.json";
import TrainCard from "../components/TrainCard";

function AllTrainsPage() {
    return (
        <div className="all-trains-page">
            <h2>All Available Trains</h2>
            {trainData.map(train => (
                <TrainCard key={train.flight_id} train={train} passengers={1} />
            ))}

        </div>
    )
}
export default AllTrainsPage;