import { Message } from './message.model';
import { Appointment } from './appointment.model';
import { Feedback } from './feedback.model';

export class User {
  _id: string;

  // Profile information
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;

  // Patient bio: Description of issues; Professional bio: list of credentials or professional history
  bio: string;

  // The type of account (ex. patient; type of professional) from AccountType list below
  type: string;

  // Appointments
  requestedAppointments: Appointment[];
  approvedAppointments: Appointment[];

  // Messages between patient and professional
  messages: Message[];

  // Patient feedback: review on professionals; Professional feedback: personal note about patient
  feedback: Feedback[];
}
