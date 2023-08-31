"use client";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import { useRef, useState, useContext, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { StateContext } from "@/context/state";

function NewBlog() {
  const router = useRouter();
  const url = "http://127.0.0.1:8000/api/blogs/";
  const { isLogin, setIsLogin } = useContext(StateContext);

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };
  const [newBlog, setNewBlog] = useState({
    blogTitle: "",
    blogPost: "",
    author: "",
    blogImage: null,
  });
  useEffect(() => {
    setNewBlog((prev) => ({ ...prev, author: isLogin.username }));
  }, []);
  const [formErrors, setFormErrors] = useState({});
  function handleAdd(e) {
    e.preventDefault();

    const addErrors = {};
    (newBlog.blogTitle === undefined || newBlog.blogTitle === "") &&
      (addErrors.blog_blogTitletitle = "Please enter your  blog title");
    (newBlog.blogImage === undefined || newBlog.blogImage === "") &&
      (addErrors.blogImage = "Please enter your blog image");
    (newBlog.blogPost === undefined || newBlog.blogPost === "") &&
      (addErrors.blogPost = "Please enter your enter your blog post");
    (newBlog.author === undefined || newBlog.author === "") &&
      (addErrors.author = "Please  your name or name of the author");
    setFormErrors(addErrors);
    console.log(newBlog);
  }

  const newFormData = new FormData();
  newFormData.append("blogTitle", newBlog.blogTitle);
  newFormData.append("blogPost", newBlog.blogPost);
  newFormData.append("author", newBlog.author);
  if (newBlog.blogImage != null) {
    newFormData.append = ("blogImage", newBlog.blogImage);
  }
  axios.post(url, newFormData).then((response) => {
    console.log(response);
    router.push("/");
  });

  return (
    <div>
      <Nav />
      <div className="bg-[#0775C6] p-3">
        <h1 className="text-white text-center font-bold text-3xl ">
          CREATE A POST
        </h1>
        <div className="bg-[#0775C6] p-3">
          <div className="w-[50%] bg-white mx-auto p-2 rounded-3xl my-[3em]  ">
            <div className=" shadow border-gray-300 border-2 w-[70%] rounded mx-auto my-5">
              <input
                onChange={(e) =>
                  setNewBlog({ ...newBlog, blogTitle: e.target.value })
                }
                type="text"
                className="outline-0 p-5 bg-transparent w-[100%] "
                name="blogTitle"
                placeholder="Blog Title"
              />
            </div>
            <div className=" shadow border-gray-300 border-2 w-[70%] rounded mx-auto my-5">
              <input
                onChange={(e) =>
                  setNewBlog({ ...newBlog, blogImage: e.target.files[0] })
                }
                type="file"
                name="blogImage"
                className="outline-0 p-5 bg-transparent w-[100%]"
                placeholder
              />
            </div>
            <Editor
              onEditorChange={(e) =>
                setNewBlog({ ...newBlog, blogPost: log() })
              }
              apiKey="vjc1fyped6oyo7788777cc3uj333koulc2weq8l51hdwaf5y"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            {/* <div className=" shadow border-gray-300 border-2 w-[70%] rounded mx-auto my-5">
              <input
                onChange={(e) =>
                  setNewBlog({ ...newBlog, author: e.target.value })
                }
                type="text "
                name="author"
                className="outline-0 p-5 bg-transparent w-[100%] "
                placeholder="Blog author"
              />
            </div> */}
            <div className="flex justify-center mb-10 mt-9">
              <button
                onClick={(e) => handleAdd(e)}
                className=" p-4   shadow font-bold text-center text-2xl w-[70%] mx-auto text-white bg-[#0775C6] rounded "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NewBlog;

// import Footer from "@/components/Footer";
// import Nav from "@/components/Nav";
// import { useRef, useState } from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// function Newblog() {
//     const router=useRouter()
//   const log = () => {
//     if (editorRef.current) {
//       return editorRef.current.getContent();
//     }
//   };
//   const [newBlog, setNewBlog] = useState({
//     blog_title: "",
//     blog_post: "",
//     blog_author: "",
//     blog_image: null,
//   });
//   const [formErrors, setFormErrors] = useState({});
//   function handleAdd(e) {
//     e.preventDefault();
//     const addErrors = {};
//     (newBlog.blog_title === undefined || newBlog.blog_title === "") &&
//       (addErrors.blog_title = "Please enter your  blog title");
//     (newBlog.blog_image === undefined || newBlog.blog_image === "") &&
//       (addErrors.blog_image = "Please enter your blog image");
//     (newBlog.blog_post === undefined || newBlog.blog_post === "") &&
//       (addErrors.blog_post = "Please enter your enter your blog post");
//     (newBlog.blog_author === undefined || newBlog.blog_author === "") &&
//       (addErrors.blog_author = "Please  your name or name of the author");
//     setFormErrors(addErrors);
//     console.log(newBlog);
//   const newFormData=new FormData()
//   newFormData.append("blog_title",newBlog.blog_title)
//   newFormData.append("blog_post",newBlog.blog_post)
//   newFormData.append("blog_author",newBlog.blog_author)
//   if(newBlog.blog_image!=null){
//      newFormData.append=( "blog_image",newBlog.blog_image)
//   }
//   axios.post(url, newFormData)
//   .then((response) => {
//     console.log(response);
//     router.push("/")
// });
// }
//   const editorRef = useRef(null);
//   const url = "http://127.0.0.1:8000/api/blogs/";
//   return (
//     <div>
//       <Nav />
//       <div className="   ">
//         <div className="bg-[#0775C6] mb-[2em]">
//           <h2 className="text-4xl font-bold text-[#FFFFFF] mt-[2em] text-center">
//             CREATE A POST
//           </h2>
//           <div className="w-[50vw] my-7 bg-white rounded-md  text-center py-5  mx-auto flex flex-col  items-center  ">
//             {formErrors.blog_title && (
//               <p className="text-red-500">{formErrors.blog_title}</p>
//             )}
//             <input
//               onChange={(e) =>
//                 setNewBlog({ ...newBlog, blog_title: e.target.value })
//               }
//               type="text"
//               name="blog_title"
//               className="w-[50%] outline-none border-2 border-[#0775C6]  py-4 px-2 my-5 rounded-md"
//               placeholder="Blog title"
//             />
//             {formErrors.blog_image && (
//               <p className="text-red-500">{formErrors.blog_image}</p>
//             )}
//             <input
//               onChange={(e) =>
//                 setNewBlog({ ...newBlog, blog_image: e.target.files[0] })
//               }
//               type="file"
//               name="blog_image"
//               className="w-[50%] outline-none border-2 border-[#0775C6]  py-4 px-2 my-5rounded-md"
//               placeholder
//             />
//             <Editor
//               onEditorChange={(e) =>
//                 setNewBlog({ ...newBlog, blog_post: log() })
//               }
//               apiKey="a3o814fmqjdlal6vqzxcdhnxzbugfip27abxcov8amup9ouj"
//               onInit={(evt, editor) => (editorRef.current = editor)}
//               initialValue=""
//               init={{
//                 height: 500,
//                 menubar: false,
//                 plugins: [
//                   "advlist",
//                   "autolink",
//                   "lists",
//                   "link",
//                   "image",
//                   "charmap",
//                   "preview",
//                   "anchor",
//                   "searchreplace",
//                   "visualblocks",
//                   "code",
//                   "fullscreen",
//                   "insertdatetime",
//                   "media",
//                   "table",
//                   "code",
//                   "help",
//                   "wordcount",
//                 ],
//                 toolbar:
//                   "undo redo | blocks | " +
//                   "bold italic forecolor | alignleft aligncenter " +
//                   "alignright alignjustify | bullist numlist outdent indent | " +
//                   "removeformat | help",
//                 content_style:
//                   "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//               }}
//             />
//             {formErrors.blog_uthor && (
//               <p className="text-red-500">{formErrors.blog_author}</p>
//             )}
//             <input
//               onChange={(e) =>
//                 setNewBlog({ ...newBlog, blog_author: e.target.value })
//               }
//               type="text "
//               name="blog_author"
//               className="w-[50%] outline-none border-2 border-[#0775C6]  py-4 px-2 my-5 "
//               placeholder="Blog author"
//             />
//             <button
//               onClick={(e) => handleAdd(e)}
//               className="mx-auto w-[50%] text-white bg-[#0775C6] py-4 px-2 my-5 rounded-md"
//             >
//               submit
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// export default Newblog;

// vjc1fyped6oyo7788777cc3uj333koulc2weq8l51hdwaf5y
