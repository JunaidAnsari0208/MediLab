"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const Settings = () => {
  const session = useSession();
  const onClick = () => {
    logout();
  };
  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <Button
          onClick={onClick}
          type="submit"
          className="ml-1 text-white bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 hover:border"
        >
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default Settings;
