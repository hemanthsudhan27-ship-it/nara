export interface RegistrationData {
  fullName: string;
  phone: string;
  email: string;
  age?: string;
  sessionBatch: string;
  message?: string;
  riskAgreed?: boolean;
  // Legacy fields kept for API compatibility — no longer collected in the form
  upiReference?: string;
  bankAccountName?: string;
  amount?: number;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: string;
  data?: RegistrationData;
  whatsappUrl?: string;
  error?: string;
}
