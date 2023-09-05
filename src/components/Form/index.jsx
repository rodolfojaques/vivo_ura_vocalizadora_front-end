import { FormStl } from "./styles";

function FormComponent({children,title,onSubmit}){

    return (
        <FormStl onSubmit={onSubmit}>
            <header className="title">
                <h2>{title}</h2>
            </header>
            {children}
        </FormStl>
    )
}

export default FormComponent
