import * as React from "react";
import { useEffect, useRef, useState } from "react";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import Froala from "react-froala-wysiwyg";
export const FloraEditor = () => {
  const ref = useRef({ editor: null });
  const [isFroalaInitialized, setIsFroalaInitialized] = useState(false);
  const [editor, setEditor] = useState(undefined);
  const [model, setModel] = useState("");
  const handleModelChange = (model) => {
    setModel(model);
    console.log(model);
    sessionStorage.setItem("description", model);
  };
  useEffect(() => {
    setEditor(ref.current.editor);
    editor && setIsFroalaInitialized(true);
    console.log("tes", <Froala />);
  }, [ref.current]);
  return (
    <div className="App">
      <Froala
        ref={ref}
        model={model || sessionStorage.getItem("blogupdate")}
        onModelChange={handleModelChange}
        tag="textarea"
        config={{
          key: "qc1H2pF1C2C1B6A6F6G5hqwdpA-13uznykI-7tC5cyqwcpmkybxhB-8A4B-7tfoD6C5G5D4G2D3C2B4C5A4==",
          attribution: false,
          placeholder: "Start typing...",
          toolbarButtons: {
            moreText: {
              buttons: [
                "bold",
                "italic",
                "underline",
                "strikeThrough",
                "subscript",
                "superscript",
                "fontFamily",
                "fontSize",
                "textColor",
                "backgroundColor",
                "inlineClass",
                "inlineStyle",
                "clearFormatting",
              ],
            },
            moreParagraph: {
              buttons: [
                "alignLeft",
                "alignCenter",
                "formatOLSimple",
                "alignRight",
                "alignJustify",
                "formatOL",
                "formatUL",
                "paragraphFormat",
                "paragraphStyle",
                "lineHeight",
                "outdent",
                "indent",
                "quote",
              ],
            },
            moreRich: {
              buttons: [
                "insertLink",
                "insertImage",
                "insertVideo",
                "insertTable",
                "emoticons",
                "fontAwesome",
                "specialCharacters",
                "embedly",
                "insertFile",
                "insertHR",
              ],
            },
            moreMisc: {
              buttons: [
                "undo",
                "redo",
                "fullscreen",
                "print",
                "getPDF",
                "spellChecker",
                "selectAll",
                "html",
                "help",
              ],
              align: "right",
              buttonsVisible: 2,
            },
          },
          pluginsEnabled: [
            "table",
            "spell",
            "quote",
            "save",
            "quickInsert",
            "paragraphFormat",
            "paragraphStyle",
            "help",
            "draggable",
            "align",
            "link",
            "lists",
            "file",
            "image",
            "emoticons",
            "url",
            "video",
            "embedly",
            "colors",
            "entities",
            "inlineClass",
            "inlineStyle",
            "imageTUI",
          ],
        }}
      />
    </div>
  );
};
