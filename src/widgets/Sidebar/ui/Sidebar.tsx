import styles from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}
export const Sidebar = ({className} :SidebarProps ) => {
  const [collapsed, setCollapsed] = useState(false)
    const onChange = () => setCollapsed((prev)=> !prev)


    return (
        <div className={classNames({cls: styles.Sidebar, mods:{[styles.collapsed]:collapsed}, additional:[className]})}>
            <Button onClick={onChange} theme={ThemeButton.INVERS}>Кнопка</Button>
        </div>
    );
};