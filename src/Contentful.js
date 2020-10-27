const contentful = require("contentful");

export default contentful.createClient({
  space:  process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

//odvm8pchap7z
//ikRqQ9c5j_c8JqIE6gUckxPSRvMlf3mVtIkaDlx3byg