
import './App.css'
import Profilepage from './components/profilepage';
import Navbar from './components/navbar';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Layout from './components/layout';
import Candidates from './components/candidates';
import Castvote from './components/castvote';
import Votecount from './components/votecount';
import Adminpanal from './components/adminpanal';
import Signup from './components/signup';
import Signupnavbar from './components/signupnavbar';
import Login from './components/login';
import ProtectedRoute from './components/protectedroute';
import AdminRoute from './components/adminroute';
import NotAuthorized from './components/notauthority';
import AboutPage from './components/aboutpage';
import UpcomingElection from './components/upcomingelection';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<>
      <ProtectedRoute>
      <Layout>
        <Navbar/>
        <Dashboard/>
        </Layout>
      </ProtectedRoute></>
    },
    {
      path:'/profile',
      element:<>
      <ProtectedRoute>
      <Layout><Navbar/><Profilepage/></Layout></ProtectedRoute></>
    },
    {
      path:'/candidates',
      element:<>
      <ProtectedRoute>
        <Layout>
        <Navbar/>
          

          <Candidates/>
        
      </Layout>
      </ProtectedRoute>
      </>
    },
    {
      path:'candidates/vote',
      element:<>
      <ProtectedRoute>
      <Layout>
        <Navbar/>
        <Castvote/>
      </Layout>
      </ProtectedRoute>
      </>
    },
    {
      path:'/upcomingelection',
      element:<>
      <ProtectedRoute>
      <Layout>
        <Navbar/>
        <UpcomingElection/>
      </Layout>
      </ProtectedRoute>
      </>
    },
     {
      path:'/votecount',
      element:<>
      <ProtectedRoute>
      <Layout>
        <Navbar/>
        <Votecount/>
      </Layout>
      </ProtectedRoute>
      </>
    },
    {
      path:'*',
      element:<ProtectedRoute>
        <Layout><Navbar/>
        <NotAuthorized/></Layout>
        
      </ProtectedRoute>
    },
    {
      path:'/adminpanel',
      element:<>
     <AdminRoute>
      <Layout>
        <Navbar/>
        <Adminpanal/>
      </Layout>
      </AdminRoute>
      </>
    },
    {
      path:"/signup",
      element:<Layout>
        <Signupnavbar/>
      <Signup/>
      </Layout>
    },
    {
      path:"/login",
      element:<Layout>
        <Signupnavbar/>
        <Login/>
      </Layout>
    },
    {
      path:"/about",
      element:<Layout>
        <Navbar/>
        <AboutPage/>
      </Layout>
    }
    
  ])
  return (
    <>
    
    <RouterProvider router={router}/>
       <ToastContainer position="top-center" autoClose={3000} />
       </>
    
  );
}

export default App;
