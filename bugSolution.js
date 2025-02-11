```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [navigating, setNavigating] = useState(false);

  const handleClick = () => {
    setNavigating(true);
    router.replace('/contact'); // Use replace instead of push
  };

  useEffect(() => {
    if (navigating && router.pathname !== '/contact') {
      // Add a timeout to handle potential race condition
      setTimeout(() => {
        router.replace('/contact');
        setNavigating(false);
      }, 100); 
    }
  }, [router.pathname, navigating]);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```