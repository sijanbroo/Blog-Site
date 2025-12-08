import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, RTE, Select } from "../index";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        featuredImage: post?.featuredImage || "",
        status: post?.status || "active",
      },
    });
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      // If editing an existing post
      let fileId = post.featuredImage;

      if (data.image && data.image[0]) {
        try {
          const file = await appwriteService.uploadFile(data.image[0]);
          if (file) {
            appwriteService.deleteFile(post.featuredImage);
            fileId = file.$id;
          }
        } catch (error) {
          console.error("File upload error:", error);
          return;
        }
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        title: data.title,
        slug: data.slug,
        content: data.content,
        status: data.status,
        featuredImage: fileId,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      // If creating a new post
      if (!data.image || !data.image[0]) {
        console.error("Featured image is required");
        alert("Featured image is required");
        return;
      }

      try {
        const file = await appwriteService.uploadFile(data.image[0]);
        console.log("File uploaded:", file);
        if (file && file.$id) {
          console.log("User data:", userData);
          if (!userData || !userData.$id) {
            alert("User not authenticated. Please log in again.");
            return;
          }
          const dbPost = await appwriteService.createPost({
            title: data.title,
            slug: data.slug,
            content: data.content,
            status: data.status,
            userId: userData.$id,
            featuredImage: file.$id,
          });
          console.log("Post created:", dbPost);
          if (dbPost && dbPost.$id) {
            console.log("Navigating to:", `/post/${dbPost.$id}`);
            navigate(`/post/${dbPost.$id}`);
          } else {
            alert("Post created but response invalid. Redirecting to home.");
            navigate("/");
          }
        } else {
          alert("File upload failed. Please try again.");
        }
      } catch (error) {
        console.error("Error creating post:", error);
        alert("Error creating post: " + error.message);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return (
        value
          .trim()
          .toLowerCase()
          .replace(/[^a-z\d-]+/g, "-")
          // 4. Replace consecutive hyphens with a single hyphen
          .replace(/-+/g, "-")
          // 5. Remove leading and trailing hyphens that might be left from step 3
          .replace(/^-+|-+$/g, "")
      );
    }
    return "";
  }, []);

  useEffect(() => {
    const subsription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subsription.unsubscribe();
    };
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap p-4">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
              onError={(e) => {
                console.error("Image preview failed:", post.featuredImage);
                e.target.src = "https://via.placeholder.com/300?text=No+Image";
              }}
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status :"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
      <RTE
        label="Content :"
        name="content"
        control={control}
        defaultValue={getValues("content")}
      />
    </form>
  );
}

export default PostForm;
