import { prisma } from "../../prisma";
import {
  feebacksRepository,
  feedbackCreateData,
} from "../feedbacks-repository";

export class prismaFeedbacksRepository implements feebacksRepository {
  async create({ type, comment, screenshot }: feedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
