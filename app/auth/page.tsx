import { Login } from "@/components/shared/login"
import { Registration } from "@/components/shared/registration"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Auth() {
  return (
    <div className="flex h-full justify-center items-center">
        <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="registration">Registation</TabsTrigger>
        </TabsList>
        <Login/>
        <Registration/>
        </Tabs>
    </div>
  );
};
