const CourseDetail = (props) => {
  const { course } = props;

  return (
    <div className="course-details">
      <h4>{course.title}</h4>
      <p>{course.code}</p>
      <p>{course.desc}</p>
    </div>
  );
};

export default CourseDetail;
