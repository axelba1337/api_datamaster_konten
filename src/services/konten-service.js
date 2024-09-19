import kontenRepository from "../repositories/konten-repository.js";

export default class KontenService {
    static async create(kontenData) {
        return await kontenRepository.create(kontenData);
    }

    static async getAll() {
        return await kontenRepository.getAll();
    }

    // static async getById(id) {
    //     return await kontenRepository.getById(id);
    // }

    static async getByUuid(uuid) {
        return await kontenRepository.getByUuid(uuid);
    }

    static async update(id, kontenData) {
        return await kontenRepository.update(id, kontenData);
    }

    static async delete(id) {
        const konten = await kontenRepository.getById(id);
        if (!konten) return null; // Jika tidak ditemukan

        konten.deletedAt = Math.floor(Date.now() / 1000);
        await konten.save();
        return konten;
    }

    // static async hardDelete(id) {
    //     const konten = await kontenRepository.getById(id);
    //     if (!konten) return null; // Jika tidak ditemukan

    //     await konten.destroy(); // Menghapus konten dari database
    //     return konten;
    // }

    // static async deleteAll() {
    //     const kontenList = await this.getAll();
    //     for (let konten of kontenList) {
    //         konten.deletedAt = Math.floor(Date.now() / 1000);
    //         await konten.save();
    //     }
    //     return kontenList.length; // Kembalikan jumlah konten yang dihapus
    // }
}
