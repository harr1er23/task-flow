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

export const Registration: React.FC = () => {
    return(
        <TabsContent value="registration">
        <Card>
          <CardHeader>
            <CardTitle>Create new account</CardTitle>
            <CardDescription>Create a new account in our system.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="pass">Passwod</Label>
              <Input id="pass" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirmPass">Confirm passwod</Label>
              <Input id="confirmPass" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Confirm</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    );
}