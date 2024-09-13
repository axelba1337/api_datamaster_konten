import { DataTypes } from "sequelize";
import sequelizeInstance from "../configurations/sequalize-instance.js";

const Konten = sequelizeInstance.define('Konten', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    uuid: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    jenis_konten: {
        type: DataTypes.ENUM('0', '1'), // ENUM untuk jenis_konten
        allowNull: false,
        comment: "0 = News, 1 = Advertisement"
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
            return this.jenis_konten === '0';  // Konten wajib jika jenis_konten = News
        },
    },
    creator: {
        type: DataTypes.STRING(255),
    },
    publish_date: {
        type: DataTypes.DATE,
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: function() {
            return this.jenis_konten === '1';  // URL wajib jika jenis_konten = Advertisement
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    paranoid: true,
    tableName: 'datamaster_konten'
});

// Sync model
Konten.sync();
export default Konten;