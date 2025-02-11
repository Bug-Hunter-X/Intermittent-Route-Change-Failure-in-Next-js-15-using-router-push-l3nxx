# Intermittent Route Change Failure in Next.js 15

This repository demonstrates an intermittent routing error encountered in a Next.js 15 application.  Navigation to certain pages using `router.push` sometimes fails without any error messages or console warnings. The route change simply doesn't happen. 

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to the `/about` page.
5. Repeatedly click the "Go to Contact Page" button.  You will notice that sometimes the navigation to `/contact` fails.

## Potential Causes

This appears to be a race condition. The timing of various events within the `router` might be causing this issue. The exact cause may depend on the environment and the specific components of the application.

## Solution

The provided solution involves using a combination of `useEffect` hook and `router.replace` to address the race condition.