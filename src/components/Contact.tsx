import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in touch</h2>
            <p className="text-muted-foreground md:text-xl">
              Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-semibold">How can you find us?</h3>
          <p>
            Our seasoned team of attorneys is dedicated to providing you with the professional advice and assistance you
            need. With a breadth of knowledge in various legal domains, we're well-equipped to address your queries,
            offer sound legal counsel, or arrange a detailed consultation at your convenience. We're committed to
            collaborating with you to secure the most favorable outcome for your legal concerns. Visit us today at our
            central location in Addis Ababa, Lideta Sub City, ,directly opposite to landmark Lideta Federal court, and
            discover how we can support your journey towards justice.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Email</h3>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <MailIcon className="w-5 h-5" />
                <p>psolomon39@yahoo.com</p>
              </div>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <MailIcon className="w-5 h-5" />
                <p>psolaxis@gmail.com</p>
              </div>
              <h3 className="text-xl font-semibold">Location</h3>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <MapPinIcon className="w-5 h-5" />
                <p>Liberia St, Nur Building 1st Floor, Office #105</p>
              </div>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <MapPinIcon className="w-5 h-5" />
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Phone Number</h3>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <p>+251-944246334</p>
              </div>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <p>+251-944162261</p>
              </div>
              <h3 className="text-xl font-semibold">Timing</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <p>Mon: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <p>Tue: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <p>Wed: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <p>Thu: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <p>Fri: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <p>Sat: 2:00 - 6:00 LT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClockIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function MailIcon(props:any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props:any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props:any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}