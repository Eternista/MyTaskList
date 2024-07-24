import SingleTask from './SingleTask';

interface Task {
  title: string;
  desc: string;
  creationDate: string;
  termDate: string;
  icon: string;
}

const TaskListJson = {
  list: [
    {
      title: 'Clean up some code',
      desc: 'Girlfriend ask for it',
      creationDate: '23.07.2024',
      termDate: '02.08.2024',
      icon: 'Programming',
    },
  ],
};

const TaskList = () => {
  return (
    <section className="tasklist">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex">
            {TaskListJson.list.map((item: Task, index: number) => (
              <SingleTask
                key={index}
                title={item.title}
                desc={item.desc}
                creationDate={item.creationDate}
                termDate={item.termDate}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskList;
