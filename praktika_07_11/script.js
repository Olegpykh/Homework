const users = [
  {
    id: 1,
    username: "Jon",
    age: 20,
    status: "online",
    lastActivity: 0,
    salary: 150,
  },
  {
    id: 2,
    username: "Anna",
    age: 32,
    status: "offline",
    lastActivity: 25,
    salary: 300,
  },
  {
    id: 3,
    username: "Bob",
    age: 19,
    status: "offline",
    lastActivity: 120,
    salary: 100,
  },
  {
    id: 4,
    username: "David",
    age: 46,
    status: "online",
    lastActivity: 120,
    salary: 1500,
  },
  {
    id: 5,
    username: "Bill",
    age: 18,
    status: "offline",
    lastActivity: 8,
    salary: 2000,
  },
];

// Отобразить только тех пользователей у кого зарплата больше
// 200$ и они старше 20 лет, так как банк остальным не одобряет кредит

const rich = users.filter((user) => user.salary > 200 && user.age >= 20);
console.log(rich);

function getOnlineUsers(arr){
    return arr.filter(item => item.status ==="online")
}

function showStatusUser(arr) {
  let status = "";
  arr.forEach((item) => {
    if (item.status === "online") {
      status += `${item.username} is online, `;
    }

    if (item.status === "offline" && item.lastActivity < 10) {
      status += `${item.username} ${item.lastActivity} minutes ago, `;
    }
  });
  return status;
}



 

const onlineNow = users.filter((user) => user.status === "online" );
console.log(onlineNow);
