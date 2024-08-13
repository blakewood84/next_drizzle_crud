import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";

export function AvatarDropdown() {
  return (
    <div className="flex items-center">
      <NavigationMenu orientation="vertical">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <_Avatar />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div>Some Content</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function _Avatar() {
  return (
    <Avatar className="h-[1.5rem] w-[1.5rem]">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
