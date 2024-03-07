import { Link } from 'react-router-dom';
import { Dashboard} from '@mui/icons-material/';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

export const gridAction=(props)=>(
  <Link style={{backgroundColor:"#7BB66D"}}
  className="text-white py-1 px-2  rounded-2xl text-md"
  to="/user"
  >
   {props.Action}  
  </Link>
);



export const links=[
    {
      title:'Dashboard',
      icon: <Dashboard/>
      // checked:false
    },

    {
        title:'Users',
        icon: <PersonIcon/>
        // checked:true,
    },
     
    {
        title:'Vehicles',
        icon: <TimeToLeaveIcon/>
        // checked:false,
    },
     
    // {
    //     title:'Logout',
    //     // checked:false,
    // },
    
   
     

];

export const UserGrid=[
    {
        field:"id",
        headerText:"UserID",
        width: '120',
        textAlign: 'Center',
    },

    {
        field:"FirstName",
        headerText:"First Name",
        width: '120',
        textAlign: 'Center',
    },
    {
        field:"LastName",
        headerText: "Last Name",
        width: '120',
        textAlign: 'Center',
    },
    {
        field:"Email",
        headerText: "Email",
        textAlign: 'Center',
        width: '120',
    },
    {
        field:"UserType",
        headerText: "User Type",
        width: '150',
        textAlign: 'Center',
    },
    {
        field:"DateJoined",
        headerText: "Date Joined",
        width: '120',
        textAlign: 'Center',
    },
    {
        field:"Action",
        template:gridAction,
        headerText: "Action",
        width: '120',
        textAlign: 'Center',
    },
]

export const mockDataUsers = [
    {
      id:1,
      FirstName:'Bluenose',
      LastName:'JoeRednose',
      Email:'Bluenose@gmail.com',
      UserType:'Guest',
      DateJoined:'22-08-2022',
      Action:'ViewUser',
      ActionBg:'#8BE78B'
    },
    
    {
      id:2,
      FirstName:'Bluenose',
      LastName:'JoeRednose',
      Email:'Bluenose@gmail.com',
      UserType:'Guest',
      DateJoined:'22-08-2022',
      Action:'ViewUser',
    },
    
    {
      id:3,
      FirstName:'Bluenose',
      LastName:'JoeRednose',
      Email:'Bluenose@gmail.com',
      UserType:'Guest',
      DateJoined:'22-08-2022',
      Action:'ViewUser',
    },
    
    {
      id:4,
      FirstName:'Bluenose',
      LastName:'JoeRednose',
      Email:'Bluenose@gmail.com',
      UserType:'Guest',
      DateJoined:'22-08-2022',
      Action:'ViewUser',
    },
    
    {
      id:5,
      FirstName:'Bluenose',
      LastName:'JoeRednose',
      Email:'Bluenose@gmail.com',
      UserType:'Guest',
      DateJoined:'22-08-2022',
      Action:'ViewUser',
    },
    
    {
      id:6,
      FirstName:'Bluenose',
      LastName:'JoeRednose',
      Email:'Bluenose@gmail.com',
      UserType:'Guest',
      DateJoined:'22-08-2022',
      Action:'ViewUser',
    },
    ];
