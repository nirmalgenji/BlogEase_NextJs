import React, { useState } from "react";
import { useSession } from "next-auth/react";

const CommentForm = ({ onAddComment, submitting }) => {
  const { data: session } = useSession();
  const [commentText, setCommentText] = useState("");

  const handleAddComment = async () => {
    if (commentText.trim() !== "") {
      const newComment = {
        text: commentText,
        userId: session?.user?.id,
        userName: session?.user?.name,
        date: new Date().toISOString(),
      };
      onAddComment(newComment);
      setCommentText("");
    }
  };

  return (
    <div className="mt-4 w-full comment">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
        className="comment_textarea"
        rows={4}
      />
      <button
        onClick={handleAddComment}
        className="primary-btn mt-2"
        disabled={submitting}
      >
        Add Comment
      </button>
    </div>
  );
};

export default CommentForm;
