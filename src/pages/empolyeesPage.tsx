import { useState } from "react";

type Employee = {
  id: number;
  username: string;
  age: number;
  address: string;
};

const EmpolyeesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
    const response = await fetch("http://localhost:3000/account", {
      method: "GET",
    });

    const responseJson = (await response.json()) as Employee[];

    setEmployees(responseJson);

    console.log(employees);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "20px",
        marginTop: "20px",
      }}
    >
      <h1>Empolyee</h1>
      {/* {employees.map((item) => ( */}
      <table
        style={{ margin: "20px", padding: "20px", justifyContent: "center" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>ID </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Username
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Age</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "20px",
                  width: "20px",
                }}
              >
                {" "}
                {emp.id}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "20px",
                  width: "20px",
                }}
              >
                {emp.username}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "20px",
                  width: "20px",
                }}
              >
                {emp.age}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "20px",
                  width: "20px",
                }}
              >
                {emp.address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        style={{
          justifyItems: "center",
          margin: "20px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "teal",
          color: "white",
        }}
        onClick={fetchEmployees}
      >
        Tampilkan Data
      </button>
    </div>
  );
};

export default EmpolyeesPage;
