import { forwardRef, useState } from "react";
import "./TextInput.css";
import { mdiMenuDown, mdiUpload } from "@mdi/js";
import Icon from "@mdi/react";

const TextInput = forwardRef(
    ({ type = "text", value = "", onChange, placeholder = "" }, ref) => {
        const [getValue, setValue] = useState(value);
        const [hint, setHint] = useState(false);

        return (
            <label className="textInput">
                <fieldset
                    className={
                        "textInputFrame " + (hint ? "hintUp" : "hintDown")
                    }
                >
                    {hint && (
                        <>
                            <legend>{placeholder}</legend>
                            <span className="placeholder">{placeholder}</span>
                        </>
                    )}
                    <div className="textInputBox">
                        <span className="textInputIcon">
                            <Icon path={mdiUpload} size={1.2} />
                        </span>
                        <input
                            ref={ref}
                            type={type}
                            value={getValue}
                            onChange={(e) => {
                                setValue(e.target.value);
                                if (onChange) onChange(e);
                                setHint(e.target.value.length > 0);
                            }}
                            onFocus={() => {
                                setHint(true);
                            }}
                            onBlur={(e) => {
                                setHint(e.target.value.length > 0);
                            }}
                            placeholder={hint ? "" : placeholder}
                        />
                        <button>
                            <Icon path={mdiMenuDown} size={1.2} />
                        </button>
                    </div>
                </fieldset>
            </label>
        );
    }
);

export default TextInput;
