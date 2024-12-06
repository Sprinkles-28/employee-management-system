
const employees = [
    {
      "id": 1,
      "firstName": "Rajesh Kumar",
      "email": "employee1@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 0,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare weekly report",
          "taskDate": "2024-11-29",
          "category": "Reporting",
          "description": "Compile data from all departments and create a summary report for the week."
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client meeting preparation",
          "taskDate": "2024-11-28",
          "category": "Meetings",
          "description": "Prepare presentation slides and agenda for the upcoming client meeting."

        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Database backup",
          "taskDate": "2024-11-27",
          "category": "Maintenance",
          "description": "Backup critical database files to ensure data integrity and security."

        },
        {}
      ]
    },
    {
      "id": 2,
      "firstName": "Aditi Sharma",
      "email": "employee2@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update software licenses",
          "taskDate": "2024-11-30",
          "category": "IT",
          "description": "Renew and update software licenses to ensure compliance and functionality."

        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Complete user manual",
          "taskDate": "2024-11-25",
          "category": "Documentation",
          "description": "Finish writing the user guide for the new software release."

        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Onboard new hires",
          "taskDate": "2024-11-26",
          "category": "HR",
          "description": "Conduct orientation sessions and provide necessary resources for new employees."

        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Audit expense reports",
          "taskDate": "2024-11-28",
          "category": "Finance",
          "description": "Review and verify all submitted expense reports for the quarter."

        }
      ]
    },
    {
      "id": 3,
      "firstName": "Vikram Singh",
      "email": "employee3@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Draft project proposal",
          "taskDate": "2024-11-29",
          "category": "Projects",
          "description": "Outline objectives, scope, and resources required for the new project."

        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Conduct performance reviews",
          "taskDate": "2024-11-30",
          "category": "HR",
          "description": "Evaluate team members' performance and provide constructive feedback."

        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix network issue",
          "taskDate": "2024-11-26",
          "category": "IT",
          "description": "Resolve persistent connectivity problems affecting multiple users."

        }
      ]
    },
    {
      "id": 4,
      "firstName": "Priya Verma",
      "email": "employee4@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare training material",
          "taskDate": "2024-11-27",
          "category": "Training",
          "description": "Develop slides and handouts for the upcoming employee training session."

        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Resolve customer queries",
          "taskDate": "2024-11-29",
          "category": "Support",
          "description": "Respond to and resolve outstanding issues reported by customers."

        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update marketing strategy",
          "taskDate": "2024-11-25",
          "category": "Marketing",
          "description": "Revise marketing plans based on recent campaign data."

        },
        {}
      ]
    },
    {
      "id": 5,
      "firstName": "Anjali Mehta",
      "email": "employee5@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare budget report",
          "taskDate": "2024-11-29",
          "category": "Finance",
          "description": "Analyze expenditures and prepare a detailed budget report for management."

        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Clean up old files",
          "taskDate": "2024-11-26",
          "category": "Maintenance",
          "description": "Archive outdated files and delete unnecessary records from the system."

        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Design new dashboard",
          "taskDate": "2024-11-28",
          "category": "Design",
          "description": "Create a mockup for the dashboard of the new analytics platform."

        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize team building event",
          "taskDate": "2024-12-01",
          "category": "HR",
          "description": "Plan activities and book venues for the upcoming team building event."

        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare training material",
          "taskDate": "2024-11-27",
          "category": "Training",
          "description": "Develop slides and handouts for the upcoming employee training session."

        }
      ]
    }
  ];
  const admin=[ {
    "id": 1,
    "firstName": "Ravi Patel",
    "email": "admin@example.com",
    "password": "123",
  }];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}
}

