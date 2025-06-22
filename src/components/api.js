import axios from 'axios';



const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});


API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

API.interceptors.response.use(
  
  res=>res,
  err=>{
    if(
      err.response &&
      err.response.status === 401 &&
      err.response.data.message === 'jwt expired'
    ){
      
      localStorage.removeItem('token');
       window.location.href = '/login';
    
    }
    return Promise.reject(err);
  }
)

//auth api
export const loginUser = (data) => API.post('/user/login', data);
export const signupUser = (data) => API.post('/user/signup', data);

// Candidate API
export const fetchCandidates = () => API.get('/candidate/candidates');
export const voteForCandidate = (candidateId, electionId) => 
  API.post(`/candidate/vote/${candidateId}`, { electionId });

// Vote Count API
export const fetchVoteCount = () => API.get('/votecount');

// Admin API
export const createCandidate = (data) => API.post('/candidate/addcandidate', data);

export const fetchUserProfile = () => API.get('/user/profile');

export const deletecandidate = (id) => API.delete(`/candidate/deletecandidate/${id}`);

export const fetchtokenverify=()=> API.get('/verify');

export const fetchVoteStatusByElection = (electionId) => {
  return API.get(`/votestatus/status/${electionId}`);
};

export const fetchelection=()=>API.get('/election/current')

export const fetchelectiondata=()=>API.get('/election/data')

export const createelectiondata=(data)=>API.post('/election/create',data)

export const deleteelection = (id) => API.delete(`/election/deleteelection/${id}`);



export const updateelection = (electionId, updatedData) => {
  return API.put(`/election/update/${electionId}`, updatedData);
};

// //for otp
// export const requestotp =(mobile)=>API.post('/mobile/request-otp', { mobile });
// export const verifyOtp = (payload) => API.post('/mobile/verify-otp', payload);




