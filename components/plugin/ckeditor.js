import React, { useEffect, useRef } from "react";
import './custom.css';

export default function CKeditor({ onChange, editorLoaded, name, value }) {
    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, 
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);
    
    return (
        <>
            {editorLoaded ? (
                <div>
                    <CKEditor
                        name={name}
                        editor={ClassicEditor}
                        data={value}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            onChange(data);
                        }}
                    />
                </div>
            ) : (
                <div>Editor loading</div>
            )}
        </>
    )
}