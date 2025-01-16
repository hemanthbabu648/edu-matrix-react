import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Attendance from "../pages/students/Attendance"
import Marks from "../pages/students/Marks"
import MarkAttendance from "../pages/teacher/MarkAttendance"
import Grades from "../pages/teacher/Grades"
import Users from "../pages/admin/Users"
import StudentHome from "../pages/students/StudentHome"
import DashboardLayout from "../components/layout/DashboardLayout"
import AdminHome from "../pages/admin/AdminHome"
import TeacherHome from "../pages/teacher/TeacherHome"


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="student">
          <Route index element={<StudentHome/>} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="marks" element={<Marks />} />
        </Route>
        <Route path="teacher">
        <Route index element={<TeacherHome/>} />
          <Route path="markattendance" element={<MarkAttendance />} />
          <Route path="grades" element={<Grades />} />
        </Route>
        <Route path="admin">
        <Route index element={<AdminHome/>} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default AllRoutes