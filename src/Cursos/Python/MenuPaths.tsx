import MenuButton from "../../components/MenuButton";

const MenuPaths = () => {
    return (
    <MenuButton 
        menuText="Unidades del curso" links={[
            {path:"PythonPlayground", text:"Playground"},
            {path:"fundamentos", text:"Fundamentos 0"},
            {path:"fundamentos_1", text:"Fundamentos 1"}
        ]}/>
    )
};

export default MenuPaths;