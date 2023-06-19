import styles from './Navbar.module.scss'
import {RoutesPath} from "shared/config/routesPath";
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkTheme} from "shared/ui/Link/Link";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface NavbarProps {
    className?: string
}
export const Navbar = ({className} :NavbarProps ) => {
    return (
        <div className={classNames({cls: styles.Navbar, additional:[className]})}>
            <div className={classNames({cls: styles.links})}>
                <Link theme={LinkTheme.NAVBAR} to={RoutesPath.main}>Main</Link>
                <Link theme={LinkTheme.NAVBAR} to={RoutesPath.about}>About</Link>
            </div>
            <ThemeSwitcher/>
        </div>
    );
};
