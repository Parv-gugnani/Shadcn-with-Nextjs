import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { badgeVariants } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button className="mb-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
        Click me
      </Button>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border mb-4">
          <AccordionTrigger className="p-4 bg-gray-100 cursor-pointer">
            Press here
          </AccordionTrigger>
          <AccordionContent className="p-4">
            This is how it works when you click on it
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <AlertDialog>
        <AlertDialogTrigger className="mb-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 cursor-pointer">
          Open this for alert
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="bg-gray-100 p-4">
            <AlertDialogTitle className="font-bold text-lg mb-2">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="bg-gray-100 p-4">
            <AlertDialogCancel className="mr-2 bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* <div className="w-[450px]">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/wrk.JPG"
            alt="Image"
            width="300"
            height="300"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div> */}

      {/* <Avatar>
        <AvatarImage
          width="100"
          height="100"
          src="https://avatars.githubusercontent.com/u/91847055?v=4"
        />
        <AvatarFallback>This is how Shadcn Avatar works</AvatarFallback>
      </Avatar> */}

      {/* <Badge variant="outline">Badge</Badge> */}
    </div>
  );
}
