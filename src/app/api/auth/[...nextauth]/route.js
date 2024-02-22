import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUser } from '@/database/user';
import { validateHashedPassword } from '@/utils';

const handler = NextAuth({
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
  pages: { signIn: '/signin' },
});

export { handler as GET, handler as POST };
