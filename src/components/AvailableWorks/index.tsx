// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";

// import { Button, Grid, Typography } from "@mui/material";
// import { Item } from "./page.styles";

// interface IData {
//   id: number;
//   price: number;
//   image: string;
// }

// export default function RowAndColumnSpacing() {
//   const router = useRouter();

//   const [data, setData] = useState<IData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:3000/api/available-works");
//       const data = await response.json();
//       setData(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <Grid
//         container
//         rowSpacing={1}
//         columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//         sx={{ width: "100%" }}
//       >
//         {data.map((art: any, index: any) => {
//           return (
//             <Grid key={`firstArrayIndex ${index}`} item xs={6}>
//               <Item>
//                 <Image
//                   // className={styles.image}
//                   width={333}
//                   height={333}
//                   alt="slideshow"
//                   src={art.image}
//                 />
//                 <Typography sx={{ marginBottom: 2 }} component="p">
//                   Simply fill out the form and I'll be in touch soon.
//                 </Typography>

//                 <Link href={`/available-works/${art._id}`}>
//                   <Button variant="contained" color="secondary">
//                     About
//                   </Button>
//                 </Link>
//               </Item>
//             </Grid>
//           );
//         })}

//         {/* {pairs[1].map((art: any, index: any) => {
//           return (
//             <Grid key={`secondArrayIndex ${index}`} item xs={6}>
//               <Item>
//                 <Image
//                   className={styles.image}
//                   width={333}
//                   height={333}
//                   alt="slideshow"
//                   src={art.image}
//                 />
//                 <Typography sx={{ marginBottom: 2 }} component="p">
//                   Simply fill out the form and I'll be in touch soon.
//                 </Typography>

//                 <Link href={`/available-works/${art.id}`}>
//                   <Button variant="contained" color="secondary">
//                     About
//                   </Button>
//                 </Link>
//               </Item>
//             </Grid>
//           );
//         })} */}
//       </Grid>
//     </>
//   );
// }
