export type SelectOptionType = { id: string; text: string; value: string };

export type SelectPropsType = {
  options: SelectOptionType[];
  id: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLSelectElement>) => void;
};
