const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare weekly report",
          "taskDate": "2024-11-29",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client meeting preparation",
          "taskDate": "2024-11-28",
          "category": "Meetings"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Database backup",
          "taskDate": "2024-11-27",
          "category": "Maintenance"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update software licenses",
          "taskDate": "2024-11-30",
          "category": "IT"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Complete user manual",
          "taskDate": "2024-11-25",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Onboard new hires",
          "taskDate": "2024-11-26",
          "category": "HR"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Audit expense reports",
          "taskDate": "2024-11-28",
          "category": "Finance"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Draft project proposal",
          "taskDate": "2024-11-29",
          "category": "Projects"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Conduct performance reviews",
          "taskDate": "2024-11-30",
          "category": "HR"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix network issue",
          "taskDate": "2024-11-26",
          "category": "IT"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare training material",
          "taskDate": "2024-11-27",
          "category": "Training"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Resolve customer queries",
          "taskDate": "2024-11-29",
          "category": "Support"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update marketing strategy",
          "taskDate": "2024-11-25",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare budget report",
          "taskDate": "2024-11-29",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Clean up old files",
          "taskDate": "2024-11-26",
          "category": "Maintenance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Design new dashboard",
          "taskDate": "2024-11-28",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize team building event",
          "taskDate": "2024-12-01",
          "category": "HR"
        }
      ]
    }
  ];
  const admin =[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('employees'))

   console.log(employees,admin)
}

