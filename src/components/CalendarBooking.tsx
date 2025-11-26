import { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Label } from './ui/label';
import { Input } from './ui/input';

export function CalendarBooking() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Meeting booking request submitted!\n\nName: ${name}\nEmail: ${email}\nDate: ${date?.toLocaleDateString()}\nTime: ${selectedTime}\n\nIn a production environment, this would integrate with a calendar service like Calendly or Google Calendar.`);
  };

  return (
    <div className="border rounded-lg p-6 bg-background">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="h-5 w-5" />
        <h4>Select Date & Time</h4>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label className="mb-2 block">Select Date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date()}
            className="rounded-md border"
          />
        </div>

        <div>
          <Label className="mb-2 block">Available Time Slots</Label>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant={selectedTime === time ? 'default' : 'outline'}
                onClick={() => setSelectedTime(time)}
                className="justify-start"
              >
                <Clock className="mr-2 h-4 w-4" />
                {time}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="booking-name">Your Name</Label>
            <Input
              id="booking-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <Label htmlFor="booking-email">Email Address</Label>
            <Input
              id="booking-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              required
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={!date || !selectedTime || !name || !email}
        >
          Confirm Booking
        </Button>
      </form>

      <p className="mt-4 text-xs text-white text-center">
        Note: This is a demonstration interface. In production, this would integrate with a calendar service.
      </p>
    </div>
  );
}
