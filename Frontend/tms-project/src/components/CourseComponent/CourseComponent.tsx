import "./CourseComponent.css";

type CoursePropsType = {
  name: string;
  description: string;
  creditNumber: number;
};

function CourseComponent(props: CoursePropsType) {
  return (
    <div className="course-component-container">
      <h1 className="course-name">{props.name}</h1>
      <h3 className="course-desc">{props.description}</h3>
      <h4 className="course-credit-num">{props.creditNumber}</h4>
    </div>
  );
}

export default CourseComponent;
