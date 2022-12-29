import { useEffect, useState } from "react";
import CourseDetail from "../components/CourseDetail";

const Home = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses/");
      const json = await response.json();

      if (response.ok) {
        setCourses(json);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <div>
        {courses &&
          courses.map((course) => (
            <CourseDetail key={course._id} course={course}></CourseDetail>
          ))}
      </div>
    </div>
  );
};

export default Home;
