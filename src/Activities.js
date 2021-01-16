import React, { useState, useEffect, useRef } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { boxStyles } from "./cssObjects";

const useStyles = makeStyles(boxStyles);

function Activities() {
  const classes = useStyles();
  // eslint-disable-next-line
  const scrollRef = useRef(null);
  const [activities, setActivities] = useState([]);
  const [base, setBase] = useState(80);
  const [page, setPage] = useState(3);

  useEffect(() => {
    fetch("http://my-json-server.typicode.com/rivitest001/task04/posts")
      .then((res) => res.json())
      .then((data) => {
        setActivities([...activities, ...data]);
      });

    const div = scrollRef.current;
    div.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      div.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);

  const handleInfiniteScroll = () => {
    const wrapper = document.getElementById("activityBox");
    if (wrapper.scrollHeight - wrapper.scrollTop === wrapper.clientHeight) {
      if (base >= 0) {
        fetch(
          `http://my-json-server.typicode.com/rivitest001/task0${page}/posts?id=${
            base + 1
          }&id=${base + 2}&id=${base + 3}&id=${base + 4}&id=${base + 5}&id=${
            base + 6
          }&id=${base + 7}&id=${base + 8}&id=${base + 9}&id=${base + 10}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("data", data);
            console.log("base", base);
            if (base === 60 || base === 30) {
              setPage(page - 1);
            }
            setBase(base - 10);
            setActivities([...activities, ...data]);
          });
      }
    }
  };

  console.log(page);
  console.log(base);
  console.log(activities);

  return (
    <div ref={scrollRef} id="activityBox" className={classes.box} m="2">
      {activities.length > 0 ? (
        <>
          {activities.map((obj, index) => (
            <Typography key={index} className={classes.text} color="primary">
              {obj.activity}
            </Typography>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Activities;
