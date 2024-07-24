interface SingleItem {
  title: string;
  desc: string;
  creationDate: string;
  termDate: string;
  icon: string;
}

const SingleTask = ({
  title,
  desc,
  creationDate,
  termDate,
  icon,
}: SingleItem) => {
  return (
    <div className="single-task">
      {title}
      {desc}
      {creationDate}
      {termDate}
      {icon}
    </div>
  );
};

export default SingleTask;
