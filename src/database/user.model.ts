import {Table, Column, Model, CreatedAt} from 'sequelize-typescript';
 
@Table
class User extends Model<User> {
 
  @Column
  firstName: string;
 
  @Column
  lastName: string;

  @CreatedAt
  creationDate: Date;

}

export default User;