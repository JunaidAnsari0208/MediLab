import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Settings = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button
          type="submit"
          className="ml-1 text-white bg-red-500 hover:bg-white hover:text-red-500"
        >
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default Settings;
