import { DataTypes } from "@sequelize/core";
import conn from "../db/conn.js";

const User = conn.define("Usuario", {
  nome: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  profissao: {
    type: DataTypes.TEXT,
    required: true,
  },
  email: {
    type: DataTypes.TEXT,
    required: true,
  },
  imagem: {
    type: DataTypes.TEXT,
    required: true,
  },
});

export default User;
