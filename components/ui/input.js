"use client"
import React, {useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import DatePicker from "react-datepicker";
import CKeditor from '../plugin/ckeditor';
import 'react-datepicker/dist/react-datepicker.css';

export function Input({ label, type, name, required, placeholder, value, onChange}) {
    const [ckEditorLoaded, setCkEditorLoaded] = useState(false);
    useEffect(() => {
        setCkEditorLoaded(true);
    }, []);

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
    ));
    const handleDateChange = (date) => {
        const dateString = date.toISOString().split('T')[0]; // Get the date portion of the ISO string
        let event = { target: { name: name, value: dateString } }
        return onChange(event)
    };
    return (
        <>
        {
            type === 'checkbox'? (
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input 
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                                id={name} 
                                type={type} 
                                name={name} 
                                checked={value} 
                                onChange={onChange}
                            />
                        </div>
                        <label htmlFor={name} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
                    </div>
                </div>
            ) : type === 'file'? (    
                    <section className="container">
                        <aside className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                        </aside>
                        <div {...getRootProps({className: 'dark:bg-gray-700 dropzone'})}>
                            <input {...getInputProps()} />
                            {files.length < 1 ? (<p className='text-center'>Drag 'n' drop some files here, or click to select files</p>) : (<ul>{files}</ul>)}
                        </div>
                    </section>
            ) : type === 'richtext'? (
                    <div className="h-100">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                        <CKeditor
                            name="description"
                            value={value}
                            onChange={(data) => {
                                let event = { target: { name: name, value: data } }
                                return onChange(event)
                            }}
                            editorLoaded={ckEditorLoaded}
                        />
                    </div>
            ) : type === 'date'? (
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                        <DatePicker 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            dateFormat="yyyy/MM/dd"
                            placeholderText="Click to select a date" 
                            selected={!!value ? new Date(value) : null}
                            onChange={handleDateChange}
                        />
                    </div>
            ) : (
                <div>
                    <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                    <input 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        id={name} 
                        type={type} 
                        name={name} 
                        value={value} 
                        placeholder={placeholder} 
                        required={required} 
                        onChange={onChange} 
                    />
                </div>
            )
        }
        </>
    );
}
