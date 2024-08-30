type Top = {
  title: string;
  description: string;
};

const ProjectCard: React.FC<Top> = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Top;
