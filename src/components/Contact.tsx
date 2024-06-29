import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuMapPin, LuPhone, LuMail, LuAlarmClock } from "react-icons/lu";

// Define the validation schema using Zod
const FormSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  phone: z.string().regex(/^\+?\d{10,15}$/, "Invalid phone number").optional(),
  subject: z.string().nonempty("Subject is required"),
  enquiryType: z.string().nonempty("Type of enquiry is required"),
  address: z.string().nonempty("Address is required"),
  message: z.string().nonempty("Message is required"),
});

type FormData = z.infer<typeof FormSchema>;

const enquiryOptions = [
  { value: "personal_website", label: "Personal Website" },
  { value: "ecommerce_website", label: "Ecommerce Website" },
  { value: "blog_website", label: "Blog Website" },
  { value: "portfolio_website", label: "Portfolio Website" },
  { value: "business_website", label: "Business Website" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [result, showResult] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const sendEmail = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_jckawjr",
          "template_0ip03ik",
          formRef.current,
          "ZPz30qjv2GNETKh1m"
        )
        .then(
          (result) => {
            console.log(result.text);
            showResult(true);
            form.reset(); // Reset the form after submission
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in touch
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Have a question or want to work together? Fill out the form and
              we'll get back to you as soon as possible.
            </p>
          </div>
          <Form {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(sendEmail)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="enquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Enquiry</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select enquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {enquiryOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      {form.formState.errors.enquiryType && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.enquiryType.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your address" {...field} />
                      </FormControl>
                      {form.formState.errors.address && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.address.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the subject" {...field} />
                    </FormControl>
                    {form.formState.errors.subject && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.subject.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
              {result && (
                <p className="text-green-500">Email successfully sent!</p>
              )}
            </form>
          </Form>
        </div>
        <div>
          <h3 className="text-xl font-semibold">How can you find us?</h3>
          <p>
            Come visit our friendly team of software developers! We're here to
            provide top-notch software solutions tailored to your needs. Whether
            you need advice, guidance, or a detailed consultation, we're ready
            to help. Our office is easy to find, located in Addis Ababa on Ras
            Desta Damtew Road, inside the OBS Tv Building, 3rd Floor, Office
            #305. Stop by and see how we can help with your software projects!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Email</h3>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <LuMail className="w-5 h-5" />
                <p>codex@gmail.com</p>
              </div>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <LuMail className="w-5 h-5" />
                <p>mulishtadesse2022@gmail.com</p>
              </div>
              <h3 className="text-xl font-semibold">Location</h3>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <LuMapPin className="w-5 h-5" />
                <p>
                  Ras Desta Damtew Road , OBS Tv Building 3rd Floor, Office #305
                </p>
              </div>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <LuMapPin className="w-5 h-5" />
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Phone Number</h3>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <LuPhone className="w-5 h-5" />
                <p>+251-946642299</p>
              </div>
              <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                <LuPhone className="w-5 h-5" />
                <p>+251-910979060</p>
              </div>
              <h3 className="text-xl font-semibold">Timing</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <LuAlarmClock className="w-5 h-5" />
                  <p>Mon: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <LuAlarmClock className="w-5 h-5" />
                  <p>Tue: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items-center gap-2">
                  <LuAlarmClock className="w-5 h-5" />
                  <p>Wed: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items.center gap-2">
                  <LuAlarmClock className="w-5 h-5" />
                  <p>Thu: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items.center gap-2">
                  <LuAlarmClock className="w-5 h-5" />
                  <p>Fri: 2:00 - 11:00 LT</p>
                </div>
                <div className="space-y-1 text-muted-foreground flex items.center gap-2">
                  <LuAlarmClock className="w-5 h-5" />
                  <p>Sat: 2:00 - 11:00 LT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
