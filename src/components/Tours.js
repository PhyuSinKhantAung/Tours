import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        <h1 className="mt-12 mb-1 text-center text-4xl font-bold text-yellow-900">
          Our Tours
        </h1>
        <div className="bg-yellow-200 h-1 w-12 mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10 px-10">
        {/* <Tour></Tour> */}
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            id={tour.id}
            tour={tour}
            removeTour={removeTour}
          ></Tour>
        ))}
      </div>
    </section>
  );
};

export default Tours;
