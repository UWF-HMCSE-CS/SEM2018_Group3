export class Message {
  conversationWithId: string;
  conversationWithFirstName: string;
  conversationWithLastName: string;
  dateTime: Date;
  text: string;
  from: string; // ID of who the message is from
  to: string; // ID of who the message is to
  read: Boolean;
}
