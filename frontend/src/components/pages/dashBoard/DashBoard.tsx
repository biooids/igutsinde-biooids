import { useEffect, useState } from "react";
import moment from "moment";

// Define the types for API response and user data
type User = {
  _id: string;
  userName: string;
  phone: string;
  password: string;
  isAdmin: boolean;
  paid: boolean;
  profilePic: string;
  datePaid?: string; // Optional since it may not exist for unpaid users
  __v: number;
  createdAt: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
  users: User[];
};

function DashBoard() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getAllUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/getAllUsers");
      const data: ApiResponse = await res.json();

      if (data.success) {
        setData(data.users);
      } else {
        setError(data.message);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className="overflow-x-auto min-h-screen mt-5">
      {loading ? (
        <div className="text-center mt-10">Loading...</div>
      ) : error ? (
        <div className="text-center mt-10 text-red-500">{error}</div>
      ) : (
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Paid</th>
              <th>Date Paid</th>
              <th>Profile Picture</th>
              <th>Date Joined</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.userName}</td>
                <td>{user.phone}</td>
                <td>{user.paid ? "Yes" : "❌"}</td>
                <td>
                  {user.paid && user.datePaid
                    ? moment(user.datePaid).format("YYYY-MM-DD")
                    : "❌"}
                </td>
                <td>
                  <img
                    src={user.profilePic}
                    alt={`${user.userName}'s profile`}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>{moment(user.createdAt).format("YYYY-MM-DD")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default DashBoard;
