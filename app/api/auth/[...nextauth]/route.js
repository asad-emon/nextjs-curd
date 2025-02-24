import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import dbConnection from "@/lib/mongodb";
import User from "@/model/User";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (await checkExistingUser(account)) {
        console.log("USER found!!!");
        return true;
      }
      else {
        handleSignUp(user, account).then(user => {
          console.log('Created User:', user);
          return true;
        }).catch(error => {
          console.error('Error:', error);
        });
      }
      return '/';
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