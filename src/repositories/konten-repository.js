import Konten from "../models/konten-model.js";

export default class KontenRepository {
    static async create(kontenData) {
        return await Konten.create(kontenData);
    }

    static async getAll() {
        return await Konten.findAll();
    }

    static async getById(id) {
        return await Konten.findByPk(id);
    }

    static async getByUuid(uuid) {
        return await Konten.findOne({
            where: { uuid: uuid } // Cari berdasarkan UUID string
        });
    }

    static async update(id, kontenData) {
        const konten = await Konten.findByPk(id);
        if (!konten) {
            throw new Error("Content not found");
        }
        return await konten.update(kontenData);
    }

    static async delete(id) {
        const konten = await Konten.findByPk(id);
        if (!konten) {
            throw new Error("Content not found");
        }
        return await konten.destroy();
    }
}
