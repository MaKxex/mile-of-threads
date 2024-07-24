import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Profile() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <div className="bg-muted rounded-lg p-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Olivia Davis</h2>
              <p className="text-muted-foreground">olivia.davis@acme.com</p>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">Account Settings</h3>
              <div className="grid gap-2 mt-2">
                <Link href="#" className="flex items-center justify-between" prefetch={false}>
                  <span>Update Profile</span>
                  <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
                </Link>
                <Link href="#" className="flex items-center justify-between" prefetch={false}>
                  <span>Change Password</span>
                  <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
                </Link>
                <Link href="#" className="flex items-center justify-between" prefetch={false}>
                  <span>Payment Methods</span>
                  <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
                </Link>
                <Link href="#" className="flex items-center justify-between" prefetch={false}>
                  <span>Shipping Addresses</span>
                  <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Preferences</h3>
              <div className="grid gap-2 mt-2">
                <Link href="#" className="flex items-center justify-between" prefetch={false}>
                  <span>Notifications</span>
                  <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
                </Link>
                <Link href="#" className="flex items-center justify-between" prefetch={false}>
                  <span>Privacy Settings</span>
                  <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Order History</h2>
          <div className="space-y-6">
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">#3210</div>
                <div className="text-muted-foreground">June 23, 2022</div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Glimmer Lamps</h3>
                    <p className="text-muted-foreground">Quantity: 2</p>
                  </div>
                  <div className="text-right">$120.00</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Aqua Filters</h3>
                    <p className="text-muted-foreground">Quantity: 3</p>
                  </div>
                  <div className="text-right">$49.00</div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <div className="font-semibold">Total</div>
                <div className="text-lg font-semibold">$169.00</div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">#3207</div>
                <div className="text-muted-foreground">November 2, 2021</div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Sunset Beach Shorts</h3>
                    <p className="text-muted-foreground">Quantity: 1</p>
                  </div>
                  <div className="text-right">$34.99</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Sunset Beach Towel</h3>
                    <p className="text-muted-foreground">Quantity: 2</p>
                  </div>
                  <div className="text-right">$19.00</div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <div className="font-semibold">Total</div>
                <div className="text-lg font-semibold">$53.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}