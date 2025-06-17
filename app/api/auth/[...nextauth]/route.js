import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import dbConnection from "@/lib/mongodb";
import User from "@/model/User";

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (await checkExistingUser(account)) {
          console.log("USER found!!!");
          return true;
        }

        // Wait for handleSignUp to complete before returning true
        const newUser = await handleSignUp(user, account);
        console.log('Created User:', newUser);
        return true;
      } catch (error) {
        console.error('Error:', error);
        return false; // Returning false will reject the sign-in attempt
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl; // Ensures it always redirects correctly
    }
  }
};

const handler = NextAuth(authOptions);

const handleSignUp = async (user, account) => {
  const newUser = new User({
    username: user.name,
    email: user.email,
    provider: account.provider,
    providerAccountId: account.providerAccountId,
    profilePicture: user.image,
  });
  try {
    await dbConnection();
    const userData = await newUser.save();
    return userData;
  }
  catch (error) {
    console.log(error);
  }
}

const checkExistingUser = async ({ provider, providerAccountId }) => {
  await dbConnection();
  const user = await User.findOne({ provider, providerAccountId }).exec();
  if (user) {
    return true;
  }
  return false;
}

export { handler as GET, handler as POST }