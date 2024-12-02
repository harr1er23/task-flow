import React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TabsContent } from "@/components/ui/tabs"

export const Login = () => {
    return(
        <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login in to your account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@email.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="pass">Password</Label>
              <Input id="pass" type="password" placeholder="******" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    );
};