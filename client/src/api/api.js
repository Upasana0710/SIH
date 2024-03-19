import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3300",
});

// sign up
export const signup = (user) => API.post("/user/register", user);

// sign in
export const signin = (user) => API.post("/user/login", user);

// add user's subjects
export const addSubjects = (request, token) =>
  API.patch(
    "/user/addInfo",
    request,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

//  get user's subjects
export const getUserSubjects = (token) =>
  API.get(
    "/user/getInfo",
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

// get subject from ID

export const getSubjectFromId = (subjectId, token) =>
  API.get(
    "/subject/" + subjectId,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

// get posts

export const getPosts = (token) =>
  API.get(
    "/post/posts",
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

// post creation
export const createPost = (post, token) =>
  API.post(
    "/post/create",
    post,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

//Get subjects
export const getSubjects = (token) =>
  API.get(
    "/subject/list",
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

//Generate schedule
export const generateSchedule = (request, token) =>
  API.post(
    "/schedule/create",
    request,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

//Newslet
export const getNews = (token) =>
  API.get(
    "/event/getEvents",
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

// Update User Rating
export const updateTeachRating = (request, token) => {
  API.post(
    "/user/rating",
    request,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );
};

export const getTeachers = (request, token) =>
  API.get(
    `/subject/bestTeachers?name=${request}`,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );

export const getUser = (request) => API.get(`/user/getUser/${request}`);

export const getUserByToken = (token) =>
  API.get(
    `/user/getByToken`,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );
