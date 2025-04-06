import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import prisma, { PrismaAdapter } from 'utils/prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.GITHUB_APP_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          login: profile.login,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        // Crée une copie du session et ajoute les propriétés
        const updatedSession = { ...session };
        updatedSession.colorSchema = token.colorSchema;
        updatedSession.userId = token.uid;
        updatedSession.githubHandle = token.githubHandle;
        return updatedSession;
      }
      return session;
    },
    async jwt({ user, account, token, profile, trigger, session }) {
      // Crée une copie du token et ajoute les propriétés
      const updatedToken = { ...token };

      if (trigger === 'update' && session?.colorSchema) {
        updatedToken.colorSchema = session.colorSchema;
      }

      if (user) {
        updatedToken.uid = user.id;
        updatedToken.colorSchema = user.colorSchema;
      }

      if (account) {
        updatedToken.access_token = account.access_token;
      }
      if (profile) {
        updatedToken.githubHandle = profile.login;
      }

      return updatedToken;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
