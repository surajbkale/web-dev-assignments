import { useEffect, useState } from "react";
import { getAllCourses, purchaseCourse } from "../api/courseApi";

function Courses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await getAllCourses();
      setCourses(res.data.courses);
    } catch (err) {
      alert("Failed to fetch courses");
      console.log(err.message);
    }
  };

  const handlePurchase = async (id) => {
    try {
      await purchaseCourse(id);
      alert("Course purchased successfully!");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Courses</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={course.imageLink}
              alt={course.title}
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="text-green-600 font-bold mb-4">₹ {course.price}</p>
            <button
              onClick={() => handlePurchase(course._id)}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
