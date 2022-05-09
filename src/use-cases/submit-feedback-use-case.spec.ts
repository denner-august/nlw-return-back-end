import { submitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeeback = new submitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeeback.execute({
        type: "bug",
        comment: "bug",
        screenshot: "data:image/png;base64,testandoumafoto",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not  be able to submit feedback without type", async () => {
    await expect(
      submitFeeback.execute({
        type: "",
        comment: "bug",
        screenshot: "data:image/png;base64,testandoumafoto",
      })
    ).rejects.toThrow();
  });

  it("should not  be able to submit feedback without comment", async () => {
    await expect(
      submitFeeback.execute({
        type: "Bug",
        comment: "",
        screenshot: "data:image/png;base64,testandoumafoto",
      })
    ).rejects.toThrow();
  });

  it("should not  be able to submit feedback with an invalid screenshot ", async () => {
    await expect(
      submitFeeback.execute({
        type: "Bug",
        comment: "testando comentário",
        screenshot: "123",
      })
    ).rejects.toThrow();
  });
});
