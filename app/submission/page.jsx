"use client";

import api from "@/app/api";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import isNotAuth from "@/app/components/isNotAuth";
import { px } from "framer-motion";
import AnimationLoader from "@/app/components/AnimationLoader";


const Uploader = (props) => {
  const { id, photocopyNeeded } = props;


  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSizeExceed, setFileSizeExceed] = useState(false);
  const [fileSize, setFileSize] = useState(0);

  const [showRollInput, setShowRollInput] = useState(false);
  const [rollNo, setRollNo] = useState("");
  const [pendingUpload, setPendingUpload] = useState(false);

  const [isUploading, setIsUploading] = useState(false);

  const MAX_NORMAL = 10 * 1024 * 1024;   // 10MB
  const MAX_PHOTO = 15 * 1024 * 1024;    // 15MB

  const limit = photocopyNeeded ? MAX_PHOTO : MAX_NORMAL;


  const inputRef = useRef(null);
  const handleUpload = async (e) => {
    e?.preventDefault?.();

    if (!selectedFile) {
      toast.error("Please select a file first");
      return;
    }

    if (fileSizeExceed) {
      toast.error(
        `File size exceeds ${photocopyNeeded ? "15MB" : "10MB"} limit`
      );
      return;
    }

    try {
      setIsUploading(true);

      const formData = new FormData();
      formData.set("file", selectedFile);

      const response = await api.post(`/uploadImage/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 120000,
      });

      toast.success(response.data.message);
      window.location.reload();
    } catch (err) {
      const msg = err.response?.data?.message;

      if (msg === "You must have a roll number to upload an image.") {
        setShowRollInput(true);
        setPendingUpload(true);
        return;
      }

      toast.error(msg || err.message);
    } finally {
      setIsUploading(false);
    }
  };


  const submitRollNo = async () => {
    if (!rollNo.trim()) {
      toast.error("Please enter roll number");
      return;
    }

    try {
      await api.put("/user/update-roll", { roll_no: rollNo });
      toast.success("Roll number updated");

      setShowRollInput(false);

      if (pendingUpload) {
        setPendingUpload(false);
        handleUpload();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
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
    <>
      {isUploading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <AnimationLoader />
        </div>
      )}

      <div className="flex flex-col w-full h-full items-center justify-start">
        {/* Upload Area */}
        <form
          onClick={() => inputRef.current.click()}
          className="relative border-2 border-[#572813] bg-[#FFE3BE] rounded-lg flex flex-col items-center p-4 justify-center cursor-pointer w-full h-[200px] shadow-sm hover:bg-[#ffdab0] transition-colors"
        >
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            className="hidden"
            onChange={({ target: { files } }) => {
              if (files && files[0]) {
                const file = files[0];

                const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
                const allowedExt = [".jpg", ".jpeg", ".png"];
                const ext = file.name.toLowerCase().slice(file.name.lastIndexOf("."));

                if (!allowedTypes.includes(file.type) || !allowedExt.includes(ext)) {
                  toast.error("Only JPG, JPEG and PNG images are allowed");
                  clearSelection({ stopPropagation: () => { } });
                  return;
                }

                setFileName(file.name);
                setSelectedFile(file);

                const fileSizeinMB = (file.size / (1024 * 1024)).toFixed(2);
                setFileSize(fileSizeinMB);

                if (file.size > limit) {
                  setFileSizeExceed(true);
                } else {
                  setFileSizeExceed(false);
                }

                setImage(URL.createObjectURL(file));
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
                  Max file size: {photocopyNeeded ? "15MB" : "10MB"}.
                </span>

              </p>
            </div>
          )}
        </form>

        {/* Controls */}
        <div className="w-full mt-3 space-y-3">
          <div className="flex flex-row items-center gap-2 w-full">
            <div className="flex-1 bg-[#FFE3BE] border-2 border-[#572813] rounded-md px-3 py-2 flex items-center h-10 md:h-12">
              <span className="text-[#572813] text-xs md:text-sm body-font truncate w-full">
                {fileName} {fileSize > 0 ? `- ${fileSize} MB` : "- 0MB"}
              </span>
            </div>

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

          {fileSizeExceed && (
            <p className="text-red-600 text-xs body-font font-bold text-center">
              *File Size Exceeds {photocopyNeeded ? "15MB" : "10MB"} limit
            </p>
          )}


          <button
            className="w-full bg-[#8B260D] text-[#FFE3BE] text-sm md:text-base font-bold sub-heading-font py-2 rounded-full active:translate-y-[4px] hover:scale-105 transition-all"
            type="button"
            onClick={handleUpload}
          >
            Upload
          </button>

          {/* Roll Number Prompt */}
          {showRollInput && (
            <div className="mt-2 w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="w-full px-3 py-2 border-2 border-[#572813] rounded-md body-font text-sm"
              />
              <button
                onClick={submitRollNo}
                className="w-full bg-[#8B260D] text-[#FFE3BE] py-2 sub-heading-font rounded-full font-bold"
                type="button"
              >
                Submit Roll Number
              </button>
            </div>
          )}
        </div>
      </div>
    </>
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
            <Uploader
              id={event.fk_event}
              photocopyNeeded={event.photocopy_needed}
            />

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
  const [events, setEvents] = useState();
  const trimString = (str, length) => {
    if (str.length <= length * 2) return str;
    const trimmedLength = str.length - length * 2;
    return str.substring(length, trimmedLength);
  };

  const getEvents = async () => {
    try {
      const response = await api.get("/userEvent/submission");
      const data = response.data.data.map((item) => ({
        ...item,
        image_link: item.image_link || "",
      }));
      setEvents(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);


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
      <h1 className="relative z-10 text-4xl lg:text-5xl md:text-6xl heading-font text-white text-center mt-8 md:mt-20 mb-10 tracking-tight">
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
            digital artworks before 22nd Feb, 11:59pm
          </p>

          <div className="flex-col text-center gap-3 text-sm md:text-lg font-bold">
            <h3 className="block text-lg md:text-xl mb-1">Contact Us</h3>
            <div className="items-center justify-center flex flex-row gap-5">
              <Link
                href="https://wa.me/9172284641"
                className="hover:text-[#8B260D] transition-colors"
              >
                Anushka : +91 9172284641
              </Link>
              <Link
                href="https://wa.me/7875390131"
                className="hover:text-[#8B260D] transition-colors"
              >
                Sanskar : +91 7875390131
              </Link>
              <Link
                href="https://wa.me/9145799399"
                className="hover:text-[#8B260D] transition-colors"
              >
                Bhagyashree
                +91 9145799399
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
              Please register for a Pics-o-reel category to submit entries.
            </div>
          )}
        </div>
      </div>

      <div className="h-10"></div>
    </div>
  );
};

export default isNotAuth(Submission);