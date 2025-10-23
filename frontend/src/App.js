import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm'; 
// ... code khác

// ĐÃ SỬA: CHỈ GIỮ LẠI MỘT DÒNG CODE ĐÚNG
const API_URL = "http://localhost:3000/users"; 

function App() {
// ...

// ... code tiếp theo trong App.js