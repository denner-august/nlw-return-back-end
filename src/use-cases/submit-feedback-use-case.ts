import { feebacksRepository } from "../repositories/feedbacks-repository";
import { MailadapterProps } from "../adapters/mail-adapter";

interface submitFeddbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class submitFeedbackUseCase {
  constructor(
    private feedbacksRepository: feebacksRepository,
    private MailDataProsp: MailadapterProps
  ) {}

  async execute(request: submitFeddbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("type is required");
    }

    if (!comment) {
      throw new Error("comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64,")) {
      throw new Error("Invalid screenshot");
    }

    await this.feedbacksRepository.create({ type, comment, screenshot });

    await this.MailDataProsp.sendMail({
      subject: "novo feedback",
      body: [
        `<div style="font-family:sans-serif; font-size:16px; color:#111;">`,
        `<p>tipo do feedback ${type}</p>`,
        `<p>comentario do feedback ${comment}</p>`,
        screenshot ? `<img src="${screenshot}"/>` : ``,
        `</div>`,
      ].join("\n"),
    });
  }
}
