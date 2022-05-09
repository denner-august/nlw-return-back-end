import nodemailer from "nodemailer";
import { MailadapterProps, sendMailDataProps } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8d63e3ac836955",
    pass: "c75e42dd510446",
  },
});

export class NodemailerMailAdapter implements MailadapterProps {
  async sendMail({ subject, body }: sendMailDataProps): Promise<void> {
    await transport.sendMail({
      from: "equipe feedget <oi@feedget.com>",
      to: "Denner Augusto <denner.augusto90@gmail.com>",
      subject,
      html: body,
    });
  }
}
