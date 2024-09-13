import Konten from "../models/konten-model.js";

const kontenController = {
    getAll: async (req, res) => {
        try {
            const allKonten = await Konten.findAll();
            res.json(allKonten);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const newKonten = await Konten.create(req.body);
            res.status(201).json(newKonten);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const konten = await Konten.findByPk(req.params.id);
            if (!konten) return res.status(404).json({ message: "Konten not found" });
            await konten.update(req.body);
            res.json(konten);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const konten = await Konten.findByPk(req.params.id);
            if (!konten) return res.status(404).json({ message: "Konten not found" });
            await konten.destroy();
            res.json({ message: "Konten deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

export default kontenController;