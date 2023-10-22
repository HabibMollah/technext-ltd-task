type Props = {
  children: React.ReactNode;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
};

export default function Select({ children, label, value, setValue }: Props) {
  return (
    <div>
      <select
        className="form-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label={label}>
        {children}
      </select>
    </div>
  );
}
