import axios from "axios";
import React from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const baseURL = "http://localhost:3500/professional";

export default function Test() {
  const [post, setPost] = React.useState(null);

    axios.get(baseURL).then((response) => {setPost(response.data);});

  if (!post) return null;

 let result = post.skills.map(item =><tr><td>{item.skill}</td><td>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    ></Box>
    <Typography component="legend"></Typography>
    <Rating name="read-only" value={item.level} readOnly />
    </td></tr>);
  return (
    <div>
      <h1>Professional</h1>
      <p>{post.summary}</p>
      <table>
        <tr>
            <th>Skill</th>
            <th>Level</th>
        </tr>
        {result}
      </table>
    </div>
  );
}