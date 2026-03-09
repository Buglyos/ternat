import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Team = sequelize.define('Team', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  league: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'teams',
  timestamps: true
})

export default Team
