// "use client";

// import api from "@/app/api";
// import { useEffect, useState, useRef } from "react";
// import isNotAuth from "@/app/components/isNotAuth";
// import { toast } from "sonner";
// import { MdCloudUpload, MdDelete } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";
// const Uploader = (props) => {
//   const { id } = props;
//   const [image, setImage] = useState(null);
//   const [fileName, setFileName] = useState("No File Selected");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileSizeExceed, setfileSizeExceed] = useState(false);
//   const inputRef = useRef(null);
//   const [fileSize, setfileSize] = useState(0);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (fileSizeExceed) {
//       toast.error("File size exceeds 5MB limit");
//       return; // Stop execution
//     }

//     try {
//       const formData = new FormData();
//       formData.set("file", selectedFile);

//       console.log(formData);

//       const response = await api.post(`/uploadImage/${id}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       toast.success(response.data.message);
//       window.location.reload();
//     } catch (err) {
//       {
//         err.response.data
//           ? toast.error(err.response.data.message)
//           : toast.error(err.message);
//       }
//       console.log(err);
//     }
//   };

//   return (
//     <div className="flex flex-col mt-4 w-full items-center justify-center justify-items-center">
//       <form
//         onClick={() => inputRef.current.click()}
//         className="border-4 border-dashed border-[#c59a7c] rounded-lg flex flex-col items-center p-2 justify-center cursor-pointer w-full"
//       >
//         <input
//           type="file"
//           accept="image/*"
//           className="input-field hidden"
//           onChange={({ target: { files } }) => {
//             files[0] && setFileName(files[0].name);
//             setSelectedFile(files[0]);
//             var fileSizeinMB = (files[0].size / (1024 * 1024)).toFixed(2);
//             setfileSize(fileSizeinMB);
//             if (files[0].size > 5242880) {
//               setfileSizeExceed(true);
//             }
//             if (files) {
//               setImage(URL.createObjectURL(files[0]));
//             }
//           }}
//           ref={inputRef}
//         />
//         {image ? (
//           <Image
//             style={{ objectFit: "contain" }}
//             className="w-[350px] h-[350px] sm:h-[500px] sm:w-[500px]"
//             src={image}
//             alt={fileName}
//             height={500}
//             width={500}
//             loading="lazy"
//           />
//         ) : (
//           <>
//             <MdCloudUpload color="#c59a7c" size={60} />
//             <p className="text-[#644817] body-font text-center">
//               Click here to select Files to upload.
//               <br />
//               ( Allowed image formats: .jpg, .jpeg, .png. )<br />
//               Max file size: 5MB.
//             </p>
//           </>
//         )}
//       </form>

//       <section className="uploaded-row w-full text-[#644817] rounded-lg px-3 pt-3  flex items-center justify-evenly mt-4">
//         <span className="upload-content w-4/5 flex items-center px-4 py-2 border-[#644817] border-2 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap ml-0">
//           {fileName} - {fileSize} MB
//         </span>

//         <MdDelete
//           onClick={() => {
//             setFileName("No File Selected");
//             setImage(null);
//             setfileSizeExceed(false);
//             setfileSize(0);
//           }}
//           className="hover:scale-125 h-full w-8 border-[#644817] border-2 rounded-lg transition-transform ease-in-out"
//         />
//       </section>
//       {fileSizeExceed && (
//         <p className="w-4/5 text-left text-base px-4 text-[#644817] rounded-lg mb-1">
//           *File Size Exceeds 5MB limit
//         </p>
//       )}
//       <button
//         className="bg-[#644817] font-bold text-[#FFE3BE] py-2 px-4 rounded-lg hover:scale-110 mt-2 transition-transform ease-in-out"
//         type="submit"
//         onClick={handleUpload}
//       >
//         Upload
//       </button>
//     </div>
//   );
// };

// const Card = (props) => {
//   const { event } = props;

