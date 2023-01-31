import { Box, Button, Card, CardBody, CardHeader, Divider, FormControl, Stack } from '@chakra-ui/react';
import { Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { UserData } from '../../types/user';

interface Props {
  user: UserData;
  updateUser: (user: UserData) => Promise<void>;
}

// export const AccountProfileDetails: React.FC<Props> = ({ user, updateUser }) => {

//   const formik = useFormik({
//     initialValues: {
//       email: user.email,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       type: user.type
//     },
//     validationSchema: Yup.object({
//       email: Yup
//         .string()
//         .email(
//           'Must be a valid email')
//         .max(255)
//         .required(
//           'Email is required'),
//       firstName: Yup
//         .string()
//         .max(255)
//         .required(
//           'First name is required'),
//       lastName: Yup
//         .string()
//         .max(255)
//         .required(
//           'Last name is required')
//     }),
//     onSubmit: async () => {
//       updateUser(formik.values);
//     }
//   });

//   return (
//     <Form
//       autoComplete="off"
//       onSubmit={formik.handleSubmit}
//     >
//       <Card
//         variant="outlined"
//       >
//         <CardHeader
//           title="Profile"
//         />
//         <Divider />
//         <CardBody>
//           <Stack
//             alignItems='center'
//             spacing={4}
//           >
//             <Stack
//               direction='row'
//               spacing={2}
//             >
//               <Field
//                 error={Boolean(formik.touched.firstName && formik.errors.firstName)}
//                 fullWidth
//                 helperText={formik.touched.firstName && formik.errors.firstName}
//                 label="First Name"
//                 name="firstName"
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//                 value={formik.values.firstName}
//                 variant="outlined"
//               />
//               <Field
//                 error={Boolean(formik.touched.lastName && formik.errors.lastName)}
//                 fullWidth
//                 helperText={formik.touched.lastName && formik.errors.lastName}
//                 label="Last Name"
//                 name="lastName"
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//                 value={formik.values.lastName}
//                 variant="outlined"
//               />
//             </Stack>
//             <Field
//               error={Boolean(formik.touched.email && formik.errors.email)}
//               fullWidth
//               helperText={formik.touched.email && formik.errors.email}
//               label="Email Address"
//               name="email"
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               type="email"
//               value={formik.values.email}
//               variant="outlined"
//             />
//           </Stack>
//         </CardBody>
//         <Divider />
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             p: 2
//           }}
//         >
//           <Button
//             color="primary"
//             variant="contained"
//             type="submit"
//           >
//             Save
//           </Button>
//         </Box>
//       </Card>
//     </Form>
//   );
// };