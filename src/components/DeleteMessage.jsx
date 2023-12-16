"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

function DeleteMessage({ id }) {
  const router = useRouter();
  async function handleDelete() {
    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    router.refresh();
  }
  return (
    <div>
      <button onClick={handleDelete}>
        <MdDelete />
      </button>
    </div>
  );
}

export default DeleteMessage;
