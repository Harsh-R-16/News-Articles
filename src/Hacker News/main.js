import React, { useState, useEffect } from "react";
import "./hacker.css";
import { H1, Form, Section } from "./styledComponents";
export default function Hacker() {
  // let value;
  let [news, setNews] = useState([]);
  let [val, setVal] = useState(1);
  let [loading, setLoading] = useState(true);
  let [ipt, setIpt] = useState("React");
  const fetchNews = async (q, p) => {
    setLoading(false);
    let a = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${q}&page=${p}`
    );
    let b = await a.json();
    setNews(b.hits);
    setLoading(true);
  };
  useEffect(() => {
    fetchNews(ipt, val);
  }, [val]);

  let removeHandler = (e) => {
    try {
      if (e.currentTarget.parentElement) {
        e.currentTarget.parentElement.style.display = "none";
      }
    } catch (e) {
      console.log(e);
    }
  };
  let submit = (e) => {
    e.preventDefault();
    setVal(1);
    fetchNews(ipt, val);
  };
  return (
    <>
      <H1>Search Hacker News</H1>
      <Form action="" id="hacker-form" onSubmit={submit}>
        <input
          type="text"
          name=""
          id="inp"
          placeholder="type something here"
          onChange={(e) => setIpt(e.target.value)}
          value={ipt}
        />
      </Form>
      <p>
        <button
          onClick={() => {
            if (val !== 1) setVal(val - 1);
          }}
          id="-"
        >
          Previous
        </button>{" "}
        {val} of 1000{" "}
        <button id="+" onClick={() => setVal(val + 1)}>
          Next
        </button>
      </p>
      <div id="loading" className={loading && "display"}>
        <img
          src="https://www.bing.com/th/id/OGC.5fe0e55f8e19bc4cc3201876dce7b224?pid=1.7&rurl=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f09%2fajax-loading-gif-transparent-background-8.gif&ehk=BKKmOBUlutZavoNrZ8xOaeLeoxaqVL95nY1YafoeFtA%3d"
          alt=""
        />
      </div>
      <Section id="hacker-sec" className={!loading && "display"}>
        {news.map(
          (
            { title, url, author, points, num_comments, created_at_i },
            index
          ) => {
            return (
              <div key={created_at_i}>
                <h2>
                  {title ||
                    "Article is not Availabel because of copyright issues"}
                </h2>
                <p>
                  {points} points by {author} | {num_comments} comments
                </p>
                <a href={url} rel="noreferrer" target="_blank">
                  Read More
                </a>
                <button onClick={removeHandler}>Remove</button>
              </div>
            );
          }
        )}
      </Section>
    </>
  );
}
