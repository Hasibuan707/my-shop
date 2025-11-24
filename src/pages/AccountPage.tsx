import { useEffect, useState } from "react";

interface Account {
  id: number;
  username: string;
  address: string;
}

const AccountPage: React.FC = () => {
  const [users, setUsers] = useState<Account[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await fetch("http://localhost:3000/account");
        if (!res.ok) throw new Error("Gagal Memuat");
        const data: Account[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Account</h2>
      {users.length === 0 ? (
        <p>Memuat data akun...</p>
      ) : (
        users.map((account) => (
          <div
            key={account.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{account.username}</h3>
            <p>{account.address}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AccountPage;
