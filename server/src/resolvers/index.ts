import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

import User from '../models/Users';
import Publication from '../models/Publication';

const UserExist = (email: string) => {
  const exists = User.findOne({ email });
  return exists;
};

const buildToken = (usuario: any, secret: string, expiresIn: string) => {
  const { id, email, name, phone, lastname } = usuario;
  return jwt.sign({ id, email, name, phone, lastname }, secret, { expiresIn });
};

interface typeAuth {
  input: inputAuth;
}
interface inputAuth {
  email: string;
  password: string;
}
interface IUser {
  id: any;
  name: string;
  email: string;
  phone: string;
  created: string;
}
interface typePubt {
  input: inputPubt;
}
interface TypeAddGuest {
  input: inputGuest;
}
interface inputGuest {
  publicationId: any;
  from: Date;
  to: Date;
}
interface inputPubt {
  name: string;
  location: string;
  price: number;
  category: string;
}

const resolvers = {
  Query: {
    getUser: async (_: any, __: any, ctx: any) => {
      const { user } = ctx;
      console.log('user', user);
      return user;
    },
    getPublications: async () => {
      console.log('getPublications');
      try {
        const publicaciones = await Publication.find({});
        return publicaciones;
      } catch (error) {
        console.log(error);
      }
    },
    getPublicationsSearch: async (_: any, { input }: any) => {
      console.log('getPublicationsSearch inputs:', input);
      try {
        const { destination, from, to, kids, adults, pets } = input;

        const publications = await Publication.find({
          $and: [
            // destination ? {'location.province': destination} : { $not:{'location.province': destination}}
            destination !== '' ? { 'location.province': destination } : { 'location.province': { $ne: 'trueValue' } },
            { 'terms.adults': adults },
            { 'terms.kids': kids },
            { 'terms.pets': pets }
          ]
        });

        console.log(publications);

        return publications;
      } catch (error) {
        console.log(error);
      }
    },
    getPublication: async (_: any, { id }: any) => {
      console.log('id', id);
      try {
        const publicacion = await Publication.findById(id);
        return publicacion;
      } catch (error) {
        console.log(error);
      }
    }
  },
  Mutation: {
    newUser: async (_: any, { input }: any) => {
      console.log(input);
      const { email, password } = input;
      //revisar si el usuario esta registrado
      const exists = await User.findOne({ email });
      if (exists) {
        throw new Error('User is registered');
      }
      //hasheo de password
      const salt = await bcryptjs.genSaltSync(10);
      input.password = await bcryptjs.hash(password, salt);
      // guardar en la base
      try {
        const user = new User(input);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    authenticate: async (_: any, { input }: typeAuth) => {
      const { email, password } = input;
      //si el usuario existe
      const user = await User.findOne({ email });
      if (user === null) {
        throw new Error('User is registered');
      }
      // revisar el pwd
      const pwd = await bcryptjs.compare(password, user.password);
      if (!pwd) {
        throw new Error('Invalid');
      }
      return {
        token: buildToken(user, `${process.env.SECRET_WORD}`, '48h')
      };
    },
    newPublication: async (_: any, { input }: any, ctx: any) => {
      console.log(input, 'input');

      const { user } = ctx;
      if (!user) {
        throw new Error('No estas autenticado');
      }

      const owner = ctx.user.id;
      console.log('owner', owner);
      input.owner = owner;

      console.log('input', input);

      try {
        const publication = new Publication(input);
        publication.save();
        return publication;
      } catch (error) {
        console.log(error);
      }
    },
    addGuest: async (_: any, { input }: TypeAddGuest, ctx: any) => {
      console.log('input', input);
      const { publicationId, to, from } = input;
      const guest = ctx.user.id;

      try {
        const old = await Publication.findById(publicationId);
        if (!old) {
          throw new Error('publication doesnt exists');
        }
        old.guests.push({ guest, to, from });
        console.log('old', old);
        const newPublication = await Publication.findOneAndUpdate({ _id: publicationId }, old, { new: true });
        return newPublication;
      } catch (error) {
        console.log(error);
      }
    },
    deletePublication: async (_: any, { id }: any, ctx: any) => {
      console.log('id', id);
      const { user } = ctx;
      if (!user) {
        throw new Error('No estas autenticado');
      }

      const publication = await Publication.findById(id);
      console.log('owner', publication?.owner);
      console.log('id', user.id);

      if (publication?.owner.toString() !== user.id.toString()) {
        throw new Error('No eres el dueño de esta publicacion');
      }

      try {
        await Publication.findByIdAndDelete(id);
      } catch (error) {
        throw new Error('No se pudo eliminar');
      }

      return 'Publicacion Eliminada';
    }
  }
};

export default resolvers;
