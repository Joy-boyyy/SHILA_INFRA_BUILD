import React from "react";

const ProjectLocation = () => {
  return (
    <div className="w-[100%] mt-7">
      <div className="text-center mb-3">
        <h1 className="text-[2rem] font-bold">Project Location</h1>
      </div>
      <div className="w-100% flex gap-5">
        <div className="basis-[50%]">
          <div className="text-center text-[1.5rem] font-bold">
            <h1>Amity Green </h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.946097164772!2d81.0481389!3d26.841666699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzMwLjAiTiA4McKwMDInNTMuMyJF!5e0!3m2!1sen!2sin!4v1726683836991!5m2!1sen!2sin"
            className="border-2 border-black w-[100%] h-[20rem]"
            title="map_Location"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="basis-[50%]">
          <div className="text-center text-[1.5rem] font-bold">
            <h1>Laulai</h1>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.800227995368!2d81.07197219999999!3d26.846305599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzQ2LjciTiA4McKwMDQnMTkuMSJF!5e0!3m2!1sen!2sin!4v1726684441534!5m2!1sen!2sin"
            className="border-2 border-black w-[100%] h-[20rem]"
            title="map_Location2"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="w-100% flex gap-5 mt-8">
        <div className="basis-[50%]">
          <div className="text-center text-[1.5rem] font-bold">
            <h1>Kishan Path </h1>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.3860801069554!2d81.0648889!3d26.8594722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUxJzM0LjEiTiA4McKwMDMnNTMuNiJF!5e0!3m2!1sen!2sin!4v1726684755356!5m2!1sen!2sin"
            className="border-2 border-black w-[100%] h-[20rem]"
            title="map_Location3"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="basis-[50%]">
          <div className="text-center text-[1.5rem] font-bold">
            <h1>Madhav Green </h1>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.3860801069554!2d81.0648889!3d26.8594722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUxJzM0LjEiTiA4McKwMDMnNTMuNiJF!5e0!3m2!1sen!2sin!4v1726684850947!5m2!1sen!2sin"
            className="border-2 border-black w-[100%] h-[20rem]"
            title="map_Location4"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectLocation;
