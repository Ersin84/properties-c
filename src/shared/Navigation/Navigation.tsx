import React, { useState, useEffect, Fragment } from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO } from "data/navigation";
import axios from "../../axios";
function Navigation() {
  const [data, setData] = useState(NAVIGATION_DEMO);
  const [data2, setData2] = useState(NAVIGATION_DEMO);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const api_menu_1 = await axios.get(`/fun/menu`);
      setData(api_menu_1.data.data.first_language);
      setData2(api_menu_1.data.data.second_language);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
      {loading ? (
        <Fragment></Fragment>
      ) : (
        <Fragment>
          {data.map((item) => (
            <NavigationItem key={item.id} menuItem={item} />
          ))}
        </Fragment>
      )}
    </ul>
  );
}

export default Navigation;
