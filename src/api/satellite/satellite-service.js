const Satellite = require("./satellite");

const getSatellites = async (req, res) => {
  try {
    const satellites = await Satellite.find({});
    res.status(200).json(satellites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSatellite = async (req, res) => {
  try {
    const { id } = req.params;
    const satellite = await Satellite.findById(id);
    res.status(200).json(satellite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postSatellite = async (req, res) => {
  try {
    const satellite = await Satellite.create(req.body);
    res.status(200).json(satellite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const putSatellite = async (req, res) => {
  try {
    const { id } = req.params;
    const satellite = await Satellite.findByIdAndUpdate(id, req.body);

    if (!satellite) {
      return res.status(404).json({ message: "Satellite not found" });
    }

    const updatedSatellite = await Satellite.findById(id);
    res.status(200).json(updatedSatellite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSatellite = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const satellite = await Satellite.findByIdAndDelete(id);

    if (!satellite) {
      return res.status(404).json({ message: "Satellite not found" });
    }

    res.status(200).json({ message: "Satellite deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSatellites,
  getSatellite,
  postSatellite,
  putSatellite,
  deleteSatellite,
};
