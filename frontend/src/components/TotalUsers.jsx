function TotalUsers({ data, role }) {
  if (role !== "Admin") {
    return null;
  }

  return (
    <span className="text-sm text-gray-500">{data.length} Total Users</span>
  );
}

export default TotalUsers;
