import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu pt-10 text-2xl font-semibold p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="text-center pb-16 ">
              <h2 className="text-4xl font-semibold text-yellow-600">Shortify</h2>
              <p className="text-sm">URL Shortening System</p>
            </div>
            <li>
              <NavLink to="entry">Entry Page</NavLink>
            </li>
            <li>
              <NavLink to="edit">Edit Page</NavLink>
            </li>
            <li>
              <NavLink to="list">List Page</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
