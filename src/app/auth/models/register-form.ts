export interface RegisterForm {
  userType: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  busniessOrigin: string;
  busniessEmail: string;
  busniessName?: string;
  busniessWebsite?: string;
  userDesignation?: string;
  password: string;
  confirmPassword: string;
}
