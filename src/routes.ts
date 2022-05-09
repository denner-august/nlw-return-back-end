import express from "express";
import nodemailer from "nodemailer";
import { submitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { prismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const router = express.Router();

router.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const UseprismaFeedbacksRepository = new prismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const UsesubmitFeedbackUseCase = new submitFeedbackUseCase(
    UseprismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await UsesubmitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
