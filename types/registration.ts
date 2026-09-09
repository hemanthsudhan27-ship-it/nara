export interface RegistrationData {
  fullName: string;
  phone: string;
  email: string;
  sessionBatch: string;
  message?: string;
  upiReference?: string;
  bankAccountName?: string;
  amount: number;
  screenshotBase64?: string;
  screenshotName?: string;
  screenshotUrl?: string;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: string;
  data?: RegistrationData;
  screenshotUrl?: string;
  whatsappUrl?: string;
  error?: string;
}
