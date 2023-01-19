import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3500/contact";

export default function Contact() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  function download()
  {
    alert("work in progress");
  }

  return (
    <div className="com">
      <h1>Contact</h1>
      <hr/>
      <table cellSpacing={"7px"} width={"100%"}>
        <tbody>
        <tr>
            <td>Email</td>
            <td>:</td>
            <td><a href="#">{post.email}</a></td>
        </tr>
        <tr>
            <td>Telegram Handle</td>
            <td>:</td>
            <td><a href="#">{post.telegram}</a></td>
        </tr>
        <tr>
            <td>Phone No.</td>
            <td>:</td>
            <td><a href="#">{post.phone}</a></td>
        </tr>
        <tr><td colSpan="3" align="center"><br/>
            <button className="btp" onClick={download}>Download Resume</button>
            </td></tr>
        </tbody>
      </table>
    </div>
  );
}