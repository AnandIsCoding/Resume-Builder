import React, { useRef, useState } from "react";
import HandleInput from "./HandleInput";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { useReactToPrint } from 'react-to-print';


import ReactToPrint from 'react-to-print'



function Inputcontainer({ allSections }) {
  let colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-violet-500",
    "bg-yellow-400",
    "bg-green-500",
  ];

 



  const [activeKey, setActiveKey] = useState(Object.keys(allSections)[0]);

  //all data variables
  const name = useRef("");
  const city = useRef(null);
  const currentJob = useRef(null);
  const gitHublink = useRef(null);
  const linkdeInlink = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const qualification = useRef(null);
  const college = useRef(null);
  const startCollege = useRef(null);
  const endCollege = useRef(null);
  const projectName = useRef(null);
  const projectDescription = useRef(null);
  const projectDuration = useRef(null);
  const projectGithub = useRef(null);
  const projectDeployedlink = useRef(null);
  const companyExp = useRef(null);
  const expDuration = useRef(null);
  const certificate = useRef(null);
  const location = useRef(null);
  const achievment1 = useRef(null);
  const achievment2 = useRef(null);
  const achievment3 = useRef(null);
  const skill1 = useRef(null);
  const skill2 = useRef(null);
  const skill3 = useRef(null);
  const skill4 = useRef(null);
  const skill5 = useRef(null);
  const othersDescription = useRef(null);

  const [userName, setUsername] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userJob, setUSerjob] = useState("");
  const [userGithub, setUserGithub] = useState("");
  const [userLinkdlen, setUserLinkdlen] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userSkill1, setUserSkill1] = useState("");
  const [userSkill2, setUserSkill2] = useState("");
  const [userSkill3, setUserSkill3] = useState("");
  const [userSkill4, setUserSkill4] = useState("");
  const [userSkill5, setUserSkill5] = useState("");
  const [userAchievement1, setUserAchievement1] = useState("");
  const [userAchievement2, setUserAchievement2] = useState("");
  const [userAchievement3, setUserAchievement3] = useState("");

  const [userExpCompany, setUserExpCompany] = useState("");
  const [userExpCertificate, setUserExpCertificate] = useState("");
  const [userExpLocation, setUserExpLocation] = useState("");
  const [userExpDuration, setUserExpDuration] = useState("");

  const [aboutUser, setAboutUser] = useState('')

  const [userProjectName, setUserProjectName] = useState('')
  const [userProjectDescription, setUserProjectDescription] = useState('')
  const [userProjectDuration, setUserProjectDuration] = useState('')
  const [userProjectGithub, setUserProjectGithub] = useState('')
  const [userProjectDeployedlink, setUserProjectDeployedlink] = useState('')

  const [userQualification, setUserQualification] = useState('')
  const [userCollege, setUserCollege] = useState('')
  const [userCollegeStart, setUserCollegeStart] = useState('')
  const [userCollegeEnd, setUserCollegeEnd] = useState('')

  const handleBasicInfoData = (event) => {
    event.preventDefault();
    // Assign the values from refs to variables
    const nameValue = name.current.value;
    setUsername(nameValue);
    const cityValue = city.current.value;
    setUserCity(cityValue);
    const currentJobValue = currentJob.current.value;
    setUSerjob(currentJobValue);
    const gitHublinkValue = gitHublink.current.value;
    setUserGithub(gitHublinkValue);
    const linkdeInlinkValue = linkdeInlink.current.value;
    setUserLinkdlen(linkdeInlinkValue);
    const emailValue = email.current.value;
    setUserEmail(emailValue);
    const phoneValue = phone.current.value;
    setUserPhone(phoneValue);

    // Log the values to verify
    console.log(nameValue);
    console.log(cityValue);
    console.log(currentJobValue);
    console.log(gitHublinkValue);
    console.log(linkdeInlinkValue);
    console.log(emailValue);
    console.log(phoneValue);
  };

  const handleEducationFormData = (event) => {
    event.preventDefault();

    // Assign the values from refs to variables
    const qualificationValue = qualification.current.value;
    const collegeValue = college.current.value;
    const startCollegeValue = startCollege.current.value;
    const endCollegeValue = endCollege.current.value;

    setUserQualification(qualificationValue)
    setUserCollege(collegeValue)  
    setUserCollegeStart(startCollegeValue)
    setUserCollegeEnd(endCollegeValue)


    
  };

  const handleProjectFormData = (event) => {
    event.preventDefault();
    const projectNameValue = projectName.current.value;
    const projectDescriptionValue = projectDescription.current.value;
    const projectDurationValue = projectDuration.current.value;
    const projectGithubValue = projectGithub.current.value;
    const projectDeployedlinkValue = projectDeployedlink.current.value;
    setUserProjectName(projectNameValue)
    setUserProjectDescription(projectDescriptionValue);
    setUserProjectDuration(projectDurationValue);
    setUserProjectGithub(projectGithubValue);
    setUserProjectDeployedlink(projectDeployedlinkValue);
    
  };

  const handleExperienceFormData = (event) => {
    event.preventDefault();
    const companyExpValue = companyExp.current.value;
    const expDurationValue = expDuration.current.value;
    const certificateValue = certificate.current.value;
    const locationValue = location.current.value;
    setUserExpCompany(companyExpValue)
    setUserExpDuration(expDurationValue);
    setUserExpCertificate(certificateValue);
    setUserExpLocation(locationValue);
    
    
  };

  const handleAchievmentsFormData = (event) => {
    event.preventDefault();
    const achievment1Value = achievment1.current.value;
    const achievment2Value = achievment2.current.value;
    const achievment3Value = achievment3.current.value;

    setUserAchievement1(achievment1Value);
    setUserAchievement2(achievment2Value);
    setUserAchievement3(achievment3Value);
  };

  const handleSkillsFormData = (event) => {
    event.preventDefault();
    const skill1Value = skill1.current.value;
    const skill2Value = skill2.current.value;
    const skill3Value = skill3.current.value;
    const skill4Value = skill4.current.value;
    const skill5Value = skill5.current.value;
    console.log(skill1);

    setUserSkill1(skill1Value);
    setUserSkill2(skill2Value);
    setUserSkill3(skill3Value);
    setUserSkill4(skill4Value);
    setUserSkill5(skill5Value);
  };

  const handleOthersFormData = (event) => {
    event.preventDefault();
    const othersDescriptionValue = othersDescription.current.value;

    console.log("Other Description:", othersDescriptionValue);
  };

  const basicInfoBody = (
    <div className="flex flex-col gap-6">
      <HandleInput label="Name" placeholder="Eneter your name" ref={name} />
      <HandleInput label="City" placeholder="Eneter your City" ref={city} />

      <HandleInput
        label="Title"
        placeholder="Enter job title"
        ref={currentJob}
      />
      <div className="flex gap-4">
        <HandleInput
          label="Github"
          placeholder="Enter github link"
          type="url"
          ref={gitHublink}
        />
        <HandleInput
          label="LinkedIn"
          placeholder="Enter LinkedIn link"
          type="url"
          ref={linkdeInlink}
        />
      </div>
      <div className="flex">
        <HandleInput
          label="Email"
          placeholder="Enter email"
          type="email"
          ref={email}
        />
        <HandleInput
          label="Phone no"
          placeholder="Enter phone number"
          type="tel"
          className="ml-2 outline-none rounded-xl bg-transparent border-2 border-blue-700 h-[7vh]  mt-1 px-3"
          ref={phone}
        />
      </div>
      <button
        onClick={(event) => handleBasicInfoData(event)}
        className="w-full text-center px-5 py-3 bg-blue-500 mt-8 rounded-xl font-bold text-2xl border-2 border-white"
      >
        Save
      </button>
    </div>
  );

  const educationBody = (
    <div className="flex flex-col gap-5">
      <HandleInput
        label="Highest Qualification"
        placeholder="like btech, Mtech, Bca, Mca, Phd"
        ref={qualification}
      />
      <HandleInput
        label="College/University"
        placeholder="Enter college or university name"
        ref={college}
      />
      <div className="flex gap-4">
        <HandleInput
          label="Start Year"
          placeholder="Enter start year"
          type="date"
          ref={startCollege}
        />
        <HandleInput
          label="End Year"
          placeholder="Enter end year"
          type="date"
          ref={endCollege}
        />
      </div>
      <button
        onClick={(event) => handleEducationFormData(event)}
        className="w-full text-center px-5 py-3 bg-blue-500 mt-8 rounded-xl font-bold text-2xl border-2 border-white"
      >
        Save
      </button>

      {/* <div className="flex">
        <HandleInput
          label="12th College/School"
          placeholder="Enter 12th college or school name" ref={school12}
        />
        <HandleInput label="12th Marks" placeholder="Enter 12th marks" />
      </div>

      <div className="flex gap-4">
        <HandleInput label="10th School" placeholder="Enter 10th school name" />
        <HandleInput label="10th Marks" placeholder="Enter 10th marks" />
      </div> */}
    </div>
  );

  const projectBody = (
    <div className="flex flex-col gap-5">
      <HandleInput
        label="Project name"
        placeholder="Enter project name"
        ref={projectName}
      />
      <HandleInput
        label="Description"
        placeholder="Enter project description"
        ref={projectDescription}
      />
      <div className="flex gap-4">
        <HandleInput
          label="Duration in weeks"
          placeholder="Total duration in building"
          type="number"
          ref={projectDuration}
        />
      </div>
      <HandleInput
        label="Github link to project"
        placeholder="Enter link to project folder"
        ref={projectGithub}
      />
      <HandleInput
        label=" Project deployed link (optional)"
        placeholder="Enter live link"
        required={false}
        ref={projectDeployedlink}
      />
      <button
        onClick={(event) => handleProjectFormData(event)}
        className="w-full text-center px-5 py-3 bg-blue-500 mt-8 rounded-xl font-bold text-2xl border-2 border-white"
      >
        Save
      </button>
    </div>
  );

  const workExpBody = (
    <div className="flex flex-col gap-5 mt-5">
      <HandleInput
        label="Company Name"
        default="NA"
        placeholder="Enter Company name"
        ref={companyExp}
      />
      <HandleInput
        label="Exp duration"
        placeholder="Total year or month"
        ref={expDuration}
      />
      <div className="flex gap-4">
        <HandleInput
          label="Certificate"
          placeholder="Enter certificate link"
          ref={certificate}
        />
        <HandleInput
          label="Location"
          placeholder="Enter location of company"
          type="location"
          ref={location}
        />
      </div>

      <button
        onClick={(event) => handleExperienceFormData(event)}
        className="w-full text-center px-5 py-3 bg-blue-500 mt-8 rounded-xl font-bold text-2xl border-2 border-white"
      >
        Save
      </button>
    </div>
  );

  const achievmentsBody = (
    <div className="flex flex-col gap-5">
      <HandleInput
        label="Your achienvents"
        placeholder="Enter your achievments "
        type="text"
        ref={achievment1}
      />

      <HandleInput
        label="Other achienvents"
        placeholder="Enter your achievments "
        type="text"
        required={false}
        ref={achievment2}
      />
      <HandleInput
        label="other achievment"
        placeholder="Enter achievment name "
        type="text"
        required={false}
        ref={achievment3}
      />

      <button
        onClick={(event) => handleAchievmentsFormData(event)}
        className="w-full text-center px-5 py-3 bg-blue-500 mt-8 rounded-xl font-bold text-2xl border-2 border-white"
      >
        Save
      </button>
    </div>
  );

  const skillsBody = (
    <div className="flex flex-col gap-3">
      <h1 className="mb-2">Enter atleast one</h1>
      <HandleInput
        label="Your Skills"
        placeholder="Enter skills"
        required={true}
        ref={skill1}
      />
      <HandleInput
        label="Your Skills"
        placeholder="Enter skills"
        required={false}
        ref={skill2}
      />
      <HandleInput
        label="Your Skills"
        placeholder="Enter skills"
        required={false}
        ref={skill3}
      />
      <HandleInput
        label="Your Skills"
        placeholder="Enter skills"
        required={false}
        ref={skill4}
      />
      <HandleInput
        label="Your Skills"
        placeholder="Enter skills"
        required={false}
        ref={skill5}
      />

      <button
        onClick={(event) => handleSkillsFormData(event)}
        className="w-full text-center px-5 py-3 bg-blue-500 mt-8 rounded-xl font-bold text-2xl border-2 border-white"
      >
        Save
      </button>
    </div>
  );

  const othersBody = (
    <div>
      <HandleInput
        label="Describe yourself"
        placeholder="Describe yourself "
        className="min-h-[25vh] outline-none bg-transparent w-full px-4 border-2  border-blue-700 mt-5 rounded-xl p-5"
        onChange={(event) => setAboutUser(event.target.value)}
      />

      {/* <button
        onClick={(event) => handleOthersFormData(event)}
        className="w-full text-center px-5 py-3 bg-blue-500 mt-8 rounded-xl font-bold text-2xl border-2 border-white"
      >
        Save
      </button> */}
    </div>
  );

  const generateBody = () => {
    switch (allSections[activeKey]) {
      case allSections.basicInfo:
        return basicInfoBody;
      case allSections.workExperience:
        return workExpBody;
      case allSections.project:
        return projectBody;
      case allSections.achievments:
        return achievmentsBody;
      case allSections.skills:
        return skillsBody;
      case allSections.education:
        return educationBody;
      case allSections.about:
        return othersBody;
      default:
        return null;
    }
  };

   const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <div className="w-full ">
      <h1 className="text-4xl mt-4 text-white font-bold text-center bg- ">
        Fill your details
      </h1>
      <div className="flex justify-between items-center flex-col md:flex-row pl-12 md:px-3 py-1 gap-3">
        <div className=" mt-5 ">
          {colors.map((color, index) => {
            return (
              <span
                key={index}
                className={`cursor-pointer w-[2vw] h-[2vw] px-7 py-4 md:px-9 md:py-6  ml-5 rounded-full ${color} `}
              ></span>
            );
          })}
        </div>
          
        
        
      </div>

      {/* input */}

      <div className="w-[90%] min-h-[80vh] mx-auto mt-12 border-2 border-[aqua] rounded-xl">
        <div className="w-full flex flex-col md:flex-row justify-center  mt-2 gap-5 pl-0 md:pl-0">
          {Object.keys(allSections).map((key, index) => {
            return (
              <div
                onClick={() => setActiveKey(key)}
                key={index}
                className={`px-3 py-2 border-2 border-[aqua] text-2xl font-bold cursor-pointer rounded-lg ${
                  key == activeKey ? "bg-white text-black" : ""
                } `}
              >
                {allSections[key]}
              </div>
            );
          })}
        </div>
        {/* all inputs */}
        <form className="w-full object-cover h-full  px-5 py-4 pt-10  ">
          {generateBody()}
          {/* <button className="w-full text-center px-5 py-3 bg-blue-500 mt-16 rounded-xl font-bold text-2xl border-2 border-white">Final Submit when all sections completed</button> */}
        </form>
      </div>

      {/* Resume template */}
      <div ref={printRef} className="w-[95%] md:w-[60%] min-h-[163vh] mx-auto  bg-blue-600 mt-10 rounded-xl flex px-4 py-2 gap-2 ">
        {/* left */}
        <div className="w-[30%] bg-black  rounded-xl border-2 border-black px-3 py-2">
          <div className="w-full h-[22%] bg-blue-700 rounded-xl pt-3">
            <div className="w-[7vw] h-[7vw] rounded-full bg-white mx-auto overflow-hidden ">
              <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='userImage' className="object-cover"/>
            </div>
            <h1 className="text-center text-2xl font-bold mt-4">
              {" "}
              {userName ? userName : "Name"}
            </h1>
            <h1 className="text-center text-xl font-bold mt-1">
              {userJob ? userJob : "Fresher"}
            </h1>
          </div>

          {/* socials */}
          <div className="w-full   pt-3">
            <h1 className="text-center text-3xl font-bold mt-4">Socials</h1>
            <div className="w-[60%] h-[3px] bg-blue-600 rounded-full mx-auto"></div>
            <div className="w-full  text-xl mt-4 px-2 py-2">
              <a
                target="_blank"
                href="https://github.com"
                className="flex gap-3 justify-center"
              >
                {" "}
                <FaGithub size={24} /> {userGithub ? userGithub : "Github"}
              </a>
              <a
                target="_blank"
                href="https://github.com"
                className="flex gap-3 justify-center mt-3"
              >
                {" "}
                <CiLinkedin className="bg-blue-500 rounded-sm" size={24} />{" "}
                {userLinkdlen ? userLinkdlen : "linkdein"}
              </a>
            </div>
          </div>

          {/* contact */}
          <div className="w-full ">
            <h1 className="text-center text-3xl font-bold mt-5">Contact</h1>
            <div className="w-[60%] h-[3px] bg-blue-600 rounded-full mx-auto"></div>
            <div className="w-full min-h-7 text-lg mt-4 px-2 py-2">
              <h2 className="flex gap-2 justify-center">
                {" "}
                <FaPhone size={20} className="mt-1" /> Phone no
              </h2>
              <p className="text-center">{userPhone}</p>

              <h2 className="flex gap-2 justify-center mt-4">
                {" "}
                <BiLogoGmail size={20} className="mt-1 text-yellow-400" /> Email
              </h2>
              <p className="text-center">{userEmail}</p>
            </div>
          </div>

          {/* skills */}
          <div className="w-full ">
            <h1 className="text-center text-3xl font-bold mt-5">Skills</h1>
            <div className="w-[60%] h-[3px] bg-blue-600 rounded-full mx-auto"></div>
            <div className="w-full min-h-7 text-lg mt-4 px-2 py-2 flex flex-col gap-2">
              <h1 className="text-center text-lg font-semibold">
                {" "}
                {userSkill1 ? userSkill1 : ""} 🤹
              </h1>
              <h1 className="text-center text-lg font-semibold">
                {userSkill2 ? userSkill2 : ""} 🤹
              </h1>
              <h1 className="text-center text-lg font-semibold">
                {userSkill3 ? userSkill3 : ""} 🤹
              </h1>
              <h1 className="text-center text-lg font-semibold">
                {userSkill4 ? userSkill4 : ""} 🤹
              </h1>
              <h1 className="text-center text-lg font-semibold">
                {userSkill5 ? userSkill5 : ""} 🤹
              </h1>
            </div>
          </div>

          {/* certificate */}
          <div className="w-full ">
            <h1 className="text-center text-3xl font-bold mt-5 flex justify-center gap-1">
              Achievments <GrCertificate className="bg-red-500 rounded-r-lg" />{" "}
            </h1>
            <div className="w-[60%] h-[3px] bg-blue-600 rounded-full mx-auto"></div>
            <div className="w-full min-h-7 text-lg mt-4 px-2 py-2 flex flex-col gap-2">
              <h1 className="text-center text-lg font-semibold">
                {userAchievement1 ? userAchievement1 : "achievment"} ✨
              </h1>
              <h1 className="text-center text-lg font-semibold">
                {userAchievement2 ? userAchievement2 : "achievment"} ✨
              </h1>
              <h1 className="text-center text-lg font-semibold">
                {userAchievement3 ? userAchievement3 : "achievment"} ✨
              </h1>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="w-[70%] bg-zinc-100 min-h-full border-2 border-black rounded-xl px-5 py-3">
          {/* about */}
          <div className="w-full h-[23%] overflow-y-scroll">
            <h1 className="text-center text-3xl font-bold text-blue-800">
              About me
            </h1>
            <div className="w-[68%] min-h-[3px] mt-2 rounded-full bg-blue-700 mx-auto"></div>
            <p className="text-sm font-semibold text-black ">
             {
              aboutUser ? aboutUser :  "about meeeee"
             }
            </p>
          </div>

          {/* Work Experience */}
          <div className="w-full min-h-[24%] overflow-y-auto">
            <h1 className="text-center text-3xl font-bold text-blue-800">
              Work Experience
            </h1>
            <div className="w-[68%] min-h-[3px] mt-2 rounded-full bg-blue-700 mx-auto"></div>
            <div>
              <h1 className="text-xl mt-5 font-semibold text-black ml-16">
                🖥️{userExpCompany ? userExpCompany : 'company'}
              </h1>
              <h1 className="text-xl mt-3 font-semibold text-black ml-16 ">
              ⌚{userExpDuration ? userExpDuration : 'duration'}
              </h1>
              <h1 className="text-xl mt-3 font-semibold text-black ml-16 ">
                💫{userExpCertificate ? userExpCertificate: 'certificate'}
              </h1>
              <h1 className="text-xl mt-3 font-semibold text-black ml-16 ">
                🗝️{userExpLocation ? userExpLocation : 'location'}
              </h1>
            </div>
          </div>

           {/* Major Project */}
           <div className="w-full min-h-[24%] overflow-y-auto">
            <h1 className="text-center text-3xl font-bold text-blue-800 mt-5">
              Major Project
            </h1>
            <div className="w-[68%] min-h-[3px] mt-2 rounded-full bg-blue-700 mx-auto"></div>
            <div>
              <h1 className="text-xl mt-5 font-semibold text-black ml-16">
                👨‍💻{userProjectName ? userProjectName : 'project'}
              </h1>
              <h1 className="text-xl mt-5 font-semibold text-black ml-16 ">
              ⌚{userProjectDuration ? userProjectDuration : 'Duration'} week
              </h1>
              <h3 className="text-sm mt-5 font-semibold text-black ml-16 ">
                🌱{userProjectDescription ? userProjectDescription : 'Description'}
              </h3>
              <div className="flex flex-col ">
              <a href={userProjectGithub} className="text-sm text-blue-500 mt-5 font-semibold  ml-16 ">
                🗝️{userProjectGithub ? userProjectGithub : 'github link'}
              </a>

              <a href={userProjectDeployedlink} className="text-sm mt-5 font-semibold text-blue-500 ml-16 ">
                📱{userProjectDeployedlink ? userProjectDeployedlink : 'deployed link'}
              </a>
              </div>
             
            </div>
          </div>

          {/* Study */}
          <div className="w-full min-h-[24%] overflow-y-auto">
            <h1 className="text-center text-3xl mt-8 font-bold text-blue-800">
              Education
            </h1>
            <div className="w-[68%] min-h-[3px] mt-2 rounded-full bg-blue-700 mx-auto"></div>
            <div>
              <h1 className="text-xl mt-5 font-semibold text-black ml-16">
              🎓{userQualification ? userQualification : 'Qualification'}
              </h1>
              <h1 className="text-xl mt-3 font-semibold text-black ml-16 ">
              🎓{userCollege ? userCollege : 'college name'}
              </h1>

              <h1 className="text-xl mt-3 font-semibold text-black ml-16 ">
              ⌚{userCollegeStart ? userCollegeStart : 'college name'}
              </h1>

              <h1 className="text-xl mt-3 font-semibold text-black ml-16 ">
              ⌚{userCollegeEnd ? userCollegeEnd : 'college name'}
              </h1>
             
            </div>
          </div>


        </div>
      </div>

      {/* download */}
      {/* <ReactToPrint
        trigger={() => (
          <button className="mr-7 px-5 py-2 mt-4 md:mt-0 text-white bg-blue-700 rounded-md">
          Download ⬇
        </button>
        )}
        content={() =>printRef.current}
      /> */}

      <button onClick={handlePrint} className="mr-7 px-5 w-full py-2 mt-4 md:mt-20 text-white bg-blue-700 rounded-md">
          Download ⬇
        </button>
    </div>
  );
}

export default Inputcontainer;
