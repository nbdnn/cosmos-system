const Conjunction = require("./conjunction");

const getConjunctions = async (req, res) => {
  try {
    const conjunctions = await Conjunction.find({});
    res.status(200).json(conjunctions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getConjunction = async (req, res) => {
  try {
    const { id } = req.params;
    const conjunction = await Conjunction.findById(id);
    res.status(200).json(conjunction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postConjunction = async (req, res) => {
  try {
    const conjunction = await Conjunction.create(req.body);
    res.status(200).json(conjunction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const putConjunction = async (req, res) => {
  try {
    const { id } = req.params;
    const conjunction = await Conjunction.findByIdAndUpdate(id, req.body);

    if (!conjunction) {
      return res.status(404).json({ message: "Conjunction not found" });
    }

    const updatedConjunction = await Conjunction.findById(id);
    res.status(200).json(updatedConjunction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteConjunction = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const conjunction = await Conjunction.findByIdAndDelete(id);

    if (!conjunction) {
      return res.status(404).json({ message: "Conjunction not found" });
    }

    res.status(200).json({ message: "Conjunction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getConjunctions,
  getConjunction,
  postConjunction,
  putConjunction,
  deleteConjunction,
};
