import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import RefreshPage from "./components/RefreshPage";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (tourId) => {
    const updatedTours = tours.filter((tour) => tour.id !== tourId);
    setTours(updatedTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div>
      {isLoading && (
        <main>
          <Loading></Loading>
        </main>
      )}
      {!isLoading && <Tours tours={tours} removeTour={removeTour}></Tours>}

      {tours.length === 0 && !isLoading && (
        <RefreshPage fetchTours={fetchTours}></RefreshPage>
      )}
    </div>
  );
}

export default App;
