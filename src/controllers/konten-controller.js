import KontenService from "../services/konten-service.js";

const kontenController = {
    getAll: async (req, res) => {
        try {
            const allKonten = await KontenService.getAll();
            res.json(allKonten);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            // Mengkonversi file menjadi Base64
            // if (typeof req.body.file === 'string') {
            //     const buffer = Buffer.from(req.body.file, 'utf-8'); // Mengkonversi teks ke buffer
            //     req.body.file = buffer.toString('base64'); // Mengkonversi buffer ke string Base64
            // }
            const newKonten = await KontenService.create(req.body);
            res.status(201).json(newKonten);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const updatedKonten = await KontenService.update(req.params.id, req.body);
            if (!updatedKonten) return res.status(404).json({ message: "Konten not found" });
            res.json(updatedKonten);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const deletedKonten = await KontenService.delete(req.params.id);
            if (!deletedKonten) return res.status(404).json({ message: "Konten not found" });
            res.json({ message: "Konten deleted successfully", deletedAt: deletedKonten.deletedAt });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // hardDelete: async (req, res) => {
    //     try {
    //         const deletedKonten = await KontenService.hardDelete(req.params.id);
    //         if (!deletedKonten) return res.status(404).json({ message: "Konten not found" });
    //         res.json({ message: "Konten permanently deleted successfully" });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    // deleteAll: async (req, res) => {
    //     try {
    //         const countDeleted = await KontenService.deleteAll();
    //         res.json({ message: "All konten deleted successfully", countDeleted });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    // getId: async (req, res) => {
    //     try {
    //         const konten = await KontenService.getById(req.params.id);
    //         if (!konten) return res.status(404).json({ message: "Konten not found" });
    //         res.json(konten);
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    getByUuid: async (req, res) => {
        try {
            const konten = await KontenService.getByUuid(req.params.uuid);
            if (!konten) return res.status(404).json({ message: "Konten not found" });
            res.json(konten);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

export default kontenController;