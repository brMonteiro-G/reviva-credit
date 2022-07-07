interface InfoProps {
  title: string;
  value: string;
}

const InfoCredit = ({ title, value }: InfoProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default InfoCredit;
