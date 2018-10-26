export class AccountType {
  PATIENT = 'Patient';
  PSYCHOLOGIST = 'Psychologist';
  THERAPIST = 'Therapist';
  PSYCHIATRIST = 'Psychiatrist';
  COUNSELOR = 'Counselor';
  SOCIAL_WORKER = 'Social Worker';
  // others?

  getProfessionalTypesArray(): string[] {
    return [
      this.PSYCHOLOGIST,
      this.THERAPIST,
      this.PSYCHIATRIST,
      this.COUNSELOR,
      this.SOCIAL_WORKER
    ];
  }

  getAllTypesArray(): string[] {
    return [
      this.PATIENT,
      this.PSYCHOLOGIST,
      this.THERAPIST,
      this.PSYCHIATRIST,
      this.COUNSELOR,
      this.SOCIAL_WORKER
    ];
  }
}
