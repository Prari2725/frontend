import { useState } from "react";
import api from "../services/api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await api.post("posts/", { title, content });
    window.location.href = "/";
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
      <button>Create</button>
    </form>
  );
}
