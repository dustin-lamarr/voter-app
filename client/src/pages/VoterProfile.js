// import React, { useState } from "react";
// import Container from "../components/Container";
// import Dashboard from "../components/Dashboard";

// export function VoterProfile() {
//   const styles = {
//     rowStyle: {
//       background: "white",
//     },
//   };

//   const [userData, setUserData] = useState({
//     first_name: "",
//     last_name: "",
//     address: "",
//     address2: "",
//     city: "",
//     estado: "",
//     zip: "",
//   });

//   function _handleChange(event) {
//     const { name, value } = event.target;
   
//     setUserData({ ...userData, [name]: value });
//   }

//   function _handleSubmit(event) {
//     event.preventDefault();
  
//     const {
//       first_name,
//       last_name,
//       address,
//       address2,
//       city,
//       estado,
//       zip,
//     } = userData;

//     apiAuth
//       .signup(
//         email,
//         password,
//         first_name,
//         last_name,
//         address,
//         address2,
//         city,
//         estado,
//         zip
//       )
//       .catch((err) => {
//         // Choose your error notification
//         console.log("err", err);
//       });
//   }

//   return (
//     <Container>
//       <Dashboard>
//       <div className="row">
//           <div className="col-4"></div>
//           <div
//             className="col-4 border rounded py-3 mb-5"
//             style={styles.textColor}
//           >
//             <h3>Create your Voter account</h3>
//             <hr></hr>
//             <form onSubmit={_handleSubmit}>
//               <div className="row pb-3">
//                 <label htmlFor="nameInput" className="form-label">
//                   Name
//                 </label>
//                 <div className="col-sm-6">
//                   <input
//                     type="text"
//                     name="first_name"
//                     className="form-control"
//                     placeholder="First name"
//                     aria-label="First name"
//                     value={userData.first_name}
//                     onChange={_handleChange}
//                   />
//                 </div>
//               <button
//                 type="submit"
//                 className="btn btn-dark mt-3"
//                 style={styles.buttonColor}>
//                 Next
//               </button>
//               </div>
//             </form>
//           </div>
//           <div className="col-4"></div>
//         </div>
//       </Dashboard>
//     </Container>
//   );
// }