//   return (
//     <div className="text-3xl mt-4 w-full md:w-2/5 flex body-font group ">
//       <div className="flex flex-col w-full">
//         <div className="w-fit mx-auto">
//           <h2 className="text-2xl lg:text-4xl description-font uppercase mt-4 mb-2 text-[#644817]">
//             {event.name}
//           </h2>
//           <hr className="border-2 border-[#c59a7c] w-1/5 group-hover:w-full rounded-full transition-all ease-in-out " />
//         </div>
//         <ul className="list-disc list-inside mt-4">
//           <li className="text-xl font-bold text-[#644817]">
//             Image Upload: &nbsp;
//             {event.image_uploaded ? "Uploaded" : "Pending"}
//           </li>
//           {event.image_uploaded && (
//             <li className="text-xl font-bold text-[#644817]">
//               Image Approval: &nbsp;
//               {event.image_approved ? "Approved" : "Pending"}
//             </li>
//           )}
//           <li className="text-xl font-bold text-[#644817]">
//             Physical Submission: &nbsp;
//             {event.phy_submission ? "Received" : "Not Received"}
//           </li>
//         </ul>
//         {!event.image_uploaded ? (
//           <div className="flex text-xl">
//             <Uploader id={event.fk_event} />
//           </div>
//         ) : (
//           <div className="border-4 border-dashed border-[#c59a7c] rounded-lg w-full flex flex-col items-center p-2 justify-center cursor-pointer mt-4">
//             <Image
//               width={500}
//               height={500}
//               style={{ objectFit: "contain" }}
//               className="w-[350px] h-[350px] sm:h-[500px] sm:w-[500px]"
//               src={event.image_link + "3D"}
//               loading="lazy"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Submission = () => {
//   // const [events, setEvents] = useState();

//   // const trimString = (str, length) => {
//   //   if (str.length <= length * 2) {
//   //     return str;
//   //   }

//   //   const trimmedLength = str.length - length * 2;
//   //   return str.substring(length, trimmedLength);
//   // };

//   // const getEvents = async () => {
//   //   try {
//   //     const response = await api.get("/userEvent/submission");
//   //     const data = response.data.data.map((item) => {
//   //       return {
//   //         ...item,
//   //         image_link: item.image_link ? trimString(item.image_link, 2) : "",
//   //       };
//   //     });
//   //     setEvents(data);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   // useEffect(() => {
//   //   getEvents();
//   // }, []);

//   const [events, setEvents] = useState([
//   {
//     fk_event: 1,
//     name: "Street Photography",
//     image_uploaded: false,
//     image_approved: false,
//     phy_submission: false,
//     image_link: "",
//   },
//   {
//     fk_event: 2,
//     name: "Nature Photography",
//     image_uploaded: true,
//     image_approved: false,
//     phy_submission: true,
//     image_link: "https://via.placeholder.com/500",
//   },
//   {
//     fk_event: 3,
//     name: "Portrait Photography",
//     image_uploaded: true,
//     image_approved: true,
//     phy_submission: true,
//     image_link: "https://via.placeholder.com/500",
//   },
// ]);


//   return (
//     <div className="lg:py-14 py-8 px-4 md:px-16 min-h-screen bg-[url('/img/sponsor/background.png')] bg-cover bg-center">
//       <h1 className="text-4xl md:text-5xl mt-20 heading-font text-center text-[#644817] p-5">
//         PICS-O-REEL SUBMISSION
//       </h1>
//       <div className="flex flex-col items-center p-4 md:p-10 justify-evenly w-full bg-[#FFE3BE] rounded-xl">
//         {!events && (
//           <h2 className="text-xl md:text-4xl description-font uppercase font-bold mb-2 mt-10 text-[#644817] pb-5 px-2 text-justify">
//             Without participating in any Picsoreel event, entry submission is
//             not accessible for you. Please register for a Picsoreel event to
//             submit your entries.
//           </h2>
//         )}
//         <div className="border-4 border-dashed border-[#c59a7c] rounded-lg w-full flex flex-col items-center p-2 justify-center">
//           <h2 className="text-2xl md:text-4xl description-font uppercase mb-2 text-[#644817] text-center">
//             Physical Submission Guidelines
//           </h2>
//           <ol className="text-[#644817] body-font font-bold text-lg text-center">
//             <li>
//               <p>
//                 Please submit the physical copies of your artworks, photography
//                 and digital arts before 18th Feb 11:59 PM.
//                 {/* <br /> For Physical Submissions contact:{" "} */}
//               </p>
//             </li>
//             <div className="sm:ml-0 mx-auto p-5 sm:p-3 items-center justify-center align-middle">
//               <ul className="flex flex-col text-xl">
//                 <p className="text-amber-900 font-semibold text-2xl p-3 mx-auto">
//                   Contact Us
//                 </p>
//                 <li className="text-amber-900 text-md pb-2 duration-500 ease-in-out hover:text-amber-700 cursor-pointer mx-auto">
//                   <Link href="https://wa.me/9687805915">
//                     Anvesha : +91 96878 05915
//                   </Link>
//                 </li>
//                 <li className="text-amber-900 text-md pb-2 duration-500 ease-in-out hover:text-amber-700 cursor-pointer mx-auto">
//                   <Link href="https://wa.me/7620851007">
//                     Mahesh : +91 76208 51007
//                   </Link>
//                 </li>
//                 <li className="text-amber-900 text-md pb-2 duration-500 ease-in-out hover:text-amber-700 cursor-pointer mx-auto">
//                   <Link href="https://wa.me/9022190737">
//                     Vedika : +91 90221 90737
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </ol>
//           <div className="flex justify-start">
//             <p className="text-[#644817] body-font font-bold text-md mt-2 text-center">
//               {" "}
//               Without physical submission of your entry, it will not be
//               elligible for voting.
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-wrap w-full md:flex-row flex-col justify-between max-w-6xl mx-auto">
//           {events && events.map((event) => <Card event={event} />)}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default isNotAuth(Submission);
// export default Submission;

