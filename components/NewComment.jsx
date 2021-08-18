import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import createComment from "@/api/createComment"
import FormButton from './FormButton';
import { mutate } from 'swr';

export default function NewComment({ currentPostId, commentsEndpoint }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isCommentPosting, setIsCommentPosting] = useState(false)

  async function onSubmit(data) {
    try {
      setIsCommentPosting(true)
      await createComment(currentPostId, data.comment)
      mutate(commentsEndpoint)
      setIsCommentPosting(false)
      reset()
    } catch(error) {
      alert(error)
      setIsCommentPosting(false)
    }
  }

  return (
    <form className="flex flex-col flex-wrap mt-8 sm:flex-row" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text" 
        placeholder="Votre commentaire..." 
        {...register("comment", { required: true })}
        className={`${errors.comment ? "invalid-input" : "valid-input"} flex-1 mb-2 sm:mb-0 sm:mr-4 input`}
      />
      <div>
        <FormButton text="Poster" loading={isCommentPosting} />
      </div>
    </form>
  );
}