import { DataTypes } from "sequelize";
import sequelizeInstance from "../configurations/sequalize-instance.js";
import { toEpoch } from "../utils/epoch.js"; // Buat file utils menghindari duplikasi
import { uuidv7 } from "uuidv7";

const Konten = sequelizeInstance.define('Konten', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    uuid: {
        type: DataTypes.STRING(255),
        defaultValue: ()=> uuidv7(),
        unique: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    jenis_konten: {
        type: DataTypes.ENUM('News', 'Ads'),
        allowNull: false,
    },
    meta_description: {
        type: DataTypes.STRING(150),
    },
    file: {
        type: DataTypes.TEXT,
    },
    konten: {
        type: DataTypes.TEXT,
        allowNull: function() {
            return this.jenis_konten === 'News';  // Konten wajib jika jenis_konten = News
        },
    },
    creator: {
        type: DataTypes.STRING(255),
    },
    publish_date: {
        type: DataTypes.INTEGER, // Simpan dalam bentuk epoch timestamp
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: function() {
            return this.jenis_konten === 'Ads';  // URL wajib jika jenis_konten = Ads
        },
    },
    createdAt: {
        type: DataTypes.INTEGER, // Simpan dalam bentuk epoch timestamp
        defaultValue: () => Math.floor(Date.now() / 1000),
    },
    updatedAt: {
        type: DataTypes.INTEGER, // Simpan dalam bentuk epoch timestamp
        defaultValue: () => Math.floor(Date.now() / 1000),
    },
    deletedAt: {
        type: DataTypes.INTEGER, // Simpan dalam bentuk epoch timestamp untuk soft delete
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    hooks: {
        beforeCreate: (konten) => {
            konten.jenis_konten = konten.jenis_konten === "0" ? "News" : "Ads";
            konten.publish_date = toEpoch(konten.publish_date);
            konten.createdAt = Math.floor(Date.now() / 1000);
        },
        beforeUpdate: (konten) => {
            konten.jenis_konten = konten.jenis_konten === "0" ? "News" : "Ads";
            konten.updatedAt = Math.floor(Date.now() / 1000);
        },
    },
    tableName: 'datamaster_konten'
});

Konten.sync();
export default Konten;