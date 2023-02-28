const RefreshPage = ({ fetchTours }) => {
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl">
          There is no tour. Please refresh!
        </h1>
        <div className="flex justify-center my-4">
          <button
            onClick={fetchTours}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefreshPage;
