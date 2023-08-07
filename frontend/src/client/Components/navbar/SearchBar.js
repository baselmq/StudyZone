import { useContext, useEffect, useState } from "react";
// import userData from "../../data/data";
// import { PathIcons } from "../../util/PathIcons";
import { PathIcons } from "../../util/PathIcons";
import { CoursesCxt } from "../../context/CoursesCxt";
export const SearchBar = ({ setResults, value }) => {
  const [input, setInput] = useState("");
  const { data, loading, error } = useContext(CoursesCxt);

  const search = (event) => {
    let query = event.target.value;

    let updatedList = data["data"]["courses"].filter((item) => {
      return item.courseName.toLowerCase().includes(query.toLowerCase());
    });
    // setResults(updatedList);
    query.trim() === "" ? setResults("") : setResults(updatedList);
    query.trim() === "" ? setInput("") : setInput(updatedList);
  };
  useEffect(() => {}, [input]);
  return (
    <div className="input_wrapper">
      {PathIcons.search}
      <input
        className="search_bar me-2"
        type="search"
        placeholder="Search"
        onChange={search}
      ></input>
    </div>
  );
};
