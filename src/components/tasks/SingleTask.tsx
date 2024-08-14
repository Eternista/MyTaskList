import Coding from "../../assets/icons/coding.svg";
import House from "../../assets/icons/house.svg";
import Meetings from "../../assets/icons/meetings.svg";
import Other from "../../assets/icons/other.svg";
import Shopping from "../../assets/icons/shopping.svg";
import Work from "../../assets/icons/work.svg";

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

  const handleIconDisplay = (icon: string) => {
    switch(icon){
      case "coding" :
        return <Coding/>
        break;
      case "house":
        return <House/>
        break
      case "meetings":
        return <Meetings/>
        break;
      case "shopping" :
        return <Shopping/>
        break;
      case "work":
        return <Work/>
        break
      case "other":
        return <Other/>
        break;
      default:
        return <Other/>
        break;
    }
  }

  return (
    <div className="single-task">
      {handleIconDisplay(icon)}
      {title}
      {desc}
      {creationDate}
      {termDate}
    </div>
  );
};

export default SingleTask;
