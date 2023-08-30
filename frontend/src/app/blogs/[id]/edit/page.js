"use client";
import { useEffect, useState,useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";

function Edit({params}) {
  const [blog, setBlog] = useState({});
  const[updateData,setUpdateData]=useState({})
  const url=`http://127.0.0.1:8000/api/blogs/${params.id}`
  const editorRef = useRef(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        
      });
  },[]);

//   copy from blog
  useEffect(()=>{
    setUpdateData({...blog})
  },[blog])
//   console.log(blog)
  console.log(updateData)
  console.log(url);
  return( <div>
    <Nav/>
      <div className="w-[50vw] my-7 bg-white rounded-md  text-center py-5  mx-auto flex flex-col  items-center  ">
            
            <input
              onChange={(e) =>
                setUpdateData({ ...updateData, blogTitle: e.target.value })
              }
              type="text"
              name="blogTitle"
              className="w-[50%] outline-none border-2 border-[#0775C6]  py-4 px-2 my-5 rounded-md"
              placeholder="Blog title"
              value={updateData.blogTitle}
            />
            
            <input
              onChange={(e) =>
                setUpdateData({ ...updateData, blogImage: e.target.files[0] })
              }
              type="file"
              name="blogImage"
              className="w-[50%] outline-none border-2 border-[#0775C6]  py-4 px-2 my-5rounded-md"
              placeholder
              

            />
            <Editor
              onEditorChange={(e) =>
                setUpdateData({ ...updateData, blogPost: log() })
              }
              apiKey="vjc1fyped6oyo7788777cc3uj333koulc2weq8l51hdwaf5y"
              onInit={(evt, editor) => (editorRef.current = editor)}
              value={updateData.blogPost}
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
           
            <input
              onChange={(e) =>
                setUpdateData({ ...updateData, author: e.target.value })
              }
              type="text "
              name="author"
              className="w-[50%] outline-none border-2 border-[#0775C6]  py-4 px-2 my-5 "
              placeholder="Blog author"
              value={updateData.author}

            />
            <button
              onClick={(e) => handleUpdate(e)}
              className="mx-auto w-[50%] text-white bg-[#0775C6] py-4 px-2 my-5 rounded-md"
            >
              submit
            </button>
          </div>
          <Footer/>
  </div>)
}
export default Edit;
