export class Feedback {
  comment: string;
  // Patient rating: 1-5 rating for professional;
  // Professional rating: (possibly) 1-5 priority of patient severity
  rating: number;
  id: string; // who the feedback is about
}
