import CredentialsProvider from 'next-auth/providers/credentials';
import { getUser } from '@/database/user';
import { validateHashedPassword } from '@/utils';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in with username',
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const user = await getUser(email);

        const isCorrectPassword = await validateHashedPassword(
          password,
          user.password
        );

        if (isCorrectPassword) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true;
      }

      return false;
    },
    async jwt({ token, user, trigger, session, account }) {
      // console.log('jwt', {
      //   user,
      //   token,
      //   session,
      //   account,
      // });
      if (user) {
        token.user = { ...user };
      }
      return token;
    },
    async session({ session, user, token }) {
      // console.log('session', { token, user, session });
      session.user = token.user;
      return session;
    },
  },

  session: {
    strategy: 'jwt',
  },
  pages: { signIn: '/signin' },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};


