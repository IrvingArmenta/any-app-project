export type TextAreaPropsType = {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