//2026 code

// "use client";

// import api from "@/app/api";
// import { useEffect, useState, useRef } from "react";
// import { toast } from "sonner";
// import Image from "next/image";
// import Link from "next/link";

// const Uploader = (props) => {
//   const { id } = props;
//   const [image, setImage] = useState(null);
//   const [fileName, setFileName] = useState("No File Selected");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileSizeExceed, setfileSizeExceed] = useState(false);
//   const inputRef = useRef(null);
//   const [fileSize, setfileSize] = useState(0);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (fileSizeExceed) {
//       toast.error("File size exceeds 5MB limit");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.set("file", selectedFile);

//       const response = await api.post(`/uploadImage/${id}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       toast.success(response.data.message);
//       window.location.reload();
//     } catch (err) {
//       err.response?.data
//         ? toast.error(err.response.data.message)
//         : toast.error(err.message);
//       console.log(err);
//     }
//   };

//   return (
//     <div className="flex flex-col w-full h-full items-center justify-center">
//       {/* Upload Area */}
//       <form
//         onClick={() => inputRef.current.click()}
//         className="relative border-2 border-[#572813] bg-[#FFE3BE] rounded-lg flex flex-col items-center p-6 justify-center cursor-pointer w-full h-[250px] shadow-sm hover:bg-[#ffdab0] transition-colors"
//       >
//         <input
//           type="file"
//           accept="image/*"
//           className="hidden"
//           onChange={({ target: { files } }) => {
//             files[0] && setFileName(files[0].name);
//             setSelectedFile(files[0]);
//             var fileSizeinMB = (files[0].size / (1024 * 1024)).toFixed(2);
//             setfileSize(fileSizeinMB);
//             if (files[0].size > 5242880) {
//               setfileSizeExceed(true);
//             }
//             if (files) {
//               setImage(URL.createObjectURL(files[0]));
//             }
//           }}
//           ref={inputRef}
//         />

//         {image ? (
//           <div className="relative w-full h-full">
//             <Image
//               style={{ objectFit: "contain" }}
//               className="w-full h-full rounded-md"
//               src={image}
//               alt={fileName}
//               fill
//             />
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center gap-4">
//             {/* Upload Icon from assets */}
//             <div className="relative w-12 h-12">
//               <Image
//                 src="/img/submissions/icon-upload.png"
//                 alt="Upload"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             <p className="text-[#572813] body-font text-center text-sm font-semibold leading-tight">
//               Click here to select Files to upload
//               <br />
//               <span className="text-xs font-normal opacity-80">
//                 (Allowed formats: .jpg, .jpeg, .png)
//                 <br />
//                 Max file size: 5MB.
//               </span>
//             </p>
//           </div>
//         )}
//       </form>

//       {/* File Info & Delete */}
//       {(fileName !== "No File Selected" || image) && (
//         <div className="w-full mt-3 space-y-2">
//           <section className="flex items-center justify-between bg-[#FFE3BE] border border-[#572813] rounded-lg px-3 py-1.5">
//             <span className="text-[#572813] text-xs body-font truncate w-3/4">
//               {fileName} {fileSize > 0 && `- ${fileSize} MB`}
//             </span>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setFileName("No File Selected");
//                 setImage(null);
//                 setfileSizeExceed(false);
//                 setfileSize(0);
//                 setSelectedFile(null);
//               }}
//               className="relative w-5 h-5 hover:scale-110 transition-transform"
//             >
//               <Image
//                 src="/img/submissions/icon-delete.png"
//                 alt="Delete"
//                 fill
//                 className="object-contain"
//               />
//             </button>
//           </section>

