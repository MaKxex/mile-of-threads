"use client"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import CartItems from "@/components/cart/CartItems"
import CartService from "@/services/CartService"
import { useState } from "react"


export default function CheckoutPage() {
  const cartService = CartService.getInstance(process.env.NEXT_PUBLIC_BACKEND_URL!, 'p1s45wz56xpf0bq') // replace 'current_user_id' with the current user's ID
  
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 px-4 py-8 sm:px-6 md:grid md:grid-cols-[1fr_350px] md:gap-8 md:py-12 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Checkout</h1>
            <p className="text-muted-foreground">Review your order and complete the checkout process.</p>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
             <>
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter your address" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Enter your city" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="Enter your state" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input id="zip" placeholder="Enter your zip code" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="Enter your card number" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="expiration">Expiration Date</Label>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger id="expiration-month">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="01">01</SelectItem>
                            <SelectItem value="02">02</SelectItem>
                            <SelectItem value="03">03</SelectItem>
                            <SelectItem value="04">04</SelectItem>
                            <SelectItem value="05">05</SelectItem>
                            <SelectItem value="06">06</SelectItem>
                            <SelectItem value="07">07</SelectItem>
                            <SelectItem value="08">08</SelectItem>
                            <SelectItem value="09">09</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="11">11</SelectItem>
                            <SelectItem value="12">12</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger id="expiration-year">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                            <SelectItem value="2028">2028</SelectItem>
                            <SelectItem value="2029">2029</SelectItem>
                            <SelectItem value="2030">2030</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="Enter your CVV" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button size="lg">Place Order</Button>
              </div>
            </>
          )}
        </div>
        <div className="space-y-4 md:sticky md:top-4 w-auto">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>$99.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tax</span>
                  <span>$8.92</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>$112.92</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
            <CardTitle>Cart</CardTitle>
            </CardHeader>
            <CardContent className="">
              <CartItems cartService={cartService}/>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
