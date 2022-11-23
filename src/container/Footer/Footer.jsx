import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import emailjs from '@emailjs/browser';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { AppWrap, MotionWrap } from '../../wrapper';
import { filterProps } from 'framer-motion';

import { images } from '../../constants';

const Footer = () => {
  const [formData, setFormData] = useState({
    toName: 'Adi Yulianto',
    name: '',
    email: '',
    message: '',
  });
  const { toName, name, email, message } = formData;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valuePhone, setValuePhone] = useState('081281903574');
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitMessage = () => {
    setLoading(true);
    console.log(message);

    const emailContent = {
      to_name: toName,
      from_name: name,
      from_email: email,
      message: message,
    };
    emailjs
      .send(
        'service_1z0wj0a',
        'template_kmp5dq8',
        emailContent,
        'e6Nd9W41xkWPI7DXu',
      )
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        setIsFormSubmitted(true);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center my-10 lg:my-0">
      <h1 className="font-bold text-3xl lg:text-5xl text-center my-10 text-black capitalize">
        Take A Coffe & Chat With Me
      </h1>
      <div className="border-none rounded-xl bg-white flex flex-row items-center py-3 px-6 ">
        <img src={images.mobile} className="w-7" />
        <h2 className="ml-2 font-light">+62(812) - 8190 - 3574</h2>
      </div>
      <div className="flex flex-row mb-6 mt-2 gap-4 items-center">
        <div className="border  py-1 px-2 bg-white rounded-lg">
          <CopyToClipboard text={valuePhone} onCopy={() => setCopied(true)}>
            {!copied ? (
              <span className="font-medium">Copy No Phone</span>
            ) : (
              <span className="font-medium text-color-palette-2">
                Berhasil dicopy!
              </span>
            )}
          </CopyToClipboard>
        </div>
        <div className="border  py-1 px-2 bg-white rounded-lg">
          <a
            href="https://wa.me/+6281281903574?text=Hallo"
            className="font-medium"
            target="_blank"
          >
            Direct to WhatsApp
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit(onSubmitMessage)}>
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-4 w-80 lg:w-96 xl:w-[450px]">
              <input
                type="text"
                placeholder="Nama"
                {...register('name', { required: true })}
                value={name}
                name="name"
                className="py-2 px-4 rounded-xl"
                onChange={handleChangeInput}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                message="Nama harus diisi!"
              />
              <input
                type="text"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                  },
                })}
                value={email}
                name="email"
                className="py-2 px-4 rounded-xl"
                onChange={handleChangeInput}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                message="Email harus diisi!"
              />
              <textarea
                type="text"
                rows={3}
                placeholder="Pesan"
                {...register('message', { required: true })}
                value={message}
                name="message"
                className="py-2 px-4 rounded-xl"
                onChange={handleChangeInput}
              />
              <ErrorMessage
                errors={errors}
                name="message"
                message="Message harus diisi!"
              />
            </div>
            <button
              type="submit"
              className=" bg-color-palette-2 text-color-palette-1 py-3 px-6 rounded-xl font-bold md:w-48 my-10"
            >
              {loading ? 'Sending' : 'Send Message'}
            </button>
          </div>
        </form>
      ) : (
        <h3 className="font-bold text-2xl lg:text-4xl mx-4 text-color-palette-2 max-w-2xl text-center">
          Terimakasih sudah mengirim pesan yang akan diteruskan ke Gmail melalui{' '}
          <span className="text-black">EmailJS</span>
        </h3>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'flex-1 w-full flex-col flex items-center justify-center'),
  'contact',
  'bg-color-palette-1',
);
