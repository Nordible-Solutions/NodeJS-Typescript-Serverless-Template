import {Sequelize} from 'sequelize-typescript';
import User from './user.model';
 
const sequelize =  new Sequelize({
        database: 'iadgxdgr',
        dialect: 'postgres',
        username: 'iadgxdgr',
        password: 'QqXqwJjSM2D6TspzUjiAxKE120Iu-FFB',
        host: 'baasu.db.elephantsql.com',
        port: 5432
});

sequelize.addModels([User])

export default sequelize;