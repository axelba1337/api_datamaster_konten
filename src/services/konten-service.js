import kontenRepository from "../repositories/konten-repository.js";

export default class KontenService {
    static async create(kontenData) {
        return await kontenRepository.create(kontenData);
    }

    static async getAll() {
        return await kontenRepository.getAll();
    }

    static async getById(id) {
        return await kontenRepository.getById(id);
    }

    static async update(id, kontenData) {
        return await kontenRepository.update(id, kontenData);
    }

    static async delete(id) {
        return await kontenRepository.delete(id);
    }
}
