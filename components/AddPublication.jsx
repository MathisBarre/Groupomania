import React from 'react';
import { useForm } from 'react-hook-form';
import createComment from "@/api/createComment"

export default function AddPublication({ currentPostId }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  async function onSubmit(data) {
    console.log(data.comment)
    console.log(currentPostId)

    try {
      await createComment(currentPostId, data.comment)
    } catch(error) {
      alert(error)
    }
  }

  console.log(errors);
  
  return (
    <form className="flex mt-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text" 
        placeholder="comment" 
        {...register("comment", {})}
        className="flex-1 mr-4 input valid-input"
      />
      <input className="" type="submit" />
    </form>
  );
}