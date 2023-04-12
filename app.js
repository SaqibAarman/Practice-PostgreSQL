const express = require("express");
const Sequelize = require("sequelize");

const port = 8000;
const app = express();

const sequelize = new Sequelize("sqlite:chinook.db");

const Playlist = sequelize.define(
  "playlist",
  {
    id: {
      field: "PlaylistId",
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      field: "Name",
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

app.get("/api/playlists", (req, res) => {
  Playlist.findAll().then((playlists) => {
    res.json(playlists);
  });
});

app.listen(port, () => {
  console.log(`Connected To Server ${port}`);
});
