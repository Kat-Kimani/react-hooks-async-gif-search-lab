import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=NfU0w3KSf5Su8V0a0vThWhN3rXpXYCfx&limit=3`
    )
      .then((response) => response.json())
      .then((data) => {
        const gifDisplay = data.data.map((gif) => {
          return {
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
          };
        });
        setGifs(gifDisplay);
      });
  }, [search]);

  function handleSearchSubmit(inputValue) {
    setSearch(inputValue);
  }

  return (
    <div>
      <GifSearch
        onSubmit={handleSearchSubmit}
        search={search}
        setSearch={setSearch}
      />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
