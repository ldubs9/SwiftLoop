
import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define country codes for the dropdown with emoji flags
const countryCodes = [
  { value: "971", label: "🇦🇪 UAE (+971)", flag: "🇦🇪" },
  { value: "1", label: "🇺🇸 USA (+1)", flag: "🇺🇸" },
  { value: "44", label: "🇬🇧 UK (+44)", flag: "🇬🇧" },
  { value: "91", label: "🇮🇳 India (+91)", flag: "🇮🇳" },
  { value: "966", label: "🇸🇦 Saudi Arabia (+966)", flag: "🇸🇦" },
  { value: "49", label: "🇩🇪 Germany (+49)", flag: "🇩🇪" },
  { value: "86", label: "🇨🇳 China (+86)", flag: "🇨🇳" },
  { value: "81", label: "🇯🇵 Japan (+81)", flag: "🇯🇵" },
  { value: "82", label: "🇰🇷 South Korea (+82)", flag: "🇰🇷" },
  { value: "61", label: "🇦🇺 Australia (+61)", flag: "🇦🇺" },
  { value: "33", label: "🇫🇷 France (+33)", flag: "🇫🇷" },
  { value: "39", label: "🇮🇹 Italy (+39)", flag: "🇮🇹" },
  { value: "34", label: "🇪🇸 Spain (+34)", flag: "🇪🇸" },
  { value: "7", label: "🇷🇺 Russia (+7)", flag: "🇷🇺" },
  { value: "55", label: "🇧🇷 Brazil (+55)", flag: "🇧🇷" },
  { value: "52", label: "🇲🇽 Mexico (+52)", flag: "🇲🇽" },
  { value: "31", label: "🇳🇱 Netherlands (+31)", flag: "🇳🇱" },
  { value: "90", label: "🇹🇷 Turkey (+90)", flag: "🇹🇷" },
  { value: "20", label: "🇪🇬 Egypt (+20)", flag: "🇪🇬" },
  { value: "92", label: "🇵🇰 Pakistan (+92)", flag: "🇵🇰" },
  { value: "234", label: "🇳🇬 Nigeria (+234)", flag: "🇳🇬" },
  { value: "27", label: "🇿🇦 South Africa (+27)", flag: "🇿🇦" },
  { value: "60", label: "🇲🇾 Malaysia (+60)", flag: "🇲🇾" },
  { value: "65", label: "🇸🇬 Singapore (+65)", flag: "🇸🇬" },
  { value: "66", label: "🇹🇭 Thailand (+66)", flag: "🇹🇭" },
  { value: "84", label: "🇻🇳 Vietnam (+84)", flag: "🇻🇳" },
  { value: "62", label: "🇮🇩 Indonesia (+62)", flag: "🇮🇩" },
  { value: "63", label: "🇵🇭 Philippines (+63)", flag: "🇵🇭" },
  { value: "64", label: "🇳🇿 New Zealand (+64)", flag: "🇳🇿" },
  { value: "358", label: "🇫🇮 Finland (+358)", flag: "🇫🇮" },
  { value: "46", label: "🇸🇪 Sweden (+46)", flag: "🇸🇪" },
  { value: "47", label: "🇳🇴 Norway (+47)", flag: "🇳🇴" },
  { value: "45", label: "🇩🇰 Denmark (+45)", flag: "🇩🇰" },
  { value: "48", label: "🇵🇱 Poland (+48)", flag: "🇵🇱" },
  { value: "41", label: "🇨🇭 Switzerland (+41)", flag: "🇨🇭" },
  { value: "43", label: "🇦🇹 Austria (+43)", flag: "🇦🇹" },
  { value: "32", label: "🇧🇪 Belgium (+32)", flag: "🇧🇪" },
  { value: "351", label: "🇵🇹 Portugal (+351)", flag: "🇵🇹" },
  { value: "30", label: "🇬🇷 Greece (+30)", flag: "🇬🇷" },
  { value: "972", label: "🇮🇱 Israel (+972)", flag: "🇮🇱" },
];

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  countryCode: z.string().default("971"),
  phoneNumber: z.string().regex(/^\d{9}$/, {
    message: "Please enter a valid phone number (9 digits without country code).",
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "971", // Default to UAE
      phoneNumber: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
    
    console.log("Form data:", data);
  };

  // Find flag for the currently selected country code
  const getSelectedCountryFlag = (code: string) => {
    const country = countryCodes.find(country => country.value === code);
    return country ? country.flag : '🇦🇪';
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cream to-peach">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">Get in Touch</h2>
          <div className="w-20 h-1 bg-coral mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-navy2">
            Ready to transform your business with intelligent automation? Let's start a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 card-shadow">
            <h3 className="text-xl font-bold mb-6 text-navy">Send us a message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy2">Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                      <FormLabel className="text-navy2">Your Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-2">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy2">Code</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Code">
                                {getSelectedCountryFlag(field.value)} +{field.value}
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[220px]">
                            {countryCodes.map((code) => (
                              <SelectItem key={code.value} value={code.value}>
                                {code.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="text-navy2">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="501234567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy2">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What is your message about?" {...field} />
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
                      <FormLabel className="text-navy2">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us how we can help..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-coral hover:bg-coral2 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} className="ml-2" /></>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div>
            <div className="bg-navy text-white p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={20} />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-gray-200">info@swiftloop.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-200">(+971) 50-123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-coral text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
              <p className="mb-6">Schedule a free 30-minute consultation to discuss how we can help your business grow with AI.</p>
              <a 
                href="https://calendly.com/swiftloop-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-coral px-6 py-3 rounded-md font-semibold hover:bg-cream transition-colors inline-block"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// Note: The above code is a React component for a contact form with validation and a country code dropdown.