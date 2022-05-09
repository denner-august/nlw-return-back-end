export interface sendMailDataProps {
  subject: string;
  body: string;
}

export interface MailadapterProps {
  sendMail(data: sendMailDataProps): Promise<void>;
}
