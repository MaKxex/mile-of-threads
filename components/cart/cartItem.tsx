// components/CartItem.tsx
"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ICartItem } from "@/lib/interfaces"

export default function CartItem({
  item,
  handleIncrement,
  handleDecrement,
  handleRemove
}: {
  item: ICartItem,
  handleIncrement: (id: string) => void,
  handleDecrement: (id: string) => void,
  handleRemove: (id: string) => void
}) {
  return (
    <div key={item.id} className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg object-cover" />
      <div className="grid gap-1">
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-muted-foreground">
          ${item.price.toFixed(2)} x {item.amount}
        </div>
        <div className="text-sm text-muted-foreground">
          {item.size} {item.color}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost" onClick={() => handleDecrement(item.id)}>
          <MinusIcon className="w-4 h-4" />
          <span className="sr-only">Decrement</span>
        </Button>
        <Button size="icon" variant="ghost" onClick={() => handleIncrement(item.id)}>
          <PlusIcon className="w-4 h-4" />
          <span className="sr-only">Increment</span>
        </Button>
        <Button size="icon" variant="ghost" onClick={() => handleRemove(item.id)}>
          <XIcon className="w-4 h-4" />
          <span className="sr-only">Remove</span>
        </Button>
      </div>
    </div>
  )
}

function MinusIcon(props: any) {
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
      <path d="M5 12h14" />
    </svg>
  )
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function XIcon(props: any) {
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
