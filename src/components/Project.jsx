const Project = () => {
    return (
        <div className="mt-20">
            <h1 className="myName text-5xl font-bold text-white">
                Project
            </h1>
            <h3 className="text-xl font-bold text-gray-500 mt-3 mb-10">My work experience as a Automation engineer and working on different projects.</h3>
            <div className="project--video flex">
                <div className="video--item flex-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uHEuRYoV3Js?si=a7tBAc7k0B1zRntf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="video--item flex-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xnxpCdFyJ6w?si=pvHEcq9DbjzZRIRm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </div>


        </div>
    );
}

export default Project;