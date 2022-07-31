import React from "react";

function BlogContent(props) {
  return <div id="blog-content">
    {props.articleText}
    <p>{props.isPublished}</p>
    <p>{props.minutes}</p>
    </div>;
}

export default BlogContent;
