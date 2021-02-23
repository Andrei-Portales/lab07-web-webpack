import navBarF from './components/nav-bar';
import favicon from '../assets/images/favicon.svg';

const createApp = () => {
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = `${favicon}`;
    document.head.appendChild(icon);
    navBarF(0);
}

export default createApp;
