"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Comments({ id, commentVisible, counter }) {
  const [comment, setComment] = useState("");

  const router = useRouter();
  async function fetchComments() {
    const response = await fetch(`/api/posts/${id}/comments`);
    const result = await response.json();
    setComment(result.comments);

    router.refresh();
  }

  useEffect(() => {
    fetchComments();
    console.log("ha ha");
  }, [counter]);

  return (
    <div>
      <ol>
        {comment && comment.map((item) => <li key={item.id}>{item.text}</li>)}
      </ol>
    </div>
  );
}

export default Comments;
