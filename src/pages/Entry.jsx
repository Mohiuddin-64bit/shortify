import { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

const Entry = () => {
  const [shortLink, setShortLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortLink(res.data.result.full_short_link2);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = event.target.url.value;
    setInputValue(input);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    <span className="loading loading-bars loading-lg"></span>;
  }
  if (error) {
    <div className="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Error! Task failed successfully.</span>
    </div>;
  }

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
          <button className="btn hover:bg-yellow-800 delay-100 bg-yellow-600 text-black mt-1">
            Generate Short URL
          </button>
        </form>
      </div>
      <div className="lg:ml-[450px] mt-12 flex justify-between items-center font-bold bg-slate-900 w-[700px] p-3 rounded-lg">
        <p>
          Short URL:{" "}
          <span className="text-blue-600 font-normal">
            <a href={shortLink} target="_blank" rel="noopener noreferrer">
              {shortLink}
            </a>
          </span>
        </p>

        <CopyToClipboard text={shortLink} onCopy={() => setCopied(!copied)}>
          {copied ? (
            <IoCheckmarkDone className="cursor-pointer" />
          ) : (
            <FiCopy className="cursor-pointer" />
          )}
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Entry;
