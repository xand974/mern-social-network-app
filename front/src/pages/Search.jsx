import SearchCard from "components/SearchCard";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Layout from "./Layout";
import queryString from "query-string";
import { getSearchRequest } from "redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "components/Loading";
export default function Search() {
  const { search } = useLocation();
  const { search_query } = queryString.parse(search);
  const dispatch = useDispatch();
  const { searchUsers } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        await getSearchRequest(dispatch, search_query);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw error;
      }
    };
    search();
  }, [dispatch, search_query]);
  return (
    <Layout>
      <Loading loading={loading} />
      <div className="flex-3 overflow-y-scroll flex flex-col ">
        <h3 className="text-5xl text-gray-500 font-semibold mb-10">Résultat</h3>
        {searchUsers.map((user, key) => (
          <SearchCard key={key} item={user} />
        ))}
      </div>
    </Layout>
  );
}
