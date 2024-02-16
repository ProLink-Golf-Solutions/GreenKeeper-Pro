/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/H8fhmnm11Pb
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import React from "react"

export default function Taskview() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden bg-green-300/40 border-r lg:block dark:bg-green-800/40">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">GreenKeeper Pro</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-green-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-green-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/taskView"
              >
                <ClipboardIcon className="h-4 w-4" />
                Tasks
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Teams
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <BarChartIcon className="h-4 w-4" />
                Reports
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <header className="flex h-14 items-center gap-4 border-b bg-green-100/40 px-6 dark:bg-green-800/40">
          <div className="ml-auto flex items-center gap-2 lg:gap-4">
            <Button className="rounded-full" size="icon" variant="ghost">
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                  size="icon"
                  variant="ghost"
                >
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col p-4 md:p-6">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-2xl">Backlog</h1>
            <Button className="ml-auto" size="sm">
              New Task
            </Button>
          </div>
          <div className="border rounded-lg shadow-sm mt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Task</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead className="w-[120px]">Priority</TableHead>
                  <TableHead className="w-[120px]">Due</TableHead>
                  <TableHead className="w-[120px]">Status</TableHead>
                  <TableHead className="w-[100px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Golf Course Mowing</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>2023-08-15</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell className="flex items-center justify-end gap-2">
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Irrigation Maintenance</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>2023-08-20</TableCell>
                  <TableCell>In Progress</TableCell>
                  <TableCell className="flex items-center justify-end gap-2">
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sand Trap Raking</TableCell>
                  <TableCell>Mike Johnson</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>2023-08-25</TableCell>
                  <TableCell>Completed</TableCell>
                  <TableCell className="flex items-center justify-end gap-2">
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="border rounded-lg shadow-sm mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Task</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead className="w-[120px]">Priority</TableHead>
                  <TableHead className="w-[120px]">Due</TableHead>
                  <TableHead className="w-[120px]">Status</TableHead>
                  <TableHead className="w-[100px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Watering Schedule</TableCell>
                  <TableCell>Emily Wilson</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>2023-09-10</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell className="flex items-center justify-end gap-2">
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Equipment Maintenance</TableCell>
                  <TableCell>Michael Johnson</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>2023-09-15</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell className="flex items-center justify-end gap-2">
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="w-6 h-6" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}


function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function ClipboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function FileEditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}


function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
