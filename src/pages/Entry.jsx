const Entry = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const longUrl = event.target.url.value;
    console.log(longUrl);
  };
  return (
    <div>
      <h1 className="text-4xl text-center mt-12 font-bold">URL Shortener</h1>
      <div className="flex justify-center lg:mt-44">
        <form className="inline-block " onSubmit={handleFormSubmit}>
          <input
            className="input input-bordered outline-none block w-[700px]"
            placeholder="Long URL"
            name="url"
          />
          <button className="btn bg-yellow-600 text-black mt-1">
            Generate Short URL
          </button>
        </form>
      </div>
      <div className="lg:ml-[450px] mt-12 font-bold bg-slate-900 w-[700px] p-3 rounded-lg">
        <p>Short URL: </p>
      </div>
    </div>
  );
};

export default Entry;
