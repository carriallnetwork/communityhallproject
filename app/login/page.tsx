// 'use client'

// //http://bit.ly/communityhallproject

// import React from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider, AuthError } from 'firebase/auth';
// import app from '@/firebase/firebaseApp';

// const LoginPage: React.FC = () => {
//   const [signupStatus, setSignupStatus] = React.useState<'success' | 'failure' | 'pending'>('pending');

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth(app);

//     try {
//       await signInWithPopup(auth, provider);
//       setSignupStatus('success');
//     } catch (error) {
//       const firebaseError = error as AuthError;
//       const errorCode = firebaseError.code;
//       const errorMessage = firebaseError.message;
//       console.error(errorCode, errorMessage);
//       setSignupStatus('failure');
//     }
//   };

//   const redirectToGoogleSheets = () => {
//     window.location.href = 'https://forms.gle/yfEEtN5GofH3yHgdA';
//   };

//   return (
//     <div className="font-body text-center h-screen flex items-center justify-center">
//       <div className="w-80 h-100 bg-yellow-100 border-2 border-orange-500 p-8 rounded-md">
//         <h2 className="text-2xl mb-4">Login</h2>
//         <button
//           onClick={handleGoogleSignIn}
//           className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 mb-4"
//         >
//           Sign up with Google
//         </button>

//         {signupStatus === 'success' && (
//           <p className="text-green-600 font-bold mb-4">Sign up successful!</p>
//         )}
//         {signupStatus === 'failure' && (
//           <p className="text-red-600 font-bold mb-4">Sign up failed. Please try again.</p>
//         )}

//         {signupStatus === 'success' && (
//           <div>
//             <p className="text-gray-800 mb-2">Sign up successful! Go to Google Sheets:</p>
//             <button
//               onClick={redirectToGoogleSheets}
//               className="bg-yellow-500 text-white rounded-full px-6 py-2 hover:bg-yellow-600"
//             >
//               Go to Google Sheets
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
