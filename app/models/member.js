import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Member = sequelize.define('Member', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false
  },
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'members',
  timestamps: true
})

export default Member
