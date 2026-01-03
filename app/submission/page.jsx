"use client";

import api from "@/app/api";
import { useEffect, useState, useRef } from "react";
import isNotAuth from "@/app/components/isNotAuth";
import { toast } from "sonner";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
const Uploader = (props) => {
  const { id } = props;
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No File Selected");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSizeExceed, setfileSizeExceed] = useState(false);
  const inputRef = useRef(null);
  const [fileSize, setfileSize] = useState(0);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (fileSizeExceed) {
      toast.error("File size exceeds 5MB limit");
      return; // Stop execution
    }

    try {
      const formData = new FormData();
      formData.set("file", selectedFile);

      console.log(formData);

      const response = await api.post(`/uploadImage/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response.data.message);
      window.location.reload();
    } catch (err) {
      {
        err.response.data
          ? toast.error(err.response.data.message)
          : toast.error(err.message);
      }
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col mt-4 w-full items-center justify-center justify-items-center">
      <form
        onClick={() => inputRef.current.click()}
        className="border-4 border-dashed border-[#c59a7c] rounded-lg flex flex-col items-center p-2 justify-center cursor-pointer w-full"
      >
        <input
          type="file"
          accept="image/*"
          className="input-field hidden"
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            setSelectedFile(files[0]);
            var fileSizeinMB = (files[0].size / (1024 * 1024)).toFixed(2);
            setfileSize(fileSizeinMB);
            if (files[0].size > 5242880) {
              setfileSizeExceed(true);
            }
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
          ref={inputRef}
        />
        {image ? (
          <Image
            style={{ objectFit: "contain" }}
            className="w-[350px] h-[350px] sm:h-[500px] sm:w-[500px]"
            src={image}
            alt={fileName}
            height={500}
            width={500}
            loading="lazy"
          />
        ) : (
          <>
            <MdCloudUpload color="#c59a7c" size={60} />
            <p className="text-[#644817] body-font text-center">
              Click here to select Files to upload.
              <br />
              ( Allowed image formats: .jpg, .jpeg, .png. )<br />
              Max file size: 5MB.
            </p>
          </>
        )}
      </form>

      <section className="uploaded-row w-full text-[#644817] rounded-lg px-3 pt-3  flex items-center justify-evenly mt-4">
        <span className="upload-content w-4/5 flex items-center px-4 py-2 border-[#644817] border-2 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap ml-0">
          {fileName} - {fileSize} MB
        </span>

        <MdDelete
          onClick={() => {
            setFileName("No File Selected");
            setImage(null);
            setfileSizeExceed(false);
            setfileSize(0);
          }}
          className="hover:scale-125 h-full w-8 border-[#644817] border-2 rounded-lg transition-transform ease-in-out"
        />
      </section>
      {fileSizeExceed && (
        <p className="w-4/5 text-left text-base px-4 text-[#644817] rounded-lg mb-1">
          *File Size Exceeds 5MB limit
        </p>
      )}
      <button
        className="bg-[#644817] font-bold text-[#FFE3BE] py-2 px-4 rounded-lg hover:scale-110 mt-2 transition-transform ease-in-out"
        type="submit"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

const Card = (props) => {
  const { event } = props;

  return (
    <div className="text-3xl mt-4 w-full md:w-2/5 flex body-font group ">
      <div className="flex flex-col w-full">
        <div className="w-fit mx-auto">
          <h2 className="text-2xl lg:text-4xl description-font uppercase mt-4 mb-2 text-[#644817]">
            {event.name}
          </h2>
          <hr className="border-2 border-[#c59a7c] w-1/5 group-hover:w-full rounded-full transition-all ease-in-out " />
        </div>
        <ul className="list-disc list-inside mt-4">
          <li className="text-xl font-bold text-[#644817]">
            Image Upload: &nbsp;
            {event.image_uploaded ? "Uploaded" : "Pending"}
          </li>
          {event.image_uploaded && (
            <li className="text-xl font-bold text-[#644817]">
              Image Approval: &nbsp;
              {event.image_approved ? "Approved" : "Pending"}
            </li>
          )}
          <li className="text-xl font-bold text-[#644817]">
            Physical Submission: &nbsp;
            {event.phy_submission ? "Received" : "Not Received"}
          </li>
        </ul>
        {!event.image_uploaded ? (
          <div className="flex text-xl">
            <Uploader id={event.fk_event} />
          </div>
        ) : (
          <div className="border-4 border-dashed border-[#c59a7c] rounded-lg w-full flex flex-col items-center p-2 justify-center cursor-pointer mt-4">
            <Image
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
              className="w-[350px] h-[350px] sm:h-[500px] sm:w-[500px]"
              src={event.image_link + "3D"}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Submission = () => {
  // const [events, setEvents] = useState();

  // const trimString = (str, length) => {
  //   if (str.length <= length * 2) {
  //     return str;
  //   }

  //   const trimmedLength = str.length - length * 2;
  //   return str.substring(length, trimmedLength);
  // };

  // const getEvents = async () => {
  //   try {
  //     const response = await api.get("/userEvent/submission");
  //     const data = response.data.data.map((item) => {
  //       return {
  //         ...item,
  //         image_link: item.image_link ? trimString(item.image_link, 2) : "",
  //       };
  //     });
  //     setEvents(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getEvents();
  // }, []);

  const [events, setEvents] = useState([
  {
    fk_event: 1,
    name: "Street Photography",
    image_uploaded: false,
    image_approved: false,
    phy_submission: false,
    image_link: "",
  },
  {
    fk_event: 2,
    name: "Nature Photography",
    image_uploaded: true,
    image_approved: false,
    phy_submission: true,
    image_link: "https://via.placeholder.com/500",
  },
  {
    fk_event: 3,
    name: "Portrait Photography",
    image_uploaded: true,
    image_approved: true,
    phy_submission: true,
    image_link: "https://via.placeholder.com/500",
  },
]);


  return (
    <div className="lg:py-14 py-8 px-4 md:px-16 min-h-screen bg-[url('/img/sponsor/background.png')] bg-cover bg-center">
      <h1 className="text-4xl md:text-5xl mt-20 heading-font text-center text-[#644817] p-5">
        PICS-O-REEL SUBMISSION
      </h1>
      <div className="flex flex-col items-center p-4 md:p-10 justify-evenly w-full bg-[#FFE3BE] rounded-xl">
        {!events && (
          <h2 className="text-xl md:text-4xl description-font uppercase font-bold mb-2 mt-10 text-[#644817] pb-5 px-2 text-justify">
            Without participating in any Picsoreel event, entry submission is
            not accessible for you. Please register for a Picsoreel event to
            submit your entries.
          </h2>
        )}
        <div className="border-4 border-dashed border-[#c59a7c] rounded-lg w-full flex flex-col items-center p-2 justify-center">
          <h2 className="text-2xl md:text-4xl description-font uppercase mb-2 text-[#644817] text-center">
            Physical Submission Guidelines
          </h2>
          <ol className="text-[#644817] body-font font-bold text-lg text-center">
            <li>
              <p>
                Please submit the physical copies of your artworks, photography
                and digital arts before 18th Feb 11:59 PM.
                {/* <br /> For Physical Submissions contact:{" "} */}
              </p>
            </li>
            <div className="sm:ml-0 mx-auto p-5 sm:p-3 items-center justify-center align-middle">
              <ul className="flex flex-col text-xl">
                <p className="text-amber-900 font-semibold text-2xl p-3 mx-auto">
                  Contact Us
                </p>
                <li className="text-amber-900 text-md pb-2 duration-500 ease-in-out hover:text-amber-700 cursor-pointer mx-auto">
                  <Link href="https://wa.me/9687805915">
                    Anvesha : +91 96878 05915
                  </Link>
                </li>
                <li className="text-amber-900 text-md pb-2 duration-500 ease-in-out hover:text-amber-700 cursor-pointer mx-auto">
                  <Link href="https://wa.me/7620851007">
                    Mahesh : +91 76208 51007
                  </Link>
                </li>
                <li className="text-amber-900 text-md pb-2 duration-500 ease-in-out hover:text-amber-700 cursor-pointer mx-auto">
                  <Link href="https://wa.me/9022190737">
                    Vedika : +91 90221 90737
                  </Link>
                </li>
              </ul>
            </div>
          </ol>
          <div className="flex justify-start">
            <p className="text-[#644817] body-font font-bold text-md mt-2 text-center">
              {" "}
              Without physical submission of your entry, it will not be
              elligible for voting.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap w-full md:flex-row flex-col justify-between max-w-6xl mx-auto">
          {events && events.map((event) => <Card event={event} />)}
        </div>
      </div>
    </div>
  );
};

// export default isNotAuth(Submission);
export default Submission;
