
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-peach py-12 px-4">
      <Card className="w-full max-w-2xl bg-white card-shadow">
        <CardHeader className="text-center bg-navy text-white py-8 rounded-t-lg">
          <CheckCircle size={64} className="mx-auto mb-4 text-green-400" />
          <h1 className="text-3xl font-bold">Booking Confirmed!</h1>
          <p className="text-lg mt-2 text-gray-100">Thank you for scheduling a consultation with us.</p>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="text-center mb-6">
            <p className="text-xl text-navy">
              We're excited to discuss how we can help your business grow with AI.
            </p>
          </div>
          
          <div className="bg-cream rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="text-coral" size={24} />
              <div>
                <h3 className="font-semibold text-navy">What's Next?</h3>
                <p className="text-navy2">You'll receive a calendar invite and confirmation email shortly with all the details.</p>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-navy2">
                If you need to reschedule or have any questions before our meeting, please contact us at 
                <span className="text-coral font-medium"> swiftloop.info@gmail.com</span> or 
                <span className="text-coral font-medium"> (+971) 50-972-5199</span>.
              </p>
            </div>
          </div>
          
          <div className="bg-navy/5 rounded-lg p-6">
            <h3 className="font-semibold text-navy mb-2">To prepare for our call:</h3>
            <ul className="list-disc list-inside space-y-2 text-navy2">
              <li>Think about your current business challenges</li>
              <li>Consider which processes could benefit from automation</li>
              <li>Gather any questions you have about AI implementation</li>
              <li>Prepare to share your business goals with us</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center p-6 pt-0">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Return to Homepage
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookingConfirmation;
// This component is a confirmation page for a booking. It thanks the user for scheduling a consultation and provides next steps.
// It includes a button to return to the homepage and a list of things to prepare for the call. The design is clean and user-friendly, with a focus on clarity and ease of navigation.