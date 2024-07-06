"use client";

import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";

import {  ExitIcon } from "@radix-ui/react-icons";
import { LogoutButton } from "./auth/logout-button";

export const UserButton = () => {
  const user = useCurrentUser();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      //updateUserProfilePicture(file);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton>
          <DropdownMenuItem>
          <ExitIcon className="h-4 w-4 mr-2"/>
            Logout
         </DropdownMenuItem>
        </LogoutButton>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
