type Props = {
  children: React.ReactNode;
  label?: string;
};

export default function Select({ children, label }: Props) {
  return (
    <div>
      <select className="form-select" aria-label={label}>
        {children}
      </select>
    </div>
  );
}
