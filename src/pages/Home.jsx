import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu pt-40 text-2xl font-semibold p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="entry">Entry Page</Link>
            </li>
            <li>
            <Link to="edit">Edit Page</Link>
            </li>
            <li>
            <Link to="list">List Page</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
