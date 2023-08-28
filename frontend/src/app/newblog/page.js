import Nav from "@/components/nav";
import Footer from "@/components/Footer";
function NewBlog() {
  return (
    <div>
      <Nav />
      <div className="bg-[#0775C6] h-[70vh]">
        <h1 className="text-white text-center font-bold text-3xl ">
          CREATE A POST
        </h1>
        <div className="w-[50%] bg-white mx-auto p-4 rounded-3xl my-[3em] ">
          <div className=" shadow border-gray-300 border-2 w-[70%] rounded mx-auto mt-5">
            <input
              type="text"
              className="outline-0 p-5 bg-transparent w-[100%] "
              placeholder="Blog Title"
            />
          </div>
          <div className=" shadow border-gray-300 border-2 w-[70%] rounded mx-auto my-5">
            <input
              type="file"
              className="outline-0 p-5 bg-transparent w-[100%] "
            />
          </div>
          <div className=" shadow border-gray-300  border-2 w-[70%] rounded mx-auto my-5">
            <input
              type="text"
              className="outline-0 p-5 bg-transparent w-[100%] "
              placeholder="Blog Author"
            />
          </div>
          <div className="flex justify-center mb-10 mt-9">
            <button className=" p-4   shadow font-bold text-center text-2xl w-[70%] mx-auto text-white bg-[#0775C6] rounded ">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NewBlog;
