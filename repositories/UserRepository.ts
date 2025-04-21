import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';


class UserRepository {

  static async add(user: User){
    const sql = 'INSERT INTO users (email, nombres, apellidos, telefono, password) VALUES (?, ?, ?, ?, ?)';
    const values = [user.email, user.nombres, user.apellidos, user.telefono, user.password];
    return db.execute(sql, values);
}

    static async login(auth: Auth){
        const sql = 'SELECT id, password FROM users WHERE email=?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
          if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: result[0][0].id}
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }

    static async getAllUsers(){
        const sql = 'SELECT id, email, nombres, apellidos, telefono FROM users';
        return db.execute(sql);
    }

    static async getUserById(id: number){
        const sql = 'SELECT id, email, nombres, apellidos, telefono FROM users WHERE id=?';
        const values = [id];
        return db.execute(sql, values);
    }

    static async updateUser(id: number, user: User){
        const sql = 'UPDATE users SET email=?, nombres=?, apellidos=?, telefono=? WHERE id=?';
        const values = [user.email, user.nombres, user.apellidos, user.telefono, id];
        return db.execute(sql, values);
    }

    static async deleteUser(id: number){
        const sql = 'DELETE FROM users WHERE id=?';
        const values = [id];
        return db.execute(sql, values);
    }

    static async getUserByEmail(email: string){
        const sql = 'SELECT id, email, nombres, apellidos, telefono FROM users WHERE email=?';
        const values = [email];
        return db.execute(sql, values);
    }

    static async updateEmail(id: number, email: string){
        const sql = 'UPDATE users SET email=? WHERE id=?';
        const values = [email, id];
        return db.execute(sql, values);
    }

}


export default UserRepository;