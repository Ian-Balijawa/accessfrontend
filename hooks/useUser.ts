import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useUser() {
	const [user, setUser] = useState({});

	return user;
}
