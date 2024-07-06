//u can make this a client component too by using hooks
"use client"

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";

const AdminPage = async () => {
  const onServerActionClick = () => {
    admin().then((data) => {
        if(data.error) {
            console.log("YOU ARE FORBIDDEN")
        }

        if(data.success) {
            console.log("YOU ARE ALLOWED")
        }
    })
  }


  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        console.log("YOU ARE ALLOWED")
      } else {
        console.log("YOU ARE FORBIDDEN")
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You Are Allowed To See This Content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin Only API Route</p>
          <Button onClick={onApiRouteClick}>Click To Test</Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin Only Server Action</p>
          <Button onClick={onServerActionClick}>Click To Test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
