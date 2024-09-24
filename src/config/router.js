const express = require("express");

module.exports = (server) => {
  const router = express.Router();
  server.use("/api", router);

  const {
    getConjunctions,
    getConjunction,
    postConjunction,
    putConjunction,
    deleteConjunction,
  } = require("../api/conjunction/conjunction-service");

  // List all conjunctions
  router.get("/conjunctions/", getConjunctions);

  // Get a conjunction
  router.get("/conjunctions/:id", getConjunction);

  // Add a conjunction
  router.post("/conjunctions/", postConjunction);

  // Update a conjunction
  router.put("/conjunctions/:id", putConjunction);

  // Delete a conjunction
  router.delete("/conjunctions/:id", deleteConjunction);

  const {
    getSatellites,
    getSatellite,
    postSatellite,
    putSatellite,
    deleteSatellite,
  } = require("../api/satellite/satellite-service");

  // List all satellites
  router.get("/satellites/", getSatellites);

  // Get a conjunction
  router.get("/satellites/:id", getSatellite);

  // Add a conjunction
  router.post("/satellites/", postSatellite);

  // Update a conjunction
  router.put("/satellites/:id", putSatellite);

  // Delete a conjunction
  router.delete("/satellites/:id", deleteSatellite);
};
