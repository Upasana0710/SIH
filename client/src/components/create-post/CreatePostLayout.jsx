import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Dropzone, FileMosaic } from '@files-ui/react';

import { getSubjects, createPost } from '../../api/api';

import styles from './CreatePostLayout.module.css';

const CreatePostLayout = () => {
  const { currentUser } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [files, setFiles] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const resetForm = () => {
    setValue('title', '');
    setValue('text', '');
    setValue('category', '');
    setValue('community', '');
    setValue('file', null);
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await getSubjects(localStorage.getItem('user_info'));
      const resData = response?.data?.subjects;
      console.log(resData);
      setSubjects(resData);
    };
    fetchSubjects();
  }, [setSubjects]);

  const onFileChange = (e) => {
    setValue('file', e.target.files);
  };

  const updateFiles = (incomingFiles) => {
    setFiles(incomingFiles);
  };

  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const onSubmit = async (data) => {
    const postData = { ...data, file: files[0] };
    console.log(postData);
    try {
      const response = await createPost(
        postData,
        localStorage.getItem('user_info')
      );

      if (response.status === 201) {
        resetForm();
        console.log('SENDING DATA SUCCESSFULL');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.create_post_container}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.create_post_form}
      >
        <h3 className={styles.create_post_header}>CREATE A POST</h3>

        <label className={styles.create_form_label}>
          Title:
          <input
            type="text"
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 10,
                message: 'Title should be at least 10 characters long',
              },
            })}
          />
          {errors.title && (
            <p className={styles.error_message}>{errors.title.message}</p>
          )}
        </label>

        <label className={styles.create_form_label}>
          Text Body:
          <textarea
            {...register('text', {
              required: 'Text Body is required',
              minLength: {
                value: 30,
                message: 'Text Body should be at least 30 characters long',
              },
            })}
          />
          {errors.text && (
            <p className={styles.error_message}>{errors.text.message}</p>
          )}
        </label>

        <label className={styles.create_form_label}>
          Category:
          <select
            {...register('category', { required: 'Category is required' })}
          >
            {subjects.map((subject, index) => (
              <option key={index} value={subject.name}>
                {subject.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className={styles.error_message}>{errors.category.message}</p>
          )}
        </label>

        <label className={styles.create_form_label}>
          Post in Community (optional):
          <input type="text" {...register('community')} />
        </label>

        <label className={styles.create_form_label}>
          Upload File (optional):
          <Dropzone
            onChange={updateFiles}
            value={files}
            accept="image/*, .pdf, .doc, .docx, .xlsx"
            maxFileSize={20480 * 1024}
            maxFiles={1}
            color="#0c0678"
            //cleanFiles
            actionButtons={{ position: 'bottom', cleanButton: {} }}
          >
            {files.map((file) => (
              <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
            ))}
          </Dropzone>
        </label>
        <div className={styles.form_btns_container}>
          <button type="submit" className={styles.form_submit_btn}>
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostLayout;
