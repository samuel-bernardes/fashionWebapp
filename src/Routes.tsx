import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home } from './pages';
import { Layout } from './components';

function Routes() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 500,
            easing: 'ease-out-sine',
        });
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
            ],
        },
        {
            path: '*',
            element: <div>erro</div>,
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;
