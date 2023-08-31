"use client";
import { useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Edit({ params }) {
  const [blog, setBlog] = useState({});
  const [updateData, setUpdateData] = useState({
    blogTitle: "",
    blogPost: "",
    author: "",
    blogImage: null,
  });
  const [selected, setSelected] = useState("");
  const url = `http://127.0.0.1:8000/api/blogs/${params.id}`;
  let imageUrl = "http://127.0.0.1:8000/api";
  const editorRef = useRef(null);
  const router = useRouter();
  const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlog(data);
      });
  }, []);

  //   copy from blog
  useEffect(() => {
    setUpdateData({ ...blog });
  }, [blog]);

  useEffect(() => {
    setSelected(`${imageUrl}${updateData.blogImage}`);
  }, [updateData]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    // method change file to url
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      // console.log(fileUrl);
      setSelected(fileUrl);
    }
    // setUpdateData(prev=>({...prev, blogImage:file}))
    updateData.blogImage = file;
    console.log(updateData);
  }

  function handleUpdate() {
    const newFormData = new FormData();
    newFormData.append("blogTitle", updateData.blogTitle);
    newFormData.append("blogPost", updateData.blogPost);
    newFormData.append("author", updateData.author);
    newFormData.append("blogImage", updateData.blogImage);

    axios.put(url, newFormData).then((response) => {
      console.log(response);
      if (response.status === 200) {
        router.push(`/blogs/${params.id}`);
      }
    });
  }
  return (
    <div>
      <Nav />
      <h1 className="text-white text-center font-bold text-2xl ">
        Edit a blog
      </h1>
      <div className="bg-[#0775C6] p-3">
        <div className="w-[50%] bg-white mx-auto p-2 rounded-3xl my-[3em]  ">
          <div className=" shadow border-gray-300 border-2 w-[70%] rounded mx-auto my-5">
            <input
              onChange={(e) =>
                setUpdateData({ ...updateData, blogTitle: e.target.value })
              }
              type="text"
              value={updateData.blogTitle}
              className="outline-0 p-5 bg-transparent w-[100%] "
              name="blogTitle"
              placeholder="blogTitle"
            />
          </div>
          <div className="p-2 flex justify-center">
            <img src={selected} className="w-[150px] h-[100px]" />
          </div>
          <div className=" shadow border-gray-300 border-2 w-[70%] rounded mx-auto my-5">
            <input
              onChange={
                (e) => handleImageChange(e)
                // setUpdateData({ ...updateData, blogImage: e.target.files[0] })
              }
              type="file"
              name="blogImage"
              className="outline-0 p-5 bg-transparent w-[100%]"
              placeholder
            />
          </div>
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
          <div className=" shadow border-gray-300 border-2 w-[70%] rounded mx-auto my-5">
            <input
              onChange={(e) =>
                setUpdateData({ ...updateData, author: e.target.value })
              }
              type="text "
              name="author"
              className="outline-0 p-5 bg-transparent w-[100%] "
              placeholder="Blog author"
              value={updateData.author}
            />
          </div>
          <div className="flex justify-center gap-5  mb-10 mt-9 mx-auto w-70%">
            <button
              onClick={handleUpdate}
              className=" border-2 rounded-md px-10 text-center py-2 shadow text-[#0775C6] font-bold hover:bg-[#0775C6] hover:text-white"
            >
              Save Changes
            </button>
           <Link href={`/blogs/${params.id}`}><button className="border-2 rounded-md px-10 text-center py-2 shadow text-[#0775C6] font-bold  hover:bg-[#0775C6] hover:text-white">
              Cancel
            </button>
            </Link> 

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Edit;
