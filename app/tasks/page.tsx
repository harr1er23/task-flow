import * as React from "react"
 
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react"

export default function Tasks() {
    return(
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <Button className="flex">
                   Filters
                </Button>
                <div className="flex gap-1">
                    <Button variant="outline">New Task</Button>
                    <Button >New Board +</Button>
                </div>
            </div>
            <div className="flex justify-between wrap p-6 bg-slate-700 gap-6">
                <div draggable className="max-h-full w-1/3 border-t border-solid border-red-600 bg-gray-600">
                    <div className="flex justify-between border-b mb-4 border-solid border-gray-500 p-4">
                        <div>Plan</div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem 
                                >
                                Copy payment ID
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>View customer</DropdownMenuItem>
                                <DropdownMenuItem>View payment details</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <div draggable className="flex flex-col p-2 bg-white rounded text-black">
                            <span>Task 1</span>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <div className="max-h-screen w-1/3 border-t border-solid border-amber-300 bg-gray-600">
                    <div className="border-b mb-4 border-solid border-gray-500 p-4">
                        Plan
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex flex-col p-2 bg-white rounded text-black">
                            <span>Task 1</span>
                            <p>Description</p>
                        </div>
                        <div className="flex flex-col p-2 bg-white rounded text-black">
                            <span>Task 1</span>
                            <p>Description</p>
                        </div>
                        <div className="flex flex-col p-2 bg-white rounded text-black">
                            <span>Task 1</span>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <div className="max-h-screen w-1/3 border-t border-solid border-emerald-500 bg-gray-600">
                    <div className="border-b mb-4 border-solid border-gray-500 p-4">
                        Plan
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex flex-col p-2 bg-white rounded text-black">
                            <span>Task 1</span>
                            <p>Description</p>
                        </div>
                        <div className="flex flex-col p-2 bg-white rounded text-black">
                            <span>Task 1</span>
                            <p>Description</p>
                        </div>
                        <div className="flex flex-col p-2 bg-white rounded text-black">
                            <span>Task 1</span>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};