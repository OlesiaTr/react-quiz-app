export interface GenericData {
  loader: {
    'sub-title': string;
  };
  email: {
    title: string;
    'sub-title': string;
    type: string;
    placeholder: string;
    'empty-error': string;
    'incorrect-error': string;
    agreement: string;
  };
  success: {
    title: string;
    'sub-title': string;
    download: string;
  };
  button: {
    next: string;
    retake: string;
  };
}
