import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import {SearchIcon, Package2Icon, BellIcon, CalendarClockIcon ,HomeIcon, ShoppingCartIcon,PackageIcon, UsersIcon, LandmarkIcon, LineChartIcon, ArrowLeftIcon} from "@/icons/icons"


export default function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <SidebarLink href="#" icon={<HomeIcon className="h-4 w-4" />} label="Home" />
            <SidebarLink href="#" icon={<ShoppingCartIcon className="h-4 w-4" />} label="Orders" />
            <SidebarLink href="#" icon={<PackageIcon className="h-4 w-4" />} label="Products" />
            <SidebarLink href="#" icon={<UsersIcon className="h-4 w-4" />} label="Customers" />
            <SidebarLink href="#" icon={<LandmarkIcon className="h-4 w-4" />} label="Dashboard" isActive />
            <SidebarLink href="#" icon={<LineChartIcon className="h-4 w-4" />} label="Analytics" />
          </nav>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link href="#" className="lg:hidden" prefetch={false}>
        <Package2Icon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input type="search" placeholder="Search" className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950" />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800">
            <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
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
    </header>
  );
}

function MainContent() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button id="date" variant="outline" className="w-[280px] justify-start text-left font-normal">
                <CalendarClockIcon className="mr-2 h-4 w-4" />
                June 01, 2023 - June 30, 2023
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar initialFocus mode="range" numberOfMonths={2} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* <CardComponent title="Total Sales" amount="$2389.00" ChartComponent={AreachartgradientChart} />
          <CardComponent title="Revenue" amount="$1454.00" ChartComponent={AreachartstackedChart} /> */}
          {/* <CardComponent title="Customer Growth" amount="33.5%" ChartComponent={PiechartlabelChart} /> */}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* <CardComponent title="New Customers" amount="345" ChartComponent={BarchartlabelChart} />
          <CardComponent title="Returning Customers" amount="33.5%" ChartComponent={LinechartChart} /> */}
        </div>
      </div>
    </main>
  );
}

function SidebarLink({ href, icon, label, isActive=true } : {href:string, icon:any, label:string, isActive?:boolean}) {
  return (
    <Link href={href} className={`flex items-center gap-3 rounded-lg px-3 py-2 ${isActive ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50' : 'text-gray-500 dark:text-gray-400'} transition-all hover:text-gray-900 dark:hover:text-gray-50`} prefetch={false}>
      {icon}
      {label}
    </Link>
  );
}

function CardComponent({ title, amount, ChartComponent }: {title:string, amount:string, ChartComponent:any}) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle>{amount}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartComponent className="aspect-[4/3]" />
      </CardContent>
    </Card>
  );
}
