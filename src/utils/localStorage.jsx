//got from chatgpt (create a json data of 5 employees each eployee contains id and email and passwrod. make sure to give them password 123 . also create another json data of one admin with same properties)
const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2025-03-12",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2025-03-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2025-03-14",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Optimize Database",
                "taskDescription": "Improve query performance and indexing",
                "taskDate": "2025-03-18",
                "category": "Backend"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Cover all modules with Jest unit tests",
                "taskDate": "2025-03-16",
                "category": "Testing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "UI Improvements",
                "taskDescription": "Redesign login and registration screens",
                "taskDate": "2025-03-19",
                "category": "Frontend"
            },
            
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy to Production",
                "taskDescription": "Launch version 2.0 on cloud servers",
                "taskDate": "2025-03-14",
                "category": "Deployment"
            }
            
            
        ]
    },

    {
        "id": 2,
        "firstName": "Priya",
        "email": "priya@example.com",
        "password": "abc123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Logo",
                "taskDescription": "Create a new logo for the mobile app",
                "taskDate": "2025-03-15",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Write Documentation",
                "taskDescription": "Draft the project setup guide",
                "taskDate": "2025-03-09",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Sync",
                "taskDescription": "Weekly team meeting",
                "taskDate": "2025-03-11",
                "category": "Meeting"
            }
        ]
    },
    
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "ravi@company.org",
        "password": "ravi2025",
        "taskCounts": {
            "active": 2,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Setup CI/CD",
                "taskDescription": "Implement deployment pipeline",
                "taskDate": "2025-03-13",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests on GitHub",
                "taskDate": "2025-03-12",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create Sprint Plan",
                "taskDescription": "Finalize tasks for sprint",
                "taskDate": "2025-03-10",
                "category": "Planning"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create API Documentation",
                "taskDescription": "Write Swagger docs for all endpoints",
                "taskDate": "2025-03-20",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Add Dark Mode",
                "taskDescription": "Implement dark/light theme toggle",
                "taskDate": "2025-03-21",
                "category": "Frontend"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Onboard New Developer",
                "taskDescription": "Set up dev environment and share credentials",
                "taskDate": "2025-03-13",
                "category": "HR"
            }
            
            
            
        ]
    },

    {
        "id": 4,
        "firstName": "Meera",
        "email": "meera123@gmail.com",
        "password": "meera@321",
        "taskCounts": {
            "active": 0,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Market Research",
                "taskDescription": "Analyze competitor websites",
                "taskDate": "2025-03-17",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Post on LinkedIn",
                "taskDescription": "Announce product launch",
                "taskDate": "2025-03-10",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize Budget",
                "taskDescription": "Confirm budget allocations",
                "taskDate": "2025-03-11",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Resolve Payment Gateway Bug",
                "taskDescription": "Fix checkout issue causing payment failures",
                "taskDate": "2025-03-22",
                "category": "Bugfix"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Integrate Google Analytics",
                "taskDescription": "Add GA tracking to all pages",
                "taskDate": "2025-03-23",
                "category": "Analytics"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Migrate to TypeScript",
                "taskDescription": "Refactor JS files to TS",
                "taskDate": "2025-03-24",
                "category": "Refactoring"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Demo",
                "taskDescription": "Demonstrate latest sprint updates",
                "taskDate": "2025-03-25",
                "category": "Client"
            }
            
        ]
    },



    {
        "id": 5,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 6,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "category": "QA"
            }
        ]
    },
    {
        "id": 7,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 8,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "category": "Support"
            }
        ]
    }
];

// [.....]-> means array of objects
const admin = [{    
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
