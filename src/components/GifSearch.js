import React from "react";

function GifSearch({ onSubmit, search, setSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Gif"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit"> Search </button>
    </form>
  );
}

export default GifSearch;
