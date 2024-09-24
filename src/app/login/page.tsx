import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

export default async function LogInPage() {
  const { user } = await getUser();

  const signInUrl = await getSignInUrl();

  return (
    <main>
      <h1>Using hosted AuthKit</h1>
      <h2>With Next.js library</h2>
      {user ? (
        <>
          <p>Welcome back {user?.firstName && `, ${user?.firstName}`}</p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign out</button>
          </form>
        </>
      ) : (
        <a href={signInUrl}>Sign in</a>
      )}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
}
