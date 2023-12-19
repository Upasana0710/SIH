import React, { useState } from "react";
import "./ProfileModal.css";

const NewPostModal = (props) => {
  const [contentType, setContentType] = useState("text"); // Content type state
  const [postContent, setPostContent] = useState(""); // Content data state

  const handleContentTypeChange = (type) => {
    setContentType(type); // Update content type state
  };

  const handlePostContentChange = (content) => {
    setPostContent(content); // Update content data state
  };

  const handlePost = () => {
    // Submit post data to your backend service or API
    console.log("Posting: ", contentType, postContent);
  };

  const handleCancel = () => {
    // Close the modal window
    // setShowModal(false)
    console.log("This is cancel");
  };

  return (
    <div className="new-post-modal">
      <h2 className="create-post">Create a New Post</h2>
      <div className="content-type-buttons">
        <button onClick={() => handleContentTypeChange("text")}>Text</button>
        <button onClick={() => handleContentTypeChange("image")}>Image</button>
        <button onClick={() => handleContentTypeChange("video")}>Video</button>
        <button onClick={() => handleContentTypeChange("link")}>Link</button>
      </div>
      {contentType === "text" && (
        <textarea
          placeholder="Write your post..."
          value={postContent}
          onChange={(e) => handlePostContentChange(e.target.value)}
        />
      )}
      {contentType === "image" && (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handlePostContentChange(e.target.files[0])}
        />
      )}
      {contentType === "video" && (
        <input
          type="text"
          placeholder="Paste video embed code..."
          value={postContent}
          onChange={(e) => handlePostContentChange(e.target.value)}
        />
      )}
      {contentType === "link" && (
        <div>
          <input
            type="text"
            placeholder="Link URL..."
            value={postContent}
            onChange={(e) => handlePostContentChange(e.target.value)}
          />
          <input type="text" placeholder="Link description..." />
        </div>
      )}
      <div className="buttons">
        <button onClick={handlePost}>Post</button>
        <button onClick={props.onClick}>Cancel</button>
      </div>
    </div>
  );
};

export default NewPostModal;
