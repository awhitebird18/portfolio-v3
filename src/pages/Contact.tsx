import Header from "@/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  message: z.string().min(1),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("form-name", "contact");

    Object.keys(values).forEach((key) => {
      const typedKey = key as keyof typeof values;
      formData.append(key, values[typedKey]);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/x-www-form-urlencoded" },
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thanks for the submission. I will get back to you shortly.",
        });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error :(",
        description: "There was an issue with your submission.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col justify-center">
      <Header title="Contact." subtitle="Feel free to leave me a note below!" />
      <div className="flex flex-col items-center justify-center mb-16">
        <Form {...form}>
          <form
            name="contact"
            data-netlify="true"
            method="post"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 max-w-xl w-full mx-auto"
          >
            <input type="hidden" name="contact" value="contact" />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
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
                    <Textarea rows={7} {...field} className="resize-none" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="gap-2 ml-auto flex pt-4">
              <Button type="submit" className="ml-auto">
                Send Message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