//           {fileSizeExceed && (
//             <p className="text-red-600 text-xs body-font font-bold text-center">
//               *File Size Exceeds 5MB limit
//             </p>
//           )}

//           <button
//             className="w-full bg-[#8B260D] text-[#FFE3BE] text-sm font-bold sub-heading-font py-1.5 rounded-full shadow-md hover:bg-[#6e1e0a] hover:scale-[1.02] transition-all"
//             type="submit"
//             onClick={handleUpload}
//           >
//             Upload
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const Card = (props) => {
//   const { event } = props;

//   return (
//     // Card Layout: 2 columns on Desktop, 1 on Mobile
//     <div className="w-full md:w-[48%] flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8 px-4 md:px-0">
//       {/* Left Side: Text Details */}
//       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
//         <h2 className="text-2xl md:text-3xl sub-heading-font uppercase text-[#572813] tracking-wide mb-3 drop-shadow-sm">
//           {event.name}
//         </h2>

//         <div className="body-font space-y-1.5 text-[#572813] text-base md:text-lg">
//           <p>
//             <span className="font-bold">Image Upload:</span>{" "}
//             {event.image_uploaded ? "Uploaded" : "Pending"}
//           </p>

//           {event.image_uploaded && (
//             <p>
//               <span className="font-bold">Image Approval:</span>{" "}
//               {event.image_approved ? "Approved" : "Pending"}
//             </p>
//           )}

//           <p>
//             <span className="font-bold">Physical Submission:</span>{" "}
//             {event.phy_submission ? "Received" : "Not Received"}
//           </p>
//         </div>
//       </div>

//       {/* Right Side: Uploader or Image Display */}
//       <div className="w-full md:w-1/2 max-w-[300px]">
//         {!event.image_uploaded ? (
//           // Pending State: Upload Box
//           <div className="relative">
//             <Uploader id={event.fk_event} />
//           </div>
//         ) : (
//           // Uploaded State: Simple Frame Look
//           <div className="relative p-2 bg-white border border-gray-300 shadow-lg">
//             <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
//               <Image
//                 src={event.image_link || "/img/submissions/test-image.png"}
//                 alt="Submission"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Submission = () => {
//   // Mock Data
//   const [events, setEvents] = useState([
//     {
//       fk_event: 1,
//       name: "Painting",
//       image_uploaded: false,
//       image_approved: false,
//       phy_submission: false,
//       image_link: "",
//     },
//     {
//       fk_event: 2,
//       name: "Sketch",
//       image_uploaded: true,
//       image_approved: false,
//       phy_submission: false,
//       image_link: "/img/submissions/test-image.png",
//     },
//   ]);

//   return (
//     // Main Page Wrapper
//     <div className="min-h-screen w-full relative flex flex-col items-center py-10 overflow-x-hidden">
//       {/* --- PAGE BACKGROUND (General BG) --- */}
//       {/* Desktop Background */}
//       <div className="hidden md:block absolute inset-0 z-0">
//         <Image
//           src="/img/common/general-desktop-bg.png"
//           alt="Desktop Background"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>
//       {/* Mobile Background */}
//       <div className="block md:hidden absolute inset-0 z-0">
//         <Image
//           src="/img/common/general-mobile-bg.png"
//           alt="Mobile Background"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* Main Title */}
//       <h1 className="relative z-10 text-4xl md:text-6xl heading-font text-[#FFE3BE] text-center mt-20 mb-10 tracking-wider drop-shadow-md">
//         PICS-O-REEL SUBMISSIONS
//       </h1>

//       {/* --- CONTENT CONTAINER --- */}
//       {/* Using 'submissions-bg.png' here for the content block */}
//       <div className="relative z-10 w-[95%] max-w-7xl min-h-[600px] shadow-2xl flex flex-col items-center pb-10 rounded-xl overflow-hidden">
//         {/* Content Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/img/submissions/submissions-bg.png"
//             alt="Content Background"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* --- Content Elements (z-10 to sit above content bg) --- */}

//         {/* Triangle Strip Decoration */}
//         <div className="absolute top-0 left-0 w-full h-10 md:h-14 z-20">
//           <Image
//             src="/img/submissions/submissions-triangle-strip.png"
//             alt="Decor"
//             fill
//             className="object-cover md:object-contain object-top"
//           />
//         </div>

//         {/* Guidelines Header (Red Banner) */}
//         <div className="relative z-10 mt-16 mb-8 w-full flex justify-center items-center px-4">
//           <div className="relative w-full max-w-[700px] h-20 md:h-24 flex items-center justify-center">
//             <Image
//               src="/img/submissions/headline-bg.png"
//               alt="Banner"
//               fill
//               className="object-contain"
//             />
//             <h2 className="relative z-10 text-xl md:text-3xl sub-heading-font text-[#FFE3BE] uppercase mt-2 text-center px-2">
//               Physical Submission Guidelines
//             </h2>
//           </div>
//         </div>

//         {/* Guidelines Text */}
//         <div className="relative z-10 w-[90%] md:w-3/4 text-center text-[#572813] body-font font-medium space-y-4 mb-8">
//           <p className="text-base md:text-xl">
//             Please submit the physical copies of your artworks, photography and
//             digital artworks before 18th Feb, 11:59pm
//           </p>

//           <div className="flex flex-col gap-1 text-sm md:text-lg font-bold">
//             <span className="text-lg md:text-xl mb-1">Contact Us</span>
//             <Link
//               href="https://wa.me/9687805915"
//               className="hover:text-[#8B260D] transition-colors"
//             >
//               Anvesha : +91 96878 05915
//             </Link>
//             <Link
//               href="https://wa.me/7620851007"
//               className="hover:text-[#8B260D] transition-colors"
//             >
//               Mahesh : +91 76208 51007
//             </Link>
//             <Link
//               href="https://wa.me/9022190737"
//               className="hover:text-[#8B260D] transition-colors"
//             >
//               Vedika : +91 90221 90737
//             </Link>
//           </div>

//           <p className="body-font text-sm md:text-lg italic font-semibold pt-2">
//             Without physical submission of your entry, it will not be eligible
//             for voting
//           </p>
//         </div>

//         {/* Divider Line */}
//         <div className="relative z-10 w-[60%] md:w-[80%] h-20 mb-12 flex justify-center items-center -translate-y-[45%]">
//           <Image
//             src="/img/submissions/divider-line.png"
//             alt="Decor"
//             fill
//             className="object-cover md:object-contain object"
//           />
//         </div>

//         {/* Cards Section Container */}
//         <div className="relative z-10 w-full px-4 md:px-12 flex flex-row flex-wrap justify-between items-start gap-y-12">
//           {events &&
//             events.map((event) => <Card key={event.fk_event} event={event} />)}

//           {!events && (
//             <div className="w-full text-center p-10 text-[#572813] body-font text-xl">
//               Please register for an event to submit entries.
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="h-10"></div>
//     </div>
//   );
// };

// export default Submission;

"use client";

import api from "@/app/api";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { px } from "framer-motion";

// --- FIXED UPLOADER COMPONENT ---
const Uploader = (props) => {
  const { id } = props;
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSizeExceed, setFileSizeExceed] = useState(false);
  const inputRef = useRef(null);
  const [fileSize, setFileSize] = useState(0);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please select a file first");
      return;
    }
    if (fileSizeExceed) {
      toast.error("File size exceeds 5MB limit");
      return;
    }

    try {
      const formData = new FormData();
      formData.set("file", selectedFile);

      const response = await api.post(`/uploadImage/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response.data.message);
      window.location.reload();
    } catch (err) {
      err.response?.data
        ? toast.error(err.response.data.message)
        : toast.error(err.message);
      console.log(err);
    }
  };

  const clearSelection = (e) => {
    e.stopPropagation();
    setFileName("No file selected");
    setImage(null);
    setFileSizeExceed(false);
    setFileSize(0);
    setSelectedFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-start">
      {/* --- 1. Upload Area (The Big Box) --- */}
      <form
        onClick={() => inputRef.current.click()}
        className="relative border-2 border-[#572813] bg-[#FFE3BE] rounded-lg flex flex-col items-center p-4 justify-center cursor-pointer w-full h-[200px] shadow-sm hover:bg-[#ffdab0] transition-colors"
      >
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={({ target: { files } }) => {
            if (files && files[0]) {
              setFileName(files[0].name);
              setSelectedFile(files[0]);
              const fileSizeinMB = (files[0].size / (1024 * 1024)).toFixed(2);
              setFileSize(fileSizeinMB);
              if (files[0].size > 5242880) {
                setFileSizeExceed(true);
              }
              setImage(URL.createObjectURL(files[0]));
            }
          }}
          ref={inputRef}
        />

        {image ? (
          <div className="relative w-full h-full">
            <Image
              style={{ objectFit: "contain" }}
              className="w-full h-full rounded-md"
              src={image}
              alt={fileName}
              fill
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/img/submissions/icon-upload.png"
                alt="Upload"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#572813] body-font text-center text-xs md:text-sm font-semibold leading-tight">
              Click here to select Files to upload
              <br />
              <span className="text-[10px] md:text-xs font-normal opacity-80">
                (Allowed formats: .jpg, .jpeg, .png)
                <br />
                Max file size: 5MB.
              </span>
            </p>
          </div>
        )}
      </form>

      {/* --- 2. Controls Section (Always Visible) --- */}
      <div className="w-full mt-3 space-y-3">
        {/* Row: Filename Box + Dustbin Button */}
        <div className="flex flex-row items-center gap-2 w-full">
          {/* Left Box: Filename Display */}
          <div className="flex-1 bg-[#FFE3BE] border-2 border-[#572813] rounded-md px-3 py-2 flex items-center h-10 md:h-12">
            <span className="text-[#572813] text-xs md:text-sm body-font truncate w-full">
              {fileName} {fileSize > 0 ? `- ${fileSize} MB` : "- 0MB"}
            </span>
          </div>

          {/* Right Box: Dustbin Button */}
          <button
            onClick={clearSelection}
            className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-[#FFE3BE] border-2 border-[#572813] rounded-md flex items-center justify-center hover:bg-red-100 hover:scale-105 transition-all"
            type="button"
          >
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src="/img/submissions/icon-delete.png"
                alt="Delete"
                fill
                className="object-contain"
              />
            </div>
          </button>
        </div>

        {/* Error Message */}
        {fileSizeExceed && (
          <p className="text-red-600 text-xs body-font font-bold text-center">
            *File Size Exceeds 5MB limit
          </p>
        )}

        {/* --- 3. Main Upload Button --- */}
        <button
          className="w-full bg-[#8B260D] text-[#FFE3BE] text-sm md:text-base font-bold sub-heading-font py-2 rounded-full  active:translate-y-[4px] hover:scale-105 transition-all"
          type="button"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

// --- CARD COMPONENT ---
const Card = (props) => {
  const { event } = props;

  return (
    // Card Layout: 2 columns on Desktop, 1 on Mobile
    <div className="w-full md:w-[48%] flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-[1%] px-4 md:px-0">
      {/* Left Side: Text Details */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl md:text-3xl sub-heading-font uppercase text-[#572813] tracking-wide mb-3 drop-shadow-sm">
          {event.name}
        </h2>

        <div className="body-font space-y-1.5 text-[#572813] text-base md:text-lg">
          <p>
            <span className="font-bold">Image Upload:</span>{" "}
            {event.image_uploaded ? "Uploaded" : "Pending"}
          </p>

          {event.image_uploaded && (
            <p>
              <span className="font-bold">Image Approval:</span>{" "}
              {event.image_approved ? "Approved" : "Pending"}
            </p>
          )}

          <p>
            <span className="font-bold">Physical Submission:</span>{" "}
            {event.phy_submission ? "Received" : "Not Received"}
          </p>
        </div>
      </div>

      {/* Right Side: Uploader or Image Display */}
      <div className="w-full md:w-1/2 max-w-[300px]">
        {!event.image_uploaded ? (
          // Pending State: Upload Box
          <div className="relative">
            <Uploader id={event.fk_event} />
          </div>
        ) : (
          // Uploaded State: Simple Frame Look
          <div className="relativ p-1 border-2 rounded-md border-solid border-[#8B260D] shadow-lg">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={event.image_link || "/img/submissions/test-image.png"} //<----remove || before deployment and do necessary changes
                alt="Submission"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- SUBMISSION PAGE COMPONENT ---
const Submission = () => {
  // Mock Data
  const [events, setEvents] = useState([
    {
      fk_event: 1,
      name: "Painting",
      image_uploaded: false,
      image_approved: false,
      phy_submission: false,
      image_link: "",
    },
    {
      fk_event: 2,
      name: "Sketch",
      image_uploaded: true,
      image_approved: false,
      phy_submission: false,
      image_link: "/img/submissions/test-image.png",
    },
  ]);

  return (
    // Main Page Wrapper
    <div className="min-h-screen w-full relative flex flex-col items-center py-10 overflow-x-hidden">
      {/* --- PAGE BACKGROUND (General BG) --- */}
      {/* Desktop Background */}
      <div className="hidden md:block fixed inset-0 z-0">
        <Image
          src="/img/common/desktop-bg.png"
          alt="Desktop Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Mobile Background */}
      <div className="block md:hidden fixed inset-0 z-0">
        <Image
          src="/img/common/general-mobile-bg.png"
          alt="Mobile Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Title */}
      <h1 className="relative z-10 text-4xl md:text-6xl heading-font text-[#FFE3BE] text-center mt-20 mb-10 tracking-wider drop-shadow-md">
        PICS-O-REEL SUBMISSIONS
      </h1>

      {/* --- CONTENT CONTAINER --- */}
      {/* Using 'submissions-bg.png' here for the content block */}
      <div className="relative z-10 w-[90%] max-w-7xl min-h-[600px] shadow-2xl flex flex-col items-center pb-10 rounded-xl overflow-hidden">
        {/* Content Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/submissions/submissions-bg.png"
            alt="Content Background"
            fill
            className="object-cover"
          />
        </div>

        {/* --- Content Elements (z-10 to sit above content bg) --- */}

        {/* Triangle Strip Decoration */}
        <div className="absolute top-0 left-0 w-full h-10 md:h-14 z-20">
          <Image
            src="/img/submissions/submissions-triangle-strip.png"
            alt="Decor"
            fill
            className="object-cover md:object-contain object-top"
          />
        </div>

        {/* Guidelines Header (Red Banner) */}
        <div className="relative z-10 mt-16 mb-5 w-full flex justify-center items-center px-4">
          <div className="relative w-full max-w-[700px] h-10 md:h-20 flex items-center justify-center">
            <Image
              src="/img/submissions/headline-bg.png"
              alt="Banner"
              fill
              className="object-cover"
            />
            <h2 className="relative z-10 text-sm md:text-3xl sub-heading-font text-[#FFE3BE] uppercase text-center px-2">
              Physical Submission Guidelines
            </h2>
          </div>
        </div>

        {/* Guidelines Text */}
        <div className="relative z-10 w-[90%] md:w-3/4 text-center text-[#572813] body-font font-medium space-y-4 mb-8">
          <p className="text-base md:text-xl">
            Please submit the physical copies of your artworks, photography and
            digital artworks before 18th Feb, 11:59pm
          </p>

          <div className="flex-col text-center gap-3 text-sm md:text-lg font-bold">
            <h3 className="block text-lg md:text-xl mb-1">Contact Us</h3>
            <div className="items-center justify-center flex flex-row gap-5">
              <Link
                href="https://wa.me/9687805915"
                className="hover:text-[#8B260D] transition-colors"
              >
                Anvesha : +91 96878 05915
              </Link>
              <Link
                href="https://wa.me/7620851007"
                className="hover:text-[#8B260D] transition-colors"
              >
                Mahesh : +91 76208 51007
              </Link>
              <Link
                href="https://wa.me/9022190737"
                className="hover:text-[#8B260D] transition-colors"
              >
                Vedika
                +91 90221 90737
              </Link>
            </div>
          </div>

          <p className="body-font text-sm md:text-lg italic font-semibold pt-2">
            Without physical submission of your entry, it will not be eligible
            for voting
          </p>
        </div>

        {/* Divider Line */}
        <div className="relative z-10 w-[90%] mb-[5%] md:w-[80%] h-auto md:mb-12 flex justify-center items-center -translate-y-[45%]">
          <Image
            src="/img/submissions/divider-line.png"
            alt="Decor"
            width={1000}
            height={50}
            className="object-cover md:object-contain object"
          />
        </div>

        {/* Cards Section Container */}
        <div className="relative z-10 w-full px-4 md:px-12 flex flex-row flex-wrap justify-between items-start gap-y-12">
          {events &&
            events.map((event) => <Card key={event.fk_event} event={event} />)}

          {!events && (
            <div className="w-full text-center p-10 text-[#572813] body-font text-xl">
              Please register for an event to submit entries.
            </div>
          )}
        </div>
      </div>

      <div className="h-10"></div>
    </div>
  );
};

export default Submission;