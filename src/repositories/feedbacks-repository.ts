export interface feedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface feebacksRepository {
  create: (data: feedbackCreateData) => Promise<void>;
}
